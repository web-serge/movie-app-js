export function renderImagePoster(posterUrl) {
    const imagePoster = document.createElement('img')
    imagePoster.src = posterUrl
    return imagePoster
}