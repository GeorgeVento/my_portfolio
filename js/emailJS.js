export function initEmailJS() {
    const SERVICE_ID = 'service_eskwzv4';
    const USER_ID = '1SQJnbQyaGHq7IlAa';
    const TEMPLATE_NOTIFICATION = 'template_1aelipb';
    const TEMPLATE_AUTOREPLY = 'template_fc2hzu5';
    const REDIRECT_URL = './success.html';

    emailjs.init(USER_ID);

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const form = this;
        const submitBtn = document.getElementById('submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        const formMessage = document.getElementById('form-message');

        submitBtn.disabled = true;
        btnText.classList.add('hidden');
        btnLoader.classList.remove('hidden');
        formMessage.classList.add('hidden');

        emailjs.sendForm(SERVICE_ID, TEMPLATE_NOTIFICATION, form)
            .then(() => emailjs.sendForm(SERVICE_ID, TEMPLATE_AUTOREPLY, form))
            .then(() => {
                window.location.href = REDIRECT_URL;
            })
            .catch((error) => {
                console.error('Error:', error);
                submitBtn.disabled = false;
                btnText.classList.remove('hidden');
                btnLoader.classList.add('hidden');
                formMessage.textContent = 'An error occurred. Please try again.';
                formMessage.classList.remove('hidden', 'success');
                formMessage.classList.add('error');
            });
    });
}