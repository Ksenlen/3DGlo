const modal = () => {
    const modal = document.querySelector('.popup');
    const modalForm = modal.querySelector(".popup-content");
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

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
                animationModal(true);
            } else {
                modal.style.display = "block";
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    let animationModal = (showType) => {
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;

            if (timePassed >= 500) {
                clearInterval(timer);
                return;
            }
            if (showType) {
                showAnimation(timePassed);
                showModal(timePassed);
            } else {
                hideModal(timePassed);
            }
        }, 20);

        function showAnimation(timePassed) {
            modalForm.style.top = timePassed / 50 + "%";
        }
        function showModal(timePassed) {
            modalForm.style.opacity = timePassed / 500;
        }
        function hideModal(timePassed) {
            modalForm.style.opacity = 1 - timePassed / 500;
            if (modalForm.style.opacity < 0.1) {
                modal.style.display = "none";
            }
        }
    };
};

export default modal;