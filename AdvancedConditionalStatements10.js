function invalidnumber(input) {


    let n = Number(input[0]);

    let isvalid = n >= 100 && n <= 200 || n == 0;

    if (!isvalid) {
        console.log("invalid");
    }

}