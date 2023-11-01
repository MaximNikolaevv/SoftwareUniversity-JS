function EvenAndOdd(array) {

    let EvenSum = 0;
    let Oddsum = 0;

    for (let i = 0; i <= array.length - 1; i++) {

        if (array[i] % 2 == 0) {
            EvenSum = EvenSum + array[i];

        } else {
            Oddsum = Oddsum + array[i];
        }

    }

    let Result = EvenSum - Oddsum;

    console.log(Result)

}