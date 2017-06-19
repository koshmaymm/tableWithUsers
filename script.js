(window.unload = function() {

    var dataMass = [
        [
            ["Петров Пётр"],
            ["Санкт-Петербург"],
            ["petrov@mail.ru"]
        ],
        [
            ["Фёдор Фёдоров"],
            ["Екатеринбург"],
            ["fedorov@mail.ru"]
        ],
        [
            ["Иван Иванов"],
            ["Брянск"],
            ["ivanov@mail.ru"]
        ],
        [
            ["Андрей Андреев"],
            ["Уфа"],
            ["andreev@mail.ru"]
        ],
        [
            ["Евгений Орлов"],
            ["Пермь"],
            ["orlov@mail.ru"]
        ],
        [
            ["Максим Зайцев"],
            ["Новосибирск"],
            ["zaycev@mail.ru"]
        ],
        [
            ["Тимофей Князев"],
            ["Саранск"],
            ["knyazev@mail.ru"]
        ]
    ];
    let count = 0;
    let tableBody = document.getElementById("tbody");
    var countUsers = 0;
    var addUserButton = document.getElementById("addUser");
    var showUserButton = document.getElementById("showUser");
    var editUserButton = document.getElementById("editUser");
    var deltUserButton = document.getElementById("deltUser");


    function showUsers() {
        for (let i = 0; i < dataMass.length; i++) {
            let tr = getNewTR();

            for (let a = -1; a < dataMass[i].length; a++) {
                let td = getNewTD();
                if (a === -1) {
                    td.appendChild(getNewCheckboks());
                } else {
                    td.innerHTML = dataMass[i][a];
                }
                tr.appendChild(td);
            }
            tableBody.appendChild(tr);
        }
    }

    function checkData(e) {
        if (e.target !== "input") {
            return;
        }
        console.log(e.target);
        var data = document.querySelectorAll(".okRadio");

        for (var i = 0; i < dataMass.length; i++) {
            if (data[i] == "undefined") {
                continue;
            }
            if (data[i].checked) {
                countUsers = data[i].value;
            }
        }
    }

    function getNewTR() {
        let tr = document.createElement('tr');
        return tr;
    }

    function getNewTD() {
        let td = document.createElement('td');
        return td;
    }

    function getNewCheckboks() {
        var rad = document.createElement('input');
        rad.type = "radio";
        rad.name = "radioName";
        rad.value = count;
        count++;
        rad.classList.add("okRadio");
        return rad;

    }


    function addUser() {
        if (countUsers == undefined) {
            return;
        } else {
            hideBox();
            alert(dataMass[countUsers][0] + " - Was added to the registration queue");
        }
    }

    function showUser() {
        if (countUsers == undefined) {
            return;
        } else {
            var name = "Господин " + dataMass[countUsers][0];
            var city = "Город " + dataMass[countUsers][1];
            var mail = "e-mail: " + dataMass[countUsers][2];

            userFromTableName.innerHTML = name;
            userFromTableCity.innerHTML = city;
            userFromTableMail.innerHTML = mail;
            popup.style.opacity = 1;
        }
    }

    function hideBox() {
        popup.style.opacity = 0;
    }

    function delUser(e) {
        if (countUsers == undefined) {
            return;
        } else {
            hideBox();
            tbody.children[countUsers].remove();
        }
    }

    tableBody.addEventListener("click", checkData, false);
    addUserButton.addEventListener("click", addUser, false);
    showUserButton.addEventListener("click", showUser, false);
    editUserButton.addEventListener("click", addUser, false);
    deltUserButton.addEventListener("click", delUser, false);

    showUsers();
})();