import { html } from "../node_modules/lit-html/lit-html.js";
import UserService from "./UserService.js"

async function Data() {
  const movieData = await UserService.DashBoard();
  return movieData;
}

const dashboardTemplate = (movies) => html`
  <h2>Users Recommendations</h2>
  <section id="shows">
    ${movies.map((movie) => html`
        <div class="show">
          <img src="${movie.imageUrl}" alt="${movie.title}" />
          <div class="show-info">
            <h3 class="title">${movie.title}</h3>
            <p class="genre">Genre: ${movie.genre}</p>
            <p class="country-of-origin">Country of Origin: ${movie.country}</p>
            <a class="details-btn" href="/Details/${movie._id}" data-id="${movie._id}">Details</a>
          </div>
        </div>
      `
)}
  </section>
`;


export async function TvShows(ctx) {
  const movies = await Data();
  ctx.render(dashboardTemplate(movies));
}