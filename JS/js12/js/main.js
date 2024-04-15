let ara = []
//pedra
ara[0] = []
ara[0][0] = 0
ara[0][1] = 'pedra'
//papel
ara[1] = []
ara[1][0] = 1
ara[1][1] = 'papel'
//tesoura
ara[2] = []
ara[2][0] = 2
ara[2][1] = 'tesoura'

function jogada(j, c, jo) {
    let p;
    if(j == jo[0][0]){
        p = 1
    } else if(j == jo[1][0]){
        p = 2
    } else if(j == jo[2][0]){
        p = 0
    }
    if(c == j){
        //empate
        console.log(`empate`);
        alert('Empate!')
    } else if(c == jo[p][0]){
        //perdeu
        console.log(`perdeu`);
        alert('Comptador ganhou!')
    } else {
        //ganhou
        (`ganhou`);
        alert('Voce ganhou!')
    }
}

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
    if(computador == ara[0][0]){
        computaria = ara[0][1]
    } else if(computador == ara[1][0]){
        computaria = ara[1][1]
    } else {
        computaria = ara[2][1]
    }
    console.log(computaria)

    jogador = prompt('Qual é a sua jogada?')
    jogador = jogador.toLowerCase()
    console.log(jogador)
    if(jogador == ara[0][1]){
        jogador = ara[0][0]
    } else if(jogador == ara[1][1]){
        jogador = ara[1][0]
    } else if(jogador == ara[2][1]){
        jogador = ara[2][0]
    } else {
        jogador = 3
    }

    if (jogador == 3) {
        while (true) {
            alert('Você só pode jogar pedra papel ou tesoura')
            jogador = prompt('Tente novamente')
            jogador = jogador.toLowerCase()
            if(jogador == ara[0][1]){
                jogador = ara[0][0]
            } else if(jogador == ara[1][1]){
                jogador = ara[1][0]
            } else if(jogador == ara[2][1]){
                jogador = ara[2][0]
            } else {
                jogador = 3
            }

            if (jogador != 3) {
                break
            }
        }
    }
    console.log(jogador)
    jogada(jogador, computador, ara)
}
console.log('Computador: ' + computador);
console.log('Jogador: ' + jogador);