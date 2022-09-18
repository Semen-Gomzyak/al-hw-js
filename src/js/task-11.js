import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from 'basiclightbox';
// import 'src/styles/main';

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', showBigImage);
galleryEl.insertAdjacentHTML('beforeend', renderGallery(galleryItems));


function showBigImage(evt) {
    evt.preventDefault();

    showImageBasicLightbox(evt)
    }

function showImageBasicLightbox(evt) {
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`, {
        onShow: () => window.addEventListener('keydown', onEscKeyPress),
         onClose: () => window.removeEventListener('keydown', onEscKeyPress),
    });
    
    instance.show()

    function onEscKeyPress(evt) {
    if (evt.key === "Escape") {
        instance.close()
    }
}
}

function renderGallery(images) {
    return images.map(({ description, original, preview }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join(" ")

    }

