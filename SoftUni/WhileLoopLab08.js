function graduation(args) {
    let i = 0;
    let name = args[i];
    i++;
    let grades = Number(args[i]);
    i++;
    let classes = 1;
    let badGradeCounter = 0;
    let averageGrade = 0;
    while (classes <= 12) {
        if (grades < 4) {
            badGradeCounter++;
            classes--;
            if (badGradeCounter > 1) {
                classes++;
                console.log(`${name} has been excluded at ${classes} grade`);
                break;
            }
        }
        averageGrade += grades;
        grades = Number(args[i]);
        i++;
        classes++;
    }
    if (classes - 1 === 12) {
        averageGrade = averageGrade / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}