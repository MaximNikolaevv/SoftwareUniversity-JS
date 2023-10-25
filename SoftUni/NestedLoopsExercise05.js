function specialNumbs(input) {
    let n = Number(input[0]);
    let specialNumbsToPrint = "";
    for (let i = 1111; i <= 9999; i++) {
        let currNum = "" + i;
        let isValid = true;
        for (let j = 0; j < 4; j++) {
            let currDigit = Number(currNum.charAt(j));
            if (n % currDigit !== 0) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            specialNumbsToPrint += currNum + " ";
        }
    }
    console.log(specialNumbsToPrint);
}