function DistrictArray(arr) {

    let uniqueNums = [];

    for (let nums of arr) {
        if (!uniqueNums.includes(nums)) {
            uniqueNums.push(nums);
        }

    }

    console.log(uniqueNums.join(" "));






}