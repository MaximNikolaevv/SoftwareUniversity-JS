function oscars(input) {
    //Правим си променлива индекс, която ще обикаля и взема стойности от масива
    let index = 0;
    //Тук индекса ни е 0 и така вземаме името на актьора
    let actorName = input[index];
    //Тук увеличаваме индекса с 1 и той става 1 за да вземем началните му точки
    index++;
    let startingPoints = Number(input[index]);
    //Тук увеличаваме индекса с още 1 и той става 2, за да вземем броя на журито
    index++;
    let juryCount = Number(input[index]);
    //Тук увеличаваме индекса с още 1 за да стане 3 и да прочетем името на първото жури
    index++;
    //На тази стъпка индекса вече ни е 3. Правим for цикъл, който започва да брои от 0(i). И правим for цикъла да се завърти толкова пъти, колкото ни е големината на журито.
    for (let i = 0; i < juryCount; i++) {
        //Тук индекса все още ни е 3 и вземаме името на първия от журито
        let juryName = input[index];
        //Увеличаваме индекса с 1 и той става 4 понеже знаем, че точките, които журито дава са след неговото име, независимо колко жури имаме
        index++;
        //Тук правим променлива която взема точките от съответното жури(съответно в първото завъртане на for е позиция 4 от масива)
        let currentJuryPoints = Number(input[index]);
        //Тук увеличаваме с още 1 единица индекса за да може следващия път като завъртим цикъла да започне от 5 и да вземе името на следващото жури
        index++;
        let currentPoints = juryName.length * currentJuryPoints / 2;
        //Тук създаваме проверка, която проверява, ако точките са под 1250.5 да добави текущите точки от това жури към началните точки(в случая аз ползвам началните точки като общи точки)
        if (startingPoints <= 1250.5) {
            startingPoints += currentPoints;
        }
    }
    if (startingPoints <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    }
    else {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`)
    }
}