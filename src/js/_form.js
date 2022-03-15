const form = document.querySelector("form#login");
const inputMail = form.querySelector("input[name=email]");
const inputPassword = form.querySelector("input[name=password]");
const formMessage = document.querySelector(".form-message");
const modalContent = document.querySelector(".modal_content");
const modal = document.querySelector(".modal");
const mask = document.querySelector(".mask");

const Validation = function(){

form.setAttribute("novalidate", true);

form.addEventListener("change", e => {
  if(inputPassword.checkValidity()) {
       inputPassword.classList.remove("invalid");
       inputPassword.classList.add("valid");
   }
   if(inputMail.checkValidity()) {
     inputMail.classList.remove("invalid");
     inputMail.classList.add("valid");
   }
 });

form.addEventListener("submit", e => {
  e.preventDefault();
  
  let formErrors = [];

  if (!inputPassword.checkValidity()) {
      formErrors.push("Password");
      inputPassword.classList.remove("valid");
      inputPassword.classList.add("invalid");
  }

  if (!inputMail.checkValidity()) {
      formErrors.push("Address e-mail");
      inputMail.classList.remove("valid");
      inputMail.classList.add("invalid");
  }

  if (!formErrors.length) {
    
    modalContent.innerHTML = `
          <div class="success">
          <h4>SUCCESS</h4>
          <i class="fa fa-check-circle-o" aria-hidden="true"></i>
          </div>
          `;

    setTimeout(function(){ 
    modal.style.display = 'none';
    mask.style.display = 'none';
    }, 3000);
      e.target.submit();
  } else {
      formMessage.innerHTML = `
          <h4 class="form-error-title">Wypełnij te pola:</h4>
          <ul class="form-error-list">
              ${formErrors.map(el => `<li>${el}</li>`).join("")}
          </ul>
      `;
  }
});
}

export { Validation }