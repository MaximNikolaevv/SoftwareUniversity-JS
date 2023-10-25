function plusnumbers(input) {

    let firstnum = Number(input[0]);
    let endnum = Number(input[1]);
    let magicnum = Number(input[2]);

    let combinations = 0;
    let isfound = false;

    for (let x = firstnum; x <= endnum; x++) {
        for (let y = firstnum; y <= endnum; y++) {
            combinations++

            if (x + y === magicnum) {
                isfound = true;
                console.log(`Combination N:${combinations} (${x} + ${y} = ${magicnum})`)
                break;
            }



        }
        if (isfound) {
            break;
        }
    }

    if (!isfound) {
        console.log(`${combinations} combinations - neither equals ${magicnum}`)
    }


}