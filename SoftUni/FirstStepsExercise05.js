function thingsforschool(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let thingForDesk = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let priceforpen = pens * 5.80;
    let priceformarkers = markers * 7.20;
    let priceforchemicals = thingForDesk * 1.20;

    let fullsum = priceforpen + priceformarkers + priceforchemicals;
    let fullsumwithdiscount = fullsum - (fullsum * discount);

    console.log(fullsumwithdiscount)


}