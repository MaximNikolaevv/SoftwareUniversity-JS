function basketball(input) {

    let taxesforyear = Number(input[0]);

    let sneakers = taxesforyear * 0.4;
    let sneakersprice = taxesforyear - sneakers;

    let outfit = sneakersprice * 0.2;
    let basketballoutfit = sneakersprice - outfit;

    let basketballBall = (1 / 4) * basketballoutfit;

    let basketballaccesoaries = (1 / 5) * basketballBall;

    let finalsum = taxesforyear + sneakersprice + basketballoutfit + basketballBall + basketballaccesoaries;


    console.log(finalsum)
}