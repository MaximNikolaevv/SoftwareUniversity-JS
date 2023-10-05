function swimming(input) {

    let recordinseconds = Number(input[0]);
    let distanceinmetres = Number(input[1]);
    let timeinsecondsof1meter = Number(input[2]);

    let swimminginseconds = distanceinmetres * timeinsecondsof1meter; //30.000 

    let plusseconds = Math.floor(distanceinmetres / 15);
    let bonusSeconds = plusseconds * 12.5;       //1250

    let fulltime = swimminginseconds + bonusSeconds; // 31250

    let timeneeded = fulltime - recordinseconds;

    if (recordinseconds > fulltime) {
        console.log(`Yes, he succeeded! The new world record is ${fulltime.toFixed(2)} seconds.`)
    } else if (fulltime >= recordinseconds) {
        console.log(`No, he failed! He was ${timeneeded.toFixed(2)} seconds slower.`)
    }

}