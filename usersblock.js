(function (app) {
    app.Adds = {
        draw: function () {

            fetch("adds.php")
                .then(response => response.json())
                .then(function (response) {
                    for (let i = 0; i < response.length; i++) {

                        let titleText = document.createTextNode(response[i].title);
                        let titleBlock = document.createElement("div");
                        titleBlock.classList.add("formTitle");
                        titleBlock.append(titleText);

                        document.querySelector(".adds").append(titleBlock);

                        let NameText = document.createTextNode(response[i].name);
                        let NameBlock = document.createElement("div");
                        NameBlock.classList.add("formName");
                        NameBlock.append(NameText);

                        document.querySelector(".adds").append(NameBlock);

                        let teleph_numText = document.createTextNode(response[i].teleph_num);
                        let teleph_numBlock = document.createElement("button");
                        teleph_numBlock.classList.add("formButton");
                        teleph_numBlock.append(teleph_numText);

                        document.querySelector(".adds").append(teleph_numBlock);

                        let descriptionText = document.createTextNode(response[i].description);
                        let descriptionBlock = document.createElement("div");
                        descriptionBlock.classList.add("formDescription");;
                        descriptionBlock.append(descriptionText);

                        document.querySelector(".adds").append(descriptionBlock);

                        let priceText = document.createTextNode(response[i].price);
                        let priceBlock = document.createElement("div");
                        priceBlock.classList.add("formPrice");
                        priceBlock.append(priceText);

                        document.querySelector(".adds").append(priceBlock);

                    }

                })
        }
    }

}

)(AdsBoard);