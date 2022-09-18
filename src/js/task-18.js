import axios from 'axios';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';



const BASE_URL = "https://restcountries.com/v3.1/name/";
const BASE_URL_OPTIONS = "?fields=capital,population,languages,name,flags";
const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

inputEl.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

async function fetchCountries(name) {
    return await axios(`${BASE_URL}${name}${BASE_URL_OPTIONS}`)
        .then(res => {
            console.log(res.data)
        return res.data
        })
}

async function searchCountry(evt) {
    clearCountryList()

    const countryName = inputEl.value.trim();

    if (countryName === "") {
        clearCountryList()
        return
    }

    
    if (countryName) {
        fetchCountries(countryName)
            .then(renderCountriesList)
            .catch(failureRequest)
    }

}

async function clickCountry(evt) {
    const countryName = evt.target.textContent.trim();

    fetchCountries(countryName).then(renderCountry)
            .catch(failureRequest)
  
}

async function renderCountriesList(countries) {
    let renderList = '';
    if (countries.length >= 2 && countries.length <= 10) {
        countryList.addEventListener('click', clickCountry);

     renderList =  countries.map(({ name: { official }, flags: { svg } }) => {
        return `<li class="country__container">
<img src="${svg}" alt="${official}" width="60" height="40" class="country__img"/>
<span class ="country__text">${official}</span>
</li>`
     }).join();
        
        Notify.info('Please select one country')
    }
  
    
    if (countries.length === 1) {
    return   renderCountry(countries)
    }

    if (countries.length > 10) {
    Notify.info("Too many matches found. Please enter a more specific name.")
    }

    return countryList.insertAdjacentHTML('beforeend', renderList)
}

async function renderCountry(countries) {
    clearCountryList()
    const renderCountry = countries.map(({ name: { official }, flags: { svg }, capital, population }) => {
        const languages = Object.values(countries[0].languages).join(', ');

 return `<li class="country-card__item"><div class="country-card__container"><img src="${svg}" alt="${official}" width="60" height="40" class="country-card__img"/><h2 class ="country-card__title">${official}</h2></div>
     <p class="country-card__text">Capital:<span class="country-card__color">${capital}</span></p>
    <p class="country-card__text">Population:<span class="country-card__color">${population}</span></p>
    <p class="country-card__text">Languages:<span class="country-card__color">${languages}</span></p>`;
  }).join();
    
  
    Notify.success('Your request has been successfully processed');
    countryList.removeEventListener("click", clickCountry)
    clearInputValue()
    return countryInfo.insertAdjacentHTML('beforeend', renderCountry)
}

async function clearCountryList() {
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";
}

async function failureRequest() {
    Notify.failure("Oops, there is no country with that name")
}

async function clearInputValue() {
    inputEl.value = "";
}