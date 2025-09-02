function areaTriangulo() {
    const base = parseFloat(prompt('Informe o valor da base:'))
    const altura = parseFloat(prompt('Informe o valor da altura:'))
    return base * altura / 2
}

function areaRetangulo() {
    const base = parseFloat(prompt('Informe o valor da base:'))
    const altura = parseFloat(prompt('Informe o valor da altura:'))
    return base * altura
}

function areaQuadrado() {
    const lado = parseFloat(prompt('Informe o valor do lado do quadrado:'))
    return lado * lado
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt('Informe o valor da base maior:'))
    const baseMenor = parseFloat(prompt('Informe o valor da base menor:'))
    const altura = parseFloat(prompt('Informe o valor da altura:'))
    return ((baseMaior + baseMenor) * altura) / 2
}

function areaCirculo() {
    const raio = parseFloat(prompt('Informe o valor do raio:'))
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(
        `CALCULADORA GEOMÉTRICA
        Escolha qual calculo deseja fazer:
        1 - área do triângulo
        2 - área do retângulo
        3 - área do quadrado
        4 - área do trapézio
        5 - área do círculo
        6 - Sair`
    )
}

function executar() {
    let option = ''

    do {
        option = exibirMenu()
        let resultado

        switch(option) {
            case '1':
                resultado = areaTriangulo()
                break
            case '2':
                resultado = areaRetangulo()
                break
            case '3':
                resultado = areaQuadrado()
                break
            case '4':
                resultado = areaTrapezio()
                break
            case '5':
                resultado = areaCirculo()
                break
            case '6':
                alert('Saindo...')
                break
            default:
                alert('Opção inváida')
        }

        if (resultado) {
                alert(`Resultado ${resultado}`)
            }
            
    }while(option !== '6')
}

executar()