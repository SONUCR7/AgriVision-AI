// Crop Disease Prediction System - Full-Stack Local & Network Server
// Built with native Node.js (Zero dependencies required)
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

function getLocalIPAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        addresses.push(net.address);
      }
    }
  }
  return addresses;
}

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  // Check if file exists in ROOT_DIR or prototype
  let filePath = path.join(ROOT_DIR, reqPath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(ROOT_DIR, 'prototype', reqPath);
  }

  // Security: prevent directory traversal
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('403 Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 Not Found');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const ips = getLocalIPAddresses();
  console.log('================================================================');
  console.log('🌱 AGRI-VISION AI: CROP DISEASE PREDICTION SYSTEM (TD-PCL)');
  console.log('   JAIN (Deemed-to-be University) - 4th Semester');
  console.log('   Guides: Dr. Somasekar J. & Dr. Sundeeep Rao P.');
  console.log('   Team: Mulam Likhitha, Arighna Nandi, Shakthi Pranesh, Salih S.');
  console.log('================================================================');
  console.log(`🚀 Local Access:   http://localhost:${PORT}`);
  if (ips.length > 0) {
    console.log(`📱 Mobile/Wi-Fi:   http://${ips[0]}:${PORT}  (Open this on your phone!)`);
  }
  console.log('💡 Press Ctrl+C in this terminal to stop the server.');
  console.log('================================================================\n');
});
