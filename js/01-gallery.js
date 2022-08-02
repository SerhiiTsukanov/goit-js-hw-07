import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery")
const galleryIm = galleryMarkup(galleryItems);

function galleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return `
         <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }
    ).join("")
} 

gallery.insertAdjacentHTML('beforeend', galleryIm);
gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
   evt.preventDefault();

  if (evt.target.classList.contains("gallery__image")) {
    let instanse = basicLightbox.create(
      `<img src= ${evt.target.dataset.source} width="800" height="600">`,
      {
        onClose: (instanse) => {
          window.removeEventListener("keydown", onPressKeyESC);
        },
      }
    );
    instanse.src = evt.target.dataset.source;
    instanse.show();
    window.addEventListener("keydown", onPressKeyESC, { once: true });
    function onPressKeyESC(evt) {
      if (evt.code === "Escape") {
        instanse.close();
      }
    }
  }
}

