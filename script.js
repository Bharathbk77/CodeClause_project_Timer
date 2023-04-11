const daysE1=document.getElementById('day');
const hoursE1=document.getElementById('hours');
const minsE1=document.getElementById('mins');
const secondsE1=document.getElementById('seconds');

const newYears="22 Jan 2024";

function countdown()
{
    const newYearsDate=new Date(newYears);
    const currDate=new Date();
    
     const totalseconds=(newYearsDate-currDate) / 1000;

     const day=Math.floor(totalseconds / 3600 / 24);
     const hours=Math.floor(totalseconds /3600) % 24;
     const mins=Math.floor(totalseconds /60) % 60;
     const seconds=Math.floor(totalseconds) % 60;
    
    daysE1.innerHTML=day;
    hoursE1.innerHTML=hours;
    minsE1.innerHTML=mins;
    secondsE1.innerHTML=seconds;
}

function  formatTime(time)
{
    return time<10? `0${time}` :time;
}

countdown();

setInterval(countdown,1000);