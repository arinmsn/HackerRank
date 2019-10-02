function timeConversion(s) {
  var out = "Time is: " + s;
  var time = s.slice(0, 8),
    suffix = s.slice(8, 10),
    hours = s.slice(0, 2),
    noHours = s.slice(2, 8);

  if (suffix == "AM") {
    if (hours == "12") {
      return "00" + noHours;
    }
    return time;
  } else {
    if (hours == "12") {
      return time;
    }
    return parseInt(hours) + 12 + noHours;
  }
}

function timeConversion(s) {
  const arr = s.slice(0, 8).split(":");
  arr[0] =
    s.indexOf("PM") > -1
      ? arr[0] == 12
        ? "12"
        : Number(arr[0]) + 12
      : arr[0] == 12
      ? "00"
      : arr[0];
  return arr.join(":");
}
