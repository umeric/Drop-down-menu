export default class Select {
    constructor(element) {
        this.element = element;
        this.customElement = document.createElement('div')
        this.labelElement = document.createElement('span')
        this.optionsCustomElement = document.createElement('ul')
        element.after(this.customElement)
    }
}
function setupCustomElement(select) {
    select.customElement.classList.add('custom-select-container')

    select.labelElement.classList.add('custom-select-value')
    select.customElement.append(select.labelElement)

    select.optionsCustomElement.classList.add('custom-select-options')
    select.customElement.append(select.optionsCustomElement)
}