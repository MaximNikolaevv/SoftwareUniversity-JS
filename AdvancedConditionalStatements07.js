function workingtime(input) {

    let houroftime = Number(input[0]);
    let dayofweek = (input[1]);

    if (10 <= houroftime && houroftime <= 18) {
        if (dayofweek === "Monday" || dayofweek === "Tuesday" || dayofweek === "Wednesday" || dayofweek === "Thursday" || dayofweek === "Friday" || dayofweek === "Saturday") {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed")
    }
}