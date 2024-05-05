import winston, { Logger } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const { combine, timestamp, printf, colorize, align, errors, json } =
  winston.format;

const commonTransport = {
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d'
};

const combinedTransport = new DailyRotateFile({
  ...commonTransport,
  filename: 'combined-%DATE%.log',
  dirname: 'logs'
});

const errorTransport = new DailyRotateFile({
  ...commonTransport,
  level: 'error',
  filename: 'error-%DATE%.log',
  dirname: 'logs/errors'
});

const exceptionTransport = new DailyRotateFile({
  ...commonTransport,
  filename: 'exception-%DATE%.log',
  dirname: 'logs/exceptions'
});

const rejectionTransport = new DailyRotateFile({
  ...commonTransport,
  filename: 'rejection-%DATE%.log',
  dirname: 'logs/rejections'
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
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
      align(),
      colorize({ all: true }),
      printf(
        (info) =>
          `${info.timestamp} ${info.level}: ${info.stack || info.message}`
      )
    ),
    transports: [new winston.transports.Console()]
  });
}

export default logger;
