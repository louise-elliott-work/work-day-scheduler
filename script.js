
// * Display current day and date
var currentDay = $("#currentDay");

// * Capture current hour from day.js
var currentHour = dayjs().format('HH');
console.log(currentHour);


// * The colour of the time block must be set according to whether it is past, present or future
// ! The intention here is to loop through the table rows, checking the row ID against the current hour to format the cell accordingly

var table = document.getElementById("schedule");
var totalRowCount = schedule.rows.length;
console.log(totalRowCount);

for (var i = 0; i < totalRowCount.length; i++) {
    var timeBlockHour = schedule.tr.getAttribute("id");
    console.log(timeBlockHour);
    function formatCell () {
        if (timeBlockHour > currentHour) {
            $("td.time-block").addClass("past");
        }
        else if (timeBlockHour = currentHour) {
            $("td.time-block").addClass("present");
        }
        else if (timeBlockHour < currentHour) {
            $("td.time-block").addClass("future");
        }  
    }
    formatCell () 
}

// * Test for formatting - uncomment to set as future colour for example
// $("td.time-block").addClass("future");


// TODO Text previously entered and stored locally must display within the time blocks

// TODO Change format of input - new text will be entered when the user clicks inside a time block

// TODO The new text the user has entered will be stored locally and displayed when the user clicks the storage button
