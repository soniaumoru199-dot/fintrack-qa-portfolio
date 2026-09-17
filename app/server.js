const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const users = [{ email: 'demo@fintrack.test', password: 'Password123!' }];
const transactions = [
  { id: 1, description: 'University fees', category: 'Education', amount: 85000, type: 'expense' },
  { id: 2, description: 'Freelance payment', category: 'Income', amount: 120000, type: 'income' },
  { id: 3, description: 'Internet subscription', category: 'Bills', amount: 15000, type: 'expense' }
];

function send(res, status, body, type = 'application/json') {
  res.writeHead(status, { 'Content-Type': type });
  res.end(type.includes('json') ? JSON.stringify(body) : body);
}

const server = http.createServer((req, res) => {
  if (req.url === '/api/transactions' && req.method === 'GET') return send(res, 200, transactions);
  if (req.url === '/api/health' && req.method === 'GET') return send(res, 200, { status: 'ok' });

  if (req.url === '/api/login' && req.method === 'POST') {
    let raw = '';
    req.on('data', chunk => raw += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(raw);
        const user = users.find(u => u.email === data.email && u.password === data.password);
        if (!user) return send(res, 401, { error: 'Invalid email or password' });
        return send(res, 200, { token: 'demo-token', message: 'Login successful' });
      } catch { return send(res, 400, { error: 'Invalid JSON' }); }
    });
    return;
  }

  let file = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, file);
  if (filePath.startsWith(path.join(__dirname)) && fs.existsSync(filePath)) {
    const ext = path.extname(filePath);
    const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript' };
    return send(res, 200, fs.readFileSync(filePath), types[ext] || 'text/plain');
  }
  send(res, 404, { error: 'Not found' });
});

server.listen(PORT, '127.0.0.1', () => console.log(`FinTrack running at http://127.0.0.1:${PORT}`));
