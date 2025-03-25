function mudarPosicao() {
    var botao = document.getElementById("meuBotao");
    var novaPosicaoTop = Math.random() * 450;
    var novaPosicaoLeft = Math.random() * 450;
    botao.style.top = novaPosicaoTop + "px";
    botao.style.left = novaPosicaoLeft + "px";
}