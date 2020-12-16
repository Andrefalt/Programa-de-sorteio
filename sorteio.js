//Número de participantes.
var participantes = 100 ;

//Dinheiro para entrar//
var dinheiro = 11 ;

//Dinheiro obtido pelo dono//
var dinheiroacumulado = participantes * dinheiro

//Dinheiro em jogo//
var dinheiroemjogo = dinheiroacumulado / 5

//Prêmio do ganhador//
var prêmio = dinheiroemjogo
console.log("O prêmio é de R$" + prêmio);

//Meu número//
var meunum = Math.floor(Math.random() * participantes) + 1 ;
console.log("Seu número é: " + meunum);

//Número sorteado//
var numsort = Math.floor(Math.random() * participantes) + 1 ;
console.log("O número sorteado é: " + numsort);

//Caso o seu número é o mesmo que o número sorteado//
if(meunum == numsort){
    console.log("Parabéns, o seu número foi o número sorteado!")
    console.log("Você ganhou R$" + prêmio.toFixed());
};