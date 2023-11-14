function Towns(arr) {

    for (let type of arr) {

        [Place, latituide, longitude] = type.split(" |");

        latituide = Number(latituide);
        longitude = Number(longitude)

        let Information = { town: Place, latitude: latituide.toFixed(2), longitude: longitude.toFixed(2) }

        console.log(Information);
    }

}