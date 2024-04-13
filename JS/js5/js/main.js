let notaProva = 19
let collegeStudent = false
let grade;

if (notaProva >= 90) {
    grade = 'A'
} else if (notaProva >= 80) {
    grade = 'B'
} else if( notaProva >= 70) {
    grade = 'C'
} else if (notaProva >= 60) {
    grade = 'D'
} else if (notaProva >= 50) {
    grade = 'E'
} else {
    if (collegeStudent) {
        grade = 'U'
    } else {
        grade = 'F'
    }
}

console.log(grade)















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