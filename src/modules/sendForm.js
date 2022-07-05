const sendForm = ({ formID, someElem = [] }) => {
    const form = document.getElementById(formID);
    const statusBlock = document.createElement("div");
    const modal = document.querySelector('.popup');
    const body = document.querySelector('body');
    const errorText = "Ошибка ...";
    const successText = "Спасибо! Наш менеджер с вами свяжется.";
    const errorValidation = "Данные не валидны...";

    const validate = () => {
        let success = true;
        const userPhone = form.querySelector("[name=user_phone]");
        const userName = form.querySelector("[name=user_name]");
        const userMessage = form.querySelector("[name=user_message]");


        // Сделать валидацию данных при отправке:

        //В поля name="user_phone" разрешить ввод только цифр, знака “+”, круглых скобок и дефис
        //В поля name="user_name" разрешить ввод только кириллицы и пробелов
        //В поля name="user_message" разрешить только кириллицу, пробелы, цифры и знаки препинания.
        if (userMessage) {
            if (/[а-яёА-ЯЁ\d\s\.\?\!\;\:\-]+/g.test(userMessage.value)) {
                success = true;
            } else {
                success = false;
            }
        }

        if (/[а-яА-Я\s]+/g.test(userName.value)) {
            success = true;
        } else {
            success = false;
        }

        if (/[\d\+\(\)\-]+/g.test(userPhone.value)) {
            success = true;
        } else {
            success = false;
        }

        return success;
    };

    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());
    };

    const submitForm = () => {
        const formElements = document.querySelectorAll("input");
        const formData = new FormData(form);
        const formBody = {};
        const total = document.getElementById("total");
        const preload = "<img src='./images/loading.gif'>";

        statusBlock.innerHTML = preload;
        statusBlock.style.color = 'white';
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);

            if (elem.type === "block") {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === "input") {
                formBody[elem.id] = element.value;
            }
        });

        if (validate()) {
            sendData(formBody)
                .then((data) => {
                    statusBlock.textContent = successText;
                    if (formID == "form3") {
                        setTimeout(() => {
                            modal.style.display = 'none';
                            body.style.overflow = "";
                            body.style.paddingRight = '';
                        }, 3000);
                    }
                    setTimeout(() => {
                        statusBlock.textContent = '';
                    }, 3000);
                    formElements.forEach((input) => {
                        input.value = "";
                        total.textContent = 0;
                    });
                })
                .catch((error) => {
                    statusBlock.textContent = errorText;
                });
        } else {
            alert("не правильно заполнены данные");
        }
    };

    try {
        if (!form) {
            throw new Error("верните форму на место");
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (validate()) {
                submitForm();
            } else {
                statusBlock.textContent = errorValidation;
            }
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;