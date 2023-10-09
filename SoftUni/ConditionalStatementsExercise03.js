function time(input) {

    let hours = Number(input[0]);
    let mins = Number(input[1]);

    let totalMins = hours * 60 + mins + 15;

    let totalhours = Math.floor(totalMins / 60);
    let totalminutes = totalMins % 60;

    if (totalhours === 24) {
        totalhours = 0;
    }

    if (totalminutes < 10) {
        console.log(`${totalhours}:0${totalminutes}`)
    } else {
        console.log(`${totalhours}:${totalminutes}`)
    }

}