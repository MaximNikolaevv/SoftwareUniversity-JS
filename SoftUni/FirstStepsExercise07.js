function fooddelivery(input) {

    let chickenmenus = Number(input[0]);
    let fishmenus = Number(input[1]);
    let vegetarianfood = Number(input[2]);

    let priceforchicken = chickenmenus * 10.35;
    let priceforfish = fishmenus * 12.40;
    let priceforvegetarian = vegetarianfood * 8.15;

    let fullprice = priceforchicken + priceforfish + priceforvegetarian;

    let pricefordessert = fullprice * 0.2;

    dellivery = 2.50

    let fullfullprice = fullprice + pricefordessert + dellivery;

    console.log(fullfullprice)

}