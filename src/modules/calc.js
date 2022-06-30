const calc = (price = 100) => {
    const textCalcBlock = document.querySelectorAll('.calc-block input');
    const formName = document.querySelectorAll('input[name="user_name"]');
    const formPhone = document.querySelectorAll('input[name="user_phone"]');
    const formEmail = document.querySelectorAll('input[name="user_email"]');
    const userMessage = document.querySelector('#form2-message');
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    let calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');
    // const time = 10 // ms
    // let step = 100;

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcTypeValue && calcSquareValue) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
            //outNum(totalValue)

        } else {
            totalValue = 0;
        }

        total.textContent = totalValue;
    };

    // const outNum = (num) => {
    //     if (num > 10000) { step = 2500; }
    //     let n = 0;
    //     let interval = setInterval(() => {
    //         n = n + step;
    //         if (n == num) {
    //             clearInterval(interval);
    //         }
    //         total.innerHTML = n;
    //     }, 0.6);

    // };

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType ||
            e.target === calcSquare ||
            e.target === calcCount ||
            e.target === calcDay) {
            countCalc();
        }

    });


    const blur = (e) => {
        e.target.value = e.target.value.replace(/^[\s\-]+/g, '');
        e.target.value = e.target.value.replace(/[\s\-]+$/g, '');
        e.target.value = e.target.value.replace(/\s{2,}/g, ' ');
        e.target.value = e.target.value.replace(/\-{2,}/g, '-');
        e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
    };
    textCalcBlock.forEach(textBlock => {
        textBlock.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/gi, '');
        });

    });


    formName.forEach(formName => {
        formName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, '');
        });
        formName.addEventListener('blur', blur);
    });

    userMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, '');
    });
    userMessage.addEventListener('blur', blur);

    formEmail.forEach(email => {
        email.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w\@\-\_\.\!\~\*\']+/, '');
        });
        email.addEventListener('blur', blur);
    });

    formPhone.forEach(phone => {
        phone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d\(\)\-]+/, '');
        });
        phone.addEventListener('blur', blur);
    });

};

export default calc;

