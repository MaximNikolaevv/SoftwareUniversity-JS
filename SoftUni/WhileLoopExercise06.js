function cake(input) {

    let index = 0;

    let length = Number(input[index]);
    index++;

    let width = Number(input[index]);
    index++;

    let numofcakepieces = width * length;

    let command = input[index];
    index++;



    while (command !== "STOP") {
        let eatencakepieces = Number(command);



        numofcakepieces = numofcakepieces - eatencakepieces;

        if (numofcakepieces <= 0) {
            break;
        }

        command = input[index];
        index++;
    }

    if (numofcakepieces > 0) {
        console.log(`${numofcakepieces} pieces are left.`)

    } else {
        console.log(`No more cake left! You need ${Math.abs(numofcakepieces)} pieces more.`)
    }


}