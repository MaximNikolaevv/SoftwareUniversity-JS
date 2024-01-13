function IsEvenOrrIsOdd(arr) {

    let mergedArr = [];

    for (let i = 0; i <= arr.length - 1; i = i + 2) {

        mergedArr.push(arr[i]);
    }

    console.log(mergedArr.join(" "));
}