export function renderMovieLogo() {
    const logoLinkElement = document.createElement('a');
    logoLinkElement.classList.add('logo');

    const logoNameElement = document.createElement('h2');
    logoNameElement.classList.add('logo__name');
    logoNameElement.innerText = 'WINK';

    const logoImageElement = document.createElement('img');
    logoImageElement.classList.add('logo__image');
    logoImageElement.src = './assets/arrow.svg';

    logoLinkElement.append(logoNameElement, logoImageElement);
    
    return logoLinkElement
}