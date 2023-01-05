(function (app) {
    app.Header = {
        draw: function () {

            let header = document.querySelector(".header")

            header.append(document.createTextNode("МОИ_ОБЪЯВЛЕНИЯ.RU"));

            let anchor1 = create_anchor_list();
            let anchor2 = create_anchor_list2();
            let anchor3 = create_anchor_list3();
            
            header.append(anchor1, anchor2, anchor3);
        }
    }

        function create_anchor_list () {
            let anchor1 = document.createElement("A");
            anchor1.append(document.createTextNode("Лента"));
            anchor1.classList.add("formAnchor1");
            anchor1.setAttribute("href", "http://localhost:8080/mysite/files/list2.html");
            return anchor1;
        }

        function create_anchor_list2 () {
            let anchor2 = document.createElement("A");
            anchor2.append(document.createTextNode("Мои объявления"));
            anchor2.classList.add("formAnchor2");
            anchor2.setAttribute("href", "https://localhost:8080/mysite/files/adds.html");
            return anchor2;
        }
    
        function create_anchor_list3 () {
            let anchor3 = document.createElement("A");
            anchor3.append(document.createTextNode("Выход"));
            anchor3.classList.add("formAnchor3");
            anchor3.setAttribute("href", "https://");
            return anchor3;
        }

     }
)(AdsBoard);