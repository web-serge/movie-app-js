import {getData, subscribe} from "./data.js";
import {renderMovieCard} from "./components/movieCard/_movieCard.js";
import {renderHeader} from "./components/header/header.js";

function renderApp() {
    const rootElement = document.querySelector('#root')
    rootElement.innerHTML = '';

    const data= getData();
    const Header = renderHeader()
    const movieCards = renderMovieCard(data)

    rootElement.append( Header, movieCards)
}

renderApp()
subscribe(renderApp)