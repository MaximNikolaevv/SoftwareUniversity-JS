function fishing(input) {

    let groupbudget = Number(input[0]);
    let season = input[1];
    let numOffishPeople = Number(input[2]);

    let rentprice = 0;

    switch (season) {
        case "Spring": rentprice = 3000; break;
        case "Summer":
        case "Autumn": rentprice = 4200; break;
        case "Winter": rentprice = 2600; break;

    }

    if (numOffishPeople <= 6) {
        rentprice = rentprice * 0.90;

    } else if (numOffishPeople >= 7 && numOffishPeople <= 11) {
        rentprice = rentprice * 0.85;

    } else if (numOffishPeople > 12) {
        rentprice = rentprice * 0.75;

    } if (numOffishPeople % 2 === 0 && season != "Autumn") {
        rentprice = rentprice * 0.95;
    }

    if (groupbudget >= rentprice) {
        let moneyleft = groupbudget - rentprice;
        console.log(`Yes! You have ${moneyleft.toFixed(2)} leva left.`)

    } else if (groupbudget <= rentprice) {
        let moneyneeded = rentprice - groupbudget;
        console.log(`Not enough money! You need ${moneyneeded.toFixed(2)} leva.`)
    }

}
