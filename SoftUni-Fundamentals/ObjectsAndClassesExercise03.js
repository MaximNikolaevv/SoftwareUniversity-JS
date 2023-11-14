function StoreProvision(stock, stock1) {

    let products = {};
    let TypeOfProducts = " ";
    let qty = 0;

    for (let i = 0; i <= stock.length - 1; i++) {

        TypeOfProducts = stock[i];
        qty = Number(stock[i + 1]);

        products[TypeOfProducts] = qty;

        i++
    }

    for (let i = 0; i <= stock1.length - 1; i++) {

        TypeOfProducts = stock1[i];
        qty = Number(stock1[i + 1]);

        if (TypeOfProducts in products) {
            products[TypeOfProducts] += qty

        } else {
            products[TypeOfProducts] = qty;
        }


        i++
    }

    for (let [key, value] of Object.entries(products)) {

        console.log((`${key} -> ${value}`));
    }





}