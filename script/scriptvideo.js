const menuToggle = document.querySelector('.hambuger-menu input');
const nav = document.querySelector('.sidebar');
const content = document.querySelector('.container-video');
const blackOpenClose = document.querySelector('.black');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
    content.classList.toggle('sidebar-content');
    blackOpenClose.classList.toggle('black-openclose');
})

blackOpenClose.onclick = function() {
    nav.classList.remove('slide');
    content.classList.remove('sidebar-content');
    blackOpenClose.classList.remove('black-openclose');
}

const membukaSearch = document.querySelector('.membuka-search');
const searchInput = document.querySelector('.search-input');
const leftNav = document.querySelector('.left-nav');
const rightNav = document.querySelector('.right-nav');
const searchButton = document.querySelector('.search-button');


membukaSearch.onclick = function() {
    membukaSearch.classList.toggle('close-search');
    searchInput.classList.toggle("open-search");
    leftNav.classList.toggle('close-left');
    rightNav.classList.toggle('close-right');
    searchButton.classList.toggle('searchB-normal');
}


const buttonReplies = document.querySelector('.replies');
const peopleReplies = document.querySelector('.people-replies');
const buttonImgReplies = document.querySelector('.replies img');

buttonReplies.addEventListener('click', function(){
    peopleReplies.classList.toggle('open-replies')
    buttonImgReplies.classList.toggle('triangle-replies')
})