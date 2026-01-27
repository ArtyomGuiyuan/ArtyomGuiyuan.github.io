const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '.')));

// Proxy endpoint for Coze API
app.post('/api/stream_run', async (req, res) => {
    try {
        const cozeUrl = "https://wvkrv2jwst.coze.site/stream_run";
        
        console.log('Proxying request to:', cozeUrl);

        const response = await fetch(cozeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': req.headers.authorization, // Forward the auth header
            },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            console.error('Coze API error:', response.status, response.statusText);
            return res.status(response.status).json({ error: `Upstream error: ${response.statusText}` });
        }

        // Set headers for streaming
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // Pipe the response stream
        response.body.pipe(res);

        response.body.on('error', (err) => {
            console.error('Stream error:', err);
            res.end();
        });

    } catch (error) {
        console.error('Proxy server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser to start.`);
});
