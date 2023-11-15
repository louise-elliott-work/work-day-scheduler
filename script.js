
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
    console.log("The save button was clicked for time block: " + timeBlockSaveButton);
    storeEntry();
});

// TODO Text previously entered and stored locally must display within the time blocks
// TODO Amend this code block so it applies to all time blocks - at the moment only set to [0] so 9am while localstorage setting and getting is resolved.
function storeEntry() {
    // When user enters text, it is put into local storage.
    var userEntry = document.getElementsByClassName("text-input")[0].value;
    console.log(userEntry);
    console.log(typeof(userEntry));
    localStorage.setItem("userEntry", userEntry.value);
    console.log("User entry stored = " + userEntry);
    // User entry is retrieved from local storage to persist on the page.
    localStorage.getItem("userEntry");
    console.log("userEntry get item check: " + userEntry);
    // ! The intention with the line below is to display the locally stored text when the page is refreshed but it does not work at the moment.
    document.getElementsByClassName("text-input")[0].value = userEntry;
}