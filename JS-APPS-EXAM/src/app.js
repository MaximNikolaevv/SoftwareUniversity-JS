import { render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"
import { HomePage } from "./Homepage.js"
import { Register } from "./Register.js"
import { TvShows } from "./TvShows.js"
import { Details } from "./Details.js"
import { Login } from "./Login.js";
import { Logout } from "./Logout.js";
import { Edit } from "./Edit.js"
import { del } from "./Delete.js";

document.querySelector(".user").style.display = "none"
const Main = document.querySelector("main");
Main.id = "root";

const root = document.getElementById("root");

function UpdateCTX(ctx, next) {

    ctx.render = (template) => renderer(template, root);
    next();
}


function renderer(template, root) {
    render(template, root);
}

document.addEventListener("DOMContentLoaded", () => {
    const isRegistered = sessionStorage.getItem("Registered") === "true";
    const isLoggedIn = sessionStorage.getItem("LoggedIn") === "true"

    if (isRegistered || isLoggedIn) {
        document.querySelector(".user").style.display = "block";
        document.querySelector(".guest").style.display = "none";
    } else {
        document.querySelector(".user").style.display = "none";
        document.querySelector(".guest").style.display = "block";
    }
});



page(UpdateCTX);
page("/", HomePage);
page("/TVShows", TvShows);
page("/Register", Register);
page("/Details/:id", Details);
page("/Login", Login);
page("/Logout", Logout);
page("/edit/:id", Edit);
page("/delete/:id", del)

page.start();
