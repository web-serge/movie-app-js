import {renderMovieLogo} from "./logo.js";
import {renderSearch} from "./_search.js";

export function renderHeader() {
    const headerElement = document.createElement('header');
    headerElement.classList.add('header');
    headerElement.append(renderMovieLogo(), renderSearch());
    return headerElement;
}