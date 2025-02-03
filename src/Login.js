import { html } from "../node_modules/lit-html/lit-html.js"
import { DataService } from './DataService.js';

const dashboardTemplate = () => html
  `<section id="login">
        <div class="form">
          <h2>Login</h2>
          <form class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/Register">Create an account</a>
            </p>
          </form>
    </div>
    </section>`

export async function Login(ctx) {
  ctx.render(dashboardTemplate())
  const form = document.querySelector('.login-form');

  if (form) {

    form.addEventListener("submit", OnClick);

    async function OnClick(e) {
      e.preventDefault();

      const formData = new FormData(form);
      const email = formData.get("email");
      const password = formData.get("password");

      const userData = ({ email, password });

      try {

        sessionStorage.setItem("LoggedIn", true);
        await DataService.LogIn(userData);
        window.location.href = "/";
        console.log("Login successful:", userData);
        return;

      } catch (error) {

        console.error("LogIn failed:", error.message);
        window.alert(error.message);
      }

    }
  }


}