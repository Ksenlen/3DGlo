const calc = () => {
    const textCalcBlock = document.querySelectorAll('.calc-block input');
    const formName = document.querySelectorAll('input[name="user_name"]');
    const formPhone = document.querySelectorAll('input[name="user_phone"]');
    const formEmail = document.querySelectorAll('input[name="user_email"]');
    const userMessage = document.querySelector('#form2-message');



    textCalcBlock.forEach(textBlock => {
        textBlock.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/gi, '');
        });
    });

    formName.forEach(formName => {
        formName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, '');
        });
    });

    userMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, '');
    });


    formEmail.forEach(email => {
        email.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w\@\-\_\.\!\~\*\']+/, '');
        });
    });

    formPhone.forEach(phone => {
        phone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d\(\)\-]+/, '');
        });
    });

};

export default calc;