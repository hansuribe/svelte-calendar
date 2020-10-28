const data = JSON.parse(localStorage.getItem("data"));
import { ExportToCsv } from "export-to-csv";

export function exportToCsv() {
  if (data == null || !data.length) return null;

  data.forEach((day) => createDayData(day));
}

function createDayData(day) {
  let parsedDay = [];

  Object.keys(day.hours).forEach((hour) => {
    parsedDay.push({'hour': hour, ...day.hours[hour]})
  })

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


export function importCsv() {
  return;
}