export function renderMovieName(movieName) {
    const movieNameElement = document.createElement('h3');
    movieNameElement.innerText = movieName;
    return movieNameElement
}