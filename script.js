// set up variable to manage date rules
const date = 'Jan 23, 2021';
const time = '00:00:00'
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// convert target date to a date object
let countDown = new Date( date + ' ' + time ).getTime();

// set up the loop to update the countdown once a second
let x = setInterval(function() {

  // get the current time
  let now = new Date().getTime();

  // get the time remaining
  let distance = countDown - now;

  // update the <span> tags with the countdown values
  $('#days').text( Math.floor(distance / (day))+" days, ");
  $('#hours').text( Math.floor((distance % (day)) / (hour))+" hours, ");
  $('#minutes').text( Math.floor((distance % (hour)) / (minute))+" minutes, ");
  $('#seconds').text( Math.floor((distance % (minute)) / second)+" seconds ");
}, second)