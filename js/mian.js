const $ = document;
const father = $.querySelector('body');
const mother = $.querySelector('html');

let open = false;

const sidebarElem = $.querySelector('.sidebar');
const mainElem = $.querySelector('.main');
const burgerMenu = $.querySelector('.burger-menu');
const closeMenu = $.querySelector('.close-menu');

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

