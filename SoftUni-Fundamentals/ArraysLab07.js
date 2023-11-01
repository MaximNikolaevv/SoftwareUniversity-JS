function EqualArrays(array1, array2) {

    let Sum = 0;
    let i = 0;

    for (let i = 0; i <= array1.length - 1; i++) {
        array1[i] = Number(array1[i]);

        Sum = Sum + array1[i];

    }

    for (let i = 0; i <= array2.length - 1; i++) {
        array2[i] = Number(array2[i]);


        if (array1[i] != array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            return;
        }


    }

    if (array1[i] == array2[i]) {
        console.log(`Arrays are identical. Sum: ${Sum}`)

    }

}