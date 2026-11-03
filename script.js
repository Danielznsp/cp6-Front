// Função que calcula o preço com desconto
function calcularDesconto(preco, percentual) {
  return preco - (preco * percentual / 100);
}

// Função para mostrar o número no formato de dinheiro (com vírgula)
function formatarPreco(valor) {
  return valor.toFixed(2).replace(".", ",");
}

// Função que atualiza os preços na tela
function atualizarPrecos(percentual) {
  const precos = document.querySelectorAll(".valor");

  for (let i = 0; i < precos.length; i++) {
    const precoOriginal = Number(precos[i].dataset.preco);
    const precoFinal = calcularDesconto(precoOriginal, percentual);
    precos[i].textContent = formatarPreco(precoFinal);
  }
}

const botaoPromocao = document.getElementById("btn-promocao");
const avisoPromocao = document.getElementById("aviso-promocao");
const DESCONTO = 15;
let promocaoAtiva = false;

botaoPromocao.addEventListener("click", function () {
  if (promocaoAtiva === false) {
    atualizarPrecos(DESCONTO);
    avisoPromocao.textContent = "Desconto de " + DESCONTO + "% aplicado!";
    botaoPromocao.textContent = "Remover desconto";
    promocaoAtiva = true;
  } else {
    atualizarPrecos(0);
    avisoPromocao.textContent = "Hoje tem promoção: " + DESCONTO + "% de desconto em todos os pratos!";
    botaoPromocao.textContent = "Ativar desconto";
    promocaoAtiva = false;
  }
});

// Mensagem quando o cliente clica em "Pedir"
const botoesPedir = document.querySelectorAll(".card button");

botoesPedir.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const nomePrato = botao.parentElement.querySelector("h3").textContent;
    alert("Você pediu: " + nomePrato);
  });
});
