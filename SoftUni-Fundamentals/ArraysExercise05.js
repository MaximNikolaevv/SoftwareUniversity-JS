function MaxNumber(array) {

    let mergedArr = []
    let testingNum = 0;


    for (let i = 0; i <= array.length - 1; i++) {

        let BigNum = true;
        testingNum = array[i];

        for (let index = i + 1; index <= array.length - 1; index++) {

            if (testingNum <= array[index]) {
                BigNum = false;
                break;
            }


        }

        if (BigNum) {
            mergedArr.push(testingNum);
        }

    }

    console.log(mergedArr.join(` `));

}