# Mock Mode Guide

## Overview

The application supports two modes for fetching form data:
1. **Mock Mode** - Uses local JSON file (`proconnect_dev.json`)
2. **API Mode** - Calls real backend API

This allows for development and testing without a backend API.

---

## Quick Start

### Enable Mock Mode (Default)

```env
USE_MOCK_DATA=true
```

### Enable Real API Mode

```env
USE_MOCK_DATA=false
BACKEND_API_URL=https://your-api.com
```

---

## Configuration

### Environment Variables

| Variable | Values | Description |
|----------|--------|-------------|
| `USE_MOCK_DATA` | `true` / `false` | Toggle mock/API mode |
| `BACKEND_API_URL` | URL string | Backend API endpoint (required when `USE_MOCK_DATA=false`) |

### Configuration Files

```
.env                    # Local development (gitignored)
.env.example           # Template for new developers
.env.production        # Production settings
```

---

## Mock Mode Details

### How It Works

When `USE_MOCK_DATA=true`:

1. **getData()** function skips API call
2. Reads `src/proconnect/bot/dataFetcher/proconnect_dev.json`
3. Returns mock data directly
4. Logs: `🧪 MOCK MODE: Using local JSON file`

### Mock Data File

**Location:**
```
src/proconnect/bot/dataFetcher/proconnect_dev.json
```

**Structure:**
```json
{
  "documents": {
    "forms": [
      {
        "form_name": "1098E",
        "form_data": {
          "field_name": {
            "dataTestId": "...",
            "id": "...",
            "type": "number",
            "value": 803,
            "label": "...",
            ...
          }
        }
      }
    ],
    "targetClient": {
      "email": "test@email.com",
      "firstName": "EndToEnd2",
      "lastName": "SourceDocs2",
      "taxYear": 2024
    }
  }
}
```

### Console Output (Mock Mode)

```
🧪 MOCK MODE: Using local JSON file instead of API
📂 Loading mock data from: /path/to/proconnect_dev.json
✅ Mock data loaded successfully
   - Forms count: 3
   - Client email: test@email.com
   - Tax year: 2024
```

---

## API Mode Details

### How It Works

When `USE_MOCK_DATA=false`:

1. **Requires** `BACKEND_API_URL` to be set
2. Makes POST request to backend API
3. Sends authentication token
4. Returns real data from backend
5. Logs: `📡 Calling backend API: https://...`

### API Request

**Endpoint:**
```
POST {BACKEND_API_URL}/app-integration/proconnect/preparation
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer {accessToken}
```

**Body:**
```json
{
  "preparationId": "prep-123",
  "documentIdsToExport": ["doc-1", "doc-2"]
}
```

**Expected Response:**
```json
{
  "documents": {
    "forms": [...],
    "targetClient": {...}
  }
}
```

### Console Output (API Mode)

```
📡 Calling backend API: https://your-api.com/app-integration/proconnect/preparation
✅ Data received from backend API
   - Forms count: 5
   - Client email: client@example.com
```

---

## Usage Examples

### Development with Mock Data

```bash
# 1. Edit .env
USE_MOCK_DATA=true

# 2. Update mock data if needed
nano src/proconnect/bot/dataFetcher/proconnect_dev.json

# 3. Start server
npm run start:dev

# 4. Test endpoint
curl -X POST http://localhost:3000/proconnect/fill-tax-return \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer fake-token" \
  -d '{
    "preparationId": "any-id",
    "documentIdsToExport": ["any-doc"],
    "autoNavigateToReturn": true
  }'
```

**Note:** In mock mode, `preparationId` and `accessToken` are ignored - it always returns the JSON file.

---

### Testing with Real API

```bash
# 1. Edit .env
USE_MOCK_DATA=false
BACKEND_API_URL=https://your-dev-api.com

# 2. Start server
npm run start:dev

# 3. Test with real token and IDs
curl -X POST http://localhost:3000/proconnect/fill-tax-return \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_REAL_TOKEN" \
  -d '{
    "preparationId": "real-prep-id",
    "documentIdsToExport": ["doc-1"],
    "autoNavigateToReturn": true
  }'
```

---

### Production Deployment

```bash
# 1. Use production env file
cp .env.production .env

# 2. Edit with real values
nano .env

# Set:
USE_MOCK_DATA=false
BACKEND_API_URL=https://production-api.com
NODE_ENV=production

# 3. Build and deploy
npm run build
npm run start:prod
```

---

## Switching Between Modes

### Option 1: Edit .env File

```bash
# Enable mock mode
sed -i 's/USE_MOCK_DATA=false/USE_MOCK_DATA=true/' .env

# Enable API mode
sed -i 's/USE_MOCK_DATA=true/USE_MOCK_DATA=false/' .env

# Restart server
npm run start:dev
```

### Option 2: Environment Variable Override

```bash
# Run with mock mode (override .env)
USE_MOCK_DATA=true npm run start:dev

# Run with API mode (override .env)
USE_MOCK_DATA=false BACKEND_API_URL=https://api.com npm run start:dev
```

### Option 3: Multiple .env Files

```bash
# Development (mock)
cp .env.example .env
# Edit: USE_MOCK_DATA=true

# Staging (real API)
cp .env.production .env.staging
# Edit: USE_MOCK_DATA=false, BACKEND_API_URL=https://staging-api.com

# Load specific file
export $(cat .env.staging | xargs)
npm run start
```

---

## Updating Mock Data

### 1. Edit Existing Mock File

```bash
nano src/proconnect/bot/dataFetcher/proconnect_dev.json
```

### 2. Add New Forms

```json
{
  "documents": {
    "forms": [
      {
        "form_name": "NEW_FORM",
        "form_data": {
          "field_name": {
            "dataTestId": "OSI...",
            "id": "OSI...",
            "type": "string",
            "value": "test value",
            "label": "Field Label"
          }
        }
      }
    ]
  }
}
```

### 3. Update Client Info

```json
{
  "targetClient": {
    "email": "your-test@email.com",
    "firstName": "TestFirst",
    "lastName": "TestLast",
    "taxYear": 2024,
    "type": "INDIVIDUAL"
  }
}
```

### 4. Validate JSON

```bash
# Check JSON syntax
cat src/proconnect/bot/dataFetcher/proconnect_dev.json | python3 -m json.tool

# Or use jq
jq '.' src/proconnect/bot/dataFetcher/proconnect_dev.json
```

---

## Troubleshooting

### Mock Mode Not Working

**Error:**
```
❌ Error loading mock data: ENOENT: no such file or directory
```

**Solution:**
Check file exists:
```bash
ls -la src/proconnect/bot/dataFetcher/proconnect_dev.json
```

---

### API Mode Requires URL

**Error:**
```
Backend API URL is not configured
```

**Solution:**
Set `BACKEND_API_URL` in `.env`:
```env
USE_MOCK_DATA=false
BACKEND_API_URL=https://your-api.com
```

---

### Invalid JSON in Mock File

**Error:**
```
Unexpected token in JSON at position 123
```

**Solution:**
Validate JSON syntax:
```bash
python3 -m json.tool src/proconnect/bot/dataFetcher/proconnect_dev.json
```

---

### Changes Not Reflected

**Problem:**
Updated `.env` but mode didn't change.

**Solution:**
Restart the server:
```bash
# Stop server (Ctrl+C)
# Start again
npm run start:dev
```

---

## Best Practices

### Development

✅ **DO:**
- Use mock mode for local development
- Keep mock data up to date with real API structure
- Test with mock data before testing with real API
- Version control mock data files

❌ **DON'T:**
- Commit real API credentials
- Use mock mode in production
- Hardcode API URLs in code

---

### Testing Strategy

1. **Unit Testing** → Mock mode with controlled data
2. **Integration Testing** → Mock mode with various scenarios
3. **Staging** → Real API mode with test data
4. **Production** → Real API mode with real data

---

### Mock Data Maintenance

```bash
# Update mock data from real API response
curl -X POST https://api.com/app-integration/proconnect/preparation \
  -H "Authorization: Bearer TOKEN" \
  -d '{"preparationId":"123","documentIdsToExport":["doc1"]}' \
  | jq '.documents' > src/proconnect/bot/dataFetcher/proconnect_dev.json
```

---

## Environment-Specific Configs

### .env (Local Development)
```env
USE_MOCK_DATA=true
BACKEND_API_URL=  # Not needed in mock mode
```

### .env.staging (Staging)
```env
USE_MOCK_DATA=false
BACKEND_API_URL=https://staging-api.yourcompany.com
```

### .env.production (Production)
```env
USE_MOCK_DATA=false
BACKEND_API_URL=https://api.yourcompany.com
```

---

## Debugging

### Enable Verbose Logging

```env
LOG_LEVEL=debug
```

### Check Current Mode

The console will show:
- Mock mode: `🧪 MOCK MODE: Using local JSON file`
- API mode: `📡 Calling backend API: https://...`

### Verify Data Loaded

Both modes log:
```
✅ Data loaded successfully
   - Forms count: X
   - Client email: xxx@email.com
   - Tax year: 2024
```

---

## Summary

| Aspect | Mock Mode | API Mode |
|--------|-----------|----------|
| **Setting** | `USE_MOCK_DATA=true` | `USE_MOCK_DATA=false` |
| **Requires** | JSON file | `BACKEND_API_URL` + token |
| **Data Source** | `proconnect_dev.json` | Backend API |
| **Use Case** | Development/Testing | Staging/Production |
| **Token** | Ignored | Required |
| **Prep ID** | Ignored | Required |
| **Speed** | Instant | Network dependent |
| **Reliability** | 100% | Depends on API |

---

**Last Updated:** 2026-01-26
**Version:** 1.0.0
