//===== date
//=====
const xx = document.querySelector(".yy");

let date = new Date(); //current date
// xx.textContent=date
// xx.textContent=date.getFullYear() //year
// xx.textContent=date.getDate() //date 1-31
// xx.textContent=date.getDay()   //day 0-6
// xx.textContent=date.getMonth()   //day 0-11
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// xx.textContent = days[date.getDay()];
date.setFullYear(1992);
xx.textContent = date;

// =============================================
//===== 0 means 01.01.1970 UTC+0
//=====
const xx = document.querySelector(".yy");

let date = new Date(0);
xx.textContent = date;

let date2 = new Date(24 * 60 * 60 * 1000);
xx.textContent = date2;

let date3 = new Date("2022-02-12"); //valid
// let date3=new Date('10-12-2022') //valid
// let date3=new Date('12-2023-02') //Invalid date
// let date3=new Date('10-12-2022-02-30-42') //valid
xx.textContent = date3;

//let date4=new Date(2024, 1, 2, 2,36, 47, 895) //Date(year, month, date, hours, minutes, seconds, ms)
let date4 = new Date(2024, 2, 5); //others default, 0,0,0,0
xx.textContent = date4;
// =============================================
//==== timestamp to parsed date
//====
let xx = document.querySelector(".yy");

let date = new Date();
let dateX = 1642403882588;
date.setTime(dateX);

xx.textContent = date;

// =============================================
//==== date format to timestamp
//====
const xx = document.querySelector(".yy");

let date = new Date();

xx.textContent = +date; //1754983171040
xx.textContent = date; //Tue Aug 12 2025 09:21:22 GMT+0200 (Central European Summer Time)

// =============================================
//==== date format to timestamp
//====
let xx = document.querySelector(".yy");
let date = Date.now();

xx.textContent = date;

let date2 = Date.UTC(1992); //694224000000
xx.textContent = date2;

let date3 = Date(Date.UTC(1992)); //Tue Aug 12 2025 09:27:16 GMT+0200 (Central European Summer Time)
xx.textContent = date3;

// =============================================
//==== parse
//===
let ms = Date.parse("2022-01-26T13:51:50.417-07:00");
alert(ms); // 1643230310417  (timestamp)
