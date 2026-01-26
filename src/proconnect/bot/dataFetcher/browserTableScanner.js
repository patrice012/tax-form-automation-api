const generateXpath = (element) => {
  if (!element || element === document.body) return '//' + (element?.tagName.toLowerCase() || '');

  let ix = 0;
  const siblings = element.parentNode?.childNodes;

  for (let i = 0; i < siblings?.length; i++) {
    const sibling = siblings[i];
    if (sibling === element) {
      return (
        generateXpath(element.parentNode) +
        '/' +
        element.tagName.toLowerCase() +
        '[' +
        (ix + 1) +
        ']'
      );
    }
    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
  }
};

const findLabelForInput = (inputElement) => {
  const cleanText = (text) => text?.replace(/[\n\r\t*]/g, '').trim();

  // Check for `id` and matching `for` attribute
  const id = inputElement.getAttribute('id');
  if (id) {
    const label = document.querySelector(`label[for="${id}"]`);
    if (label) return cleanText(label.textContent);
  }

  // Check for parent label
  const parentLabel = inputElement.closest('label');
  if (parentLabel) return cleanText(parentLabel.textContent);

  // Look for sibling text
  const container = inputElement.closest('td, th, div') || inputElement.parentNode;
  const possibleLabel = container.querySelector('label, span, div');
  if (possibleLabel) return cleanText(possibleLabel.textContent);

  // Fallback to aria-label
  const ariaLabel = inputElement.getAttribute('aria-label');
  if (ariaLabel) return cleanText(ariaLabel);

  return 'Unknown Label';
};

const mapInputsInTable = (mainElement) => {
  const tables = mainElement.querySelectorAll('table');
  const mappedTables = {};

  tables.forEach((table, tableIndex) => {
    const tableKey = `table${tableIndex + 1}`;
    const columns = table.querySelectorAll('thead th');
    const rows = table.querySelectorAll('tbody tr');

    // Create column objects with empty fields
    const columnMappings = Array.from(columns).map((column) => ({
      label: column.textContent.trim(),
      inputType: 'table',
      custom: 'table',
      fields: [],
    }));

    rows.forEach((row) => {
      Array.from(row.querySelectorAll('td')).forEach((cell, cellIndex) => {
        const inputElement = cell.querySelector('input, select, textarea');
        if (inputElement) {
          const label = findLabelForInput(inputElement);
          const xpath = generateXpath(inputElement);

          columnMappings[cellIndex]?.fields.push({
            label,
            inputType: inputElement.type || inputElement.tagName.toLowerCase(),
            xpath,
          });
        }
      });
    });

    const filterColumnMappings = columnMappings.filter((columns) => {
      if (columns?.fields?.length) return columns;
      // else {
      //   console.log("Empty fields: ", columns);
      // }
    });

    mappedTables[tableKey] = filterColumnMappings;
  });

  return mappedTables;
};

const downloadAsJson = (data, filename = 'data.json') => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

// Main function to execute
window.generateMappingsFromElement = (selector) => {
  const mainElement = document.querySelector(selector);
  if (!mainElement) {
    console.error('Main element not found. Please provide a valid selector.');
    return;
  }

  const mappedData = mapInputsInTable(mainElement);
  console.log('Mapped Data:', mappedData);

  // Download the result as JSON
  downloadAsJson(mappedData, 'table-mappings.json');
};

console.log(
  "The function 'generateMappingsFromElement' is ready to use. Call it with a selector as the argument, e.g., generateMappingsFromElement('.main-content')",
);

generateMappingsFromElement('.main-content');
