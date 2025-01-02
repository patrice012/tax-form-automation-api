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
      );
    }
    if (sibling?.nodeType === 1 && sibling?.tagName === element?.tagName) {
      ix++;
    }
  }
};

function getSelectTagInput() {
  const tags = ["select"];
  const xpaths = [];
  tags.forEach((tag) => {
    Array.from(document.querySelectorAll(tag)).forEach((element) => {
      const xpath = generateXpath(element);
      xpaths.push({
        xpath: xpath,
      });
      console.log("element:", $x(xpath)[0], xpath);
    });
  });
  return xpaths;
}

function getTextInput() {
  const tags = ["input:not([type='checkbox']):not([readonly])"];
  const xpaths = [];
  tags.forEach((tag) => {
    Array.from(document.querySelectorAll(tag)).forEach((element) => {
      const xpath = generateXpath(element);
      xpaths.push({
        xpath: xpath,
      });
      console.log("element:", $x(xpath)[0], xpath);
    });
  });
  return xpaths;
}

function getCheckboxInput() {
  const tags = ["input[type='checkbox']:not([readonly])"];
  const xpaths = [];
  tags.forEach((tag) => {
    Array.from(document.querySelectorAll(tag)).forEach((element) => {
      // get svg path
      const xpath = generateXpath(element);
      xpaths.push({
        xpath: xpath,
      });
      console.log("element:", $x(xpath)[0], xpath);
    });
  });
  return xpaths;
}

// console.log(xpaths)
