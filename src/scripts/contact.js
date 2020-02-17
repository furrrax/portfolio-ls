const contactForm = document.querySelector('.contact__form'),
    sendBtn = document.querySelector('.contact__button');

sendBtn.addEventListener('click', (event) => {
    event.preventDefault();

        if (validateForm(contactForm)) {

            const formData = new FormData(contactForm);
            const modalWindow = document.querySelector('.modal');
            const modalBtn = document.querySelector('.modal__btn');
            const modalText = document.querySelector('.modal__text');

            formData.append('name', contactForm.elements.name.value);
            formData.append('comment', contactForm.elements.message.value);
            formData.append('to', contactForm.elements.email.value);
            formData.append('phone', '8(095)640-30-07');

            modalBtn.addEventListener('click', function() {
                modalWindow.style.display = "none";
                document.body.style.overflow = 'auto';
            });

            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.send(formData);
            xhr.addEventListener('load', () => {
                
                //Очистка формы после отправки
                var formInputs = document.querySelectorAll('.contact__input');
                for (var i = 0;  i < formInputs.length; i++) {
                    formInputs[i].value = '';
                };

                //Проверка статуса отправки
                if(xhr.status >= 400) {
                    modalWindow.style.display = "flex";
                    modalText.textContent = 'Произошла ошибка';
                    document.body.style.overflow = 'hidden';
                } else {
                    modalWindow.style.display = "flex";
                    modalText.textContent = 'Письмо отправлено';
                    sendBtn.disabled = true;
                    document.body.style.overflow = 'hidden';

                    setTimeout(function(){
                        sendBtn.disabled = false;
                    },10000);
                }
            });
        }
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.email)) {
        valid = false;
    }
    if (!validateField(form.elements.message)) {
        valid = false;
    }
    
    return valid;
};

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
};