import winston from 'winston';
import path from 'path';

function getLogDir() {
  // If an env variable is provided by Electron, use it:
  if (process.env.API_BOT_LOG_PATH) {
    return process.env.API_BOT_LOG_PATH;
  }
  // Otherwise fallback to current working directory or something similar:
  return path.join(process.cwd(), 'logs');
}

const logDir = getLogDir();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: path.join(logDir, 'tax-automation.error.log'),
      level: 'error',
    }),
    new winston.transports.File({
      filename: path.join(logDir, 'tax-automation.warn.log'),
      level: 'warn',
    }),
    new winston.transports.File({
      filename: path.join(logDir, 'tax-automation.debug.log'),
      level: 'debug',
    }),
    new winston.transports.File({
      filename: path.join(logDir, 'tax-automation.combined.log'),
    }),
  ],
});

export default logger;
