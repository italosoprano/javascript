function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = windo.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
}
