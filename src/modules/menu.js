const menu = () => {

    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const anchors = menu.querySelectorAll('ul>li>a[href*="#"]');
    const scrollBtn = document.querySelector('main>a[href*="#"]');


    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };


    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = scrollBtn.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });


    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });


    menuBtn.addEventListener('click', handleMenu);

    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', handleMenu);
    });
};



export default menu;