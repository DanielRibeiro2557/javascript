let player1 = "pedra"
let computador = "pedra"

switch (player1) {
    case computador:
        console.log('empate')
        break;
    case "pedra":
        if (computador === "papel") {
            console.log('computador venceu!')
        } else {
            console.log('Jogador ganhou!')
        }
        break;

    case "tesoura":
        if (computador === "pedra") {
            console.log('computador venceu!')
        } else {
            console.log('Jogador ganhou!')
        }
        break;

    default:
        if (computador === "papel") {
            console.log('computador venceu!')
        } else {
            console.log('Jogador ganhou!')
        }
        break;
}















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