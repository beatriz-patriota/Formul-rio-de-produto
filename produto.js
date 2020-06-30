ArrProduto = [];
var total = 0;
var resultado = document.getElementById("Resultado");
function Adicionar() {
  var produto = {
    Nome: document.getElementById("NomePro").value,
    Valor: document.getElementById("valor").value,
    Descricao: document.getElementById("desc").value,
  };
  ArrProduto.push(produto);
  document.getElementById("NomePro").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("desc").value = "";
  resultado.innerHTML += `<tr><td>${produto.Nome}</td><td> R$ ${produto.Valor}</td><td>${produto.Descricao}</td></tr>`;
}
function Finalizar() {
  ArrProduto.forEach(function (valor) {
    total = total + Number(valor.Valor);
  });
  resultado.innerHTML += `<tr><td> Valor gasto:</td><td>R$ ${total}</td><td>Utilize o cupom</td></tr>`;
}
function Cupom() {
  var totfinal = 0;
  totfinal = total - (total * 10) / 100;
  resultado.innerHTML += `<tr><td> Valor total:</td><td>R$ ${totfinal}</td><td>com desconto</td></tr>`;
}
