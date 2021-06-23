
// set the date at the top of the page
var today = moment();
$("#currentDay").text (today.format("dddd, MMMM Do"));

// set time block values in an array
var time = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

// call to pull up local storage items
var scheduleArray = JSON.parse(localStorage.getItem("scheduleStorage"));
console.log(scheduleArray);
  if (scheduleArray) {
    scheduleArray.forEach(function(input) {
      $(".time-block").each (function(index) {
        if (input.time === index.id) {
          index.innerHTML = input.events 
        }
      })
    });
}
  else {
    console.log("working?")
    // define all time blocks individually
    var scheduleArray = [ 
      { time: "9", events: "", },
      { time: "10", events: "", },
      { time: "11", events: "", },
      { time: "12", events: "", },
      { time: "1", events: "", },
      { time: "2", events: "", },
      { time: "3", events: "", },
      { time: "4", events: "", },
      { time: "5", events: "", },
      ]
} 

// update the time block colors based on the time of day
var keepTime = function() {
    var currentHour = moment().hour();
    currentHour = 13;
    $(".time-block").each (function(index) {
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



// function to save input to local storage
$(".saveBtn").click (function(event) {
event.preventDefault()
    $("textarea").each (function(index, value) {
    var timeInput = $(value).attr("id")
    var plannerInput = $(value).val().trim();
    console.log(scheduleArray);
    for (let i = 0; i < scheduleArray.length; i++) {
      if (timeInput === scheduleArray[i].time) {
        scheduleArray[i].events = plannerInput;
      }
    }
    console.log(scheduleArray);
    localStorage.setItem("scheduleStorage", JSON.stringify(scheduleArray));
     console.log(scheduleArray);
  })
})
  