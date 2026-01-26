# ProConnect Bot API

A complete NestJS API service for automating ProConnect tax form filling with integrated bot service.

## 🎯 Overview

This is a standalone NestJS application that includes:
- ✅ **Complete bot service** - All tax-5 bot code integrated
- ✅ **Mock mode support** - Test without backend API
- ✅ **Browser-based form mappers** - Tools to scan ProConnect forms
- ✅ **Environment-based configuration** - No hardcoded credentials
- ✅ **Clean architecture** - Proper NestJS structure
- ✅ **Progress tracking** - Real-time form filling updates
- ✅ **Error handling** - Comprehensive error tracking
- ✅ **CORS enabled** - Ready for frontend integration

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
npx playwright install chromium
```

### 2. Configure Environment

```bash
cp .env.example .env
```

**For Development (Mock Mode - Default):**
```env
USE_MOCK_DATA=true
# No need to set BACKEND_API_URL in mock mode
```

**For Production (Real API):**
```env
USE_MOCK_DATA=false
BACKEND_API_URL=https://your-backend-api.com
```

### 3. Start the Server

```bash
# Development (with hot reload)
npm run start:dev

# Production
npm run build
npm run start:prod
```

The server will start at `http://localhost:3000`

---

## 🛠️ Browser Form Mapping Tools

Extract form field mappings directly from ProConnect in your browser!

### Tools Available

Located in: `src/proconnect/bot/dataFetcher/`

#### 1. browserFormScanner.js
**For normal forms** (W2, 1099NEC, 1099T, etc.)

Extracts:
- Input fields (text, number, email)
- Select dropdowns
- Textarea fields
- Field IDs, data-testid, XPaths
- Label associations

#### 2. browserTableScanner.js
**For table-based forms** (1098E, 1099SSA, etc.)

Extracts:
- Table structure (columns/rows)
- Input fields within table cells
- Column headers
- XPath locations

### Quick Usage

**Step 1:** Open ProConnect form in browser
**Step 2:** Open browser console (F12)
**Step 3:** Copy & paste scanner code
**Step 4:** Run:
```javascript
generateMappingsFromElement('.main-content');
```
**Step 5:** Downloads JSON file automatically!

📖 **Detailed Guide:** See [FORM_MAPPING_GUIDE.md](./FORM_MAPPING_GUIDE.md)

---

## 🧪 Mock Data Mode

Currently, the application **always uses mock data** from a local JSON file.

**Mock Data Location:**
```
src/proconnect/bot/dataFetcher/proconnect_dev.json
```

**Benefits:**
- ✅ No backend API required
- ✅ Instant responses
- ✅ Controlled test data
- ✅ Perfect for development and testing

**To Switch to Real API (Future):**
1. Uncomment the real API code in `getData.ts`
2. Add `preparationId` and `documentIdsToExport` back to DTO
3. Set `BACKEND_API_URL` in environment variables

📖 **Detailed Guide:** See [MOCK_MODE_GUIDE.md](./MOCK_MODE_GUIDE.md)

---

## 📡 API Endpoints

### POST /proconnect/fill-tax-return

Fill tax return forms in ProConnect using mock data.

**Request:**
```bash
curl -X POST http://localhost:3000/proconnect/fill-tax-return \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer test-token" \
  -d '{
    "autoNavigateToReturn": true
  }'
```

**Parameters:**
- `autoNavigateToReturn` (optional, default: true): If false, assumes you manually navigated to the tax return

**Note:** Currently using mock data from `proconnect_dev.json`. Authorization token is kept for future API integration.

**Response:**
```json
{
  "success": true,
  "message": "Tax forms filled successfully",
  "failedFields": {
    "W2": ["field1", "field2"],
    "1099NEC": []
  }
}
```

### GET /proconnect/export-progress

Get real-time progress.

```bash
curl http://localhost:3000/proconnect/export-progress
```

### GET /health

Health check endpoint.

```bash
curl http://localhost:3000/health
```

---

## ⚙️ Configuration

### Environment Variables

| Variable | Required | Description | Default |
|----------|----------|-------------|---------|
| PORT | No | API server port | 3000 |
| NODE_ENV | No | Environment mode | development |
| **USE_MOCK_DATA** | **Yes** | Enable mock mode | **true** |
| BACKEND_API_URL | When mock=false | Backend API endpoint | - |
| BACKEND_API_TIMEOUT | No | API timeout (ms) | 300000 |
| PROCONNECT_URL | No | ProConnect URL | https://proconnect.intuit.com |
| UI_PORT | No | UI port for CORS | 4000 |
| LOG_LEVEL | No | Logging level | info |

### Configuration Files

```
.env                # Local development (gitignored)
.env.example       # Template
.env.production    # Production settings
```

---

## 🤖 Bot Service Details

### Supported Forms (16 total)

- W2, 1099NEC, 1099INT, 1099DIV, 1099B, 1099MISC
- 1098, 1098T, 1098E, 1099R, 1099G, 1099SSA
- Schedule C, Schedule E, Schedule F
- K1 (1065-page1)

### How It Works

```
1. Client sends request
   ↓
2. API checks USE_MOCK_DATA
   ↓
3a. If true: Load proconnect_dev.json
3b. If false: Call backend API
   ↓
4. Launch Playwright browser
   ↓
5. User logs in manually to ProConnect
   ↓
6. Bot navigates and fills forms
   ↓
7. Return results with progress
```

---

## 🏗️ Project Structure

```
src/
├── proconnect/
│   ├── bot/                          # Bot automation
│   │   ├── taxFormsFiller/          # Form filling logic
│   │   ├── auth/                    # Authentication
│   │   ├── dataFetcher/            # Data fetching
│   │   │   ├── getData.ts          # ✨ Mock/API switcher
│   │   │   ├── proconnect_dev.json # 📄 Mock data
│   │   │   ├── browserFormScanner.js     # 🔧 Normal form mapper
│   │   │   └── browserTableScanner.js    # 🔧 Table form mapper
│   │   ├── inputTypeHandlers/      # Field handlers
│   │   └── ...
│   ├── dto/                         # Validation
│   ├── proconnect.controller.ts    # API endpoints
│   ├── proconnect.service.ts       # Business logic
│   └── proconnect.module.ts        # Module
├── services/                        # Browser services
├── utils/                           # Utilities
└── config/                          # Configuration
```

---

## 📝 Updating Mock Data

### Method 1: Edit JSON File

```bash
nano src/proconnect/bot/dataFetcher/proconnect_dev.json
```

### Method 2: Use Browser Form Scanners

**For normal forms:**
```javascript
// In ProConnect browser console (F12)
// Paste browserFormScanner.js content, then run:
generateMappingsFromElement('.main-content');
// Downloads: input-form-data.json
```

**For table forms:**
```javascript
// Paste browserTableScanner.js content, then run:
generateMappingsFromElement('.main-content');
// Downloads: table-mappings.json
```

### Method 3: Capture Real API Response

```bash
# Call real API and save response
curl -X POST https://api.com/app-integration/proconnect/preparation \
  -H "Authorization: Bearer TOKEN" \
  -d '{"preparationId":"123","documentIdsToExport":["doc1"]}' \
  | jq '.documents' > src/proconnect/bot/dataFetcher/proconnect_dev.json
```

---

## 📚 Documentation

- **README.md** - This file (overview & setup)
- **QUICK_TEST.md** - Quick testing guide
- **FORM_MAPPING_GUIDE.md** - How to use browser form scanners
- **MOCK_MODE_GUIDE.md** - Mock vs API mode details

---

## 🐛 Troubleshooting

### Mock Mode Not Loading

**Error:**
```
❌ Error loading mock data: ENOENT: no such file or directory
```

**Solution:**
```bash
ls -la src/proconnect/bot/dataFetcher/proconnect_dev.json
# File must exist!
```

---

### API Mode Requires URL

**Error:**
```
Backend API URL is not configured
```

**Solution:**
Set both variables in `.env`:
```env
USE_MOCK_DATA=false
BACKEND_API_URL=https://your-api.com
```

---

### Switching Modes

```bash
# Enable mock mode
sed -i 's/USE_MOCK_DATA=false/USE_MOCK_DATA=true/' .env

# Enable API mode
sed -i 's/USE_MOCK_DATA=true/USE_MOCK_DATA=false/' .env

# Restart server
npm run start:dev
```

---

## 🔐 Security

### What's Secure

- ✅ No hardcoded credentials
- ✅ Environment-based config
- ✅ `.env` gitignored
- ✅ Bearer token authentication
- ✅ Input validation

### Production Recommendations

1. **Disable Mock Mode**
   ```env
   USE_MOCK_DATA=false
   ```

2. **Use HTTPS**
   ```env
   BACKEND_API_URL=https://api.yourdomain.com
   ```

3. **Set NODE_ENV**
   ```env
   NODE_ENV=production
   ```

4. **Use Secrets Manager**
   - AWS Secrets Manager
   - HashiCorp Vault
   - Azure Key Vault

---

## 🧪 Testing

### Local Development Testing

```bash
# 1. Start server
npm run start:dev

# 2. Test endpoint
curl -X POST http://localhost:3000/proconnect/fill-tax-return \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer test-token" \
  -d '{
    "autoNavigateToReturn": true
  }'
```

---

## 📦 Deployment

### Environment Setup

**Development:**
```env
USE_MOCK_DATA=true
NODE_ENV=development
```

**Staging:**
```env
USE_MOCK_DATA=false
BACKEND_API_URL=https://staging-api.com
NODE_ENV=staging
```

**Production:**
```env
USE_MOCK_DATA=false
BACKEND_API_URL=https://api.com
NODE_ENV=production
```

### Build & Deploy

```bash
npm run build
npm run start:prod
```

---

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Configure `.env`: Set `USE_MOCK_DATA=true`
3. ✅ Start server: `npm run start:dev`
4. ✅ Test with mock data
5. ⏭️ Use browser scanners to map new forms
6. ⏭️ Update mock data with your forms
7. ⏭️ Test form filling manually
8. ⏭️ Switch to API mode when ready
9. ⏭️ Integrate with frontend
10. ⏭️ Deploy to production

---

## 📄 License

MIT

---

**Version:** 1.0.0
**Created:** 2026-01-26
**NestJS:** 10.0.0
**Playwright:** 1.49.1
