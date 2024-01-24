function solve() {
    let textRef = document.getElementById("text").value;
    let namingConventionRef = document.getElementById("naming-convention").value;
    let result = document.getElementById("result");
    let commonResult = "";

    switch (namingConventionRef) {
        case "Camel Case":
            let words1 = textRef.split(' ');

            // Capitalize the first letter of each word starting from the second word
            for (let i = 1; i < words1.length; i++) {
                words1[i] = words1[i].charAt(0).toUpperCase() + words1[i].slice(1).toLowerCase();
            }

            commonResult = words1.join('');
            break;

        case "Pascal Case":
            let words2 = textRef.split(' ');

            // Capitalize the first letter of each word
            for (let i = 0; i < words2.length; i++) {
                words2[i] = words2[i].charAt(0).toUpperCase() + words2[i].slice(1).toLowerCase();
            }

            commonResult = words2.join('');
            break;

        default:
            commonResult = "Error!";
    }

    result.textContent = commonResult;
}


// Not fully right!