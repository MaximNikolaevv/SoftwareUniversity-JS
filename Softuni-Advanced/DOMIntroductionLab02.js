function extractText() {

    const items = document.querySelectorAll("ul li");
    const result = document.getElementById("result");
    mergedArr = [];

    let textContent = '';
    for (let item of items) {

        textContent += item.textContent + ' ';
    }

    result.textContent = textContent.trim();
    result.style.display = "block";

}