import { Browser, BrowserContext, Page, LaunchOptions } from "playwright";
import { chromium, firefox } from "playwright-extra";
import logger from "../utils/logger";

const BrowserApp = chromium;

class PlaywrightService {
  private static instance: PlaywrightService;
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;
  private currentPage: Page | null = null;

  //  Constructor for direct construction
  constructor() {}

  // Singleton instance getter
  public static getInstance(): PlaywrightService {
    if (!PlaywrightService.instance) {
      PlaywrightService.instance = new PlaywrightService();
    }
    return PlaywrightService.instance;
  }

  // Default launch options with ability to override
  private getLaunchOptions(
    customOptions?: Partial<LaunchOptions>
  ): LaunchOptions {
    const defaultOptions: LaunchOptions = {
      headless: process.env.NODE_ENV === "production",
      // executablePath: BrowserApp.executablePath(),
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    };

    return { ...defaultOptions, ...customOptions };
  }

  // Initialize browser and context
  public async initialize(
    customOptions?: Partial<LaunchOptions>
  ): Promise<void> {
    try {
      // Close existing browser if open
      await this.close();

      // Launch new browser
      this.browser = await BrowserApp.launch(
        this.getLaunchOptions(customOptions)
      );

      // Create new context with common settings
      this.context = await this.browser.newContext({
        viewport: { width: 1280, height: 720 },
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      });

      // Optional: Add additional context configurations
      // this.context.setDefaultTimeout(30000);
    } catch (error) {
      logger.error("Playwright initialization error:", error);
      throw error;
    }
  }

  // Create a new page
  public async createPage(): Promise<Page> {
    if (!this.context) {
      await this.initialize();
    }
    this.currentPage = await this.context!.newPage();
    return this.currentPage;
  }

  // New method to get current page
  public getCurrentPage(): Page | null {
    return this.currentPage;
  }

  // New method to set current page
  public setCurrentPage(page: Page): void {
    this.currentPage = page;
  }

  // Close browser and reset
  public async close(): Promise<void> {
    if (this.currentPage) {
      await this.currentPage.close();
      this.currentPage = null;
    }
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.context = null;
    }
  }

  // Cleanup method for global usage
  public async cleanup(): Promise<void> {
    await this.close();
  }
}

// Export singleton instance
export default PlaywrightService.getInstance();
export { PlaywrightService };
