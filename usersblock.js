(function (app) {
    app.Adds = {
        draw: function () {

            CreatePage();

            function CreatePage() {
                fetch("adds.php")
                    .then(response => response.json())
                    .then(function (response) {
                        for (let i = 0; i < response.length; i++) {
                            createuserblock(response[i].name, response[i].teleph_num);
                        }
                    });
            }

            function createuserblock(name, teleph_num) {

                let NameText = document.createTextNode(name);
                let teleph_numText = document.createTextNode(teleph_num);

                let NameBlock = document.createElement("div");
                NameBlock.classList.add("formName11");
                NameBlock.append(NameText);

                let NameBlock2 = document.createElement("div");
                NameBlock2.classList.add("formName14");
                NameBlock2.append(NameText);

                let NameBlock3 = document.createElement("div");
                NameBlock3.classList.add("formName17");
                NameBlock3.append(NameText);

                let NameBlock4 = document.createElement("div");
                NameBlock4.classList.add("formName20");
                NameBlock4.append(NameText);

                let teleph_numBlock = document.createElement("button");
                teleph_numBlock.classList.add("formcontactsbutton");
                teleph_numBlock.append(teleph_numText);

                let teleph_numBlock2 = document.createElement("button");
                teleph_numBlock2.classList.add("formcontactsbutton2");
                teleph_numBlock2.append(teleph_numText);

                let teleph_numBlock3 = document.createElement("button");
                teleph_numBlock3.classList.add("formcontactsbutton3");
                teleph_numBlock3.append(teleph_numText);

                let teleph_numBlock4 = document.createElement("button");
                teleph_numBlock4.classList.add("formcontactsbutton4");
                teleph_numBlock4.append(teleph_numText);

                document.querySelector(".adds").append(NameBlock, NameBlock2, NameBlock3, NameBlock4, teleph_numBlock, teleph_numBlock2, teleph_numBlock3, teleph_numBlock4);

                teleph_numBlock.addEventListener("click", ShowTelephonNumber);
                teleph_numBlock2.addEventListener("click", ShowTelephonNumber2);
                teleph_numBlock3.addEventListener("click", ShowTelephonNumber3);
                teleph_numBlock4.addEventListener("click", ShowTelephonNumber4);

                function ShowTelephonNumber() {
                    document.querySelector(".formcontactsbutton").innerText = teleph_numText;
                }

                function ShowTelephonNumber2() {
                    document.querySelector(".formcontactsbutton2").innerText = teleph_numText;
                }

                function ShowTelephonNumber3() {
                    document.querySelector(".formcontactsbutton3").innerText = teleph_numText;
                }

                function ShowTelephonNumber4() {
                    document.querySelector(".formcontactsbutton4").innerText = teleph_numText;
                }
            }
        }
    }
}

)(AdsBoard);