export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  uiPort: parseInt(process.env.UI_PORT, 10) || 4000,
  logLevel: process.env.LOG_LEVEL || 'info',
  proconnect: {
    url: process.env.PROCONNECT_URL || 'https://proconnect.intuit.com',
  },
  backend: {
    apiUrl: process.env.BACKEND_API_URL,
    timeout: parseInt(process.env.BACKEND_API_TIMEOUT, 10) || 300000,
  },
});
