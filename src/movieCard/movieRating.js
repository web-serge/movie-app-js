export function renderMovieRating(data) {
    const ratingElement = document.createElement('div');
    ratingElement.classList.add('card__rating');
    ratingElement.innerText = data.toFixed(1)
    return ratingElement
}