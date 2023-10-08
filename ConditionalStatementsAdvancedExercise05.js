function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let placeType = "";
    let price = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
    } else if (budget <= 1000) {
        destination = "Balkans";
    } else {
        destination = "Europe";
    }

    if (season === "summer") {
        placeType = "Camp";
    } else {
        placeType = "Hotel";
    }

    if (destination === "Bulgaria") {
        if (season === "summer") {
            price = 0.30 * budget;
        } else {
            price = 0.70 * budget;
        }
    } else if (destination === "Balkans") {
        if (season === "summer") {
            price = 0.40 * budget;
        } else {
            price = 0.80 * budget;
        }
    } else {
        price = 0.90 * budget;
        placeType = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${placeType} - ${price.toFixed(2)}`);
}
