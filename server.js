const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ ok: true });
});

// Routes - PUBLIC (no auth needed)
app.use('/api/github', require('./routes/github'));
app.use('/api/leetcode', require('./routes/leetcode'));



// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server on port ${PORT}`);
  console.log(`✅ GitHub: http://192.168.21.188:${PORT}/api/github/full/octocat`);
  console.log(`✅ LeetCode: http://192.168.21.188:${PORT}/api/leetcode/testuser`);
});