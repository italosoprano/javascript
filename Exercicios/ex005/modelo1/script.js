function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    msg.innerHTML = `Agora são ${hora} horas.`
}
