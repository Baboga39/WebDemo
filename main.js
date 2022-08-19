//Menu
const Menu =document.querySelector('.navbar__links');
const MenuBtn= document.querySelector('.navbar__icons');
const overlay = document.querySelector('#overlay');
MenuBtn.addEventListener('click',()=>
    {
        Menu.classList.toggle("navbar__open");
        MenuBtn.classList.toggle("open");
        overlay.classList.toggle("show")
    }
);
overlay.addEventListener('click',()=>
    {
        Menu.classList.toggle("navbar__open");
        MenuBtn.classList.toggle("open");
        overlay.classList.toggle("show");
    }
);