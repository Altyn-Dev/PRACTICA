
// РЕГИСТРАЦИЯ СТУДЕНТА

document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = Number(document.getElementById("age").value);
    let group = document.getElementById("group").value;
    let num = document.getElementById("num").value;

    document.getElementById("studentResult").innerHTML =
        "Студент успешно зарегистрирован!<br>" +
        "ФИО: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Возраст: " + age + "<br>" +
        "Группа: " + group + "<br>" +
        "Номер: " + num;

});


// РАСЧЁТ СТОИМОСТИ ТОВАРОВ

function calculateTotal(price, quantity) {

    if (price < 0 || quantity < 0) {
        return "Ошибка! Нельзя вводить отрицательные значения.";
    }

    let total = price * quantity;

    if (total >= 50000) {

        let discount = total * 0.10;

        total = total - discount;

        return "Скидка 10%: " + discount +
               " тенге<br>Итоговая стоимость: " +
               total + " тенге";
    }

    return "Итоговая стоимость: " + total + " тенге";
}


// КНОПКА РАССЧИТАТЬ

document.getElementById("productForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let priceInput = document.getElementById("price").value;
    let quantityInput = document.getElementById("quantity").value;

    if (priceInput === "" || quantityInput === "") {
        document.getElementById("productResult").textContent =
            "Заполните все поля!";
        return;
    }

    let price = Number(priceInput);
    let quantity = Number(quantityInput);

    let result = calculateTotal(price, quantity);

    document.getElementById("productResult").innerHTML = result;

});


// ПРОВЕРКА НАДЁЖНОСТИ ПАРОЛЯ

let password = document.getElementById("password");

let togglePassword = document.getElementById("togglePassword");


// ПОКАЗАТЬ И СКРЫТЬ ПАРОЛЬ

togglePassword.addEventListener("click", function() {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.textContent = "Скрыть пароль";

    } else {

        password.type = "password";
        togglePassword.textContent = "Показать пароль";

    }

});


// ПРОВЕРКА ПАРОЛЯ ПРИ ВВОДЕ

password.addEventListener("input", function() {

    let value = password.value;

    // Проверка длины
    let length = value.length >= 8;

    // Проверка букв
    let letters = /[a-zA-Zа-яА-ЯёЁ]/.test(value);

    // Проверка цифр
    let numbers = /[0-9]/.test(value);

    // Проверка специальных символов
    let special = /[^a-zA-Zа-яА-ЯёЁ0-9]/.test(value);


    // Вывод результатов проверки

    document.getElementById("lengthCheck").textContent =
        (length ? "YES" : "NO") + " Минимум 8 символов";

    document.getElementById("letterCheck").textContent =
        (letters ? "YES" : "NO") + " Наличие букв";

    document.getElementById("numberCheck").textContent =
        (numbers ? "YES" : "NO") + " Наличие цифр";

    document.getElementById("specialCheck").textContent =
        (special ? "YES" : "NO") + " Специальные символы";


    // Подсчёт сложности пароля

    let score = 0;

    if (length) score++;
    if (letters) score++;
    if (numbers) score++;
    if (special) score++;


    // Индикатор сложности

    let strength = document.getElementById("strength");

    if (value.length === 0) {

        strength.textContent = "Надёжность пароля: не проверен";

    } else if (score <= 1) {

        strength.textContent = "Надёжность пароля: слабый ";

    } else if (score <= 3) {

        strength.textContent = "Надёжность пароля: средний ";

    } else {

        strength.textContent = "Надёжность пароля: сильный ";

    }

});
