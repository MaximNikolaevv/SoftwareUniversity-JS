function newhome(input) {

    let typeOfFlowers = input[0];
    let numOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let totalprice = 0.0;

    switch (typeOfFlowers) {
        case "Roses": totalprice = numOfFlowers * 5; break;
        case "Dahlias": totalprice = numOfFlowers * 3.80; break;
        case "Tulips": totalprice = numOfFlowers * 2.80; break;
        case "Narcissus": totalprice = numOfFlowers * 3; break;
        case "Gladiolus": totalprice = numOfFlowers * 2.50; break;
    }

    if (typeOfFlowers == "Roses" && numOfFlowers > 80) {
        totalprice = totalprice * 0.90;
    } else if (typeOfFlowers == "Dahlias" && numOfFlowers > 90) {
        totalprice = totalprice * 0.85;
    } else if (typeOfFlowers == "Tulips" && numOfFlowers > 80) {
        totalprice = totalprice * 0.85;
    } else if (typeOfFlowers == "Narcissus" && numOfFlowers < 120) {
        totalprice = totalprice * 1.15;
    } else if (typeOfFlowers == "Gladiolus" && numOfFlowers < 80) {
        totalprice = totalprice * 1.20;
    }




    if (budget >= totalprice) {
        let moneyleft = budget - totalprice;
        console.log(`Hey, you have a great garden with ${numOfFlowers} ${typeOfFlowers} and ${moneyleft.toFixed(2)} leva left.`)
    } else if (budget <= totalprice) {
        let moneyneeded = totalprice - budget;
        console.log(`Not enough money, you need ${moneyneeded.toFixed(2)} leva more.`)
    }

}