import { galleryItems } from "./gallery-items.js";

const refs = {
  galleryEl: document.querySelector(".gallery"),
};
const markupHtml = galleryItems
  .map(({ description, original, preview }) => {
    return `<div class="gallery__item">
    <a class="gallery__image" href="${preview}">
    <img class="gallery__image" src="${original}" alt="${description}" />
  </a>
</div>`;
  })
  .join("");
refs.galleryEl.insertAdjacentHTML("afterbegin", markupHtml);


new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  enableKeyboard: "true",
  docClose: "true"
});
