
//This page is based on the full calendar.js libriry, just give a good sense of how the calendar will work in the StudBud project,
//initally, I was thinking use this one to achieve one of the secondary features of task magement as Kanban Board. Becasue this js
//library allow developer to contribute on a calendar-oriented task list with much more functions easily. However, based on the tutor's
// feedback, he suggested that using the JS libraries would not be the best way to show my skills on task list coding, thus I decided to 
//learn and code the task list without JS libraries. But I would like to keep this calendar page as single independent webpage as one of the 
// webpages in this project(not essential one).

// create  addEventlistener to load the DOMContent
document.addEventListener('DOMContentLoaded', function() {
    
  var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', //set the initil view in form of grid( represent the days and month)
      initialDate: '2022-06-03', // set the initial date, so open the page, will show that exact date
      headerToolbar: {  //Set all all the controllable tools at the header
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [ // create events with the name and its start and end dates
        {
          title: 'All Day Study',
          start: '2022-06-01'
        },
        {
          title: 'DECO2017 A3',
          start: '2022-06-03',
          end: '2022-06-10'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2022-06-09T16:00:00'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2022-06-16T16:00:00'
        },
        {
          title: 'DECO3100 A3',
          start: '2022-06-07',
          end: '2022-06-13'
        },
        {
          title: 'Meeting with Professor',
          start: '2022-06-12T10:30:00',
          end: '2022-06-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2022-06-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2022-06-15T14:30:00'
        },
        {
          title: 'Study Law assignment',
          start: '2022-06-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2022-06-28'
        }
      ]
    });
   

    calendar.render();
  });


// Based on tutor's suggestion, I didn't go further to develop this page, but, I would still like to present here about what I have 
// learned from it so far.
// This Page could be further developed in the future as users could add their tasks straight if they click on the date 
// using onclick events
// Or users could drag and move the tasks if they want to change their due dates, even due time, (basically merge with the task likst)




