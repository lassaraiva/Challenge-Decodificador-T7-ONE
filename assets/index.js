function getMessage() {
  return document.querySelector("#msgTextarea").value;
}

function exibirResultado(resultMsg) {
  let resultado = document.querySelector("#result");

  resultado.innerHTML = `
  <div class="msg-result fade-in">
      <p id="msgResult">${resultMsg}</p>
      <button id="btnCopiarTexto" class="btn white">Copiar</button>
  </div>
  `;
  let btnCopiarTexto = document.querySelector("#btnCopiarTexto");
  btnCopiarTexto.onclick = copiarTexto;
}

function semTexto() {
  let resultado = document.querySelector("#result");
  resultado.innerHTML = `
  <div class="msgNoFound fade-in">
      <img id="imgNoMsgFound" src="images/no-message-found.svg" alt="Nenhuma mensagem encontrada.">
      <h3>Nenhuma mensagem encontrada</h3>
      <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
  </div>
  `;
}

function removerAcentos(str) {
  const acentos = {
      'á': 'a', 'ã': 'a', 'â': 'a', 'à': 'a',
      'é': 'e', 'ê': 'e', 'è': 'e',
      'í': 'i', 'î': 'i', 'ì': 'i',
      'ó': 'o', 'õ': 'o', 'ô': 'o', 'ò': 'o',
      'ú': 'u', 'û': 'u', 'ù': 'u',
      'ç': 'c'
  };
  return str.split('').map(char => acentos[char] || char).join('');
}

function encriptar(encriptarString) {
  encriptarString = removerAcentos(encriptarString.toLowerCase());
  let codigosEncriptar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  for (let i = 0; i < codigosEncriptar.length; i++) {
    encriptarString = encriptarString.replaceAll(
      codigosEncriptar[i][0],
      codigosEncriptar[i][1]
    );
  }
  return encriptarString;
}

function decriptar(encriptarMensagem) {
  encriptarMensagem = removerAcentos(encriptarMensagem.toLowerCase());
  let codigosEncriptar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  for (let i = 0; i < codigosEncriptar.length; i++) {
    encriptarMensagem = encriptarMensagem.replaceAll(
      codigosEncriptar[i][1],
      codigosEncriptar[i][0]
    );
  }

  exibirResultado(encriptarMensagem);
}

function copiarTexto() {
  let msgResult = document.querySelector("#msgResult").innerText;
  navigator.clipboard.writeText(msgResult);

  let resultado = document.querySelector("#result");
  let height = resultado.getElementsByClassName("msg-result")[0].clientHeight;

  resultado.innerHTML = `
  <div class="msg-copied fade-in" style="min-height: ${height}px">
      <h3>Mensagem copiada!</h3>
  </div>
  `;
}

function iniciar() {
  let btnencriptar = document.querySelector("#btnencriptar");
  let btndecriptar = document.querySelector("#btndecriptar");

  btnencriptar.addEventListener("click", function () {
      let pegarMensagem = getMessage();
      let encriptarMensagem = encriptar(pegarMensagem);
      exibirResultado(encriptarMensagem);
  });

  btndecriptar.addEventListener("click", function () {
      let encriptarMensagem = getMessage();
      decriptar(encriptarMensagem);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  iniciar();
});