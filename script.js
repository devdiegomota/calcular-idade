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
        if (feminino.checked) {
            genero = 'Mulher'
        } else if (masculino.checked) {
            genero = 'Homem'
        }
        resultado.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos de idade`
    }
}