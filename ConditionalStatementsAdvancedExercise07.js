function hotelRoom(input) {

    let month = input[0];
    let nightsCount = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50 * nightsCount;
            apartmentPrice = 65 * nightsCount;
            if (nightsCount > 7 && nightsCount <= 14) {
                studioPrice *= 0.95;
            } else if (nightsCount > 14) {
                studioPrice *= 0.70;
            } break;
        case "June":
        case "September":
            studioPrice = 75.20 * nightsCount;
            apartmentPrice = 68.70 * nightsCount;
            if (nightsCount > 14) {
                studioPrice *= 0.80;
            } break;
        case "July":
        case "August":
            studioPrice = 76 * nightsCount;
            apartmentPrice = 77 * nightsCount;
            break;
    } if (nightsCount > 14) {
        apartmentPrice *= 0.90
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}