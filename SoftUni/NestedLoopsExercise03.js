function sum(input) {

    let index = 0;

    let command = input[index];
    index++;

    let primesum = 0;
    let nonprimesum = 0;

    while (command !== "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.")
            command = input[index];
            index++;
            continue;
        }

        let isprime = true;

        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                isprime = false;
                break;
            }
        }

        if (isprime) {
            primesum = primesum + num;
        } else {
            nonprimesum = nonprimesum + num;
        }

        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${primesum}`);
    console.log(`Sum of all non prime numbers is: ${nonprimesum}`);

}