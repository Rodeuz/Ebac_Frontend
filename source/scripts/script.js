function init() {
  var name = "Mozilla"; // name é uma variável local criada pelo init
  function displayName() {
    // displayName() é a função interna, uma closure
    console.log(name); // usa a variável declarada na função pai
  }
  displayName();
}
init();
