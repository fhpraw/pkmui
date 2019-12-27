const loginForm = document.querySelector('#login-form');
const regForm = document.querySelector('#reg-form');
const showBtn = document.querySelector('#showbtn');

/*
form pointer 0 --> show login form
form pointer 1 --> show reg form
*/
function switchForm(formPointer) {
  if (formPointer === 0) {
    loginForm.style.display = "block";
    regForm.style.display = "none";
  } else if (formPointer === 1) {
    loginForm.style.display = "none";
    regForm.style.display = "block";
  }
}
