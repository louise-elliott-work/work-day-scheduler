
// * Display current day and date
var currentDay = $("#currentDay");
currentDay.text(dayjs().format('dddd, MMMM DD'));

// * Capture current hour from day.js
var currentHour = dayjs().format('HH');
currentHourInteger = parseInt(currentHour);

// * The colour of the time block must be set according to whether it is past, present or future
// TODO This for loop needs to be fixed - value is being overwritten each time and the last condition is being applied to all time blocks
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

// * Use this to test for formatting - uncomment to set as future colour for example
//$("td.time-block").addClass("past");

// * The new text the user has entered will be stored locally and displayed when the user clicks the storage button
// TODO Check whether this needs to be a widget or writing directly in the table

// When user clicks the save button for the relevant time block, the store entry function is run.
$('.saveBtn').click(function(){
    var timeBlockSaveButton =  $(this).parent().attr('id');
    var userEntry = document.getElementsByClassName("text-input")[0].value;
    console.log(userEntry);
    console.log("The save button was clicked for time block: " + timeBlockSaveButton, userEntry);
    storeEntry(timeBlockSaveButton,userEntry);
});

// TODO Text previously entered and stored locally must display within the time blocks
// TODO Amend this code block so it applies to all time blocks - at the moment only set to [0] so 9am while localstorage setting and getting is resolved.
function storeEntry(timeBlockSaveButton,userEntry) {
    localStorage.setItem(timeBlockSaveButton,userEntry);
    // User entry is retrieved from local storage to persist on the page.
    }
var userEntry = localStorage.getItem("09");
console.log(userEntry);
var HTMLelements = document.querySelectorAll(".text-input");
HTMLelements[0].value = userEntry;