import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', renderGallery(galleryItems));

function renderGallery(images) {
    return images.map(({ description, original, preview }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join(" ")
}


let gallery = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: "alt",
        
    });

