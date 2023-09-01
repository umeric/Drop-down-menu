import Select from './select.js'
//Testing imports
const selectElement = document.querySelectorAll('[data-custom]')

selectElement.forEach(selectElement => {
    new Select(selectElement)
})


function setupCustomElement(Select)