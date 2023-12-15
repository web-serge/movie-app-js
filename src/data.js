import {renderMovieCard} from "./movieCard/_movieCard.js";

const URL = `https://api.kinopoisk.dev/v1.4/movie`
const API_KEY = '6RF2H4Q-0TBMDVD-HWV0Y6D-Z88FYRB'

export async function getMovies() {
    const resp = await fetch(URL, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': API_KEY
        }
    })
    const respData = await resp.json()
    console.log(respData.docs)
    renderMovieCard(respData.docs)
}