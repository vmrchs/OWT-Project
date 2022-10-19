document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('buttonMenu')
    const navWrapper = document.getElementById('nav')
    
    toggleButton.addEventListener('click',() => {
      toggleButton.classList.toggle('close')
      navWrapper.classList.toggle('show')
    })
    
    navWrapper.addEventListener('click',e => {
      if(e.target.id === 'nav'){
        navWrapper.classList.remove('show')
        toggleButton.classList.remove('close')
      }
    })
});
