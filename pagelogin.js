(function (app) {
    app.PageLogin = {
        draw: function () {

            let text = document.createElement("div");
            text.append(document.createTextNode("Вход"));
            text.classList.add("formName0");

            let EmailFiled = document.createElement("input");
            EmailFiled.classList.add("formEmail");

            document.querySelector(".content").append(text, EmailFiled);

            let text2 = document.createElement("div");
            text2.append(document.createTextNode("E-mail"));
            text2.classList.add("formName2");

            let PasswordFiled = document.createElement("input");
            PasswordFiled.classList.add("formPassword");

            document.querySelector(".content").append(text2, PasswordFiled);

            let text3 = document.createElement("div");
            text3.append(document.createTextNode("Пароль"));
            text3.classList.add("formName3");

            let logbutton = document.createElement("button");
            logbutton.append(document.createTextNode("Войти"));
            logbutton.classList.add("logbutton");
            logbutton.addEventListener("click", GoTo);

            document.querySelector(".content").append(text3, logbutton);

            let registrbutton = document.createElement("button");
            registrbutton.append(document.createTextNode("Зарегистрироваться"));
            registrbutton.classList.add("registrbutton");
            registrbutton.addEventListener("click", GoToRegistr);

            document.querySelector(".content").append(registrbutton);
        }

    }

    function GoTo() {
        let formData = new FormData();

        let EmailFiled = document.querySelector('.formEmail').value;
        let PasswordFiled = document.querySelector('.formPassword').value;

        formData.append('EmailFiled', EmailFiled);
        formData.append('PasswordFiled', PasswordFiled);

        fetch("auth.php", { method: 'POST', body: formData, }
        )
            .then(response => response.json())
            .then(
                text => {
                        document.querySelector(".content").innerHTML = "";
                        document.querySelector(".header").innerHTML = "";
                        app.PageAdds.draw();
                    }
                
            )
        
    }

    function GoToRegistr() {
        document.querySelector(".content").innerHTML = "";
        app.PageRegistr.draw();

    }


}

)(AdsBoard);






