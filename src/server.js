const express = require('express');
const { logger, errorLogger } = require('./logger');

const app = express();

app.use((req, res, next) => {
  logger.info('Incoming request:', { url: req.url, query: req.query, body: req.body });

  next();
});

app.use((err, req, res, next) => {
  errorLogger.error('Unhandled error:', err);

  res.status(500).send('Internal Server Error');
});

process.on('uncaughtException', (err) => {
  errorLogger.error('Uncaught exception:', err);

  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  errorLogger.error('Unhandled rejection:', reason);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
