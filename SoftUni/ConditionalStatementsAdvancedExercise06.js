function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let op = (input[2]);

    let result = 0;
    let evenOrOdd = "";

    if ((n2 === 0) && (op === "/" || op === "%")) {
        console.log(`Cannot divide ${n1} by zero`)
        return;
    }

    if (n2 !== 0 || op == "/") {

        switch (op) {
            case "+": result = n1 + n2; break;
            case "-": result = n1 - n2; break;
            case "*": result = n1 * n2; break;
            case "%": result = n1 % n2; break;
            case "/": result = (n1 / n2).toFixed(2); break;
        }
    } if (result % 2 == 0) {
        evenOrOdd = "even"
    } else {
        evenOrOdd = "odd"
    }
    if (op == "+" || op == "-" || op == "*") {
        console.log(`${n1} ${op} ${n2} = ${result} - ${evenOrOdd}`)
    } else if (op == "/" || op == "%") {
        console.log(`${n1} ${op} ${n2} = ${result}`);
    }

} 