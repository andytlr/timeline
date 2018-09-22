function currentTime() {
  var rightNow = new Date()

  var year = rightNow.getFullYear();
  var month = rightNow.getMonth() + 1; // Months are zero based
  var day = rightNow.getDate();
  var hours = rightNow.getHours();
  var minutes = rightNow.getMinutes();
  var seconds = rightNow.getSeconds();

  return year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds
}

var milestones = {
  // "today": [emojiClock(), " ", currentTime(), " "],
  "romeo": ["💞", "I got the Romanceur", "2018/07/27", "ago"],
  "pots": ["🍶", "I started making pots", "2018/01/04", "ago"],
  "cat": ["🐈", "We got Abigail", "2017/08/01", "ago"],
  "swimming": ["🏊🏻", "I started swimming", "2017/06/13", "ago"],
  "instagram": ["📷", "I started at Instagram", "2014/10/06", "ago"],
  "murica": ["🍟", "We moved to the U.S.", "2014/09/26", "ago"],
  "smoking": ["🚬", "I quit smoking", "2013/11/01", "ago"],
  "house": ["🏡", "We got our house", "2013/09/23", "ago"],
  "riding": ["🚴", "I started riding", "2013/04/30", "ago"],
  "ollie": ["👶", "Ollie was born", "2012/09/10", "ago"],
  "wedding": ["💒", "Jane and I got married", "2010/06/26", "ago"],
  "iphone": ["📱", "I got the original iPhone", "2008/04/21", "ago"],
  "lily": ["🐩", "We got Lily", "2006/12/05", "ago"],
  "jandy": ["💑", "Jane and I got together", "2006/08/19", "ago"],
  "smart": ["💼", "I got my first design job", "2004/03/31", "ago"],
  "andy": ["👨", "Andy is", "1983/05/26", "old"]
}

function timeSince(date) {

  if (new Date() - date < 0) {
    var seconds = (date - new Date()) / 1000;
  } else {
    var seconds = (new Date() - date) / 1000;
  }

  var interval = Math.round( (seconds / 31536000) * 10 ) / 10;

  if (interval > 1) {
      return interval + " years";
  }
  interval = Math.round( (seconds / 2592000) * 10 ) / 10;
  if (interval > 1) {
      return interval + " months";
  }
  interval = Math.round( (seconds / 86400) * 10 ) / 10;
  if (interval > 1) {
      return interval + " days";
  }
  interval = Math.round( (seconds / 3600) * 10 ) / 10;
  if (interval > 1) {
      return interval + " hours";
  }
  interval = Math.round(seconds / 60);
  if (interval > 1) {
      return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

function formatTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = " AM";

  if (hours > 12) {
    var hours = hours - 12;
    var ampm = " PM";
  }

  if (minutes < 10) {
    var minutes = "0" + minutes
  }

  if (seconds < 10) {
    var seconds = "0" + seconds
  }

  return hours + ":" + minutes + ampm;
}

function formatLongDate(date) {
  var day = date.getDate();
  var month = date.getMonth() + 1; // Months are zero based

  var year = date.getFullYear();
  var currentYear = new Date().getFullYear();
  var today = new Date();

  if (month == 1) { var month = "January" }
  if (month == 2) { var month = "February" }
  if (month == 3) { var month = "March" }
  if (month == 4) { var month = "April" }
  if (month == 5) { var month = "May" }
  if (month == 6) { var month = "June" }
  if (month == 7) { var month = "July" }
  if (month == 8) { var month = "August" }
  if (month == 9) { var month = "September" }
  if (month == 10) { var month = "October" }
  if (month == 11) { var month = "November" }
  if (month == 12) { var month = "December" }

  if (day == 1 || day == 21 ||  day == 31) {
    return "Today is the " + day + "st of " + month;
  }
  if (day == 2 || day == 22) {
    return "Today is the " + day + "nd of " + month;
  }
  if (day == 3 || day == 23) {
    return "Today is the " + day + "rd of " + month;
  }
  if (day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9 || day == 10 || day == 11 || day == 12 || day == 13 || day == 14 || day == 15 || day == 16 || day == 17 || day == 18 || day == 19 || day == 20 || day == 24 || day == 25 || day == 26 || day == 27 || day == 28 || day == 29 || day == 30) {
    return "Today is the " + day + "th of " + month;
  }
}

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var day = date.getDate();
  var month = date.getMonth() + 1; // Months are zero based
  var year = date.getFullYear();

  var currentYear = new Date().getFullYear();
  var currentDay = new Date().getDate();
  var today = new Date();

  if (month == 1) { var month = "January" }
  if (month == 2) { var month = "February" }
  if (month == 3) { var month = "March" }
  if (month == 4) { var month = "April" }
  if (month == 5) { var month = "May" }
  if (month == 6) { var month = "June" }
  if (month == 7) { var month = "July" }
  if (month == 8) { var month = "August" }
  if (month == 9) { var month = "September" }
  if (month == 10) { var month = "October" }
  if (month == 11) { var month = "November" }
  if (month == 12) { var month = "December" }

  // If it's the current year and a specific time is set.
  // 7 September 10:00 AM
  if (year == currentYear && hours != 00) {
    return day + " " + month + " " + formatTime(date);
  }

  // If it's the current year and no time is set, drop the year and time.
  // 7 September
  if (year == currentYear) {
    return day + " " + month;
  }

  // Otherwise return the full date with no time.
  // 7 September 2013
  return day + " " + month + " " + year;
}

function emojiClock() {
  hours = new Date().getHours()
  if (hours == 1 || hours == 13) { return "🕐"; }
  if (hours == 2 || hours == 14) { return "🕑"; }
  if (hours == 3 || hours == 15) { return "🕒"; }
  if (hours == 4 || hours == 16) { return "🕓"; }
  if (hours == 5 || hours == 17) { return "🕔"; }
  if (hours == 6 || hours == 18) { return "🕕"; }
  if (hours == 7 || hours == 19) { return "🕖"; }
  if (hours == 8 || hours == 20) { return "🕗"; }
  if (hours == 9 || hours == 21) { return "🕘"; }
  if (hours == 10 || hours == 22) { return "🕙"; }
  if (hours == 11 || hours == 23) { return "🕚"; }
  if (hours == 12 || hours == 24) { return "🕛"; }
  return "📅"; // If it does not work show calendar.
}

for (var milestone in milestones) {
  var container = document.getElementById("container");
  var listItem = document.createElement("li");
  var emojiContainer = document.createElement("p");
  emojiContainer.classList.add("emoji");
  var eventHeading = document.createElement("p");
  var eventDate = document.createElement("p");
  eventDate.classList.add("small");

  var emoji = document.createTextNode(milestones[milestone][0]);
  var stringStart = document.createTextNode(milestones[milestone][1]);
  var date = document.createTextNode(milestones[milestone][2]);
  var stringEnd = document.createTextNode(milestones[milestone][3]);

  container.appendChild(listItem);
  listItem.appendChild(emojiContainer);
  emojiContainer.appendChild(emoji);
  listItem.appendChild(eventHeading);
  eventHeading.appendChild(document.createTextNode(milestones[milestone][1] + " " + timeSince(new Date(milestones[milestone][2])) + " " + milestones[milestone][3]));
  listItem.appendChild(eventDate);
  eventDate.appendChild(document.createTextNode(formatDate(new Date(new Date(milestones[milestone][2])))));
}

function setAndUpdateContent() {
  var today = new Date();
  document.getElementById("emojiClock").innerHTML = emojiClock();
  document.getElementById("today").innerHTML = formatLongDate(today);
  document.getElementById("time").innerHTML = formatTime(today);
}

setAndUpdateContent();
setInterval(setAndUpdateContent, 1000);
