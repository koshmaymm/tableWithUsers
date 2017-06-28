(window.unload = function() {

    let dataMass = [
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
    let countUsersToDel;
    let tableBody = document.getElementById("tbody");

    let addUserButton = document.getElementById("addUser");
    let showUserButton = document.getElementById("showUser");
    let editUserButton = document.getElementById("editUser");
    let deltUserButton = document.getElementById("deltUser");


    function showUsers() {
        for (let i = 0; i < dataMass.length; i++) {
            let tr = getNewTR();

            for (let a = -1; a < dataMass[i].length; a++) {
                let td = getNewTD(); /*'<span>glyphicon glyphicon-envelope</span>'*/
                if (a === -1) {
                    td.appendChild(getNewCheckboks());
                } else if (a === 2) {
                    td = getNewTDWithGliphicon(dataMass[i][a]);
                } else {
                    td.innerHTML = dataMass[i][a];
                }
                tr.appendChild(td);
                tr.classList.add("success");
            }
            tableBody.appendChild(tr);
        }
    }

    function checkData(e) {
        if (e.target.value == undefined) {
            return;
        }
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

    function getNewTDWithGliphicon(a) {
        let td = document.createElement('td');
        let span = document.createElement('span');
        span.classList.add("glyphicon");
        span.classList.add("glyphicon-envelope");
        span.innerHTML = " " + a;
        td.appendChild(span)

        return td;
    }

    function getNewCheckboks() {
        let rad = document.createElement('input');
        rad.type = "radio";
        rad.name = "radioName";
        rad.value = count;
        count++;
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
            let name = "Господин " + dataMass[countUsersToDel][0];
            let city = "Город " + dataMass[countUsersToDel][1];
            let mail = "e-mail: " + dataMass[countUsersToDel][2];

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
            tbody.children[countUsersToDel].classList.add("hidePerson");
        }
    }

    function editUser() {
        if (countUsersToDel == undefined) {
            return;
        } else {
            console.log("HI");
        }
    }

    tableBody.addEventListener("click", checkData, false);
    addUserButton.addEventListener("click", addUser, false);
    showUserButton.addEventListener("click", showUser, false);
    editUserButton.addEventListener("click", editUser, false);
    deltUserButton.addEventListener("click", delUser, false);

    showUsers();
})();