export function renderButton(elementValue, innerText) {
    const buttonElement = document.createElement(elementValue);
    buttonElement.classList.add('button')
    buttonElement.innerText = innerText;
    return buttonElement
}