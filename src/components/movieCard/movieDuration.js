export function renderMovieDuration(duration) {
    const movieDurationElement = document.createElement('span');
    movieDurationElement.innerText = `${duration} мин`;
    return movieDurationElement
}