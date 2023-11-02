function smallestNum(num1, num2, num3) {

    let smallestNum = FindIt()

    console.log(smallestNum)

    function FindIt() {

        let smallestNum = Math.min(num1, num2, num3);
        return smallestNum;

    }

}