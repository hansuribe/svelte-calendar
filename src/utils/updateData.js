import { data } from "../stores.js";

export default function update(day, hour, opts, callback) {
  let previousData = JSON.parse(window.localStorage.data);
  let updatedData = previousData.filter((el) => {
    if (el.name === day) {
      Object.keys(opts).forEach((option) => {
        (el.hours[hour])[option] = opts[option];
      });
    }
    return el;
  });
  window.localStorage.data = JSON.stringify(updatedData);
  data.set(updatedData);
  typeof callback === "function" && callback();
}
