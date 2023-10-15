function moving(input) {

    let index = 0;

    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let height = Number(input[index]);
    index++;

    let sizeboxes = width * length * height;

    let command = (input[index]);
    index++;

    kmeters = 0;

    while (command !== "Done") {
        let carriedboxes = Number(command);

        kmeters = kmeters + carriedboxes;

        command = (input[index]);
        index++;

        if (index > input.length) {
            break;
        }

    }

    if (sizeboxes <= kmeters) {
        let metersneeded = sizeboxes - kmeters;
        console.log(`No more free space! You need ${Math.abs(metersneeded)} Cubic meters more.`)
        return;
    }


    if (sizeboxes >= kmeters) {
        let metersleft = kmeters - sizeboxes;
        console.log(`${Math.abs(metersleft)} Cubic meters left.`)
        return;
    }


}