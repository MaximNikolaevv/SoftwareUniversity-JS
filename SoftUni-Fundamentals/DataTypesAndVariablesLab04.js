function IntegerOrFloat(num1, num2, num3) {

    let fullnum = num1 + num2 + num3;

    fullnum % 1 === 0 ? console.log(`${fullnum} - Integer`) : console.log(`${fullnum} - Float`);


}