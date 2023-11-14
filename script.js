
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

// * The new text the user has entered will be stored locally and displayed when the user clicks the storage button
// ! Check whether this needs to be a widget or writing directly in the table

// create variable for user information
var userInformation = $('#save-btn')

// create function to store text
function storeUserInformation (event) {
    event.preventDefault();
}

// select input by its ID attribute and get its value
var userText = $('input[".text-input"]').val();


$(":button").on("click", function storeEntry() {});
var userInput = document.getElementsByClassName("text-input").value;
function storeEntry() {
    localStorage.setItem("userInput", userInput);
    localStorage.getItem("userInput");
    userInput.text = userInput;
}


  // if there's nothing in the form entered, don't print to the page
if (!userInput) {
    console.log('No information added!');
    return;
}

// print to the page
shoppingListEl.append('<li>' + shoppingItem + '</li>');

// clear the form input element
$('input[name="shopping-input"]').val('');
}

// Create a submit event listener on the form element
shoppingFormEl.on('submit', handleFormSubmit);