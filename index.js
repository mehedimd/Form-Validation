
let form = document.querySelector("#form");
let username = form['username'];
let email    = form['email'];
let password = form['password'];
let confirmpassword = form['confirmpassword']

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkInput();


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

//---password show hide
let show = document.querySelector('.bx-show');
let hide = document.querySelector('.bx-hide');

    show.addEventListener('click', function(e){
        password.type ="text";
        let myParent = password.parentElement;
            myParent.className = "form-control hide"

    });

    hide.addEventListener('click', function(e){
        password.type ="password";
        let myParent = password.parentElement;
            myParent.className = "form-control show"
    

    });

    //----confirm pass hide
    let showConfirm = document.querySelector('#confirmShow');
    let hideConfirm = document.querySelector('#confirmHide');

    showConfirm.addEventListener('click', function(e){
        confirmpassword.type ="text";
        let myParent = confirmpassword.parentElement;
            myParent.className = "form-control hide"

    });

    hideConfirm.addEventListener('click', function(e){
        confirmpassword.type ="password";
        let myParent = confirmpassword.parentElement;
            myParent.className = "form-control show"
    

    });



    // password stronger

    password.addEventListener('keyup',function(e){
        let input = e.target.value;
        console.log(input)
        let stongPassword = document.querySelector('#stongPassword');
        // //password strong
                
            if(input.match(/[a-z]+/) && input.match(/[A-Z]+/) && input.match(/[$@#&!]+/) && input.match(/[0-9]+/)){    
                stongPassword.innerText = "Very Strong Password";
                stongPassword.className = "stongPassword vstrong"
            }
            else  if((input.match(/[a-z]+/) && input.match(/[A-Z]+/) && input.match(/[$@#&!]+/)) || (input.match(/[0-9]+/) && input.match(/[A-Z]+/) && input.match(/[$@#&!]+/)) || (input.match(/[a-z]+/) && input.match(/[0-9]+/) && input.match(/[$@#&!]+/)) || (input.match(/[a-z]+/) && input.match(/[A-Z]+/) && input.match(/[0-9]+/))){    
                stongPassword.innerText = "Strong Password"
                stongPassword.className = "stongPassword strong"
            }
            else  if((input.match(/[a-z]+/) && input.match(/[A-Z]+/)) || (input.match(/[$@#&!]+/) && input.match(/[a-z]+/)) || (input.match(/[0-9]+/) && input.match(/[a-z]+/)) || (input.match(/[$@#&!]+/) && input.match(/[A-Z]+/)) || (input.match(/[$@#&!]+/) && input.match(/[0-9]+/)) || (input.match(/[A-Z]+/) && input.match(/[0-9]+/))){    
                stongPassword.innerText = "Nearby Strong Password ";
                stongPassword.className = "stongPassword weak"
            }
            else if(input.match(/[a-z]+/) || input.match(/[A-Z]+/) || input.match(/[$@#&!]+/) || input.match(/[0-9]+/)){
                stongPassword.innerText = " Weeak Password "
                stongPassword.className = "stongPassword vweak"
            }
            else{
                stongPassword.innerText = ""
            }
            
    })
    


