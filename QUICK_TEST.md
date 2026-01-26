# Quick Test Guide

## Test with Mock Data (No API Required)

### 1. Start the Server

```bash
npm run start:dev
```

**Expected output:**
```
🚀 ProConnect Bot API
📍 Environment: development
🌐 Server running on: http://localhost:3000
```

### 2. Check Health

```bash
curl http://localhost:3000/health
```

**Expected:**
```json
{
  "status": "ok",
  "timestamp": "2026-01-26T...",
  "environment": "development",
  "version": "1.0.0"
}
```

### 3. Test Form Filling (Mock Mode)

```bash
curl -X POST http://localhost:3000/proconnect/fill-tax-return \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer test-token" \
  -d '{
    "autoNavigateToReturn": true
  }'
```

**What happens:**
1. Browser window opens
2. ProConnect login page appears
3. You log in manually
4. Bot fills forms using mock data
5. Returns success response

**Console shows:**
```
🧪 MOCK MODE: Loading data from local JSON file
✅ Mock data loaded successfully
   - Forms count: 3
   - Client email: test@email.com
   - Tax year: 2024
```

### 4. Check Progress

```bash
curl http://localhost:3000/proconnect/export-progress
```

## Switch to Real API (Future)

To switch to real backend API:

1. Open `src/proconnect/bot/dataFetcher/getData.ts`
2. Uncomment the "REAL API MODE" section
3. Comment out the "MOCK MODE" section
4. Add `preparationId` and `documentIdsToExport` fields back to the DTO
5. Set `BACKEND_API_URL` in `.env`
