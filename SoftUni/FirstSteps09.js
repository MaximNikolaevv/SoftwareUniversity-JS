function yardgreeding(input) {

    let ozeleneni = Number(input[0]);

    let ozelenqvanenaceliqdvor = ozeleneni * 7.61;
    let finaldiscountsum = 0.18 * ozelenqvanenaceliqdvor;
    finalsum = ozelenqvanenaceliqdvor - finaldiscountsum;

    console.log(`The final price is: ${finalsum} lv.`)
    console.log(`The discount is: ${finaldiscountsum} lv.`)

}
