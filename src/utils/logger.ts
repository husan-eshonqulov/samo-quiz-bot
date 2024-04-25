import winston from 'winston';
import { Logger } from 'winston';
// eslint-disable-next-line import/no-extraneous-dependencies
import DailyRotateFile from 'winston-daily-rotate-file';

const { combine, timestamp, printf, colorize, align, errors, json } =
  winston.format;

const combinedTransport = new DailyRotateFile({
  filename: 'combined-%DATE%.log',
  dirname: 'logs',
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d'
});

const errorTransport = new DailyRotateFile({
  level: 'error',
  filename: 'error-%DATE%.log',
  dirname: 'logs/errors',
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d'
});

const exceptionTransport = new DailyRotateFile({
  filename: 'exception-%DATE%.log',
  dirname: 'logs/exceptions',
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d'
});

const rejectionTransport = new DailyRotateFile({
  filename: 'rejection-%DATE%.log',
  dirname: 'logs/rejections',
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d'
});

let logger: Logger;

if (process.env.NODE_ENV === 'production') {
  logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(errors({ stack: true }), timestamp(), json()),
    transports: [combinedTransport, errorTransport],
    exceptionHandlers: [exceptionTransport],
    rejectionHandlers: [rejectionTransport]
  });
} else {
  logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
      errors({ stack: true }),
      timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS' }),
      align(),
      printf(
        (info) =>
          `${info.timestamp}  ${info.level}: ${info.stack || info.message}`
      ),
      colorize({ all: true })
    ),
    transports: [new winston.transports.Console()]
  });
}

export default logger;
