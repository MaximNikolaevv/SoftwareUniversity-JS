function Days123(Num) {

    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"]


    let result = days[Num - 1]

    if (Num < 1 || Num > 7) {
        console.log("Invalid day!")
    } else {
        console.log(result)
    }


}