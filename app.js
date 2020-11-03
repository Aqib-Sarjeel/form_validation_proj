const form = document.getElementById("form");
const username = document.getElementById("username");

const email = document.getElementById("email");

const password = document.getElementById("password");

const password2 = document.getElementById("password2");

// document.querySelector

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "control-form error";
  const small = formControl.querySelector("small");
  small.innerHTML = message;
}
function showSuccess(input) {
  const FormControl = input.parentElement;
  FormControl.className = "control-form success";
}



form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("form").addEventListener("submit",()=>{
      form.reset()
  })

  function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  //   console.log(username.value);
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is required");
    
  }else if(!isValidEmail(email.value)){
    showError(email, "Email is not valid");
  }

   else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
  console.log(password.value === password2.value);
  if (password.value === password2.value) {
    showSuccess(password2, "filled successfully");
  }else {
    showError(password2, "Password did not match");
  }
});
