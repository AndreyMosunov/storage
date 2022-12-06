(function (app) {
    app.PageLogin = {
        draw: function () {

            let content = document.querySelector(".content");

            let text = create_text_login();
            let EmailFiled = create_email_filed();
            let text2 = create_text_email();
            let PasswordFiled = create_password_filed();
            let text3 = create_text_password();
            let logbutton = create_button_login();
            let registrbutton = create_button_registr();

            registrbutton.addEventListener("click", GoToRegistr)

            content.append(text, EmailFiled, text2, PasswordFiled, text3, logbutton, registrbutton);
        }
    }

    function create_text_login() {
        let text = document.createElement("div");
        text.append(document.createTextNode("Вход"));
        text.classList.add("formName");
        return text;
    }

    function create_email_filed() {
        let EmailFiled = document.createElement("input");
        EmailFiled.classList.add("formEmail");
        return EmailFiled;
    }

    function create_text_email() {
        let text2 = document.createElement("div");
        text2.append(document.createTextNode("E-mail"));
        text2.classList.add("formName2");
        return text2;
    }

    function create_password_filed() {
        let PasswordFiled = document.createElement("input");
        PasswordFiled.classList.add("formPassword");
        return PasswordFiled;
    }

    function create_text_password() {
        let text3 = document.createElement("div");
        text3.append(document.createTextNode("Пароль"));
        text3.classList.add("formName3");
        return text3;
    }

    function create_button_login() {
        let logbutton = document.createElement("button");
        logbutton.append(document.createTextNode("Войти"));
        logbutton.classList.add("logbutton");
        return logbutton;
    }

    function create_button_registr() {
        let registrbutton = document.createElement("button");
        registrbutton.append(document.createTextNode("Зарегистрироваться"));
        registrbutton.classList.add("registrbutton");
        return registrbutton;
    }

    function GoToRegistr() {
        document.querySelector(".content").innerHTML = "";
        app.PageRegistr.draw();

    }

})(AdsBoard);






