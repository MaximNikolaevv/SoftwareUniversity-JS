function cleverLily(input) {

    let ageoflily = Number(input[0]);
    let priceforwasher = Number(input[1]);
    let pricefortoy = Number(input[2]);

    let evenmoneywon = 10;
    let pricewon = 0;
    let fullpricefortoys = 0;
    let finalprice = 0;

    for (let i = 1; i <= ageoflily; i++) {
        if (i % 2 === 0) {
            pricewon = pricewon + evenmoneywon;
            evenmoneywon = evenmoneywon + 10;
            pricewon = pricewon - 1;

        } else {
            fullpricefortoys = fullpricefortoys + pricefortoy;


        }
    }
    finalprice = fullpricefortoys + pricewon


    if (finalprice >= priceforwasher) {
        let moneyleft = finalprice - priceforwasher;
        console.log(`Yes! ${moneyleft.toFixed(2)}`)
    } else if (finalprice <= priceforwasher) {
        let moneyneeded = priceforwasher - finalprice;
        console.log(`No! ${moneyneeded.toFixed(2)} `)
    }

}