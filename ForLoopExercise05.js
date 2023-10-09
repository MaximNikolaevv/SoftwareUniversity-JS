function sAlAry(input) {

    let opentabs = Number(input[0]);
    let salary = Number(input[1]);


    for (let i = 2; i <= input.length; i++) {
        let browser = input[i];

        if (browser == "Facebook") {
            salary = salary - 150;

        } else if (browser == "Instagram") {
            salary = salary - 100;

        } else if (browser == "Reddit") {
            salary = salary - 50;
        }
    }


    if (salary <= 0) {
        console.log("You have lost your salary.")
    } else {
        console.log(salary)
    }
}