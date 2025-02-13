const olddataArr = [];
const newdataArr = [];

const fs = require("fs");
const path = require("path");

// Function to process the data
function updateOldData(olddata, newdata) {
  const resultsPath = path.join(process.cwd(), "results");

  if (!fs.existsSync(resultsPath)) {
    fs.mkdirSync(resultsPath);
  }

  // Helper to remove the starting part of the xpath
  const oldSubXpath =
    "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]";
  const newSubXpath =
    "//body/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]";
  const stripXpathStart = (xpath) => xpath.replace(newSubXpath, oldSubXpath);

  const mappedData = newdata.map((newItem) => {
    const newXpath = stripXpathStart(newItem.input.xpath);
    const oldItem = olddata.find((elm) => {
      if (elm.id === newItem.input.id) {
        console.log("Match using Id:", elm.id);
        return elm;
      } else if (elm.dataTestId === newItem.input.dataTestId) {
        console.log("Match using dataTestId:", elm.dataTestId);
        return elm;
      } else if (elm.xpath === newXpath) {
        console.log("Match using Xpath:", elm.xpath, newItem.input.xpath);
        return elm;
      }
    });

    if (oldItem) {
      // Update the old data item with new id and dataTestId
      oldItem.id = newItem.input.id;
      oldItem.dataTestId = newItem.input.dataTestId;
      oldItem["inputIndex"] = newItem.input.inputIndex;
      return oldItem;
    } else {
      console.log("Not found:", newItem.input.id);
    }
  });

  console.log(
    `Check: Old Items ${olddata.length} -- New Items: ${mappedData.length}`
  );
  const filePath = path.join(resultsPath, `data.json`);

  const filterData = mappedData.filter((data) => data);

  // Write the output to a file
  fs.writeFileSync(filePath, JSON.stringify(filterData), "utf8");

  return filterData;
}

// Process the data
const updatedOldData = updateOldData(olddataArr, newdataArr);

// console.log(updatedOldData);
