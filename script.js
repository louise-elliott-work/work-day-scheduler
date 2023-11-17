// * Display current day and date at the top of the page.
var currentDay = $("#currentDay");
currentDay.text(dayjs().format('dddd, MMMM DD'));

// * Capture current hour from day.js to reference for formatting of time blocks.
var currentHour = dayjs().format('HH');

// * Create a variable for all time blocks to use in functions below.
const allTimeBlocks = schedule.rows;

// * Format the colour of the time block according to whether it is past, present or future by checking the current hour from day.js against the ID of the time block.
for (var i = 0; i < allTimeBlocks.length; i++) {

    // * Capture the ID of the time block by taking the parent row ID to reference in cell formatting function below.
    var timeBlockHour = allTimeBlocks[i].id;
    var timeBlock = document.getElementsByClassName("time-block");

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
var saveButtons = document.getElementsByClassName('saveBtn');
console.log(saveButtons);

// * Add an event listener to each of the save buttons and run the function when one is clicked.
for (var i = 0 ; i < allTimeBlocks.length; i++) {
    saveButtons[i].addEventListener("click", processClick);
}

function processClick(clickedButton) {

    // * Capture which save button was clicked by the user.
    var rowID = clickedButton.target.parentElement.id;
    
    // * Capture the value entered into the relevant text area for the clicked button.
    var userEntry = document.getElementById(rowID + "text").value;
    console.log("userEntry = " + userEntry);

    // * Store locally any new text the user has entered when the user clicks the save button.
    function storeEntry() {
    localStorage.setItem(rowID,userEntry);
    }
    storeEntry();

    console.log(rowID);
    return rowID; // ! I think this should mean I can reference rowID below.

};

console.log(rowID); // ! Not managing to reference rowID outside of the above this function.

// TODO Display all stored data when the user clicks save and when the page is refreshed.
for (var i = 0; i < allTimeBlocks.length; i++) {
    function displayData (rowID) {
        console.log(rowID); // ! Not managing to reference rowID within this function.
        var textArea = document.querySelector('textarea');
        console.log(textArea.value); 
        textArea.value = localStorage.getItem(rowID);
    }
}

// * Display stored data when the user clicks 'save' and when the page is refreshed.
displayData();
