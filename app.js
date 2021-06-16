const countDown = () => {
  const eventName = document.querySelector(".eventName").value;
  const countDate1 = Date.parse(document.querySelector(".countDate").value);
  //console.log(countDate1);

 
  const countDate = countDate1 - 19800000;
  //console.log(countDate);
  //const countDate = new Date("June 9,2021 00:00:00").getTime();

  //const countDate=countDate1.getTime();
  //console.log(countDate);

  const currDate = new Date().getTime();
  const gap = countDate - currDate;


  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const day1 = Math.floor(gap / day);
  const hour1 = Math.floor((gap % day) / hour);
  const minute1 = Math.floor((gap % hour) / minute);
  const second1 = Math.floor((gap % minute) / second);
  //console.log(day1,hour1,minute1,second1);
  document.querySelector(".begins").innerHTML = "The Countdown for the " + eventName + " begins...";



  document.querySelector(".Days").innerHTML = "Days";
  document.querySelector(".Hours").innerHTML = "Hours";
  document.querySelector(".Minutes").innerHTML = "Minutes";
  document.querySelector(".Seconds").innerHTML = "Seconds";

//To display the time
  document.querySelector(".day").innerHTML = day1;
  document.querySelector(".hour").innerHTML = hour1;
  document.querySelector(".minute").innerHTML = minute1;
  document.querySelector(".second").innerHTML = second1;

}
