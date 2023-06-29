$("#form-Tarefa").on("submit", function (e) {
  e.preventDefault();
  const tarefa = $("#input-Tarefa");

  $(`<li style="text decoration: none">${tarefa.val()}</li>`).appendTo("ul");
  tarefa.val("");
});

$("ul").on("click", "li", function () {
  if ($(this).hasClass("feito")) {
    $(this).removeClass("feito");
  } else {
    $(this).addClass("feito");
  }
});
