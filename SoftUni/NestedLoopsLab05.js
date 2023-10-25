function travelling(input) {

    let index = 0;

    let command = input[index];
    index++

    while (command !== "End") {
        let destination = command;


        let moneyfordestination = Number(input[index]);
        index++;
        let save = 0;

        while (save < moneyfordestination) {
            let money = Number(input[index]);
            index++
            save = save + money;
        }
        console.log(`Going to ${destination}!`);

        command = input[index];
        index++;
    }

}