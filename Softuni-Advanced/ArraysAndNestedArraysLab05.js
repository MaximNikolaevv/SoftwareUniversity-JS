function NegativeOrPositiveNumbers(arr) {

    let MergedArr = [];
    let minNumber = arr[0];
    let secondMinNumber = arr[0]
    let i = 0;

    let found1 = arr.find(function () {

        if (arr[i] < minNumber) {
            minNumber = arr[i]
        }


        i++

    })

    i = 0;

    let found2 = arr.find(function () {

        if (arr[i] < secondMinNumber && arr[i] != minNumber) {
            secondMinNumber = arr[i]
        }

        i++
    })

    MergedArr.push(minNumber);
    MergedArr.push(secondMinNumber);

    console.log(MergedArr.join(" "));
}