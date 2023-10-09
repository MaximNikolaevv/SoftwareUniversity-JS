function histogram(input) {

    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= 1000; i++) {

        curnum = Number(input[i]);


        if (curnum < 200) {
            p1++;
        } else if (curnum >= 200 && curnum <= 399) {
            p2++;
        } else if (curnum >= 400 && curnum <= 599) {
            p3++;
        } else if (curnum >= 600 && curnum <= 799) {
            p4++;
        } else if (curnum >= 800) {
            p5++;
        }
    }

    let p1percent = (p1 / n) * 100;
    let p2percent = (p2 / n) * 100;
    let p3percent = (p3 / n) * 100;
    let p4percent = (p4 / n) * 100;
    let p5percent = (p5 / n) * 100;



    console.log(`${p1percent.toFixed(2)}%`);
    console.log(`${p2percent.toFixed(2)}%`);
    console.log(`${p3percent.toFixed(2)}%`);
    console.log(`${p4percent.toFixed(2)}%`);
    console.log(`${p5percent.toFixed(2)}%`);


}