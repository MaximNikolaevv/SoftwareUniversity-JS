function solve(arr) {

    let pattern = />>(?<furniture>[A-Za-z]+[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<qty>\d+)/g;

    let FullPrice = 0;

    let boughtproducts = [];

    let boughtThings = pattern.exec(arr);


    while (boughtThings != null) {

        if (boughtThings) {
            let { furniture, price, qty } = boughtThings.groups;

            boughtproducts.push(furniture);

            FullPrice = FullPrice + (price * qty);
        }

        boughtThings = pattern.exec(arr);
    }

    console.log("Bought furniture:");

    for (let i = 0; i <= boughtproducts.length - 1; i++) {
        console.log(boughtproducts[i]);
    }
    console.log(`Total money spend: ${FullPrice.toFixed(2)}`);

}