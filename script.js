var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");

// current date display
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");

function setUpTimeBlocks(){
    $timeBlocks.each(function(){
      var $thisBlock = $(this);
      var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

      //add style to time blocks to show where we are in the day
      if (thisBlockHr == currentHour) {
        $thisBlock.addClass("present").removeClass("past future");
      }
      if (thisBlockHr < currentHour) {
        $thisBlock.addClass("past").removeClass("present future");
      }
      if (thisBlockHr > currentHour) {
        $thisBlock.addClass("future").removeClass("past present");
      }
    });
}

// set in time blocks 
setUpTimeBlocks();

//current date display
$currentDay.text(currentDate);


