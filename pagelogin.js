(function (app) {
    app.PageLogin = {
        draw: function () {

            let content = document.querySelector(".content");

            let text = document.createElement("div");
            text.append(document.createTextNode("вход"));
            text.classList.add("formName");

            let EmailFiled = document.createElement("input");
            EmailFiled.classList.add("formEmail");

            let text2 = document.createElement("div");
            text2.append(document.createTextNode("E-mail"));
            text2.classList.add("formName2");

            let PasswordFiled = document.createElement("input");
            PasswordFiled.classList.add("formPassword");

            let text3 = document.createElement("div");
            text3.append(document.createTextNode("Пароль"));
            text3.classList.add("formName3");

            let logbutton = document.createElement("button");
            logbutton.append(document.createTextNode("Войти"));
            logbutton.classList.add("logbutton");

            let registrbutton = document.createElement("button");
            registrbutton.append(document.createTextNode("Зарегистрироваться"));
            registrbutton.classList.add("registrbutton");

            registrbutton.addEventListener("click", GoToRegistr)

            content.append(text, EmailFiled, text2, PasswordFiled, text3, logbutton, registrbutton);
        }
    }

    function GoToRegistr() {
        document.querySelector(".content").innerHTML = "";
        app.PageRegistr.draw();

    }

})(AdsBoard);






