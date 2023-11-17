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

// TODO make text store locally for all rows
// * Target the specific save button clicked by the user.
const saveButton = document.getElementById('saveBtn');
saveButton.addEventListener("click", function handleClick(event) {
    var rowID = event.target.parentElement.id;
    var userEntry = document.getElementsByTagName("textarea")[0].value;
    // * Store locally any new text the user has entered when the user clicks the storage button.
    function storeEntry() {
    localStorage.setItem(rowID,userEntry);
    }
    storeEntry();
});



// * Display all stored data when the user clicks save and when the page is refreshed.
// TODO make text show for all rows
for (var i = 0; i < allTimeBlocks.length; i++) {

    var timeBlockHour = allTimeBlocks[i].id;
    var timeBlock = document.getElementsByClassName("time-block");

    function displayData () {
        var rowID = timeBlockHour;
        var textArea = document.querySelector('textarea');
        textArea[i].value = localStorage.getItem(rowID);
    }
}

// * Display stored data when the user clicks save and when the page is refreshed.
displayData();