const data = JSON.parse(localStorage.getItem("data"));
const columnDelimiter = ",";
const lineDelimiter = "\n";

let days = [];

// [{name, hours: { desc, bg }}]

export default function exportToCsv() {
  if (data == null || !data.length) return null;

  data.forEach((day) => createDayData(day));

  let i = 0;
  days.forEach((dayCsv) => {
    dayCsv = "data:text/csv;charset=utf-8," + dayCsv;

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = dayCsv;
    a.download = data[i++].name + '.csv';
    a.click();
  });
}

function createDayData(day) {
  const hoursKeys = Object.keys(day.hours);
  let result = "";

  result += ["hour", "desc"].join(columnDelimiter);
  result += lineDelimiter;

  hoursKeys.forEach((hour) => {
    result += [hour, day.hours[hour].desc].join(columnDelimiter);
    result += lineDelimiter;
  });

  days.push(result);
}
