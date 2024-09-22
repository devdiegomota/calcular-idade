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
            genero = 'mulher'

            if (idade >= 0 && idade < 15) {
                //JOVEM                  
            } else if (idade < 25) {
                //MULHER
            } else if (idade < 35 ) {
                //MULHER
            } else if (idade < 45) {
                //MULHER
            }
            resultado.innerHTML = `Você é uma ${genero} com ${idade} anos de idade<br>`
            resultado.appendChild(foto) //FAZ APARECER ELEMENTO FOTO ABAIXO DO RESULTADO

        } else if (masculino.checked) {
            genero = 'homem'
            
            if (idade >= 0 && idade < 10) {
                //JOVEM     
                foto.setAttribute('src', 'img/10h.png')
            } else if (idade < 15) {
                //JOVEM
                foto.setAttribute('src', 'img/15h.png')
            } else if (idade < 25) {
                //HOMEM
                foto.setAttribute('src', 'img/25h.png')
            } else if (idade < 35 ) {
                //HOMEM
                foto.setAttribute('src', 'img/35h.png')
            } else if (idade < 45) {
                //HOMEM
                foto.setAttribute('src', 'img/45h.png')
            }

            resultado.innerHTML = `Você é um ${genero} com ${idade} anos de idade<br>`
            resultado.appendChild(foto) //FAZ APARECER ELEMENTO FOTO ABAIXO DO RESULTADO
        }
        
    
    }
}