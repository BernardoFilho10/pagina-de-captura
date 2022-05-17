 function sortear() {
    let participantes = 100;

    let sorteio = Math.round(Math.random() * participantes);

    document.getElementById("resultado").innerHTML = sorteio;
  
}