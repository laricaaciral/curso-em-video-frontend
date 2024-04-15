function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'meninocrianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homemadolescente.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'meninacrianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulheradolescente.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }
}