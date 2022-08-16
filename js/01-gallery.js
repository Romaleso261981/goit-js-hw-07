import { galleryItems } from "./gallery-items.js";

const refs = {
  galleryEl: document.querySelector(".gallery"),
};
const markupHtml = galleryItems
  .map(({ description, original, preview }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
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

refs.galleryEl.insertAdjacentHTML("afterbegin", markupHtml);
refs.galleryEl.addEventListener("click", openModal);

let instance;
function openModal(e) {
  e.preventDefault();
  if (e.target.tagName !== "IMG") return;
  const dataSource = e.target.dataset.source;

  instance = basicLightbox.create(
    `
        <img src='${dataSource}'>
    `,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();
}

function closeModal(e) {
  console.log(e.code );
  if(e.code !== "Escape") return 
  instance.close();
}
