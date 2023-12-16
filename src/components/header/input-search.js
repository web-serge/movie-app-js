import {movieSearch, searchMovie} from "../../data.js";

export function renderInputSearchElement() {
    const inputSearchElement = document.createElement('input');
    inputSearchElement.classList.add('input');
    inputSearchElement.placeholder = 'Search movies';
    inputSearchElement.value = movieSearch

    inputSearchElement.addEventListener('input', searchMovie);

    setTimeout(() => {
        inputSearchElement.focus()
    })

    return inputSearchElement;
}