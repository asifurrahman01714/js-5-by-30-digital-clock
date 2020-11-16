let digitalSecond = document.getElementById("seconds");
let digitalMinute = document.getElementById("minutes");
let digitalHour = document.getElementById("hours");
let digitalampm = document.getElementById("ampm");


function setClock() {
    let currentDate = new Date();
    let theSecond   = currentDate.getSeconds();
    let theMinute   = currentDate.getMinutes();
    let theHour     = currentDate.getHours();

    theHour = theHour === 0 ? (theHour=12):theHour;
    if (theHour>12) {
        digitalampm = digitalampm.innerText= "PM";
        theHour = theHour-12;
    }

    theSecond = theSecond<10? "0"+theSecond:theSecond;
    theMinute = theMinute<10? "0"+theMinute:theMinute;
    theHour   = theHour<10? "0"+theHour:theHour;
    

    digitalSecond.innerText = theSecond;
    digitalMinute.innerText = theMinute;
    digitalHour.innerText  = theHour;

}


setInterval(setClock, 1000);

setClock();