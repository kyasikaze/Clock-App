setInterval(function () {
  let newYork = document.querySelector("#new-york");
  let newYorkDate = newYork.querySelector(".date");
  let newYorkTime = newYork.querySelector(".time");
  let newYorkMoment = moment().tz("America/New_York");

  newYorkDate.innerHTML = newYorkMoment.format("MMMM Do YYYY");
  newYorkTime.innerHTML = newYorkMoment.format("h:mm:ss [<small>]A[</small]");
}, 1000);

setInterval(function () {
  let london = document.querySelector("#london");
  let londonDate = london.querySelector(".date");
  let londonTime = london.querySelector(".time");
  let londonMoment = moment().tz("Europe/London");

  londonDate.innerHTML = londonMoment.format("MMMM Do YYYY");
  londonTime.innerHTML = londonMoment.format("h:mm:ss [<small>]A[</small]");
}, 1000);

setInterval(function () {
  let tokyo = document.querySelector("#tokyo");
  let tokyoDate = tokyo.querySelector(".date");
  let tokyoTime = tokyo.querySelector(".time");
  let tokyoMoment = moment().tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyoMoment.format("MMMM Do YYYY");
  tokyoTime.innerHTML = tokyoMoment.format("h:mm:ss [<small>]A[</small]");
}, 1000);
