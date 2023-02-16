// TASK 1:
//new Date(year, month, date, hour, minute, second, millisecond)
let d1 = new Date(2012, 1, 20, 3, 12);
alert(d1);
//new Date(datastring)
let d2 = new Date("2012-02-20T03:12");
alert(d2);
// TASK 2:
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
  }

  let date = new Date(2014, 0, 3); // 3 Jan 2014
alert(getWeekDay(date)); // FR
// TASK 3:
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }

    return day;
}
// TASK 4:
function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}
// TASK 5:
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  alert( getLastDayOfMonth(2012, 0) ); // 31
  alert( getLastDayOfMonth(2012, 1) ); // 29
alert(getLastDayOfMonth(2013, 1)); // 28
// TASK 6 :
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }

alert(getSecondsToday());
// TASK 7:
function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
    return totalSecondsInADay - totalSecondsToday;
}
