function flat(input) {

    let floor = Number(input[0]);
    let apartments = Number(input[1]);


    for (let f = floor; f > 0; f--) {
        let buff = "";
        for (let b = 0; b < apartments; b++) {

            if (f === floor) {
                buff += "L" + f + b + " ";
            }
            else if (f % 2 === 0) {

                buff += "O" + f + b + " ";

            } else {

                buff += "A" + f + b + " ";
            }

        }
        console.log(buff)
    }

} 