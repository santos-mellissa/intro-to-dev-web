// Crie uma constante chamada base e atribua a ela o valor 5;
// Crie uma constante chamada height e atribua a ela o valor 8;
// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela height;
// Crie uma constante chamada perimeter e atribua a ela o resultado da soma de todos os lados de um retângulo.

const base = 5;
const height = 8;
const area = (base * height);
const perimeter = ((base * 2) + (height * 2));

if (perimeter >= 20) {
    console.log('Maior ou igual a 20');
  } else {
    console.log('Menor que 20');
  }