export default function getCurrentDate () {
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString();
  const time = currentDate.toLocaleTimeString();

  return {day, time}
}