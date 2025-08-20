// tabuada simples para teste de estrutura de repetição
// o número que queremos usar na tabuada
const numero = 7; 

// estrutura de repetição `for`
// o loop vai de 1 a 10 para calcular cada linha da tabuada
for (let i = 1; i <= 10; i++) {
  // a variável `i` representa o número pelo qual `numero` será multiplicado
  const resultado = numero * i;

  // imprime o resultado no console.
  // a sintaxe com `$` é um template string
  console.log(`${numero} x ${i} = ${resultado}`);
}