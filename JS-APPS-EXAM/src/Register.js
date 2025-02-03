import { html } from "../node_modules/lit-html/lit-html.js"
import { DataService } from "./DataService.js"
import { UserHelper } from "./Utility.js";

const DashBoardTemplate = () => html`<section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/Login">Login</a></p>
          </form>
        </div>
      </section>`

export async function Register(ctx) {
  ctx.render(DashBoardTemplate())
  const form = document.querySelector('.register-form');

  if (form) {
    form.addEventListener("submit", OnClick)
    async function OnClick(e) {
      e.preventDefault();


      const formData = new FormData(form);
      const email = formData.get("email");
      const password = formData.get("password");
      const rePassword = formData.get("re-password");


      if (!email || !password || password !== rePassword) {
        window.alert("Please provide valid input and ensure passwords match.");
        return;
      }


      const info = { email, password };

      try {
        
        const userData = await DataService.Register(info);
        UserHelper.setUserData(userData);
        await DataService.Register(userData);
        
        sessionStorage.setItem("Registered", true);
        window.location.href = "/";
        console.log("Registration successful:", userData);
        return;
      } catch (error) {
        console.error("Registration failed:", error.message);
        window.alert(error.message);
      }

    }
  }
}