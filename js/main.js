$(document).ready(function () {
  $("#telefone").mask(`(00) 00000-0000`, { placeholder: "(xx) xxxxx-xxxx" });
  $("#cpf").mask(`000.000.000-00`, { placeholder: "000.000.000-00" });
  $("#cep").mask(`00000-000`, { placeholder: "00000-000" });

  $("form").on("submit", function (e) {
    e.preventDefault();
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: "Esse campo é obrigatorio",
      email: "Esse campo é obrigatorio",
      telefone: "Esse campo é obrigatorio",
      cpf: "Esse campo é obrigatorio",
      endereco: "Esse campo é obrigatorio",
      cep: "Esse campo é obrigatorio",
    },
    submitHandler: function () {
      $("form button").text("Cadastrado");
      $("form button").addClass("sucesso");
    },
  });
});
