let jogo = confirm('Voê quer jogar pedra papel ou tesoura?')
let computador;
let jogador;
let computaria

if (!jogo) {
    jogo = confirm('Tem certeza?')
    if (jogo) {
        alert('ta bom :(')
        .exit
    }
}
jogo = true
if (jogo) {
    //0 = pedra, 1 = papel 2 = tesoura
    computador = Math.floor(Math.random() * 3)

    switch (computador) {
        case 0:
            computaria = 'pedra'
            break;

        case 1:
            computaria = 'papel'
            break
        
        case 2:
            computaria = 'tesoura'
            break
    
    }
    jogador = prompt('Qual é a sua jogada?')
    jogador = jogador.toLowerCase()
    switch (jogador) {
        case "pedra":
            jogador = 0
            break;

        case "papel":
            jogador = 1
            break;
    
        case "tesoura":
            jogador = 2
            break;

        default:
            jogador = 3
            break;
    }
    if (jogador == 3) {
        while (true) {
            alert('Você só pode jogar pedra papel ou tesoura')
            jogador = prompt('Tente novamente')
            jogador = jogador.toLowerCase()
            switch (jogador) {
                case "pedra":
                    jogador = 0
                    break;
        
                case "papel":
                    jogador = 1
                    break;
            
                case "tesoura":
                    jogador = 2
                    break;

                default:
                    jogador = 3
                    break;
            }
            if (jogador != 3) {
                break
            }
        }
    }
    switch (jogador) {
        case computador:
            console.log(`empate`);
            alert('Empate!')
            break;

        case 0:
            if (computador == 1) {
                console.log(`perdeu`);
                alert('Comptador ganhou!')
            } else {
                console.log(`ganhou`);
                alert('Voce ganhou!')
            }
            break

        case 1:
            if (computador == 2) {
                console.log(`perdeu`);
                alert('Comptador ganhou!')
            } else {
                console.log(`ganhou`);
                alert('Voce ganhou!')
            }
            break
        
        case 2:
            if (computador == 0) {
                console.log(`perdeu`);
                alert('Comptador ganhou!')
            } else {
                console.log(`ganhou`);
                alert('Voce ganhou!')
            }
            break
    
        default:
            break;
    
    }

}
console.log('Computador: ' + computador);
console.log('Jogador: ' + jogador);















/*
strings
variavel.lenght: numero de carateres de uma string
variavel.

variavel.charactetAt(number): qual caractere esta na posição mensionada

variavel.indexOf(string): qual a posição do(s) caractere(s) na string

variavel.lastIndexOf(string): posição da ultima ocorrencia do(s) caracteres

variavel.slice(number1, number2): mostra os caracteres entre as posições

variavel.toUpperCase(): transforma as letras da variavel em maiusculas

variavel.toLowerCase(): transforma as letras da variavel em minusculas

variavel.includes(string): verifica se na variavel existe em alguma parte essa string

variavel.split(string): recorta o pedaço da string e faz um array com restante

*/

/*
Math
    trunc: remove casas decimais
    round: aproxima o valor
    ceil: remove as casas decimais e soma 1(ou simplesmente arredodna sempre pra cima)
    floor: remove as casas decimais e subtrai 1(ou simplesmente arredodna sempre pra baixo)
    pow: primeiro numero elevado ao segundo
    min: mostra o menor numero
    max: oposto do 

*/