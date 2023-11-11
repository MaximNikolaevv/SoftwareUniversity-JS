function Cats(arr) {

    let InfoAboutCat = [];


    for (let i = 0; i <= arr.length - 1; i++) {
        InfoAboutCat = arr[i].split(" ");

        let name = InfoAboutCat[0];
        let age = InfoAboutCat[1];


        let CatInfo = (`${name}, age ${age} says Meow`);

        console.log(CatInfo)

    }



}