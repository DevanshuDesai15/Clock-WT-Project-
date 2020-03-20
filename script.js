var diallines=document.getElementsByClassName('dialls');
var clockE1=document.getElementsByClassName('clock')[0];

for(var i=1;i<60;i++){
	clockE1.innerHTML += "<div class='dialls'></div>"; 
	diallines[i].style.transform="rotate("+ 6 * i + "deg)";
}
function clock(){
	var day = new Array(7),
	date= new Date(),
	hour= date.getHours(),
	minutes= date.getMinutes(),
	seconds= date.getSeconds(),
	d = date.getDate(),
	month= date.getMonth() + 1,
	year= date.getFullYear();

	hDeg= 30*((hour % 12)+minutes / 60);
	mDeg= 6*minutes;
	sDeg= seconds*6;

	h1=document.querySelector('.hourHand');
	m1=document.querySelector('.minutehand');
	s1=document.querySelector('.secondhand');
	date1=document.querySelector('.date');
	day1=document.querySelector('.day');

	day[0] = "Sunday";
	day[1] = "Monday";
	day[2] = "Tuesday";
	day[3] = "Wednesday";
	day[4] = "Thursday";
	day[5] = "Friday";
	day[6] = "Saturday";

	var weekday = day[date.getDay()];
	h1.style.transform = "rotate("+hDeg+"deg)";
	m1.style.transform = "rotate("+mDeg+"deg)";
	s1.style.transform = "rotate("+sDeg+"deg)";
	date1.innerHTML = d+"/"+month+"/"+ year;
	day1.innerHTML=weekday;
}
setInterval("clock()",1000);
