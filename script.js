var today = moment();
var currentTime = moment().hour();
var timeId = moment().
//formats current date to Month Day, Year
$("#currentDay").text(today.format("MMM Do, YYYY"));

//adds colors to past, present, and future hours-
//depending on time of day
if (timeId === currentTime) {
    $(this).addClass("present");
} else if (timeId < currentTime) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
} else (timeId > currentTime); {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future"); }

//$(currentTime).class("past");(add/remove?)

//$(currentTime).class("present");

//$(currentTime).class("future");
