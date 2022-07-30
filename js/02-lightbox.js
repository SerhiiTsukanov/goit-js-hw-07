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



console.log(galleryItems);
