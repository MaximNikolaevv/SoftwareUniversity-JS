function sumirane(input) {

    let numastext = input[0]
    let sum = 0;

    for (let i = 0; i < numastext.length; i++) {
        let currentnumber = Number(numastext[i]);
        sum = sum + currentnumber;

    }

    console.log(`The sum of the digits is:${sum}`)
}
