const olddata = [];

const newdata = [];

// import * as fs from "fs";
// import * as path from "path";

const fs = require("fs");
const path = require("path");

// Function to process the data
function updateOldData(olddata, newdata) {
  const resultsPath = path.join(process.cwd(), "results");

  if (!fs.existsSync(resultsPath)) {
    fs.mkdirSync(resultsPath);
  }

  // Helper to remove the starting part of the xpath
  const stripXpathStart = (xpath) => xpath.replace(/^\/\/body\/div\[\d+\]/, "");

  newdata.forEach((newItem) => {
    const newXpath = stripXpathStart(newItem.input.xpath);

    olddata.forEach((oldItem) => {
      // Check if the processed new xpath is included in the old xpath
      if (oldItem.xpath.includes(newXpath)) {
        // Update the old data item with new id and dataTestId
        oldItem.id = newItem.input.id;
        oldItem.dataTestId = newItem.input.dataTestId;
      }
    });
  });
  const filePath = path.join(resultsPath, `data.json`);

  // Write the output to a file
  fs.writeFileSync(filePath, JSON.stringify(olddata), "utf8");

  return olddata;
}

// Process the data
const updatedOldData = updateOldData(olddata, newdata);

console.log(updatedOldData);
