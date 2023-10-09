function cinema(input) {

    let type = input[0];
    let lines = Number(input[1]);
    let colouns = Number(input[2]);
    let price = 0;

    if (type == "Premiere") {
        price = lines * colouns * 12.00;
    } else if (type == "Normal") {
        price = lines * colouns * 7.50;
    } else if (type == "Discount") {
        price = lines * colouns * 5.00;
    } console.log(price.toFixed(2));




}