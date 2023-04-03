const $ = document;
const father = $.querySelector('body');
const mother = $.querySelector('html');

let open = false;

const sidebarElem = $.querySelector('.sidebar');
const mainElem = $.querySelector('.main');
const burgerMenu = $.querySelector('.burger-menu');
const closeMenu = $.querySelector('.close-menu');

const dropElems = $.querySelectorAll('.drop-item');
const subMenusElem = $.querySelectorAll('.submenu');

console.log(dropElems);

if(window.innerWidth <= 992){
    open = true;
    sidebarElem.classList.add('inactive');
    mainElem.classList.add('active');
}


let toggleFunc = () => {
    open = !open;
    if(open){
        sidebarElem.classList.add('inactive');
        mainElem.classList.add('active');
    }else {
        sidebarElem.classList.remove('inactive');
        mainElem.classList.remove('active');
    }
    console.log(open)
}


burgerMenu.addEventListener('click',toggleFunc);
closeMenu.addEventListener('click',toggleFunc);

dropElems.forEach((dropElem) => {
    dropElem.addEventListener('click', () => {
       dropElem.nextElementSibling.classList.toggle('inactive')
    })
})

