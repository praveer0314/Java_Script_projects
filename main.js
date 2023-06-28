// const endDate = "22 JUN 2023 4:00 P.M.";
// document.getElementById("enddate").innerText = endDate;

// // THIS WILL TAKE THE DATE WHICH WE HAVE PROVIDED
// document.getElementById("enddate").innerText = endDate;
// // this will give the the end date value on reloading the page = endDate means this method will give the value of enddate
//  document.addEventListener('DOMContentLoaded', function() {
//    const endDate = "22 JUN 2023 4:00P.M.";
//    document.getElementById("enddate").innerText = endDate;

//    // making function using date method js
// function clock(){
//     const end= new Date(endDate);
//
//      const now =new Date();
//      console.log(end);
//  }
// //
// clock();
//   });
//   the endDate variable is defined within the DOMContentLoaded event listener function, and it is not accessible outside that scope.
//   in this first the dom content will execute then the js will run used because in previous function js is loading before html

const endDate = new Date("2024-01-21T24:00:00");
const formattedEndDate = endDate.toLocaleString("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
document.getElementById("end-date").innerText = formattedEndDate;
// converted date into iso format for this used locale string
// console.log(endDate);
const inputs = document.querySelectorAll("input");
//  it will select all the inputs like days hour and all
function clock() {
  const end = new Date(endDate);
  // this will give seconds
  const now = new Date();

  // this will give the present date
  const diff = (end - now) / 1000;
//   if (diff < 0) return;
  // convert millisec into sec
  // console.log(diff);
  // 1 day =24hrs
  // 1 hours =60 min
  // 1 minutes = 3600sec
  inputs[0].value = Math.floor(diff / 3600 / 24);
  // for days
  inputs[1].value = Math.floor((diff / 3600) % 24);
  // for hours
  inputs[2].value = Math.floor((diff / 60) % 60);
  // for minutes
  inputs[3].value = Math.floor(diff % 60);
  //   for seconds

  // using .value because for inserting data in input we use this not innerhtml anything
  // console.log(Math.floor(diff/3600)%24);
  // using modulous because it will give reminder  and divide give quotient
}

// math floor gives you correct value in single digit
// initall call to function
clock();
setInterval(function () {
  clock();
}, 1000);
