import express from "express";
import cors from "cors";
import connectDB from "./config/database";
import { globalErrorHandler, AppError } from "./utils/errorHandler";
import { isOriginAllowed } from "./utils/checkOrigins";
import { ORIGIN as ALLOWED_ORIGINS } from "./config/env";
import router from "./routes";

const ORIGIN: Array<string | undefined> = ALLOWED_ORIGINS || [];

const app = express();

// Proxy
app.set("trust proxy", true);

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// debug middleware to see what origins are being received
app.use((req, res, next) => {
  console.log("Incoming request:");
  console.log("Origin:", req.headers.origin);
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  next();
});

const alloweds = {
  origin: [...ORIGIN, "http://localhost"],
};

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) {
        return callback(null, true);
      }

      // Check if the origin matches any of the allowed origins ignoring the port
      const isAllowed = isOriginAllowed(origin, alloweds.origin as string[]);
      // console.log("Allowed Origins:", alloweds.origin);
      // console.log("Request Origin:", origin);
      // console.log("Match Result:", isAllowed);

      if (isAllowed) {
        callback(null, true);
      } else {
        console.log("Blocked origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Origin", "Content-Type", "Accept", "Authorization"],
  })
);

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin) {
    // Check if the origin matches any of the allowed origins ignoring the port
    const isAllowed = isOriginAllowed(origin, alloweds.origin as string[]);

    if (isAllowed) {
      res.header("Access-Control-Allow-Origin", origin);
      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept, Authorization"
      );
      res.header("Access-Control-Expose-Headers", "*, Authorization");
    }
  }

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// Database connection
connectDB();

app.use(router);

// 404 handler - put this before global error handler
app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

export default app;
