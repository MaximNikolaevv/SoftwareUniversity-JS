function AddSubtract(array) {

    let totalscore = 0;
    let oldtotalscore = 0;

    for (let i = 0; i <= array.length - 1; i++) {
        oldtotalscore = oldtotalscore + Number(array[i]);
    }


    for (let i = 0; i <= array.length - 1; i++) {

        if (array[i] % 2 == 0) {
            array[i] = array[i] + i;
        } else {
            array[i] = array[i] - i;
        }

        totalscore = totalscore + Number(array[i]);

    }
    console.log(array);
    console.log(oldtotalscore);
    console.log(totalscore);
}