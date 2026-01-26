// Main function to execute
window.generateMappingsFromElement = (selector) => {
  function generateXpath(element) {
    if (!element || element === document.body) {
      return '//' + (element?.tagName.toLowerCase() || '');
    }

    let ix = 0;
    const siblings = element?.parentNode?.childNodes;

    for (let i = 0; i < siblings?.length; i++) {
      const sibling = siblings[i];
      if (sibling === element) {
        return (
          generateXpath(element.parentNode) +
          '/' +
          element?.tagName.toLowerCase() +
          '[' +
          (ix + 1) +
          ']'
        ).trim();
      }
      if (sibling?.nodeType === 1 && sibling?.tagName === element?.tagName) {
        ix++;
      }
    }
  }

  function findRelatedLabel(inputElement, allElements) {
    // Strategies for finding related label
    const strategies = [
      // Strategy 1: Direct 'for' attribute
      () => {
        const labelId = inputElement.id;
        return labelId
          ? Array.from(allElements).find(
              (el) =>
                (el.tagName === 'LABEL' || el.tagName === 'SPAN') &&
                el.getAttribute('for') === labelId,
            )
          : null;
      },

      // Strategy 2: Attribute-based matching
      () => {
        const attributes = ['id', 'data-testid'];
        return attributes.reduce((foundLabel, attr) => {
          if (foundLabel) return foundLabel;

          const attrValue = inputElement.getAttribute(attr);
          if (!attrValue) return null;

          const basePattern = attrValue
            .replace('-label', '')
            ?.replace('-taxid', '')
            ?.replace('-input', '')
            ?.replace('field-', '');

          return Array.from(allElements).find(
            (el) =>
              (el.tagName === 'LABEL' || el.tagName === 'SPAN') &&
              attributes.some((labelAttr) => {
                const labelAttrValue = el.getAttribute(labelAttr);
                return (
                  labelAttrValue &&
                  labelAttrValue.includes(basePattern) &&
                  labelAttrValue !== attrValue
                );
              }),
          );
        }, null);
      },

      // Strategy 3: Proximity-based (previous sibling)
      () => {
        const prevSibling = inputElement.previousElementSibling;
        return prevSibling && (prevSibling.tagName === 'LABEL' || prevSibling.tagName === 'SPAN')
          ? prevSibling
          : null;
      },

      // Strategy 4: Parent relationship
      () => {
        const parent = inputElement.parentElement;
        return parent
          ? Array.from(parent.children).find(
              (el) => el.tagName === 'LABEL' || el.tagName === 'SPAN',
            )
          : null;
      },
    ];

    // Try strategies in order
    return strategies.reduce((label, strategy) => label || strategy(), null);
  }

  function extractFormData(mainElement, ...inputTypes) {
    const data = [];

    if (!mainElement) return data;

    const allElements = mainElement.querySelectorAll('*');

    // Collect different input types
    const allInputs = Array.from(allElements).filter((el) => inputTypes.includes(el.tagName));

    // Process each input
    allInputs.forEach((inputElement, idx) => {
      const relatedLabel = findRelatedLabel(inputElement, allElements);

      if (relatedLabel) {
        data.push({
          label: {
            for: relatedLabel.getAttribute('for'),
            text: relatedLabel.textContent?.trim(),
            dataTestId: relatedLabel.getAttribute('data-testid'),
            id: relatedLabel.id,
          },
          input: {
            id: inputElement.id || '',
            dataTestId: inputElement.getAttribute('data-testid') || '',
            name: inputElement.name || '',
            placeholder: inputElement.getAttribute('placeholder') || '',
            value: inputElement.value || '',
            xpath: generateXpath(inputElement),
            type: inputElement.tagName.toLowerCase() || '',
            ariaLabel: inputElement.getAttribute('aria-label') || '',
            inputIndex: idx,
          },
        });
      } else {
        data.push({
          label: {},
          input: {
            id: inputElement.id || '',
            dataTestId: inputElement.getAttribute('data-testid') || '',
            name: inputElement.name || '',
            placeholder: inputElement.getAttribute('placeholder') || '',
            value: inputElement.value || '',
            xpath: generateXpath(inputElement),
            type: inputElement.tagName.toLowerCase() || '',
            ariaLabel: inputElement.getAttribute('aria-label') || '',
            inputIndex: idx,
          },
        });
      }
    });

    return data;
  }

  function extractInputFormData(selector) {
    const mainElement = document.querySelector(selector);
    if (!mainElement) {
      console.error('Main element not found. Please provide a valid selector.');
      return;
    }
    const data = extractFormData(mainElement, 'INPUT');
    return data;
  }

  function extractSelectFormData(selector) {
    const mainElement = document.querySelector(selector);
    if (!mainElement) {
      console.error('Main element not found. Please provide a valid selector.');
      return;
    }
    const data = extractFormData(mainElement, 'SELECT');
    return data;
  }

  function extractTextAreaFormData(selector) {
    const mainElement = document.querySelector(selector);
    if (!mainElement) {
      console.error('Main element not found. Please provide a valid selector.');
      return;
    }
    const data = extractFormData(mainElement, 'TEXTAREA');
    return data;
  }

  const downloadAsJson = (data, filename) => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const inputFormData = extractInputFormData(selector);
  console.log('input Form Data:', inputFormData);

  const selectFormData = extractSelectFormData(selector);
  console.log('select Form Data:', selectFormData);

  const textareaFormData = extractTextAreaFormData(selector);
  console.log('textarea Form Data:', textareaFormData);

  const data = {
    inputs: inputFormData,
    select: selectFormData,
    textArea: textareaFormData,
  };

  // Download the result as JSON
  downloadAsJson(data, 'input-form-data.json');
};

console.log(
  "The function 'generateMappingsFromElement' is ready to use. Call it with a selector as the argument, e.g., generateMappingsFromElement('.main-content')",
);

generateMappingsFromElement('.main-content');
