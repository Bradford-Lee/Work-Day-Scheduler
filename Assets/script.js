// Set Variables
var todaysDate = moment().format("dddd, MMMM Do YYYY");
var msgDiv = document.querySelector("#msg");
var eventsData;

// Displays the current date in the header of the page.
$("#currentDay").html(todaysDate);

$(function () {

  // Applies the past, present, or future class to each time block by comparing the id to the current hour. 
  function setHourColors() {
    var now = dayjs().hour(); // return military time
    for (var i = 6; i < 24; i++) {
      if (i < now) {
        $("#hour-" + i).addClass("past")
      }
      else if (i === now) {
        $("#hour-" + i).addClass("present")
      } else {
        $("#hour-" + i).addClass("future")
      }
    }
  }

  // Click the save button for the respective time block and save the text in local storage
  $(".saveBtn").on("click", function () {
    var calendarEvents = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    // Display message after clicking the save button
    if (calendarEvents === "") {
      displayMessage("error", "No appointment added");
    } else {
      displayMessage("success", "Appointment added to local storage");
    }
    // Save hour & text in local storage
    localStorage.setItem(hour, calendarEvents);
  })

  // Create function to display a message when the save button is clicked
  function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

  // Display the previous description from local storage
  $("#hour-6 .description").val(localStorage.getItem("hour-6"));
  $("#hour-7 .description").val(localStorage.getItem("hour-7"));
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));
  $("#hour-20 .description").val(localStorage.getItem("hour-20"));
  $("#hour-21 .description").val(localStorage.getItem("hour-21"));
  $("#hour-22 .description").val(localStorage.getItem("hour-22"));
  $("#hour-23 .description").val(localStorage.getItem("hour-23"));

  setHourColors();
});

