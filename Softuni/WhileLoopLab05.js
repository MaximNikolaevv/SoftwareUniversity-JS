function accbalance(input) {

    let index = 0;
    let command = input[index];
    index++

    let increase = 0;



    while (command !== "NoMoreMoney") {
        let money = Number(command);

        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }

        increase = increase + money;

        console.log(`Increase: ${money.toFixed(2)}`);

        command = input[index];
        index++;


    }
    console.log(`Total: ${increase.toFixed(2)}`)
    return;
}