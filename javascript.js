// initial day and time
let countDownDate = new Date("December 2, 2023 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  //calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display results
  document.querySelector(".day").innerHTML = days;
  document.querySelector(".hr").innerHTML = hours;
  document.querySelector(".min").innerHTML = minutes;
  document.querySelector(".sec").innerHTML = seconds;

  // countdown achieved
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".day").innerHTML = 00;
    document.querySelector(".hr").innerHTML = 00;
    document.querySelector(".min").innerHTML = 00;
    document.querySelector(".sec").innerHTML = 00;
  }
}, 1000);
