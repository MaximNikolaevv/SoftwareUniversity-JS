function areafigures(input) {

    let type = (input[0]);

    if (type === "square") {
        let side = Number(input[1]);
        let result = side * side;
        console.log(result.toFixed(3));
    } else if (type === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let result = sideA * sideB;
        console.log(result.toFixed(3));
    } else if (type === "circle") {
        let r = Number(input[1]);
        let resultt = Math.PI * Math.pow(r, 2);
        console.log(resultt.toFixed(3))
    } else if (type === "triangle") {
        let side = Number(input[1]);
        let h = Number(input[2])
        let result = side * h / 2
        console.log(result.toFixed(3))
    }
}