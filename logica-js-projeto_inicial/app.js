let mensagem='Boas vindas ao jogo do numero secreto'
alert(mensagem);
let x=parseInt(prompt('digite até qnto vc qr q o numero vá:'))
let numeroSecreto = parseInt(Math.random()*x+1);
console.log('o numero é '+numeroSecreto);
let chute;
let tentativas=1
while(numeroSecreto!=chute){
    chute=prompt('Chute um número entre 1 e '+x);
    if(numeroSecreto==chute){
        break;
    }
        if(chute<numeroSecreto){
            // tentativas=tentativas+1
            tentativas++
            alert('O numero secreto é maior que '+chute);
        }
        else{
            if(chute>numeroSecreto){
                tentativas++
                alert('O numero secreto é menor que '+chute);
            }
        }
    }

let palavraTentativa=tentativas>1 ? 'tentativas':'tentativa' 
alert('acertou, o numero secreto é '+numeroSecreto+'. Você acertou em '+tentativas+' '+ palavraTentativa+' ;)');
// if(tentativas>1){
//     alert('acertou, o numero secreto é '+numeroSecreto+'. Você acertou em '+tentativas+' tentativas ;)');
// }
// else{
//     alert('acertou, o numero secreto é '+numeroSecreto+'. Você acertou em '+tentativas+' tentativa ;)');
// }