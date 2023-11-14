
// * Display current day and date
var currentDay = $("#currentDay");
currentDay.text(dayjs().format('YYYY, MMMM DD'));

// * Capture current hour from day.js
var currentHour = dayjs().format('HH');
currentHourInteger = parseInt(currentHour);

// * The colour of the time block must be set according to whether it is past, present or future

// ! for loop needs to be fixed - value is being overwritten each time and the last condition is being applied to all time blocks
for (var i = 0; i < schedule.rows.length; i++) {
    function formatCell () {
        var timeBlockHour = schedule.rows[i].id;
        timeBlockHourInteger = parseInt(timeBlockHour);
        if (timeBlockHourInteger >= currentHourInteger) {
            $("td.time-block").addClass("past");
        }
        else if (timeBlockHourInteger === currentHourInteger) {
            $("td.time-block").addClass("present");
        }
        else if (timeBlockHourInteger <= currentHourInteger) {
            $("td.time-block").addClass("future");
        }  
    }
    formatCell () 
}

// * Test for formatting - uncomment to set as future colour for example
//$("td.time-block").addClass("past");


// TODO Text previously entered and stored locally must display within the time blocks

// TODO Change format of input - new text will be entered when the user clicks inside a time block

// TODO The new text the user has entered will be stored locally and displayed when the user clicks the storage button
