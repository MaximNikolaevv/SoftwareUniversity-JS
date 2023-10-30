function sumdigits(Num) {

    let numAsString = String(Num);
    let sum = 0;

    for (let i = 0; i <= numAsString.length - 1; i++) {
        sum = sum + Number(numAsString[i]);
    }

    console.log(sum);

}