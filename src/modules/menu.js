const menu = () => {

    
    const menu = document.querySelector('menu');
    const mainBlock = document.querySelector('main');


    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };


    document.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.closest('.menu') ||
            e.target.classList.contains("close-btn")) {
            e.preventDefault();
            handleMenu();
        } else if ((e.target.closest('menu') && e.target.closest('a[href*="#"]'))) {
            handleMenu();
            e.preventDefault();
            const blockId1 = e.target.closest('a[href*="#"]').getAttribute('href');
            document.querySelector(blockId1).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        //Здесь нужно проверять принадлежит ли клик блоку mainBlock, а не существует ли класс
        } else if (e.target.closest('a[href*="#"]') && mainBlock.contains(e.target)) {
            e.preventDefault();
            const blockId = e.target.closest('a[href*="#"]').getAttribute('href');
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        //Это условие нужно перенести под конец, потому что на нём завершаются проверки, так как любой клик будет соответсовать не открытому меню
        } else if (menu.classList.contains('active-menu')) {
            menu.classList.remove('active-menu');
        }
    });
};



export default menu;

  
    // scrollBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const blockID = scrollBtn.getAttribute('href').substr(1);

    //     document.getElementById(blockID).scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start'
    //     });
    // });


    // anchors.forEach(anchor => {
    //     anchor.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         const blockID = anchor.getAttribute('href').substr(1);

    //         document.getElementById(blockID).scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         });
    //     });
    // });


    
    // menuBtn.addEventListener("click", handleMenu);

    // menu.addEventListener("click", (e) => {
    //     console.log(e.target);
    //     if (
    //         e.target.closest(`a`) ||
    //         e.target.classList.contains("close-btn")
    //     ) {
    //         handleMenu();
    //     }
    // });