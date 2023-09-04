<script>
  (function () {
    "use strict";

    let forms = document.querySelectorAll('.php-email-form');

    forms.forEach(function (e) {
      e.addEventListener('submit', function (event) {
        event.preventDefault();

        let thisForm = this;

        let templateId = "template_02eb23k"; // Replace with your Email.js template ID

        let formData = new FormData(thisForm);

        emailjs.sendForm("default_service", templateId, formData).then(
          function (response) {
            thisForm.querySelector('.loading').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.add('d-block');
            thisForm.reset();
          },
          function (error) {
            displayError(thisForm, "Oops! An error occurred, please try again later.");
          }
        );
      });
    });

    function displayError(thisForm, error) {
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.error-message').innerHTML = error;
      thisForm.querySelector('.error-message').classList.add('d-block');
    }
  })();
</script>
