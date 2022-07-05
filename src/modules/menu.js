const menu = () => {


    const menu = document.querySelector('menu');
    const mainBlock = document.querySelector('main');


    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };


    document.addEventListener('click', (e) => {
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

        } else if (e.target.closest('a[href*="#"]') && mainBlock.contains(e.target)) {
            e.preventDefault();
            const blockId = e.target.closest('a[href*="#"]').getAttribute('href');
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        } else if (!e.target.closest('.active-menu')) {
            menu.classList.remove('active-menu');
        }
    });
};



export default menu;

