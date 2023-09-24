const menuButton = document.getElementById('btn')
const ul = document.querySelector('ul')
menuButton.addEventListener('click', ()=>{
    ul.classList.toggle('active')
})