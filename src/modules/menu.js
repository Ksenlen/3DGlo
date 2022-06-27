const menu = () => {

    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const anchors = menu.querySelectorAll('ul>li>a[href*="#"]');
    const scrollBtn = document.querySelector('main>a[href*="#"]');

    const main = document.querySelector('main');


    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };


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

    document.addEventListener('click', (e) => {

        if (e.target.closest('.menu') ||
            (e.target.closest('menu') && e.target.closest('a')) ||
            e.target.classList.contains("close-btn")) {
            e.preventDefault();
            handleMenu();
        } else if (!e.target.closest('.active-menu')) {
            menu.classList.remove('active-menu');
        }
    });

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



};



export default menu;