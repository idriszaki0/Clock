// function declaration

function displayTime() {
    // variable
    const timeNow = new Date();

    let hourOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", { month: "long" });
    let year = timeNow.getFullYear();
    // permit me to declare period and hourOfDay again even though we've declared
    let period = "AM";
    // write a condition that set our period to Am or PM
    if(hourOfDay > 12) {
        hourOfDay -= 12;
        period = "PM";
        // this block checks wheter the hour is greater than 12 and If that is true, 12 is subtracted from the hour. The result is then assigned back ```hour``` and the period is set to PM. 12 is subtracted since we're building a 12-hour time clock
    }
    if(hourOfDay == 0) {
        hourOfDay = 12;
        period = "AM"
        // This block checks whether the hour is equal to 0. If that is true, we asssign 12 to the hourOfDay variable and the period is set to AM
    }
    hourOfDay = hourOfDay < 10 ? "0" + hourOfDay : hourOfDay;
    // if hourOfDay is less than 10, set hour position to 0 plus hourOfDay else set position to hourOfDay
    minutes =  minutes < 10 ? "0" + minutes : minutes;
    // if minutes is less than 10, set minutes position to 0 plus mninutes else set minutes to position
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // if seconds is less than 10, set second position to 0 plus seconds else set position to seconds

    let currentTime = hourOfDay + ":" + minutes + ":" + seconds + period

    document.getElementById('Clock').innerHTML = currentTime + " " + today +" " + months + " " + year;
}

setInterval(displayTime, 1000);

