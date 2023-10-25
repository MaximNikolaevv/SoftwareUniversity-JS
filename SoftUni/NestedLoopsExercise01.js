function pyramid(input) {

    let n = Number(input[0]);

    let outofcikul = false;
    let currentn = 1;
    let lines = "";

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {

            if (currentn > n) {
                outofcikul = true;
                break;
            }


            lines += currentn + " ";
            currentn++;
        }

        console.log(lines);
        lines = " ";

        if (outofcikul === true) {
            break;
        }

    }


}