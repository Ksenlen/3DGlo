const menu = () => {

    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const anchors = menu.querySelectorAll('a[href*="#"]');
    const scrollBtn = document.querySelector('#scroll-btn[href*="#"]');


    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };


    const scrollTo = () => {
        const blockID = this.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    };

    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollTo();
    });


    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            scrollTo();
        });
    });


    menuBtn.addEventListener('click', handleMenu);

    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', handleMenu);
    });
};



export default menu;