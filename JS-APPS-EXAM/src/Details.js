import { html } from "../node_modules/lit-html/lit-html.js"
import UserService from "./UserService.js";

const dashboardTemplate = (movies, User1, User2, getButtons) => html`<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${movies.imageUrl}" alt="Movie Poster" />
      <div id="details-text">
        <h2 id="details-title">${movies.title}</h2> 
        <div id="info-wrapper">
          <div id="description">
            <p id="details-description">${movies.details}</p>
          </div>
        </div>
      </div> 
    </div> 
  </section> ${User1 || User2 ? getButtons(movies._id) : ""}`;


function getButtons(id) {

  return html
    `<div id="action-buttons">
    <a href="/edit/${id}" id="edit-btn">Edit</a> 
    <a href="/delete/${id}" id="delete-btn">Delete</a>
    </div>`;

}


export async function Details(ctx) {
  const id = ctx.params.id;
  const User1 = sessionStorage.getItem("Registered");
  const User2 = sessionStorage.getItem("LoggedIn");
  const userData = await UserService.ShowDetails(id);
  ctx.render(dashboardTemplate(userData, User1, User2, getButtons));
}