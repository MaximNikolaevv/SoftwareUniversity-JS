function sums(input) {

    let firstnum = Number(input[0]);
    let endnum = Number(input[1]);
    let printline = "";

    for (let i = firstnum; i <= endnum; i++) {
        let currentline = " " + i;
        let oddsum = 0;
        let evensum = 0;

        for (let index = 0; index < currentline.length; index++) {
            let currdigit = Number(currentline.charAt(index));

            if (index % 2 === 0) {
                evensum = evensum + currdigit;

            } else {
                oddsum = oddsum + currdigit;
            }
        }

        if (oddsum === evensum) {
            printline += ` ${i}`
        }

    }
    console.log(printline)
}