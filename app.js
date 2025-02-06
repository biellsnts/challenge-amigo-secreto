function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  const listaAmigos = document.getElementById("listaAmigos");

  const novoItem = document.createElement("li");
  novoItem.textContent = nome;
  listaAmigos.appendChild(novoItem);

  input.value = "";
}

function sortearAmigo() {
  const listaAmigos = document.getElementById("listaAmigos");
  const itens = listaAmigos.getElementsByTagName("li");

  if (itens.length === 0) {
    alert("Adicione pelo menos um nome para realizar o sorteio.");
    return;
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const indiceSorteado = Math.floor(Math.random() * itens.length);
  const amigoSecreto = itens[indiceSorteado].textContent;

  const resultadoItem = document.createElement("li");
  resultadoItem.textContent = `Amigo secreto: ${amigoSecreto}`;
  resultado.appendChild(resultadoItem);
}

document.getElementById("amigo").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});
