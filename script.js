function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var caixaano = document.getElementById('txtano')
    var resultado = document.querySelector('div#res')
    if (caixaano.value == 0 || caixaano.value > ano) {
        resultado.innerHTML = '[Ops!] Verifique os dados e tente novamente!'
    } else {
        var genero = ''
        var idade = ano - Number(caixaano.value)
        var feminino = document.getElementById('feminino')
        var masculino = document.getElementById('masculino')
        var foto = document.createElement('img')
        foto.setAttribute('id' , 'foto')

        if (feminino.checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 15) {
                //JOVEM                  
            } else if (idade < 25) {
                //MULHER
            } else if (idade < 35 ) {
                //MULHER
            } else if (idade < 45) {
                //MULHER
            }

        } else if (masculino.checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade < 15) {
                //JOVEM     
                foto.setAttribute('src', 'img/10h.png')
            } else if (idade < 25) {
                //HOMEM
            } else if (idade < 35 ) {
                //HOMEM
            } else if (idade < 45) {
                //HOMEM
            }
        }
        resultado.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos de idade`
        resultado.appendChild(foto)
    
    }
}