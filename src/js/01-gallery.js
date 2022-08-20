import { galleryItems } from "./gallery-items.js";

// Change code below this line

const listForRender = document.querySelector(".gallery");
const imageMarkup = createGalleryMarkup(galleryItems);
listForRender.insertAdjacentHTML("beforeend", imageMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `  <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

listForRender.addEventListener("click", onListForRenderClick);

function onListForRenderClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const bigImgSrc = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${bigImgSrc}" width="800" height="600" >
`);
  instance.show(window.addEventListener("keydown", escHandler));

  function escHandler(e) {
    if (e.code === "Escape") {
      instance.close(window.removeEventListener("keydown", escHandler));
    }
  }
}
