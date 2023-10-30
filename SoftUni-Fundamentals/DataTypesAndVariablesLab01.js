function EchoType(stringOrNum) {

    let type = typeof stringOrNum;

    if (type == `string`) {
        console.log("string");
        console.log(stringOrNum);

    } else if (type == `number`) {
        console.log("number");
        console.log(stringOrNum);

    } else {
        console.log("object")
        console.log("Parameter is not suitable for printing");
    }



}