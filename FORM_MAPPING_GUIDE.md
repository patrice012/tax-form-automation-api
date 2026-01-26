# Form Mapping Guide

## Overview

This guide explains how to generate form field mappings from ProConnect using browser-based scanner tools.

---

## Browser Scanner Tools

Located in: `src/proconnect/bot/dataFetcher/`

### 1. browserFormScanner.js

**Purpose:** Scans normal forms (inputs, selects, textareas)

**Extracts:**
- Input fields (text, number, email, etc.)
- Select dropdowns
- Textarea fields
- Field IDs, data-testid attributes, XPaths
- Label associations

### 2. browserTableScanner.js

**Purpose:** Scans table-based forms

**Extracts:**
- Table structure (columns/rows)
- Input fields within table cells
- Column headers
- XPath locations

---

## How to Use

### Step 1: Open ProConnect Form

1. Log in to ProConnect
2. Navigate to the tax form you want to map
3. Open the form (e.g., W2, 1099NEC, etc.)

### Step 2: Open Browser Console

```
Chrome/Edge: Press F12 or Ctrl+Shift+J
Firefox: Press F12 or Ctrl+Shift+K
Safari: Cmd+Option+C
```

### Step 3: Choose the Right Scanner

#### For Normal Forms (Most Tax Forms)

Use `browserFormScanner.js` for forms like:
- W2 (Wages, Salaries, Tips)
- 1099T (Tuition)
- 1099G (Government Payments)
- Any form with regular input fields

#### For Table-Based Forms

Use `browserTableScanner.js` for forms like:
- 1098E (Student Loan Interest) - uses table layout
- 1099SSA (Social Security Benefits) - table format
- Any form with grid/table structure

---

## Using browserFormScanner.js

### Step 1: Copy the Script

```bash
# Copy file contents
cat src/proconnect/bot/dataFetcher/browserFormScanner.js
```

### Step 2: Paste in Browser Console

1. Open browser console (F12)
2. Paste the entire `browserFormScanner.js` code
3. Press Enter

**Console Output:**
```
The function 'generateMappingsFromElement' is ready to use.
Call it with a selector as the argument
```

### Step 3: Run the Scanner

**Option A: Use default selector (recommended)**
```javascript
generateMappingsFromElement('.main-content');
```

**Option B: Use custom selector**
```javascript
// Scan specific section
generateMappingsFromElement('#form-section');

// Scan entire page
generateMappingsFromElement('body');

// Scan by class
generateMappingsFromElement('.tax-form-container');
```

### Step 4: Download Results

The script automatically downloads: `input-form-data.json`

**File Structure:**
```json
{
  "inputs": [
    {
      "label": {
        "for": "OSIEdit44-39",
        "text": "Employer identification number (EIN)",
        "dataTestId": "OSIEdit44-39-label",
        "id": "field-OSIEdit44-39-label"
      },
      "input": {
        "id": "OSIEdit44-39-taxid",
        "dataTestId": "OSIEdit44-39-taxid",
        "name": "",
        "placeholder": "",
        "value": "",
        "xpath": "/html/body/div[2]/div[1]/...",
        "type": "input",
        "ariaLabel": "",
        "inputIndex": 0
      }
    }
  ],
  "select": [ /* SELECT fields */ ],
  "textArea": [ /* TEXTAREA fields */ ]
}
```

---

## Using browserTableScanner.js

### Step 1: Copy the Script

```bash
cat src/proconnect/bot/dataFetcher/browserTableScanner.js
```

### Step 2: Paste in Browser Console

1. Open browser console (F12)
2. Paste the entire `browserTableScanner.js` code
3. Press Enter

### Step 3: Run the Scanner

```javascript
generateMappingsFromElement('.main-content');
```

### Step 4: Download Results

The script automatically downloads: `table-mappings.json`

**File Structure:**
```json
{
  "table1": [
    {
      "label": "Student Name",
      "inputType": "table",
      "custom": "table",
      "fields": [
        {
          "label": "First name",
          "inputType": "text",
          "xpath": "/html/body/div[2]/..."
        }
      ]
    }
  ]
}
```

---

## Converting Scanned Data to Bot Format

### For Normal Forms

**Input format (from browserFormScanner.js):**
```json
{
  "label": { "text": "Employer identification number (EIN)" },
  "input": {
    "id": "OSIEdit44-39-taxid",
    "dataTestId": "OSIEdit44-39-taxid",
    "type": "input",
    "xpath": "/html/body/..."
  }
}
```

**Convert to bot format:**
```json
{
  "employer_fed_id_number_0": {
    "custom": null,
    "dataTestId": "OSIEdit44-39-taxid",
    "id": "OSIEdit44-39-taxid",
    "inputIndex": null,
    "label": "Employer identification number (EIN)",
    "page_href": null,
    "type": "string",
    "value": "12-3456789",
    "xpath": "/html/body/..."
  }
}
```

**Key Changes:**
1. Create descriptive field name (e.g., `employer_fed_id_number_0`)
2. Add `custom: null` or `"popup"` or `"table"`
3. Add `page_href: null` (or tab name if on separate page)
4. Determine `type`: `"string"`, `"number"`, `"select"`, `"bool"`, `"radio"`
5. Add sample `value` for testing

---

## Example Workflow

### Mapping a W2 Form

**Step 1: Open W2 Form in ProConnect**
```
ProConnect → Client → Tax Return → Forms → W2
```

**Step 2: Scan the Form**
```javascript
// In browser console
// (after pasting browserFormScanner.js)
generateMappingsFromElement('.main-content');
```

**Step 3: Download & Review**
- File downloaded: `input-form-data.json`
- Open in text editor
- Review all extracted fields

**Step 4: Convert to Bot Format**

Create `w2_form_data.json`:
```json
{
  "form_name": "W2",
  "form_data": {
    "employer_fed_id_number_0": {
      "dataTestId": "OSIEdit44-39-taxid",
      "id": "OSIEdit44-39-taxid",
      "type": "string",
      "value": "12-3456789",
      "label": "Employer identification number (EIN)",
      "custom": null,
      "page_href": null,
      "xpath": "/html/body/..."
    },
    "wages_tips_compensation_0": {
      "dataTestId": "OSICtrlE239-549-input",
      "id": "field-OSICtrlE239-549-label",
      "type": "number",
      "value": 50000,
      "label": "(1) Wages, tips, other compensation",
      "custom": null,
      "page_href": null,
      "xpath": "/html/body/..."
    }
  }
}
```

**Step 5: Add to Mock Data**

Add to `proconnect_dev.json`:
```json
{
  "documents": {
    "forms": [
      // ... your W2 form data here
    ],
    "targetClient": { /* ... */ }
  }
}
```

---

## Field Types Reference

### type: "string"
```json
{
  "type": "string",
  "value": "Test Company Inc"
}
```
**For:** Text inputs (names, addresses, EIN)

### type: "number"
```json
{
  "type": "number",
  "value": 50000
}
```
**For:** Numeric inputs (wages, amounts, counts)

### type: "select"
```json
{
  "type": "select",
  "value": "A"
}
```
**For:** Dropdown menus (state, code selections)

### type: "bool"
```json
{
  "type": "bool",
  "value": true
}
```
**For:** Checkboxes

### type: "radio"
```json
{
  "type": "radio",
  "value": "yes"
}
```
**For:** Radio buttons

---

## Special Cases

### 1. Popup Inputs

Some fields appear in popup dialogs.

**Marker:**
```json
{
  "custom": "popup",
  "label": "Total qualified student loan interest paid"
}
```

### 2. Table Inputs

Fields within HTML tables.

**Marker:**
```json
{
  "custom": "table",
  "label": "Box 12 amounts"
}
```

### 3. Multi-Page Forms

Fields on different tabs/pages.

**Marker:**
```json
{
  "page_href": "Deductions",
  "label": "Standard deduction"
}
```

---

## Tips & Best Practices

### 1. Scan After Manual Fill

Fill out the form with test data before scanning:
- Fields have actual values
- Easier to identify field purpose
- Can verify field types

### 2. Use Unique Field Names

```javascript
// Bad
"field_0", "field_1", "field_2"

// Good
"employer_name_0", "wages_0", "federal_tax_withheld_0"
```

### 3. Verify data-testid

ProConnect uses `data-testid` attributes:
- Most reliable selector
- Check if present: `dataTestId: "OSIEdit44-39-taxid"`
- If missing, use `id` or `xpath`

### 4. Handle Multiple Instances

For forms with tabs (multiple W2s):
```json
{
  "employer_fed_id_number_0": { "value": "12-3456789" },
  "employer_fed_id_number_1": { "value": "98-7654321" }
}
```

### 5. Test XPath Validity

```javascript
// In browser console
$x('/html/body/div[2]/div[1]/...')
// Should return the element
```

---

## Troubleshooting

### Scanner Returns Empty Data

**Problem:** `{ inputs: [], select: [], textArea: [] }`

**Solutions:**
1. Check selector: Try `'body'` instead of `'.main-content'`
2. Ensure form is fully loaded
3. Check if form uses iframe: Switch to iframe first

```javascript
// If form in iframe
const iframe = document.querySelector('iframe');
const iframeDoc = iframe.contentDocument;
// Then use scanner on iframeDoc
```

### Missing Labels

**Problem:** Label shows as `{}`

**Cause:** Field has no associated label

**Solution:** Use field's `placeholder`, `aria-label`, or nearby text

### XPath Not Working

**Problem:** Element not found using XPath

**Solution:**
1. Use `dataTestId` instead (preferred)
2. Use `id` attribute
3. Regenerate XPath (might be dynamic)

### Table Not Detected

**Problem:** Table form returns empty

**Cause:** Not using browserTableScanner.js

**Solution:** Use `browserTableScanner.js` for table-based forms

---

## Complete Example: Mapping 1099NEC

### 1. Navigate to Form
```
ProConnect → Tax Return → Income → 1099NEC
```

### 2. Fill Test Data
```
Payer's name: Test Company LLC
Payer's TIN: 12-3456789
Nonemployee compensation: 15000
```

### 3. Scan Form
```javascript
// Paste browserFormScanner.js
generateMappingsFromElement('.main-content');
```

### 4. Download Results
- File: `input-form-data.json`

### 5. Convert to Bot Format
```json
{
  "form_name": "1099NEC",
  "form_data": {
    "payers_name_0": {
      "dataTestId": "OSIEdit9-131",
      "id": "OSIEdit9-131",
      "type": "string",
      "value": "Test Company LLC",
      "label": "Payer's name",
      "custom": null,
      "page_href": null,
      "xpath": null
    },
    "payers_tin_0": {
      "dataTestId": "OSIEdit10-139-taxid",
      "id": "OSIEdit10-139-taxid",
      "type": "string",
      "value": "12-3456789",
      "label": "Payer's TIN",
      "custom": null,
      "page_href": null,
      "xpath": null
    },
    "nonemployee_compensation_0": {
      "dataTestId": "OSICtrlE2-142-input",
      "id": "field-OSICtrlE2-142-label",
      "type": "number",
      "value": 15000,
      "label": "(1) Nonemployee compensation",
      "custom": null,
      "page_href": null,
      "xpath": null
    }
  }
}
```

### 6. Add to Mock Data
```json
{
  "documents": {
    "forms": [
      {
        "form_name": "1099NEC",
        "form_data": { /* ... above data ... */ }
      }
    ]
  }
}
```

### 7. Test
```bash
# Ensure mock mode
USE_MOCK_DATA=true

# Start server
npm run start:dev

# Test API
curl -X POST http://localhost:3000/proconnect/fill-tax-return \
  -H "Authorization: Bearer test" \
  -d '{"preparationId":"test","documentIdsToExport":["test"]}'
```

---

## Quick Reference

### Scanner Selection

| Form Type | Scanner | Download |
|-----------|---------|----------|
| Regular inputs | browserFormScanner.js | input-form-data.json |
| Table layout | browserTableScanner.js | table-mappings.json |

### Command

```javascript
generateMappingsFromElement('.main-content');
```

### Field Name Pattern

```
{description}_{instance_number}
```

Examples:
- `employer_name_0`
- `wages_0`
- `box_1_wages_0`

---

## Resources

- **Browser Scanner Tools:** `src/proconnect/bot/dataFetcher/`
  - `browserFormScanner.js`
  - `browserTableScanner.js`

- **Mock Data File:** `src/proconnect/bot/dataFetcher/proconnect_dev.json`

- **Form Config:** `src/proconnect/bot/taxFormsFiller/fillAllForms.ts`

---

**Last Updated:** 2026-01-26
**Version:** 1.0.0
