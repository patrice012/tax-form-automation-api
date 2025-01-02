const generateXpath = (element) => {
  if (!element || element === document.body) {
    return "//" + (element?.tagName.toLowerCase() || "");
  }

  let ix = 0;
  const siblings = element?.parentNode?.childNodes;

  for (let i = 0; i < siblings?.length; i++) {
    const sibling = siblings[i];
    if (sibling === element) {
      return (
        generateXpath(element.parentNode) +
        "/" +
        element?.tagName.toLowerCase() +
        "[" +
        (ix + 1) +
        "]"
      ).trim();
    }
    if (sibling?.nodeType === 1 && sibling?.tagName === element?.tagName) {
      ix++;
    }
  }
};

const findLabelForInput = (inputElement) => {
  const cleanText = (text) => {
    return text
      ?.replace(/[\n\r\t*]/g, "")
      ?.replace("\\")
      ?.trim();
  };

  // 1. Check for `id` and matching `for` attribute
  const id = inputElement.getAttribute("id");
  if (id) {
    const label = document.querySelector(`label[for="${id}"]`);
    const labelText = cleanText(label?.textContent);
    if (labelText) {
      return labelText;
    }
  }

  // 2. Look for a parent label (direct wrapping of the input)
  const parentLabel = inputElement.closest("label");
  if (parentLabel) {
    const labelText = cleanText(parentLabel.textContent);
    if (labelText) {
      return labelText;
    }
  }

  // 3. Check for sibling or parent text elements
  const container = inputElement.closest("div") || inputElement.parentNode;
  if (container) {
    const possibleLabel = container.querySelector("label, span, div");
    const labelText = cleanText(possibleLabel?.textContent);
    if (labelText) {
      return labelText;
    }
  }

  // 4. Fallback to aria-label
  const ariaLabel = cleanText(inputElement.getAttribute("aria-label"));
  if (ariaLabel) {
    return ariaLabel;
  }

  return "Unknown Label";
};

const mapInputsToXpaths = (rootElement) => {
  const inputs = rootElement.querySelectorAll("input, select, textarea");
  return Array.from(inputs).map((input) => {
    const label = findLabelForInput(input);
    const xpath = generateXpath(input);
    const inputType =
      input.tagName.toLowerCase() === "select" ? "select" : input.type;

    return {
      label,
      inputType,
      xpath,
    };
  });
};

const downloadAsJson = (data, filename) => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

// Main function to execute
window.generateMappingsFromElement = (selector) => {
  const mainElement = document.querySelector(selector);
  if (!mainElement) {
    console.error("Main element not found. Please provide a valid selector.");
    return;
  }

  const mappedData = mapInputsToXpaths(mainElement);
  console.log("Mapped Data:", mappedData);

  // Download the result as JSON
  downloadAsJson(mappedData, "table-mappings.json");
};

console.log(
  "The function 'generateMappingsFromElement' is ready to use. Call it with a selector as the argument, e.g., generateMappingsFromElement('.main-content')"
);

generateMappingsFromElement(".main-content");
