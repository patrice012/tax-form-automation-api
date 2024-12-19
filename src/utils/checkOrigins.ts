export const isOriginAllowed = (
  origin: string | undefined,
  allowedOrigins: string[]
): boolean => {
  if (!origin) {
    return true;
  }

  return allowedOrigins.some((allowedOrigin) => {
    try {
      const allowedUrl = new URL(allowedOrigin || "http://localhost");
      const originUrl = new URL(origin);

      return (
        allowedUrl.protocol === originUrl.protocol &&
        allowedUrl.hostname === originUrl.hostname
      );
    } catch (err) {
      return false;
    }
  });
};
