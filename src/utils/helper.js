import { format } from "date-fns";

export function getCurrentDate() {
  const minute = format(new Date(), "mm");
  const hour = format(new Date(), "hh");
  const day = format(new Date(), "dd");
  const month = format(new Date(), "MMMM");
  const dayOfWeek = format(new Date(), "EEEE");
  const year = format(new Date(), "yyyy");

  return { minute, hour, day, dayOfWeek, month, year };
}

console.log(getCurrentDate());
