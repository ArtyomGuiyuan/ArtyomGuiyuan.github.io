// Cloudflare Worker Script
// 部署步骤：
// 1. 注册/登录 Cloudflare (https://dash.cloudflare.com/)
// 2. 进入 "Workers & Pages" -> "Create Application" -> "Create Worker"
// 3. 命名您的 Worker (例如: coze-proxy)
// 4. 点击 "Deploy"
// 5. 点击 "Edit code"，将本文件内容完全覆盖原有代码
// 6. 点击 "Save and deploy"
// 7. 复制获得的 Worker URL (例如: https://coze-proxy.yourname.workers.dev)
// 8. 将您的 config.js 中的 url 修改为这个 Worker URL

export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*', // 允许任何域名访问，生产环境建议修改为您的 GitHub Pages 域名
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // 处理 OPTIONS 预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    if (request.method === 'POST') {
      try {
        const cozeUrl = "https://wvkrv2jwst.coze.site/stream_run";
        
        // 克隆请求并构造新的请求对象
        const requestBody = await request.text();
        const newRequest = new Request(cozeUrl, {
          method: 'POST',
          headers: request.headers,
          body: requestBody
        });

        // 确保 Authorization 头被正确传递
        // 注意：如果浏览器端发送了 Auth 头，这里会直接转发
        // 如果想在 Worker 里隐藏 Token，可以在这里强制设置：
        // newRequest.headers.set('Authorization', 'Bearer YOUR_SECRET_TOKEN');

        const response = await fetch(newRequest);

        // 创建新的响应，保留原始响应体，但添加 CORS 头
        const newResponse = new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: {
            ...Object.fromEntries(response.headers),
            ...corsHeaders,
          }
        });

        return newResponse;
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        });
      }
    }

    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  },
};
