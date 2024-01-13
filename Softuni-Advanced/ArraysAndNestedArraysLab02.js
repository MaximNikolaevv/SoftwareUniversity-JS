function LastKNumSequience(n, k) {
    let mergedArr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let j = i - 1; j >= Math.max(0, i - k); j--) {
            sum += mergedArr[j];
        }

        mergedArr.push(sum);
    }

    return mergedArr;
}