function NegativeOrPositiveNumbers(arr) {

    let mergedArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {

        if (arr[i] < 0) {
            mergedArr.unshift(arr[i]);
        } else {
            mergedArr.push(arr[i]);
        }
    }

    console.log(mergedArr.join("\n"));
}