function toggle() {

    let ExtraRef = document.getElementById("extra");
    let Button = document.querySelector(`[class="button"]`)

    if (ExtraRef.style.display === "none" || ExtraRef.style.display === "") {
        ExtraRef.style.display = "block";
        Button.textContent = "Less";
    } else {
        ExtraRef.style.display = "none";
        Button.textContent = "More";
    }

}