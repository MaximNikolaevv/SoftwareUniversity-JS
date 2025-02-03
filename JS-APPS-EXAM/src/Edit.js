import { html } from "../node_modules/lit-html/lit-html.js";
import UserService from "./UserService.js";
import { UserHelper } from "./Utility.js";

const dashboardTemplate = (movie) => html`<section id="edit">
    <div class="form">
      <h2>Edit Show</h2>
      <form class="edit-form">
        <input type="text" name="title" id="title" placeholder="TV Show title" value="${movie?.title || ''}" />
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" value="${movie?.imageUrl || ''}" />
        <input type="text" name="genre" id="genre" placeholder="Genre" value="${movie?.genre || ''}" />
        <input type="text" name="country" id="country" placeholder="Country" value="${movie?.country || ''}" />
        <textarea id="details" name="details" placeholder="Details" rows="2" cols="10">${movie?.details || ''}</textarea>
        <button type="submit">Edit Show</button>
      </form>
    </div>
  </section>`;

export async function Edit(ctx) {
  debugger
  const id = ctx.params.id;
  const MovieInfo = await UserService.ShowDetails(id);

  ctx.render(dashboardTemplate(MovieInfo));

  setTimeout(() => {
    const form = document.querySelector('.edit-form');
    if (!form) {
      console.error("Формата не е намерена!");
      return;
    }

    form.addEventListener("submit", async function onSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const updatedShow = {
        _ownerId: MovieInfo._ownerId,
        title: formData.get('title'),
        imageUrl: formData.get('image-url'),
        genre: formData.get('genre'),
        country: formData.get('country'),
        details: formData.get('details'),
        _createdOn: MovieInfo._createdOn,
        _id: MovieInfo._id,


      };

      try {
        const UpdateInfo = await UserService.EditShowRecord(id, updatedShow);
        UserHelper.setUserData(UpdateInfo);
        window.location.href = `details/${id}`;
      } catch (err) {
        alert('Error: ' + err.message);
      }
    });
  }, 0);
}

