function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let procesors = Number(input[2]);
    let rams = Number(input[3]);

    let vCardsprice = 250 * videoCards;
    let procesorsPrice = procesors * (vCardsprice * 0.35);
    let ramsPrice = rams * (vCardsprice * 0.10);

    let finalSum = vCardsprice + procesorsPrice + ramsPrice;

    if (videoCards > procesors) {
        finalSum = finalSum * 0.85;
    }

    if (finalSum <= budget) {
        let moneyLeft = budget - finalSum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);

    } else {
        let neededSum = finalSum - budget
        console.log(`Not enough money! You need ${neededSum.toFixed(2)} leva more!`)
    }

}