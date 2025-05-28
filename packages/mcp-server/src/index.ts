import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Simple ping endpoint
app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
