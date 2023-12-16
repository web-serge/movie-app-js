export function renderMovieGenre(genres) {
    const genreContainerElement = document.createElement('ul');
    genreContainerElement.classList.add('card__genre')
    genres.forEach(genre => {
        const genreItemElement = document.createElement('li');
        genreItemElement.classList.add('card__genre-item')
        genreItemElement.innerText = genre.name;
        genreContainerElement.append(genreItemElement)
    })
    return genreContainerElement
}