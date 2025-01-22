let numSortidos = [];
let numLimite = 10;
let numSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
   //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}   
function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo de adivinhar');
    exibirTexto('p', 'Escolha um número entre 1 e 10' );
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numSecreto){
        exibirTexto('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numSecreto){
            exibirTexto('p', 'O número secreto é menor');
        } else{
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numEscolhido = parseInt(Math.random() * numLimite + 1);
    let qtdElementos = numEscolhido.length;

    if(qtdElementos == numLimite){
        numSortidos = [];
    }

    if(numSortidos.includes(numEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        numSortidos.push(numEscolhido);
        console.log(numSortidos);
        return numEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true  );
}