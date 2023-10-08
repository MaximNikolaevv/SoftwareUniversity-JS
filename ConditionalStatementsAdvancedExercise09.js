function skitrip(input) {

    let days = Number(input[0]);
    let place = input[1];
    let rate = input[2];
    let totalprice = 0;

    days = days - 1;

    switch (place) {

        case "room for one person":
            if (days < 10 || days > 10 && days < 15 || days > 15) {
                totalprice = totalprice + (days * 18.00);
            } break;

        case "apartment":
            if (days < 10) {
                totalprice = totalprice + ((days * 25) * 0.7);

            } else if (days > 10 && days < 15) {
                totalprice = totalprice + ((days * 25) * 0.65)

            } else if (days > 15) {
                totalprice = totalprice + ((days * 25) * 0.5);

            } break;

        case "president apartment":
            if (days < 10) {
                totalprice = totalprice + ((days * 35) * 0.9);

            } else if (days > 10 && days < 15) {
                totalprice = totalprice + ((days * 35) * 0.85);

            } else if (days > 15) {
                totalprice = totalprice + ((days * 35) * 0.8);

            } break;



    }       if (rate === "positive") {
        totalprice = totalprice + (totalprice * 0.25);
    } else {
        totalprice = totalprice - (totalprice * 0.1);
    }

    console.log(totalprice.toFixed(2))



}