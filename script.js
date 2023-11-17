
// * Display current day and date
var currentDay = $("#currentDay");
currentDay.text(dayjs().format('dddd, MMMM DD'));

// * Capture current hour from day.js
var currentHour = dayjs().format('HH');

// * The colour of the time block must be set according to whether it is past, present or future
for (var i = 0; i < schedule.rows.length; i++) {
    var timeBlockHour = schedule.rows[i].id;
    var timeBlock = document.getElementsByClassName("time-block");
    timeBlockHourInteger = parseInt(timeBlockHour);
    function formatCell () {
        if (timeBlockHourInteger < currentHour) {
            timeBlock[i].setAttribute("id", "past");
        }
        else if (timeBlockHourInteger == currentHour)  {
            timeBlock[i].setAttribute("id", "present");
        }
        else if (timeBlockHourInteger > currentHour) {
            timeBlock[i].setAttribute("id", "future");
        }  
    }
    formatCell () 
}

// * The new text the user has entered will be stored locally and displayed when the user clicks the storage button

// * When the user clicks the save button for the relevant time block the store entry function is run

// Target save button clicked by the user and its parent ID to give time block reference
const saveButton = document.getElementById('saveBtn');
saveButton.addEventListener("click", function handleClick(event) {
    var rowID = event.target.parentElement.id;
    var userEntry = document.getElementsByTagName("textarea")[0].value;
    storeEntry(rowID,userEntry);
});

// Store user entry in local storage
function storeEntry(rowID,userEntry) {
    localStorage.setItem(rowID,userEntry);
}

// TODO make text show for all rows
function displayData () {
    var rowID = "09";
    const textArea = document.querySelector('textarea');
    textArea.value = localStorage.getItem(rowID);
}
displayData();

