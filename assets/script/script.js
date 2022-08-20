function check() {
    
    const name = document.getElementById("userName");
    const email = document.getElementById("userEmail");
    const password = document.getElementById("userPassword");
    const nick = document.getElementById("nickName").value;

    document.getElementById('errorMessage').innerHTML = "";


    if (name.value.length >= 10) {
        document.getElementById('errorMessage').innerHTML += "Ваше имя слишком длинное,рептилоиды его не запомнят<br>";
    }


    if (email.value == "") {
        document.getElementById('errorMessage').innerHTML += "Ваш email не заполнен<br>";
    }

    if (password.value == "") {
        document.getElementById('errorMessage').innerHTML += "Ваш пароль не заполнен<br>";
    }


 if (password.value.length <= 6) {
        document.getElementById('errorMessage').innerHTML += "Ваш пароль слишком короткий и он не спасет от вторжения с Нептуна<br>";
    }

    else {
        alert(`Добро пожаловать, ${nick}!`);
    }

}

document.getElementById("clearButton").onclick = function(e) {

    document.getElementById("userName").value = " ";
    document.getElementById("userEmail").value = " ";
    document.getElementById("userPassword").value = " ";
    document.getElementById("nickName").value = " ";
    document.getElementById("userAge").value = " ";
  }


function getColor(){
    let color1 = document.getElementById('colorBaground').value;

    switch (color1) {
        case "violet":
            document.body.style.background = 'violet';
            break;
        case "blue":
            document.body.style.background = 'blue';
            break;
        case "pink":
            document.body.style.background = 'pink';
            break;                
        case "white":
            document.body.style.background = 'white';
            break;     
    }
}


