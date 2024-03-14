'use strict';
//обробник подій для кнопки з ідентифікатором redirectButton
document.getElementById("redirectButton").addEventListener("click", function(){
    //отримання значення поля з ідентифікатором linkInput
    let link = document.getElementById("linkInput").value;
    //перевірка на те чи починається поле на http або https
    if(link.indexOf("http://") !== 0 && link.indexOf("https://") !== 0){
        //якщо посилання не містить http або https, то додаємо до нього http
        link = "http://" + link;
    }

    //перенаправлення на вказану адресу
    window.location.href = link;
});