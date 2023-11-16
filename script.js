
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

// * When the user clicks the save button for the relevant time block the store entry function is run

// Target save button clicked by the user and its parent ID to give time block reference
const saveButton = document.getElementById('saveBtn');
saveButton.addEventListener("click", function handleClick(event) {
    var rowID = event.target.parentElement.id;
    var userEntry = document.getElementsByTagName("textarea")[0].value;
    storeEntry(rowID,userEntry);
    console.log("user entry type = " + typeof(userEntry));
    console.log("user entry = " + userEntry);
});

// Store user entry in local storage
function storeEntry(rowID,userEntry) {
    localStorage.setItem(rowID,userEntry);
    userEntry = localStorage.getItem(rowID);
    console.log("retrieved data to display = " + userEntry);
    var displayField = rowID;
    console.log("display field = " + displayField);
    // TODO debug displaying data when page is refreshed
    var displayInfo = document.getElementById(rowID).children[1].textContent;
    var displayInfo = document.querySelectorAll("textarea");
    displayInfo.textContent = userEntry;
}

