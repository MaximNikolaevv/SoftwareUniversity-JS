function passwordValidator(pass) {
    let Enoughlength = false;
    let EnoughLettersDigit = false;
    let EnoughDigits = false;
    let digit = 0;

    IsEnoughlength(pass);
    IsEnoughLettersDigit(pass);
    IsEnoughDigits(pass);

    if (Enoughlength && EnoughLettersDigit && EnoughDigits) {
        console.log("Password is valid");
    }

    function IsEnoughlength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            Enoughlength = true;
        } else {
            console.log("Password must be between 6 and 10 characters");
        }
    }

    function IsEnoughLettersDigit(pass) {
        for (let char of pass) {
            let AsciiNum = char.charCodeAt();
            if (
                (AsciiNum >= 65 && AsciiNum <= 90) ||
                (AsciiNum >= 97 && AsciiNum <= 122) ||
                (AsciiNum >= 48 && AsciiNum <= 57)
            ) {
                EnoughLettersDigit = true;
            } else {
                console.log("Password must consist only of letters and digits");
                break;
            }
        }
    }

    function IsEnoughDigits(pass) {
        for (let char of pass) {
            let AsciiNum = char.charCodeAt();
            if (AsciiNum >= 48 && AsciiNum <= 57) {
                digit++;
            }
        }

        if (digit < 2) {
            console.log("Password must have at least 2 digits");
        } else {
            EnoughDigits = true;
        }
    }
}
