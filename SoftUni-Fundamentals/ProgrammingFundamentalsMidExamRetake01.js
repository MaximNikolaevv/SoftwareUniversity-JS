function ComputerStore(prices) {

    let TypeOfClient = prices.pop(prices);
    let FullPriceForSetup = 0;
    let FullPriceForSetupWithTaxesForSpecial = 0;
    let minusNum = 0;
    for (let i = 0; i <= prices.length - 1; i++) {
        let PriceForSetup = Number(prices[i]);

        if (PriceForSetup < 0) {
            console.log("Invalid price!");

        }
        if (PriceForSetup <= 0) {
            minusNum = minusNum + PriceForSetup;
            continue;
        }

        FullPriceForSetup = FullPriceForSetup + PriceForSetup;


    }

    let Taxes = FullPriceForSetup * 0.2;
    let FullPriceForSetupWithTaxes = Taxes + FullPriceForSetup;



    if (TypeOfClient == "special") {

        if (FullPriceForSetup <= 0 && FullPriceForSetupWithTaxesForSpecial <= 0) {
            console.log("Invalid order!");
            return;
        }

        FullPriceForSetupWithTaxesForSpecial = FullPriceForSetupWithTaxes * 0.90;

        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${FullPriceForSetup.toFixed(2)}$`);
        console.log(`Taxes: ${Taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${FullPriceForSetupWithTaxesForSpecial.toFixed(2)}$`);



    } else {

        if (FullPriceForSetup <= 0 && FullPriceForSetupWithTaxesForSpecial <= 0) {
            console.log("Invalid order!");
            return;
        }


        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${FullPriceForSetup.toFixed(2)}$`);
        console.log(`Taxes: ${Taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${FullPriceForSetupWithTaxes.toFixed(2)}$`);


    }

}