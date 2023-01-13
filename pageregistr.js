(function (app) {
    app.PageRegistr = {
        draw: function () {

            let regText = document.createElement("div");
            regText.append(document.createTextNode("Регистрация"));
            regText.classList.add("formName4");

            document.querySelector(".result").append(regText);

            let name = document.createElement("input");
            name.setAttribute('type', 'text');
            name.classList.add("formFIO");

            let NameText = document.createElement("div");
            NameText.append(document.createTextNode("Фамилия Имя Отчество"));
            NameText.classList.add("formFIO2");

            document.querySelector(".result").append(name, NameText);

            let email = document.createElement("input");
            email.setAttribute('type', 'text');
            email.classList.add("formEmail2");

            let emailText = document.createElement("div");
            emailText.append(document.createTextNode("E-mail"));
            emailText.classList.add("formName5");

            document.querySelector(".result").append(email, emailText);

            let telephon_num = document.createElement("input");
            telephon_num.setAttribute('type', 'text');
            telephon_num.classList.add("formTeleph");

            let telephText = document.createElement("div");
            telephText.append(document.createTextNode("Телефон"));
            telephText.classList.add("formName6");

            document.querySelector(".result").append(telephon_num, telephText);

            let password = document.createElement("input");
            password.setAttribute('type', 'text');
            password.classList.add("formPassword2");

            let passText = document.createElement("div");
            passText.append(document.createTextNode("Пароль"));
            passText.classList.add("formName7");

            document.querySelector(".result").append(password, passText);

            let confirmpassword = document.createElement("input");
            confirmpassword.setAttribute('type', 'text');
            confirmpassword.classList.add("formConfirmPassword");

            let confirmPassText = document.createElement("div");
            confirmPassText.append(document.createTextNode("Подтверждение пароля"));
            confirmPassText.classList.add("formName8");

            document.querySelector(".result").append(confirmpassword, confirmPassText);

            let regbutton = document.createElement("button");
            regbutton.append(document.createTextNode("Зарегистрироваться"));
            regbutton.classList.add("formregbutton");

            document.querySelector(".result").append(regbutton);
            regbutton.addEventListener("onclick", send());

            send();
            function send() {
                let name = document.getElementById('name').value;
                let email = document.getElementById('email').value;
                let telephon_num = document.getElementById('telephon_num').value;
                let password = document.getElementById('password').value;
                let confirmpassword = document.getElementById('confirmpassword').value;

                let params = new URLSearchParams();
                params.set('name', name);
                params.set('email', email);
                params.set('telephon_num', telephon_num);
                params.set('password', password);
                params.set('confirmpassword', confirmpassword);

                fetch("pageregistr.php", {
                    method: 'POST',
                    body: params
                }).then(
                    response => {
                        return response.text();
                    }
                ).then(
                    text => {
                        document.getElementById(".result").innerHTML = text;
                    }
                );
            }
        }
    }
}

)(AdsBoard);
