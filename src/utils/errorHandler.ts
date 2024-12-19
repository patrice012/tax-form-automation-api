// backend/src/utils/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import logger from "./logger";

// Custom error class for application-specific errors
class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(
    message: string,
    statusCode: number = 500,
    isOperational: boolean = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Ensures the full stack trace is captured
    Error.captureStackTrace(this, this.constructor);
  }
}

// Error handling middleware
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
  responseCallback?: Function
) => {
  // Default error properties
  let statusCode = 500;
  let message = "Internal Server Error";

  // Check if it's a known AppError
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  // Log the error
  logger.error(`[ERROR] ${message}`, {
    method: req.method,
    path: req.path,
    body: req.body,
    error: err.stack,
  });

  // If a custom response callback is provided, use it
  if (responseCallback) {
    responseCallback();
  } else {
    // // Default response handling
    // res.status(statusCode).json({
    //   status: "error",
    //   statusCode,
    //   message,
    //   ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    // });
  }
};

// Async error wrapper to handle async route handlers
const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Validation error handler
const handleValidationError = (err: any) => {
  const errors = Object.values(err.errors).map((el: any) => el.message);
  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

// Duplicate key error handler (for MongoDB)
const handleDuplicateKeyError = (err: any) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

// Cast error handler (for invalid MongoDB IDs)
const handleCastError = (err: any) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

// Global error handling function
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // Different error type handling
  if (err.name === "ValidationError") err = handleValidationError(err);
  if (err.code === 11000) err = handleDuplicateKeyError(err);
  if (err.name === "CastError") err = handleCastError(err);

  // Optional custom response callback
  const responseCallback = (
    statusCode: number,
    message: string,
    error?: Error
  ) => {
    // Custom response logic
    res.status(statusCode).json({
      status: "error",
      message,
      // Add any additional custom error handling
      ...(process.env.NODE_ENV === "development" &&
        error && {
          stack: error.stack,
          fullError: error,
        }),
      // You can add more custom properties or transformations
      timestamp: new Date().toISOString(),
    });
  };

  // Call error handler with optional callback
  errorHandler(err, req, res, next, responseCallback);
};

export { AppError, errorHandler, asyncHandler, globalErrorHandler };

/**
    // Creating a custom error
    throw new AppError('Resource not found', 404);

    // In a route handler
    router.get('/user/:id', asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        throw new AppError('User not found', 404);
    }
    res.json(user);
    }));

    // In app.ts or server configuration
    app.use(globalErrorHandler);
 */
