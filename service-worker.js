/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8936a7ea8ec9a179d3c816a74a5f5cce"
  },
  {
    "url": "article/index.html",
    "revision": "cf123317b1299115825c5bad1f73b25b"
  },
  {
    "url": "assets/css/0.styles.e06247f8.css",
    "revision": "7e84ddcf0e242a28238356539c032529"
  },
  {
    "url": "assets/img/button.b4247c7b.gif",
    "revision": "b4247c7bd187706bee08e5b67be39780"
  },
  {
    "url": "assets/img/loading.1b7d4dd4.gif",
    "revision": "1b7d4dd47f896b67dfe646fc022c8bb7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/weather.1716e16b.gif",
    "revision": "1716e16b9b25a8042af6c1e2fcd0c2c5"
  },
  {
    "url": "assets/js/1.dd7cb136.js",
    "revision": "3feaeac4a5c9dd4c4c48d383acc2fc03"
  },
  {
    "url": "assets/js/10.7b2227e9.js",
    "revision": "4b6c5034fd615417c36610449a3c9c9b"
  },
  {
    "url": "assets/js/11.54016168.js",
    "revision": "e5dc58c98315085b6f6e81f7ff32d0d6"
  },
  {
    "url": "assets/js/12.e0c2998d.js",
    "revision": "f7cba3394ca58b8a93f3ceb23f28e0dd"
  },
  {
    "url": "assets/js/13.58db98c3.js",
    "revision": "332f4bad13f6bbd1f7a3e0419ab3ee1e"
  },
  {
    "url": "assets/js/14.e0849983.js",
    "revision": "da5c6cb2ae97e12547fe4965da672623"
  },
  {
    "url": "assets/js/15.a28bb6aa.js",
    "revision": "c4216532c8cd3aafc5c6aee830ad23ad"
  },
  {
    "url": "assets/js/16.8a86a5cb.js",
    "revision": "acddec8186d17052e697a22fdd5d8194"
  },
  {
    "url": "assets/js/17.f3eace8c.js",
    "revision": "392da93f3cad760c925f6afdc038cea5"
  },
  {
    "url": "assets/js/18.7598304c.js",
    "revision": "037a981be99bf310070a44e378b3e018"
  },
  {
    "url": "assets/js/19.9a0e7d20.js",
    "revision": "bee85cfc86bc2417173cd7b1cf4b9f74"
  },
  {
    "url": "assets/js/20.0cd5b0f2.js",
    "revision": "647f0db10c78b0afbb3f77b5f114ffc4"
  },
  {
    "url": "assets/js/21.6fe8affb.js",
    "revision": "230fdd237d7db37f2d82e65b22f9ba64"
  },
  {
    "url": "assets/js/22.63cda417.js",
    "revision": "f6e5ba8cdb82e02cdc45ab4309d9e80f"
  },
  {
    "url": "assets/js/23.47c2e57c.js",
    "revision": "f3a6b3d0c1034983e5a7166f01e55c0c"
  },
  {
    "url": "assets/js/24.0aa8138a.js",
    "revision": "46821684545e03703b8fa9192299a0ed"
  },
  {
    "url": "assets/js/25.286c3f35.js",
    "revision": "9ed5fe7190da1fc729e9c87b4729301a"
  },
  {
    "url": "assets/js/26.224354aa.js",
    "revision": "d2df9c851cb61c689e7bab86701cc591"
  },
  {
    "url": "assets/js/27.70efce3e.js",
    "revision": "a59d3e2b1a3f4e8350dd9d31b46550be"
  },
  {
    "url": "assets/js/28.01e36b00.js",
    "revision": "4edf30e9b53fbd57a88f8b46bcbee7bc"
  },
  {
    "url": "assets/js/29.9e6c333d.js",
    "revision": "fe06484288b58676fcd590ee82f975a5"
  },
  {
    "url": "assets/js/3.68a66873.js",
    "revision": "2610472e290fc7e4fa310b67f740d85b"
  },
  {
    "url": "assets/js/30.d6bf3610.js",
    "revision": "90608168d170ac918731b4f5538507d8"
  },
  {
    "url": "assets/js/31.d27fafa4.js",
    "revision": "361ff5fa9dd276868c81136969a5af01"
  },
  {
    "url": "assets/js/32.32710257.js",
    "revision": "be44205f4715b26499f885656887a320"
  },
  {
    "url": "assets/js/4.ad6b3331.js",
    "revision": "fef72abe8ccd58e3e4551bcfd181b413"
  },
  {
    "url": "assets/js/5.7a754ee6.js",
    "revision": "35e0aca246da7434373c4437686114d1"
  },
  {
    "url": "assets/js/6.1174c208.js",
    "revision": "81dea9ae7ada50893e8542b7047e718a"
  },
  {
    "url": "assets/js/7.49e7e899.js",
    "revision": "21fcddae3d04ebfe003ffd3a0669e14f"
  },
  {
    "url": "assets/js/8.6e8baca4.js",
    "revision": "73f2bee7417d9f3cee41bf1a6e7de06d"
  },
  {
    "url": "assets/js/9.4c4a44e8.js",
    "revision": "84842885fd4723878c6216390ae0a081"
  },
  {
    "url": "assets/js/app.9d0af48c.js",
    "revision": "a5de8f3d695703fadc34fc07d57b6b6a"
  },
  {
    "url": "collection/index.html",
    "revision": "f5962229116231f896f88315fc9f1382"
  },
  {
    "url": "collection/加载动画.html",
    "revision": "b7f70c7e1f77f9423e0a4a06e64b7cd0"
  },
  {
    "url": "collection/按钮效果.html",
    "revision": "e1f0ceb82350e88f0ac80f9ed7b855f0"
  },
  {
    "url": "collection/纯c3动画实现天气.html",
    "revision": "b585665a4cafd0e5a4e95380a93d5084"
  },
  {
    "url": "icons/email.svg",
    "revision": "c0482baf06ff13dfee55383a0646f373"
  },
  {
    "url": "icons/facebook.svg",
    "revision": "a937dc2aa703eb4ab7ef54c334a0521d"
  },
  {
    "url": "icons/github.svg",
    "revision": "b53ff55e09a092f9f0cbbf74af01b715"
  },
  {
    "url": "icons/instagram.svg",
    "revision": "622e2947df6ed5a12b06a6ea7cb70777"
  },
  {
    "url": "icons/linkedin.svg",
    "revision": "c1eb27404bbc0d6052620ac79194ae19"
  },
  {
    "url": "icons/twitter.svg",
    "revision": "7a4d9f0fe157437d3258bbc3b785066d"
  },
  {
    "url": "icons/youtube.svg",
    "revision": "f4d46a74f2230eb4b0a079b6c764bac6"
  },
  {
    "url": "images/avatar.jpg",
    "revision": "f22c25ee7f1726490c43dcf6bc3eb47b"
  },
  {
    "url": "index.html",
    "revision": "05d378e010cf56d29e4a27c64c0f0585"
  },
  {
    "url": "profile.jpg",
    "revision": "f22c25ee7f1726490c43dcf6bc3eb47b"
  },
  {
    "url": "projects/1.png",
    "revision": "c30417ef051fa16a432ea3c3339cdf01"
  },
  {
    "url": "projects/index.html",
    "revision": "a2498cd4ee4dc058ef08af63eb29c8b5"
  },
  {
    "url": "projects/old.html",
    "revision": "264ec772288cd8a6331fd63aba452d23"
  },
  {
    "url": "study/ES6.html",
    "revision": "963838af87c9541bb6bde0bb3088850c"
  },
  {
    "url": "study/HTTP状态码.html",
    "revision": "409351e9a82513efa0641d94f0db3641"
  },
  {
    "url": "study/index.html",
    "revision": "caaa5f82f960def4c1c89561e9dc8e3a"
  },
  {
    "url": "study/JS字符串的方法.html",
    "revision": "2b38f71d85efbae4c24c06d9c965d4c8"
  },
  {
    "url": "study/JS数组的方法.html",
    "revision": "7cfcbcb8ac9500f61c3b1e1711d45163"
  },
  {
    "url": "study/JS类型.html",
    "revision": "6f33b206534cf267d11a5bbda3ddfdd4"
  },
  {
    "url": "study/this指向.html",
    "revision": "e0fa6fbf4b69bd562ba5e1da40a83cda"
  },
  {
    "url": "study/vue.html",
    "revision": "bd043516dcebec7e78133c93bcadc0bb"
  },
  {
    "url": "study/从url到页面.html",
    "revision": "6d87130b907ab3d87a39761b4217dd5c"
  },
  {
    "url": "study/小程序.html",
    "revision": "8db7dd29db19e6a16d3e5209685de3fa"
  },
  {
    "url": "study/数组去重.html",
    "revision": "f8f326232a2af09dcec7d43aa5b32cde"
  },
  {
    "url": "study/浅拷贝和深拷贝.html",
    "revision": "b1a89e5095e6459a409d7e28cdcc2158"
  },
  {
    "url": "study/解决跨域问题.html",
    "revision": "89a54103643e6a365d108f5a875e45ed"
  },
  {
    "url": "study/闭包.html",
    "revision": "6cc8a23815c6e88a7efead76168f27e6"
  },
  {
    "url": "study/防抖与限流.html",
    "revision": "0b1c1bc0a0cdf39d8823527daa30041d"
  },
  {
    "url": "study/隐藏页面中的元素.html",
    "revision": "6e853b5c059077812569891e4b562d1d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
