function MergeArrays(array1, array2) {

    let el1 = 0;
    let el2 = 0;

    for (let i = 0; i <= array1.length - 1; i++) {

        el1 = array1[i];
        el2 = array2[i];

        if (i % 2 == 0) {
            array1[i] = Number(el1) + Number(el2);
        } else {
            array1[i] = el1 + el2;
        }

    }
    console.log(array1.join(" - "))

}