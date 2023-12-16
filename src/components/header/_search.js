import {renderInputSearchElement} from "./input-search.js";

export function renderSearch() {
    const searchContainerElement = document.createElement('div');
    searchContainerElement.classList.add('header__search');

    const inputIconSearchElement = document.createElement('img');
    inputIconSearchElement.classList.add('header__search-icon')
    inputIconSearchElement.src = './assets/search.svg';

    searchContainerElement.append(renderInputSearchElement(), inputIconSearchElement)
    return searchContainerElement;
}