(function (app) {
    app.PageRegistr = {
        draw: function () {

            let content = document.querySelector(".content");

            let text4 = document.createElement("div");
            text4.append(document.createTextNode("регистрация"));
            text4.classList.add("formName4");

            let EmailFiled2 = document.createElement("input");
            EmailFiled2.classList.add("formEmail2");

            let text5 = document.createElement("div");
            text5.append(document.createTextNode("E-mail"));
            text5.classList.add("formName5");

            let TelephFiled = document.createElement("input");
            TelephFiled.classList.add("formTeleph");

            let text6 = document.createElement("div");
            text6.append(document.createTextNode("Телефон"));
            text6.classList.add("formName6");

            let PasswordFiled2 = document.createElement("input");
            PasswordFiled2.classList.add("formPassword2");

            let text7 = document.createElement("div");
            text7.append(document.createTextNode("Пароль"));
            text7.classList.add("formName7");

            let ConfirmPasswordFiled = document.createElement("input");
            ConfirmPasswordFiled.classList.add("formConfirmPassword");

            let text8 = document.createElement("div");
            text8.append(document.createTextNode("Подтверждение пароля"));
            text8.classList.add("formName8");

            let regbutton = document.createElement("button");
            regbutton.append(document.createTextNode("Зарегистрироваться"));
            regbutton.classList.add("formregbutton");

            let loginbutton = document.createElement("button");
            loginbutton.append(document.createTextNode("Войти"));
            loginbutton.classList.add("formloginbutton");

            loginbutton.addEventListener("click", GoToLogin)

            content.append(text4, EmailFiled2, text5, TelephFiled, text6, PasswordFiled2, text7, ConfirmPasswordFiled, text8, regbutton, loginbutton);
        }
    }
    function GoToLogin() {
        document.querySelector(".content").innerHTML = "";
        app.PageLogin.draw();

    }

})(AdsBoard);

