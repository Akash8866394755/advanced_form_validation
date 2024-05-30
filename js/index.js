window.onload = function() {
    // firstname validation start
    var firstname = document.getElementById("firstname");
    firstname.onblur = function firstnameEmpty() {
        var firstnameValue = firstname.value;

        if(firstnameValue == "") {

            var firstnameWarning = document.getElementById("firstname-wrn");
            firstname.style.borderBottom = "1px solid red";
            firstname.style.transition = "0.3s";
            firstnameWarning.style.display = "block";
            firstnameWarning.className = "animate__animated animate__fadeIn";
            
            var firstnameMessage = document.getElementById("firstname-message");
            firstnameMessage.style.display = "block";
            firstnameMessage.className = "animate__animated animate__fadeIn";
        }

        firstname.onclick = function() {
            var firstnameWarning = document.getElementById("firstname-wrn");
            firstnameWarning.style.display = "none";
            firstname.style.borderBottom = "1px solid #ccc";
            firstnameMessage.style.display = "none";

            firstname.onblur = function() {
                firstnameEmpty();
            }
        }
    }

    // lastname validation start
    var lastname = document.getElementById("lastname");
    lastname.onblur = function lastnameEmpty() {
        var lastnameValue = lastname.value;

        if(lastnameValue == "") {
            var lastnameWarning = document.getElementById("lastname-wrn");
            lastnameWarning.style.display = "block";
            lastnameWarning.className = "animate__animated animate__fadeIn";

            var lastnameMessage = document.getElementById("lastname-message");
            lastnameMessage.style.display = "block";
            lastnameMessage.className = "animate__animated animate__fadeIn";

            lastname.style.borderBottom = "1px solid red";
            lastname.className = "animate__animated animate__fadeIn";

            lastname.onclick = function() {
                lastnameWarning.style.display = "none";
                lastnameMessage.style.display = "none";
                lastname.style.borderBottom = "1px solid #ccc";


                lastname.onblur = function() {
                    lastnameEmpty();
                }
            }
        }
    }

    // email address validation start
    var email = document.getElementById("email");
    email.onblur = function emailEmpty() {
        var emailValue = email.value;

        if(emailValue == "") {
            var emailWarning = document.getElementById("email-wrn");
            emailWarning.style.display = "block";
            emailWarning.className = "animate__animated animate__fadeIn";

            var emailMessage = document.getElementById("email-message");
            emailMessage.style.display = "block";
            email.className = "animate__animated animate__fadeIn";

            email.style.borderBottom = "1px solid red";
            email.className = "animate__animated animate__fadeIn";

            email.onclick = function() {
                emailWarning.style.display = "none";
                emailMessage.style.display = "none";
                email.style.borderBottom = "1px solid #ccc";

                email.onblur = function() {
                    emailEmpty();
                }


            }


        }
    }

    // password validation start

    var password = document.getElementById("password");
    var passwordHintDiv = document.getElementById("password-hint");
    password.onclick = function() {
        passwordHintDiv.style.display = "block";

    }
    var passwordHintText = document.getElementById("password-hint-text");
    passwordHintText.onclick = function() {
        password.value = passwordHintText.innerHTML;
        passwordHintDiv.style.display = "none";

    }
    password.oninput = function() {
        passwordHintDiv.style.display = "none";

        var lower = /[a-z]/;
        var upper = /[A-Z]/;
        var number = /[0-9]/;
        var special = /[@/#/$/%/^/&]/;
        var passwordValue = password.value;

        var lowercase = document.getElementById("lower-case");
       !passwordValue.match(lower) ? lowercase.style.display = "block" : lowercase.style.display = "none";

       var uppercase = document.getElementById("upper-case");
       !passwordValue.match(upper) ? uppercase.style.display = "block" : uppercase.style.display = "none";

       var numberEle = document.getElementById("number");
       !passwordValue.match(number) ? numberEle.style.display = "block" : numberEle.style.display = "none";

       var specialSymbol = document.getElementById("special-symbol");
       !passwordValue.match(special) ? specialSymbol.style.display = "block" : specialSymbol.style.display = "none";


    }
        // password toggle 

    var checkbox = document.getElementById("checkbox");
    var checkboxMessage = document.getElementById("checkbox-message"); 
    checkbox.onclick = function() {
        if(checkbox.value == "show password") {
            password.type = "text";
            checkbox.value = "hide password";
            checkboxMessage.innerHTML = "Hide password";
        }
        else {
            password.type = "password";
            checkbox.value = "show password";
            checkboxMessage.innerHTML = "Show password";

        }
    }

    var formEle = document.getElementById("form-ele");
    formEle.onsubmit = function(e) {
        e.preventDefault();

        var firstnameValue = firstname.value;
        var lastnameValue = lastname.value;
        var emailValue = email.value;
        var passwordValue = password.value;

        if(firstnameValue == "") {
            var firstnameMessage = document.getElementById("firstname-message");
            firstnameMessage.style.display = "block";

            var firstnameWrn = document.getElementById("firstname-wrn");
            firstnameWrn.style.display = "block";

            firstnameMessage.className = "animate__animated animate__fadeIn";
            firstnameWrn.className = "animate__animated animate__fadeIn";

            firstname.onclick = function() {
                firstnameMessage.style.display = "none";
                firstnameWrn.style.display = "none";
            }
        }

        if(lastnameValue == "") {
            var lastnameMessage = document.getElementById("lastname-message");
            lastnameMessage.style.display = "block";

            var lastnameWrn = document.getElementById("lastname-wrn");
            lastnameWrn.style.display = "block";

            lastnameMessage.className = "animate__animated animate__fadeIn";
            lastnameWrn.className = "animate__animated animate__fadeIn";

            lastname.onclick = function() {
                lastnameMessage.style.display = "none";
                lastnameWrn.style.display = "none";

                
            }

        }
        if(emailValue == "") {
            var emailMessage = document.getElementById("email-message");
            emailMessage.style.display = "block";

            var emailWrn = document.getElementById("email-wrn");
            emailWrn.style.display = "block";

            emailMessage.className = "animate__animated animate__fadeIn";
            emailWrn.className = "animate__nimated animate__fadeIn";
            email.onclick = function() {

                emailMessage.style.display = "none";
                emailWrn.style.display = "none";
            }

        }
        if(passwordValue == "") {
            var passwordMessage = document.getElementById("password-message");
            passwordMessage.style.display = "block";

            var passwordWrn = document.getElementById("password-wrn");
            passwordWrn.style.display = "block";

            passwordMessage.className = "animate__animated animate__fadeIn";
            passwordWrn.className = "animate__animated animate__fadeIn"

            password.onclick = function() {
                passwordMessage.style.display = "none";
                passwordWrn.style.display = "none";
            }
        }
        if(!(firstnameValue == "" && lastnameValue == "" && emailValue == "" && passwordValue == "")) {
            Swal.fire({
                title: "success",
                text: "Register success",
                icon: "success"
              });
        }
    }
 

}