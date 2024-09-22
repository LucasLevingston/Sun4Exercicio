function q2ContarFrequenciaPalavra(text) {
  const palavras = text.toLowerCase().split(/\s+/);
  const frequencia = {};

  palavras.forEach((palavra) => {
    if (palavra) {
      frequencia[palavra] = (frequencia[palavra] || 0) + 1;
    }
  });

  const resultado = Object.entries(frequencia)
    .sort(([, x], [, y]) => y - x)
    .reduce((array, [palavra, i]) => {
      array[palavra] = i;
      return array;
    }, {});

  return resultado;
}

console.log(q2ContarFrequenciaPalavra('Hello world hello hello'));
