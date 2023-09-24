export const initializeButton = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.primary-button')

    button.addEventListener('click', () => {
      alert('🧌')
    })
  })
}
