const calc = () => {
    const textCalcBlock = document.querySelectorAll('.calc-block input');
    const formName = document.querySelectorAll('input[name="user_name"]');
    const formPhone = document.querySelectorAll('input[name="user_phone"]');
    const formEmail = document.querySelectorAll('input[name="user_email"]');
    const userMessage = document.querySelector('#form2-message');


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