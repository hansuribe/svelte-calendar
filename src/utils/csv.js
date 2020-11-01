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

export function saveFilesAsData(files) {
  if (!files) return;

  for (const file of files) {
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      const fileAsString = e.target.result;
      const fileAsStringArray = fileAsString.split("\r\n");
      if (!_DAYS.includes(fileAsStringArray[0])) {
        alert("Error loading file: Invalid syntax");
        return;
      }


    });
    reader.readAsText(file);
  }
}
