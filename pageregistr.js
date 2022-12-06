(function (app) {
    app.PageRegistr = {
        draw: function () {

            let content = document.querySelector(".content");

            let text4 = create_text_registr();
            let EmailFiled2 = create_email_filed();
            let text5 = create_text_email();
            let TelephFiled = create_teleph_filed();
            let text6 = create_text_teleph();
            let PasswordFiled2 = create_password_filed();
            let text7 = create_text_password();
            let ConfirmPasswordFiled = create_confirmpassword_filed();
            let text8 = create_text_confirmpassword();
            let regbutton = create_button_login();
            let loginbutton = create_button_registr();

            loginbutton.addEventListener("click", GoToLogin)

            content.append(text4, EmailFiled2, text5, TelephFiled, text6, PasswordFiled2, text7, ConfirmPasswordFiled, text8, regbutton, loginbutton);
        }
    }

    function create_text_registr() {
        let text4 = document.createElement("div");
        text4.append(document.createTextNode("Регистрация"));
        text4.classList.add("formName4");
        return text4;
    }

    function create_email_filed() {
        let EmailFiled2 = document.createElement("input");
        EmailFiled2.classList.add("formEmail2");
        return EmailFiled2;
    }

    function create_text_email() {
        let text5 = document.createElement("div");
        text5.append(document.createTextNode("E-mail"));
        text5.classList.add("formName5");
        return text5;
    }

    function create_teleph_filed() {
        let TelephFiled = document.createElement("input");
        TelephFiled.classList.add("formTeleph");
        return TelephFiled;
    }

    function create_text_teleph() {
        let text6 = document.createElement("div");
        text6.append(document.createTextNode("Телефон"));
        text6.classList.add("formName6");
        return text6;
    }

    function create_password_filed() {
        let PasswordFiled2 = document.createElement("input");
        PasswordFiled2.classList.add("formPassword2");
        return PasswordFiled2;
    }

    function create_text_password() {
        let text7 = document.createElement("div");
        text7.append(document.createTextNode("Пароль"));
        text7.classList.add("formName7");
        return text7;
    }

    function create_confirmpassword_filed() {
        let ConfirmPasswordFiled = document.createElement("input");
        ConfirmPasswordFiled.classList.add("formConfirmPassword");
        return ConfirmPasswordFiled;
    }

    function create_text_confirmpassword() {
        let text8 = document.createElement("div");
        text8.append(document.createTextNode("Подтверждение пароля"));
        text8.classList.add("formName8");
        return text8;
    }

    function create_button_login() {
        let regbutton = document.createElement("button");
        regbutton.append(document.createTextNode("Зарегистрироваться"));
        regbutton.classList.add("formregbutton");
        return regbutton;
    }

    function create_button_registr() {
        let loginbutton = document.createElement("button");
        loginbutton.append(document.createTextNode("Войти"));
        loginbutton.classList.add("formloginbutton");
        return loginbutton;
    }

    function GoToLogin() {
        document.querySelector(".content").innerHTML = "";
        app.PageLogin.draw();

    }

})(AdsBoard);

