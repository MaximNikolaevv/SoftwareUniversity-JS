function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toysCounts = puzzleCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;

    let puzzlePrice = puzzleCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let teddyBearsPrice = teddyBearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let truckPrice = trucksCount * 2;

    let totalToyPrice = 0;
    let discount = 0;

    totalToyPrice = puzzlePrice + dollsPrice + teddyBearsPrice + minionsPrice + truckPrice;



    if (toysCounts >= 50) {
        discount = totalToyPrice * 0.25;
        totalToyPrice = totalToyPrice - discount;
    }


    let rentPayment = totalToyPrice * 0.10;

    let moneyLeftOver = totalToyPrice - rentPayment;



    if (moneyLeftOver >= tripPrice) {
        let diff = moneyLeftOver - tripPrice;
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        let diff = tripPrice - moneyLeftOver;
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }


}