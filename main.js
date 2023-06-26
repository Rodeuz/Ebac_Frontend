const paragrafo = document.querySelector(".text-verify");

document.getElementById("form-verify").addEventListener("submit", function verificador(e) {
  e.preventDefault();

  const valor_a = document.getElementById("a-number");
  const valor_b = document.getElementById("b-number");

  if (parseInt(valor_a.value) < parseInt(valor_b.value)) {
    if (paragrafo.classList.contains("error")) {
      paragrafo.classList.remove("error");
    }

    paragrafo.classList.add("sucess");
    paragrafo.innerHTML = `<strong> Número validado </strong> B é maior do que A`;
    valor_a.classList.remove("borderError");
    valor_b.classList.remove("borderError");
  } else {
    if (paragrafo.classList.contains("sucess")) {
      paragrafo.classList.remove("sucess");
    }
    paragrafo.classList.add("error");
    paragrafo.innerHTML = `<strong> Número Invalido </strong> A é maior ou igual a B`;
    valor_a.classList.add("borderError");
    valor_b.classList.add("borderError");
  }
});
