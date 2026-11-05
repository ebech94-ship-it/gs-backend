require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'GodSpeed Mobility Backend is running.',
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    service: 'GSM Backend',
    status: 'healthy',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`GSM Backend running on port ${PORT}`);
});