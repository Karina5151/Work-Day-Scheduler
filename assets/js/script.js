
// set the date at the top of the page
var today = moment();
$("#currentDay").text (today.format("dddd, MMMM Do"));


// call to retrieve data from local storage
var scheduleArray = JSON.parse(localStorage.getItem("scheduleStorage"));
// console.log(scheduleArray);
  if (scheduleArray) {
    scheduleArray.forEach(function(input) {
      // console.log(input)
      $(".time-block").each(function(index) {
        var textarea = $(this).children("textarea")[0];
        if (input.time == $(textarea).attr("id")) {
          $(textarea).val(input.events);
        }
      })
    });
} // array of time block time values and event spaces to hook into
  else {
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

// function to save text input to local storage
$(".saveBtn").click(function(event) {
  event.preventDefault();
  var txtarea = $(this).closest(".time-block").children("textarea")[0];
  var currHour = $(txtarea).attr("id");
  var currValue = $(txtarea).val();
  
  // find the one item in the array that's changing
  scheduleArray.forEach( function(item){
    if( item.time == currHour ){
      item.events = currValue
    }
  })
  // save the changed/new item to local storage in that specific textarea
  localStorage.setItem("scheduleStorage", JSON.stringify(scheduleArray));
})





// set time block values in an array for color changer
var time = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

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




  