function painting(input) {

    let quantitynylon = Number(input[0]);
    let quantitypaint = Number(input[1]);
    let quantitythinner = Number(input[2]);
    let spentTime = Number(input[3]);

    let sumforpaint = quantitypaint * 0.10;
    let totalpainquantity = quantitypaint + sumforpaint

    let totaltotalpainquantity = totalpainquantity * 14.50;
    let sumofnylon = quantitynylon + 2;
    let fullsumofnylon = sumofnylon * 1.50;

    let fullthinnsum = quantitythinner * 5.00;

    let fullsum = totaltotalpainquantity + fullsumofnylon + fullthinnsum + 0.40;

    let workpriceperhour = 0.30 * fullsum
    let totalworkprice = spentTime * workpriceperhour

    let fullfullsum = totalworkprice + fullsum;

    console.log(fullfullsum)

}