const estoqueDoProduto1 = document.querySelector('.prod-1');
const estoqueDoProduto2 = document.querySelector('.prod-2');
const estoqueDoProduto3 = document.querySelector('.prod-3');
const estoqueDoProduto4 = document.querySelector('.prod-4');
const estoqueDoProduto5 = document.querySelector('.prod-5');

const spanProduto1 = document.querySelector('.span-prod-1');
const spanProduto2 = document.querySelector('.span-prod-2');
const spanProduto3 = document.querySelector('.span-prod-3');
const spanProduto4 = document.querySelector('.span-prod-4');
const spanProduto5 = document.querySelector('.span-prod-5');

const saldo = document.querySelector('.dispay-saldo');
const valorParaDepositar = document.querySelector('.valor-para-depositar');
const depositar = document.querySelector('.confirmar');

const preco1 = document.querySelector('.valor-1');
const preco2 = document.querySelector('.valor-2');
const preco3 = document.querySelector('.valor-3');
const preco4 = document.querySelector('.valor-4');
const preco5 = document.querySelector('.valor-5');

const produtoSelecionado = document.querySelector('.num-prod-selecionado');
const aumentar = document.querySelector('.aumentar');
const diminuir = document.querySelector('.diminuir');
const btnComprar = document.querySelector('.comprar');


depositar.addEventListener('click', () => {
  const val = saldo.innerHTML;

  saldo.innerHTML = parseFloat(val) + parseFloat(valorParaDepositar.innerHTML);
});


aumentar.addEventListener('click', (n) => {
  n = produtoSelecionado.innerHTML;
  n++;
  produtoSelecionado.innerHTML = n;
});

diminuir.addEventListener('click', (n) => {
  n = produtoSelecionado.innerHTML;
  n--;
  produtoSelecionado.innerHTML = n;
});

function verificaQualProdutoFoiSelecionado() {
  if (produtoSelecionado.innerHTML === spanProduto1.innerHTML) {
    comprar(spanProduto1.innerHTML, estoqueDoProduto1.innerHTML, preco1.innerHTML);
  } else if (produtoSelecionado.innerHTML === spanProduto2.innerHTML) {
    comprar(spanProduto2.innerHTML, estoqueDoProduto2.innerHTML, preco2.innerHTML);
  } else if (produtoSelecionado.innerHTML === spanProduto3.innerHTML) {
    comprar(spanProduto3.innerHTML, estoqueDoProduto3.innerHTML, preco3.innerHTML);
  } else if (produtoSelecionado.innerHTML === spanProduto4.innerHTML) {
    comprar(spanProduto4.innerHTML, estoqueDoProduto4.innerHTML, preco4.innerHTML);
  } else {
    comprar(spanProduto5.innerHTML, estoqueDoProduto5.innerHTML, preco5.innerHTML);
  }
}

function comprar(spanProd, qntEmEstoque, valorProd) {
  const prodEscolhido = parseInt(spanProd);
  const valorEmEstoqueDoProdEscolhido = parseInt(qntEmEstoque);
  const precoProd = parseFloat(valorProd);

  if(prodEscolhido === 1) {
    estoqueDoProduto1.innerHTML = valorEmEstoqueDoProdEscolhido - 1;
    saldo.innerHTML = parseFloat(saldo.innerHTML) - precoProd;
  } else if(prodEscolhido === 2) {
    estoqueDoProduto2.innerHTML = valorEmEstoqueDoProdEscolhido - 1;
    saldo.innerHTML = parseFloat(saldo.innerHTML) - precoProd;
  } else if(prodEscolhido === 3) {
    estoqueDoProduto3.innerHTML = valorEmEstoqueDoProdEscolhido - 1;
    saldo.innerHTML = parseFloat(saldo.innerHTML) - precoProd;
  } else if(prodEscolhido === 4) {
    estoqueDoProduto4.innerHTML = valorEmEstoqueDoProdEscolhido - 1;
    saldo.innerHTML = parseFloat(saldo.innerHTML) - precoProd;
  } else {
    estoqueDoProduto5.innerHTML = valorEmEstoqueDoProdEscolhido - 1;
    saldo.innerHTML = parseFloat(saldo.innerHTML) - precoProd;
  }
}

function numeroPrecionado(n) {

  valorParaDepositar.innerHTML += n; 
}

btnComprar.addEventListener('click', () => {
  verificaQualProdutoFoiSelecionado();
});

