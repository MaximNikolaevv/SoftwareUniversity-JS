function biggestnumber(input) {

    let index = 0;

    let command = input[index]
    index++

    let mynumber = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let number = Number(command);


        if (mynumber > number) {
            mynumber = number;
        }


        command = input[index];
        index++;





    }
    console.log(mynumber);
}