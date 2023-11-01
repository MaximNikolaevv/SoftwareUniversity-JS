function oppo(array) {

    for (let i = 0; i < array.length / 2; i++) {

        let j = array.length - 1 - i;

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    console.log(array.join(` `));

}