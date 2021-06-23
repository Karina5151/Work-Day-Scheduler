
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
var hour9  = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1  = $("#13");
var hour2  = $("#14");
var hour3  = $("#15");
var hour4  = $("#16");
var hour5  = $("#17");


// function to save input to local storage
$(".saveBtn").click(function) {
    $(".time-block").each (function {
    var timeInput = $(this).parent().attr("id");
    var plannerInput = $(".textarea").val();
    localStorage.setItem(timeInput, plannerInput);
     console.log(timeInput, plannerInput);
  })
}
  

