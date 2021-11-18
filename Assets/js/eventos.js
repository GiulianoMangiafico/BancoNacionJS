var email = []
var password = []



$(".formulario__register").on("submit", function registrarUsuario(data) {
    data.preventDefault();
    var entrarEmail = data.target[1].value
    var entrarPassword = data.target[2].value
    var passwordCheck = data.target[3].value
    email.push(entrarEmail);
    password.push(entrarPassword);
    if (entrarPassword == passwordCheck) {
        localStorage.setItem("email", JSON.stringify(email))
        localStorage.setItem("password", JSON.stringify(password))
        iniciarSesion();
        $(".message").append("<p>Registro correcto</p>")
        $(".message").addClass("success")
        setTimeout(function () {
            $(".message").fadeOut(500);
        }, 1500)
    } else {
        $(".message").append("<p>Las contraseñas no coinciden</p>")
        $(".message").addClass("error")
        setTimeout(function () {
            $(".message").fadeOut(1000);
        }, 1500)
    }
})


$(".formulario__login").on("submit", function login(data) {
    data.preventDefault();
    var sacarEmail = JSON.parse(localStorage.getItem("email"))
    var sacarPassword = JSON.parse(localStorage.getItem("password"))
    let emailLogin = data.target[0].value
    let passwordLogin = data.target[1].value
    if (emailLogin == sacarEmail && passwordLogin == sacarPassword) {
        $(".message").append("<p>Ingreso correcto</p>")
        $(".message").removeClass("error")
        $(".message").addClass("success")
        $(".message").fadeOut(2000);
        $("#formularioCompleto").fadeOut(2000)
    }
    else {
        $(".message").append("<p>Ingreso incorrecto, intente nuevamente</p>")
        $(".message").removeClass("success")
        $(".message").addClass("error")
        setTimeout(function () {
            $(".message").fadeOut();
        }, 1500)

    }
})
