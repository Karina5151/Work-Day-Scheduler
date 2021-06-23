
// set the date at the top of the page
var today = moment();
$("#currentDay").text (today.format("dddd, MMMM Do"));

// set time block values in an array
var time = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

 
// update the time block colors based on the time of day
var keepTime = function() {
    var currentHour = moment().hour();
    currentHour = 13;
    $(".time-block").each (function(index) {
      console.log(index);
      if (time[index] < currentHour) {
        $(this).removeClass(["present", "future"]).addClass("past");
      } else if (time[index] == currentHour) {
        $(this).removeClass(["past", "future"]).addClass("present");
      } else {
        $(this).removeClass(["past", "present"]).addClass("future");
      }
    });
}

// call function reflect current time in time block colors
keepTime();

// define all time blocks individually
var scheduleArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
var scheduleTemplate = ["", "", "", "", "", "", "", "", ""]

// function to save input to local storage
$(".saveBtn").click (function() {
  console.log("hello");
    $("textarea").each (function(index, value) {
      console.log(value);
    var timeInput = $(value).attr("id")
    var plannerInput = $(value).val();
    localStorage.setItem(timeInput, plannerInput);
     console.log(timeInput, plannerInput);
  })
})
  
// call to pull up local storage items
var savedInput = localStorage.getItem("schedule");
if (savedInput) {
  scheduleTemplate = savedInput;
  rerenderThePage();
}

scheduleItemsStored
for loop