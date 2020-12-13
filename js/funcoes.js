function PlayPause(){
    let imagem = document.getElementById("controle-musica");

    let musica = document.getElementById("musica");

    if(musica.paused)
    {
        musica.play();
        imagem.src="images/pause.png";
        document.getElementById("rotulo").inerText = "Clique aqui para pausar."
    }
    else{
        musica.pause();
        imagem.src="images/play.png";
        document.getElementById("rotulo").inerText = "Clique aqui para tocar."
    }
}