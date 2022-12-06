(function (app) {
    app.PageList = {
        draw: function () {

            let content = document.querySelector(".content");

            let text9 = create_text_specification();
            let text10 = create_text_price();
            let contactsbutton = create_button_contacts();
            let text11 = create_text_seller();
            let text12 = create_text_specification2();
            let text13 = create_text_price2();
            let contactsbutton2 = create_button_contacts2();
            let text14 = create_text_seller2();
            let text15 = create_text_specification3();
            let text16 = create_text_price3();
            let contactsbutton3 = create_button_contacts3();
            let text17 = create_text_seller3();
            let text18 = create_text_specification4();
            let text19 = create_text_price4();
            let contactsbutton4 = create_button_contacts4();
            let text20 = create_text_seller4();

            contactsbutton.addEventListener("click", ShowTelephonNumber);
            contactsbutton2.addEventListener("click", ShowTelephonNumber2);
            contactsbutton3.addEventListener("click", ShowTelephonNumber3);
            contactsbutton4.addEventListener("click", ShowTelephonNumber4);

            content.append(text9, text10, contactsbutton, text11, text12, text13, contactsbutton2, text14, text15, text16, contactsbutton3, text17, text18, text19, contactsbutton4, text20);
        }
    }


    function create_text_specification() {
        let text9 = document.createElement("div");
        text9.append(document.createTextNode("Древнее зло просыпается на чёрной земле Мордора, а люди Средиземья говорят о страшном роке, который приближается с востока. Тёмный Властелин Саурон собирает армию, и если он обретёт ту власть, к которой стремится, весь мир накроет вечная тьма. Последняя надежда лежит на горстке избранных судьбой Героев, которым понадобится помощь друг друга, чтобы остановить силы зла...Б/у настольная игра Lord of the Rings The Card Game в отличном состоянии!!!"));
        text9.classList.add("formName9");
        return text9;
    }

    function create_text_price() {
        let text10 = document.createElement("div");
        text10.append(document.createTextNode("4 000 Pуб."));
        text10.classList.add("formName10");
        return text10;
    }

    function create_button_contacts() {
        let contactsbutton = document.createElement("button");
        contactsbutton.append(document.createTextNode("Показать телефон"));
        contactsbutton.classList.add("formcontactsbutton");
        return contactsbutton;
    }

    function create_text_seller() {
        let text11 = document.createElement("div");
        text11.append(document.createTextNode("Продавец: Мосунов А.И."));
        text11.classList.add("formName11");
        return text11;
    }

    function create_text_specification2() {
        let text12 = document.createElement("div");
        text12.append(document.createTextNode("Игра престолов предлагает настоящий эпический размах, и, чтобы победить, простой военной мощи может не хватить. Вы сможете заполучить власть с помощью силы или использовать ухищрения и лесть на пути к Трону, или, возможно, Вы решите привлечь население на свою сторону? Используя стратегическое планирование, мастерскую дипломатию и умелое распоряжение доступных карт, распространите своё влияние на весь Вестерос! Б/у, в хорошом состоянии, коробка слегка потерта."));
        text12.classList.add("formName12");
        return text12;
    }

    function create_text_price2() {
        let text13 = document.createElement("div");
        text13.append(document.createTextNode("3 000 Pуб."));
        text13.classList.add("formName13");
        return text13;
    }

    function create_button_contacts2() {
        let contactsbutton2 = document.createElement("button");
        contactsbutton2.append(document.createTextNode("Показать телефон"));
        contactsbutton2.classList.add("formcontactsbutton2");
        return contactsbutton2;
    }

    function create_text_seller2() {
        let text14 = document.createElement("div");
        text14.append(document.createTextNode("Продавец: Мосунов А.И."));
        text14.classList.add("formName14");
        return text14;
    }

    function create_text_specification3() {
        let text15 = document.createElement("div");
        text15.append(document.createTextNode("Спасайся кто может! В Токио бесчинствуют монстры! Давненько Страна восходящего солнца не сталкивалась с таким нападением. Город стал эпицентром схватки огромных роботов, обезьян и рептилий. Игроки выступят в роли этих самых чудовищ, а их задачей будет прославиться за счёт тотального уничтожения столицы Японии. Б/у, в отличном состоянии, отсутствует несколько жетонов."));
        text15.classList.add("formName15");
        return text15;
    }

    function create_text_price3() {
        let text16 = document.createElement("div");
        text16.append(document.createTextNode("2 500 Pуб."));
        text16.classList.add("formName16");
        return text16;
    }
    function create_button_contacts3() {
        let contactsbutton3 = document.createElement("button");
        contactsbutton3.append(document.createTextNode("Показать телефон"));
        contactsbutton3.classList.add("formcontactsbutton3");
        return contactsbutton3;
    }

    function create_text_seller3() {
        let text17 = document.createElement("div");
        text17.append(document.createTextNode("Продавец: Мосунов А.И."));
        text17.classList.add("formName17");
        return text17;
    }

    function create_text_specification4() {
        let text18 = document.createElement("div");
        text18.append(document.createTextNode("В новой игре от компании “Стиль жизни” вам тоже предстоит заняться выращиванием мохнатых помидорчиков, при этом отбиваясь садовым инвентарём от Голодных Гусениц, Назойливых Сорняков, Гнусных Вредителей, а главное – от коварных конкурентов, которые так и норовят лишить вас урожая, чтобы самим оказаться монополистами к моменту открытия Рынка. Помидорная битва начинается! Новая!!! В отличном состоянии!!!"));
        text18.classList.add("formName18");
        return text18;
    }

    function create_text_price4() {
        let text19 = document.createElement("div");
        text19.append(document.createTextNode("2 000 Pуб."));
        text19.classList.add("formName19");
        return text19;
    }

    function create_button_contacts4() {
        let contactsbutton4 = document.createElement("button");
        contactsbutton4.append(document.createTextNode("Показать телефон"));
        contactsbutton4.classList.add("formcontactsbutton4");
        return contactsbutton4;
    }

    function create_text_seller4() {
        let text20 = document.createElement("div");
        text20.append(document.createTextNode("Продавец: Мосунов А.И."));
        text20.classList.add("formName20");
        return text20;
    }

    function ShowTelephonNumber() {
        document.querySelector(".formcontactsbutton").innerText = "+79050086241";
    }

    function ShowTelephonNumber2() {
        document.querySelector(".formcontactsbutton2").innerText = "+79050086241";
    }

    function ShowTelephonNumber3() {
        document.querySelector(".formcontactsbutton3").innerText = "+79050086241";
    }

    function ShowTelephonNumber4() {
        document.querySelector(".formcontactsbutton4").innerText = "+79050086241";
    }


})(AdsBoard);






