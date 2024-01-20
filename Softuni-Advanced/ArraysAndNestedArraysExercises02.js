function SplitCode(arr, Number) {

    mergedArr = [];
    mergedArr.push(arr[0]);

    for (let i = Number; i < arr.length; i += Number) {

        mergedArr.push(arr[i]);

    }

    //    console.log(mergedArr);

    return mergedArr;

}