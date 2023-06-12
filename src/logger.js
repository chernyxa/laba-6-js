const winston = require('winston');

// Создание логгера для общего файла
const logger = winston.createLogger({
  level: 'info', // Уровень логирования
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new winston.transports.File({ filename: 'logs/app.log' }), // Файл для общих логов
  ],
});

// Создание логгера для ошибок
const errorLogger = winston.createLogger({
  level: 'error', // Уровень логирования
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log' }), // Файл для логов ошибок
  ],
});

// Экспорт логгеров
module.exports = {
  logger,
  errorLogger,
};
