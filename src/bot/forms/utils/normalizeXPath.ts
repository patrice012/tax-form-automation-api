export function normalizeXPath(xpath: string): string {
  // Remove unnecessary prefixes like `//` at the start
  if (xpath?.trim()?.startsWith("//")) {
    xpath = xpath?.replace(/^\/\//, "/html/");
  }

  // Remove redundant `[1]` indexes, as they are implicit
  xpath = xpath?.replace(/\[1\]/g, "");

  // Collapse multiple slashes into a single slash
  xpath = xpath?.replace(/\/+/g, "/");

  // Remove trailing slashes if any
  xpath = xpath?.replace(/\/$/, "");

  return xpath;
}
