function calcular() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
       window.alert('Por favor, digite um numero!') 
    } else {
        var valor = Number(num.value)
        tab.innerHTML = ''
        for( var c = 1; c <=10; c++) {
        var item = document.createElement('option')
        item.text = `${valor} x ${c} = ${valor*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        }
    }
    /*
    var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${valor} x ${c} = ${valor*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        } */

}