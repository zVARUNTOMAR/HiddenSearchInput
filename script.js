const searchBtn = document.querySelector('.btn');
const inputSearch = document.querySelector('.search');
const input = document.querySelector('.input');


searchBtn.addEventListener('click',()=>{
    inputSearch.classList.toggle('active');
    input.focus();
});