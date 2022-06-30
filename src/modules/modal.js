import { animate } from "./helpers";

const modal = () => {
    const modal = document.querySelector('.popup');
    const modalForm = modal.querySelector(".popup-content");
    const buttons = document.querySelectorAll('.popup-btn');


    let width = document.documentElement.clientWidth;

    window.addEventListener("resize", () => {
        width = document.documentElement.clientWidth;
    });

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (width >= 768) {
                modalForm.style.opacity = 0;
                modalForm.style.top = "";
                modal.style.display = "block";
                animate({
                    duration: 800,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modalForm.style.top = 15 * progress + "%";
                        modalForm.style.opacity = progress;
                    }
                });
            } else {
                modal.style.display = "block";
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });

};

export default modal;