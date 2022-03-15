const loginBtn = document.querySelector('.header__login-btn' );
const modal = document.querySelector(".modal");
const mask = document.querySelector(".mask");

const Modal = () => {
    loginBtn.addEventListener('click',function(){
        modal.style.display = 'block';
        mask.style.display = 'block';
    });
}

export { Modal }