function tabuada() {
    var numero = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(numero.value.length == 0) {
        window.alert('Por favor, escolha um numero.')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ' '

        for (c = 1; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}