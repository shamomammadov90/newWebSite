

// Burger iconuna tkladigda navbar acilir
const menyuDiv = document.querySelector(".menyu-div");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menyuDiv.classList.toggle("active");
});

// achilan navbarda her hansi bir linke tikladiqda navbar baglanir
const navItem = document.querySelectorAll(".nav-item");
const logo = document.querySelectorAll(".logo");
navItem.forEach(function(e){
    e.addEventListener("click", () => {
        burger.classList.remove("active");
        menyuDiv.classList.remove("active");
    });
});



// səhifəni aşağı çəkdikdə menyu çubuğu yuxarı çəkilərək yerində qaır. (böyük ekranlarda)
window.addEventListener("scroll", function(){
    let mainNavbar = document.querySelector("#mainNavbar");
    mainNavbar.classList.toggle("navBarScroll", window.scrollY > 0);
});


function formFunctions(){
    'Use Strict'
    let myName = document.querySelector("#name");
    let myLastName = document.querySelector("#lastName");
    let myEmail = document.querySelector("#email");
    let myPhone = document.querySelector("#phone");
    let myMessage = document.querySelector("#message");
    let textAreaCharacter = document.querySelector("#current-character");
    let submitButton = document.querySelector("#submitButton");
    let sendKey = document.querySelector("#sendKey");

    if(myMessage.value.length == 0) {
        submitButton.disabled = true;
        submitButton.classList.remove("send-button");
        sendKey.classList.remove("sendKey");
        submitButton.classList.add("button-disable");
        sendKey.classList.add("sendKey1");
    }

    const spacePattern = /^\S*$/;
    const NumericPattern = /^([^0-9]*)$/;
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const OnlyNumberPattern = /^[0-9]*$/;

    myName.addEventListener("blur", controlName);
    function controlName(){
        let errName = document.querySelector("#errName");
        if(myName.value.length == 0){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            errName.innerHTML = "Ad sahəsi boş buraxıla bilməz";
            return false;
        }else if (myName.value.length < 3){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            errName.innerHTML = "Ad minimum dörd hərfdən ibarət olmalıdır";
            return false;
        }else if(spacePattern.test(myName.value) == false || NumericPattern.test(myName.value) == false){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            errName.innerHTML = "Ad sahəsi minimum üç və yalnız hərflərdən ibarət olmalıdır";
            return false;
        }else if (myName.value.length > 30){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            errName.innerHTML = "Ad otuz hərfdən çox ola bilməz";
            return false;
        }else {
            myName.classList.add("is-valid");
            myName.classList.remove("is-invalid");
            return true;
        }
    }

    myLastName.addEventListener("blur", controlLastName);
    function controlLastName(){
        let errLastName = document.querySelector("#errLastName");
        if(myLastName.value.length == 0){
            myLastName.classList.remove("is-valid");
            myLastName.classList.add("is-invalid");
            errLastName.innerHTML = "Soyad sahəsi boş buraxıla bilməz";
            return false;
        }else if (myLastName.value.length < 3){
            myLastName.classList.remove("is-valid");
            myLastName.classList.add("is-invalid");
            errLastName.innerHTML = "Soyad minimum dörd hərfdən ibarət olmalıdır";
            return false;
        }else if(spacePattern.test(myLastName.value) == false || NumericPattern.test(myLastName.value) == false){
            myLastName.classList.remove("is-valid");
            myLastName.classList.add("is-invalid");
            errLastName.innerHTML = "Soyad sahəsində boşluqdan və rəqəmdən istifadə edilə bilməz";
            return false;
        }else if (myLastName.value.length > 30){
            myLastName.classList.remove("is-valid");
            myLastName.classList.add("is-invalid");
            errLastName.innerHTML = "Soyad otuz hərfdən çox ola bilməz";
            return false;
        }else {
            myLastName.classList.add("is-valid");
            myLastName.classList.remove("is-invalid");
            return true;
        }
    }

    myEmail.addEventListener("blur", controlEmail);
    function controlEmail() {
        let errEmail = document.querySelector("#errEmail");
        if(myEmail.value.length == 0){
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            errEmail.innerHTML = "E-mail sahəsi boş buraxıla bilməz";
            return false;
        }else if(spacePattern.test(myEmail.value) == false){
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            errEmail.innerHTML = "E-mail sahəsində boşluqdan istifadə edilə bilməz";
            return false;
        }else if (EmailPattern.test(myEmail.value) == false){
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            errEmail.innerHTML = "E-maildə @ işarəsi və ya @ işarəsindən sonrakı'nöktə' unudulub və ya 'İnternet domain (exp: .com)' düzgün yazılmayıb";
            return false;
        }
        else{
            myEmail.classList.add("is-valid");
            myEmail.classList.remove("is-invalid");
            return true;
        }
    }

    myPhone.addEventListener("blur", controlPhone);
    function controlPhone() {
        let errPhone = document.querySelector("#errPhone");
        if(myPhone.value.length == 0){
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            errPhone.innerHTML = "Telefon sahəsi boş buraxıla bilməz";
            return false;
        }else if(spacePattern.test(myPhone.value) == false) {
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            errPhone.innerHTML = "Telefon sahəsində boşluq ola bilməz";
            return false;
        }else if(OnlyNumberPattern.test(myPhone.value) == false) {
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            errPhone.innerHTML = "Telefon nömrəsi yalnız ədədlərdən ibarət olmalıdır";
            return false;
        }else if(myPhone.value.length <=9){
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            errPhone.innerHTML = "Telefon sahəsində rəqəmlərin sayı 10-dan az ola bilməz";
            return false;
        }else {
            myPhone.classList.add("is-valid");
            myPhone.classList.remove("is-invalid");
            return true;
        }
    }

    myMessage.addEventListener("blur", controlMessage);
    function controlMessage(){
        let errMessage = document.querySelector("#errMessage");
        if(myMessage.value.length == 0){
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            errMessage.innerHTML = "Mesaj sahəsi boş buraxıla bilməz";
            return false;
        }else if(myMessage.value.length <= 9){
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            errMessage.innerHTML = "Mesaj sahəsində minimum 10 simvoldan ibarət bir mətn olmalıdır";
            return false;
        }else {
            myMessage.classList.add("is-valid");
            myMessage.classList.remove("is-invalid");
            return true;
        }

    };

    myMessage.addEventListener("keyup", function(){
        textAreaCharacter.textContent = myMessage.value.length;

        if(myMessage.value.length >= 10){
            submitButton.disabled = false;
            submitButton.classList.add("send-button");
            sendKey.classList.add("sendKey");
            submitButton.classList.remove("button-disable");
            sendKey.classList.remove("sendKey1");
        }else{
            submitButton.classList.remove("send-button");
            sendKey.classList.remove("sendKey");
            submitButton.classList.add("button-disable");
            sendKey.classList.add("sendKey1");
            submitButton.disabled = true;
        }

        let myForm = document.querySelector(".needs-validations");
        myForm.addEventListener("submit", function(e){
            if(myForm.checkValidity() == false || controlName() == false || controlLastName() == false ||
                controlEmail() == false || controlPhone() == false || controlMessage() == false) 
            {
                e.preventDefault();
                e.stopPropagation();
            }
        }, false);
    });
};
formFunctions();
formFunctions();




