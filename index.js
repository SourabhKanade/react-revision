const todayBtn = document.querySelector('#today');
const yesterdayBtn = document.querySelector('#yesterday');
const weekBtn = document.querySelector('#last_week');
const monthBtn = document.querySelector('#last_month');
const title = document.getElementById('title');

let today = new Date();

todayBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  let time = (new Date().toLocaleTimeString());
  let dateTime = date+' - '+time;
  title.innerHTML = (`Today's: `+ dateTime);
  // console.log('today button is clicked!!');
})

yesterdayBtn.addEventListener('click', function (e) {
 e.preventDefault();
 let date = (today.getDate()+29)+'-'+(today.getMonth())+'-'+today.getFullYear();
 let time = (new Date().toLocaleTimeString());
 let dateTime = date+' - '+time;
 title.innerHTML = (`Yesterday's: `+ dateTime);
//  console.log('tomorrow button is clicked!!');
})

weekBtn.addEventListener('click', function (e) {
 e.preventDefault();
 let date = (today.getDate()+24)+'-'+(today.getMonth())+'-'+today.getFullYear();
 let time = (new Date().toLocaleTimeString());
 let dateTime = date+' - '+time;
 title.innerHTML = (`Last Week's: `+ dateTime);
//  console.log('Last week button is clicked!!');
})

monthBtn.addEventListener('click', function (e) {
 e.preventDefault();
 let date = (today.getDate())+'-'+(today.getMonth())+'-'+today.getFullYear();
 let time = (new Date().toLocaleTimeString());
 let dateTime = date+' - '+time;
 title.innerHTML = (`Last Month's: `+ dateTime);
//  console.log('Last month button is clicked!!');
})
