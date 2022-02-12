let form = document.querySelector("#form");
let username = form['username'];
let email    = form['email'];
let password = form['password'];
let confirmpassword = form['confirmpassword']

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkInput();
    username.value = "";
    password.value = '';
    confirmpassword.value = '';
    email.value = "";
})

function checkInput(){
    let usernameValue = username.value.trim();
    let emailValue    = email.value.trim();
    let passwordValue    = password.value.trim();
    let confirmpasswordValue    = confirmpassword.value.trim();

    if(usernameValue === ''){
        errorMessage(username,"Username can't Be blank");
    }
    else{
        successMessage(username);
    }

    if(emailValue === ''){
        errorMessage(email, "Email Can't Be Black")
    }
    else if(!isEmail(emailValue)){
        errorMessage(email, 'Not a Valid Email');
    }
    else{
        successMessage(email);
    }

    if(passwordValue === ''){
        errorMessage(password,"Password Can't Be Empty");
    }
    else{
        successMessage(password);
    }

    if(confirmpasswordValue === ''){
        errorMessage(confirmpassword, "Confirm Password Can't Be Empty")
    }
    else if(passwordValue !== confirmpasswordValue){
        errorMessage(confirmpassword,"Confirm Password Doesn't Match")
    }
    else{
        successMessage(confirmpassword);
    }
}

function errorMessage(input, msg){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    small.innerText = msg;

    formControl.className = "form-control error"
}

function successMessage(input){
    let formControl = input.parentElement;
    formControl.className = "form-control success"
}

//email validation
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};