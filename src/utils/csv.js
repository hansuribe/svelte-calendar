const data = JSON.parse(localStorage.getItem("data"));
import { ExportToCsv } from "export-to-csv";
import { _DAYS } from "../consts.js";

export function exportToCsv() {
  if (data == null || !data.length) return null;

  data.forEach((day) => createDayData(day));
}

function createDayData(day) {
  let parsedDay = [];

  Object.keys(day.hours).forEach((hour) => {
    parsedDay.push({ hour: hour, ...day.hours[hour] });
  });

  const opts = {
    fieldSeperator: ",",
    filename: day.name,
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: day.name,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };

  const csvExporter = new ExportToCsv(opts);
  csvExporter.generateCsv(parsedDay);
}

function csvToArray(strData, strDelimiter = ",") {
  // Create a regular expression to parse the CSV values.
  var objPattern = new RegExp(
    // Delimiters.
    "(\\" +
      strDelimiter +
      "|\\r?\\n|\\r|^)" +
      // Quoted fields.
      '(?:"([^"]*(?:""[^"]*)*)"|' +
      // Standard fields.
      '([^"\\' +
      strDelimiter +
      "\\r\\n]*))",
    "gi"
  );

  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null;

  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while ((arrMatches = objPattern.exec(strData))) {
    // Get the delimiter that was found.
    var strMatchedDelimiter = arrMatches[1];

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);
    }

    var strMatchedValue;

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[2]) {
      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
    } else {
      // We found a non-quoted value.
      strMatchedValue = arrMatches[3];
    }

    // Now that we have our value string, let's add
    // it to the data array.
    arrData[arrData.length - 1].push(strMatchedValue);
  }

  // Return the parsed data.
  return arrData;
}

function csvArrayToObject(arr) {
  let day = {}, hours = {};
  day.name = arr[0][0];
  const columns = arr[2];
  for (let i = 3; i <= 19; ++i) {
    let hourObj = {};
    const hourFromCsv = arr[i];

    hourFromCsv.forEach((val, i) => {
      if (i !== 0) {
        hourObj[columns[i]] = val;
      } 
    })

    hours[i + 4] = hourObj;
  }
  day.hours = hours;
  return day;
}
export async function saveFilesAsData(files) {
  if (!files) return;

  for (const file of files) {
    const reader = new FileReader();
    reader.addEventListener("load", async (e) => {
      const fileAsString = e.target.result;
      const csvArray = await csvToArray(fileAsString);
      if (!csvArray || !_DAYS.includes(csvArray[0][0])) {
        alert("Error loading file: Invalid syntax");
        return;
      } 

      const csvObject = csvArrayToObject(csvArray);
      console.log(csvObject);
    });
    reader.readAsText(file);
  }
}
