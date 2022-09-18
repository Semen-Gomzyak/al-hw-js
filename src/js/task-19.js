import axios from "axios";
import { Notify } from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import 'lazysizes';
import throttle from "lodash.throttle";


const BASE_URL = 'https://pixabay.com/api/?key=29686062-6a845a2f1faff990e4be6d419&';
const BASE_URL_OPTIONS = "&image_type=photo&orientation=horizontal&safesearch=true";

let totalPages = 0;
let pageNumber = 0;

const formEl = document.querySelector(".search-form");
const inputEl = document.querySelector("#search-box");
const galleryEl = document.querySelector(".gallery__pixabay");


formEl.addEventListener("submit", submitForm);

const options = {
  simpleLightBox: {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  },
  intersectionObserver: {
    root: null,
    threshold: 1,
  },
};

let gallery = new SimpleLightbox('.gallery__pixabay a', options);



async function submitForm(evt) {
    evt.preventDefault()
    resetPages()
    
    galleryEl.innerHTML = "";
    
const categoryName = formEl.searchQuery.value.trim()
    
    if (categoryName === "") {
    return
    }
    
    if (categoryName) {
        searchCategory(categoryName);
        window.addEventListener(
    "scroll",  throttle(() => {

    const documentRect = document.documentElement.getBoundingClientRect();

        if (documentRect.bottom < document.documentElement.clientHeight + 700) {
            if (pageNumber === totalPages) {
            return  Notify.warning("We're sorry, but you've reached the end of search results.")
            }

           return searchCategory(categoryName) 
        }
  }, 300)
);
    }
}


async function renderGalleryImages(images) {
    const imagesList = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<div class="photo-card">
  <a class="gallery-item" href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery__images lazyload"/>
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes: <span class='gallery-text'>${likes}</span></b>
      </p>
      <p class="info-item">
        <b>Views: <span class='gallery-text'>${views}</span></b>
      </p>
      <p class="info-item">
        <b>Comments: <span class='gallery-text'>${comments}</span></b>
      </p>
      <p class="info-item">
        <b>Downloads: <span class='gallery-text'>${downloads}</span></b>
      </p>
    </div>
  </div>`;
    })
.join()

    galleryEl.insertAdjacentHTML('beforeend', imagesList);
    return gallery.refresh()
}




async function notFoundImages() {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.")
}

function resetPages() {
    pageNumber = 0;
}

async function fetchCategory(name) {
  return await axios(`${BASE_URL}q=${name}${BASE_URL_OPTIONS}&page=${pageNumber}`).then(res => {
        return res.data
        })
}

async function searchCategory(name) {
    pageNumber += 1;
    const responseImages = await fetchCategory(name)
    try {
        totalPages = responseImages.totalHits / 20;

        if (responseImages.total === 0) {
                notFoundImages()
            }
            
        if (pageNumber === 1) {
            
            
        Notify.info(`Hooray! We found ${responseImages.totalHits} images.`)
    }
    
        renderGalleryImages(responseImages.hits);
    } catch (error) {
        Notify.info(`Reqest error`)
    }
}