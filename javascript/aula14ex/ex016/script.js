function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')
    
    // para que nenhum campo fique vazio
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        //window.alert('[ERRO] Faltam dados')
    } else {
        //para aparecer junto com a contagem
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando passo = 1')
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{27A1}`
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{2714}`
    }
}