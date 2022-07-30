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
</div>`
     }

    ).join('')
} 

gallery.insertAdjacentHTML('beforeend', galleryIm);
gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefuolt();
  if (evt.classList.contains('.gallery__image')) {
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataser.sourse}" width="800" height="600">
`)

instance.show()
  }

}




console.log(galleryItems);
