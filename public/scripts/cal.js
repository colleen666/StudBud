// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: 'dayGridMonth'
//     });
//     calendar.render();
//   });
// //able to select date
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'dayGridMonth',
//     selectable: true
//   });
// // make sure the event is moveable and resizeable
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     // no plugin configuration required!
//     editable: true
//   })
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2022-04-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'All Day Event',
          start: '2022-04-01'
        },
        {
          title: 'Long Event',
          start: '2022-04-07',
          end: '2022-04-10'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2022-04-09T16:00:00'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2022-04-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2022-04-11',
          end: '2022-04-13'
        },
        {
          title: 'Meeting',
          start: '2022-04-12T10:30:00',
          end: '2022-04-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2022-04-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2022-04-12T14:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2022-04-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2022-04-28'
        }
      ]
    });
    // add events
    // $(function() {

    //     $('#calendar').fullCalendar({
    //       defaultView: 'month',
      
    //       header: {
    //         center: 'addEventButton'
    //       },
      
    //       customButtons: {
    //         addEventButton: {
    //           text: 'add event...',
    //           click: function() {
    //             var dateStr = prompt('Enter a date in YYYY-MM-DD format');
    //             var date = moment(dateStr);
      
    //             if (date.isValid()) {
    //               $('#calendar').fullCalendar('renderEvent', {
    //                 title: 'dynamic event',
    //                 start: date,
    //                 allDay: true
    //               });
    //               alert('Great. Now, update your database...');
    //             } else {
    //               alert('Invalid date.');
    //             }
    //           }
    //         }
    //       }
    //     });
      
    //   });

    calendar.render();
  });

  //add events


