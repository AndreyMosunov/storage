(function (app) {
    app.Header = {
        draw: function () {

            let header = document.querySelector(".header")
            
            let firstheader = document.createElement("div");
            firstheader.append(document.createTextNode("МОИ ОБЪЯВЛЕНИЯ_RU:"));
            firstheader.classList.add("formName32");
            header.append(firstheader);

              
              let menu = document.createElement("div");
              menu.classList.add("menu");
              header.append(menu);

              let Lenta = document.createElement("div");
              Lenta.append(document.createTextNode("Лента"));
              Lenta.classList.add("formAnchor1");
              Lenta.addEventListener("click", GoToLenta)
             
              let Myadds = document.createElement("div");
              Myadds.append(document.createTextNode("Мои объявления"));
              Myadds.classList.add("formAnchor2");
              

              let Exit = document.createElement("div");
              Exit.append(document.createTextNode("Выход"));
              Exit.classList.add("formAnchor3");
             

              let Createadds = document.createElement("div");
              Createadds.append(document.createTextNode("Добавить объявление"));
              Createadds.classList.add("formAnchor");
             

              menu.append(Lenta, Myadds, Exit, Createadds);
            
             function GoToLenta(){
                document.querySelector(".content").innerHTML = "";
                app.Adds.draw();

             }
  
             

        }
        
}


}

)(AdsBoard);