
// * Display current day and date at the top of the page.
var currentDay = document.getElementById("currentDay");
currentDay.textContent = (dayjs().format("dddd, MMMM DD"));

// * Capture current hour from day.js to reference for formatting of time blocks.
var currentHour = dayjs().format('HH');

// * Create a variable for all time blocks to use in functions below.
const allTimeBlocks = schedule.rows;

// * Loop through the time blocks to apply formatting.
for (var i = 0; i < allTimeBlocks.length; i++) {

    // * Capture the ID of the time block by taking the parent row ID to reference in cell formatting function below.
    var timeBlockHour = allTimeBlocks[i].id;
    var timeBlock = document.getElementsByClassName("time-block");

    // * Format the colour of the time block according to whether it is past, present or future by checking the current hour from day.js against the ID of the time block.
    function formatCell () {
        if (timeBlockHour < currentHour) {
            timeBlock[i].setAttribute("id", "past");
        }
        else if (timeBlockHour == currentHour)  {
            timeBlock[i].setAttribute("id", "present");
        }
        else if (timeBlockHour > currentHour) {
            timeBlock[i].setAttribute("id", "future");
        }  
    }
    formatCell () 
}

// * Target all of the save buttons that could be clicked by the user.
var saveButtons = document.getElementsByClassName("saveBtn");

// * Add an event listener to each of the save buttons and run the function when one is clicked.
for (var i = 0 ; i < allTimeBlocks.length; i++) {
    saveButtons[i].addEventListener("click", processClick);
}

function processClick(clickedButton) {

    // * Capture which save button was clicked by the user.
    var rowID = clickedButton.target.parentElement.id;
    
    // * Capture the value entered into the relevant text area for the clicked button.
    var userEntry = document.getElementById(rowID + "text").value;

    // * Store locally any new text the user has entered when the user clicks the save button.
    function storeEntry() {
    localStorage.setItem(rowID, userEntry);
    }
    storeEntry();

};

// * Display all stored data when the user clicks save and when the page is refreshed.
function showData () {
    for (var i = 0; i < allTimeBlocks.length; i++) {
        // * Iterate through all of the text areas.
        var textAreas = document.querySelectorAll("textarea")[i];
        // * Capture the ID of the text area.
        var textAreaKey = textAreas.id;
        // * Take the hour identifier only from the text area.
        var hourOnly = textAreaKey.slice(0, 2);
        // * Take the relevant text from local storage and add to the corresponding time block.
        textAreas.value = localStorage.getItem(hourOnly);
    }
}
showData();
