export function renderImagePoster(posterUrl) {
    const imagePosterContainer = document.createElement('div')
    const imagePoster = document.createElement('img')
    imagePoster.src = posterUrl
    imagePosterContainer.append(imagePoster)
    return imagePosterContainer
}