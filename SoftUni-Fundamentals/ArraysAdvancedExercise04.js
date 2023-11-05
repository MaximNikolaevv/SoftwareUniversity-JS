function Sorting(arr) {

    arr = arr.sort((a, b) => a - b);
    let mergedArr = [];

    while (arr.length != 0) {

        let MaxNum = arr.pop();
        let MinNum = arr.shift();

        mergedArr.push(MaxNum);
        mergedArr.push(MinNum);

    }

    console.log(mergedArr.join(" "));

}