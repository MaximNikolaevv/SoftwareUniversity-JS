function solve(input) {

    let index = 0;

    let fullnum = Number(input[0])


    let fullestnum = 0;

    let currentnumber = Number(input[index]);
    index++

    while (fullestnum < fullnum) {
        currentnumber = Number(input[index]);

        fullestnum = fullestnum + currentnumber;

        currentnumber = Number(input[index]);
        index++;




    }
    console.log(fullestnum)
    return



}