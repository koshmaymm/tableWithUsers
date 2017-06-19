(window.unload = function() {

    var dataMass = [
        [
            ["Пётр Петров"],
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
    var countUsersToDel;

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
        if (e.target.value == undefined) { return; }
        countUsersToDel = e.target.value;
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
        if (countUsersToDel == undefined) {
            return;
        } else {
            hideBox();
            alert(dataMass[countUsersToDel][0] + " - Was added to the registration queue");
        }
    }

    function showUser() {
        if (countUsersToDel == undefined) {
            return;
        } else {
            var name = "Господин " + dataMass[countUsersToDel][0];
            var city = "Город " + dataMass[countUsersToDel][1];
            var mail = "e-mail: " + dataMass[countUsersToDel][2];

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
        if (countUsersToDel == undefined) {
            return;
        } else {
            hideBox();
            tbody.children[countUsersToDel].remove();
            countUsersToDel = undefined;
        }
    }

    tableBody.addEventListener("click", checkData, false);
    addUserButton.addEventListener("click", addUser, false);
    showUserButton.addEventListener("click", showUser, false);
    editUserButton.addEventListener("click", addUser, false);
    deltUserButton.addEventListener("click", delUser, false);

    showUsers();
})();