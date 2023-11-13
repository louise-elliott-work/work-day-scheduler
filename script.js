
// * Current date and date in 'Monday, November 13th' format needs to display within HTML element: <p id="currentDay" class="lead"></p>

var currentDay = $("#currentDay");

// ! The intention here is to use advancedFormat to show the date as 1st, 2nd, 3rd, 4th, etc instead of only the number.
var advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

currentDay.text(dayjs().format('dddd, MMMM Do'));



// * A table must display a day in one-hour time blocks, with the time written on the left, the time block with any text in the middle and a storage button on the right

// * Text previously entered and stored locally must display within the time blocks

// * New text will be entered when the user clicks inside a time block

// * The new text the user has entered will be stored locally and displayed when the user clicks the storage button

// * The colour of the time block must be set according to whether it is past, present or future

