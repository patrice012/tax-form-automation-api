import winston from "winston";
import { LOG_LEVEL } from "../config/env";

const logger = winston.createLogger({
  level: LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: "error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "warn.log",
      level: "warn",
    }),
    new winston.transports.File({
      filename: "debug.log",
      level: "debug",
    }),
    new winston.transports.File({
      filename: "combined.log",
    }),
  ],
});

export default logger;
