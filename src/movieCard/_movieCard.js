import {renderImagePoster} from "./imagePoster.js";
import {renderMovieName} from "./movieName.js";
import {renderMovieRating} from "./movieRating.js";

export function renderMovieCard(data) {
    const rootElement = document.querySelector('#root');
    data.forEach(item => {
        //add elements
        const movieCard = document.createElement('div'),
              imagePoster = renderImagePoster(item.poster.url),
              movieName = renderMovieName(item.name),
              movieRating = renderMovieRating(item.rating.kp)
        //add className
        movieCard.classList.add('card')
        //append
        movieCard.append(imagePoster, movieName, movieRating)
        rootElement.append(movieCard)
    });
    return rootElement
}