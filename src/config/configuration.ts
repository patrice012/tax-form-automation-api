export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  uiPort: parseInt(process.env.UI_PORT, 10) || 4000,
  logLevel: process.env.LOG_LEVEL || 'info',
  // Target platform configuration (e.g., Intuit ProConnect)
  platform: {
    url: process.env.TARGET_PLATFORM_URL || 'https://proconnect.intuit.com',
    loginUrl: process.env.TARGET_LOGIN_URL || 'https://accounts.intuit.com/app/sign-in',
    taxHubUrl: process.env.TARGET_TAX_HUB_URL || 'https://ito.intuit.com/app/protax/tax-hub',
    clientListUrl: process.env.TARGET_CLIENT_LIST_URL || 'https://ito.intuit.com/app/protax/client-list',
  },
  backend: {
    apiUrl: process.env.BACKEND_API_URL,
    timeout: parseInt(process.env.BACKEND_API_TIMEOUT, 10) || 300000,
  },
});
