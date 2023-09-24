export const initializeAccordion = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.accordion-header button')
    const content = document.querySelector('.accordion-content')
    const contentDiv = content.querySelector('div')
    const toggle = document.querySelector('.toggle img')

    const isCollapsed = () => header.getAttribute('aria-expanded') === 'false'
    const collapseContent = () => contentDiv.setAttribute('hidden', '')
    const expandContent = () => contentDiv.removeAttribute('hidden')

    const toggleAccordion = () => {
      content.classList.toggle('open')
      if (isCollapsed()) {
        expandContent()
        header.ariaExpanded = true
        toggle.setAttribute('src', './assets/x.svg')
      } else {
        header.ariaExpanded = false
        toggle.setAttribute('src', './assets/chevron-down.svg')
      }
    }

    header.addEventListener('click', toggleAccordion)
    contentDiv.addEventListener('click', (e) => {
      e.target.tagName !== 'BUTTON' && toggleAccordion()
    })

    content.addEventListener('transitionend', () => {
      isCollapsed() && collapseContent()
    })
  })
}
