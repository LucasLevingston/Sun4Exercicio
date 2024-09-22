function q3TratarDatas(data) {
  const meses = {
    jan: '01',
    fev: '02',
    mar: '03',
    abr: '04',
    maio: '05',
    jun: '06',
    jul: '07',
    ago: '08',
    set: '09',
    out: '10',
    nov: '11',
    dez: '12',
    janeiro: '01',
    fevereiro: '02',
    março: '03',
    abril: '04',
    maio: '05',
    junho: '06',
    julho: '07',
    agosto: '08',
    setembro: '09',
    outubro: '10',
    novembro: '11',
    dezembro: '12',
  };

  const formato1 = /(\d{2})\/(\d{2})\/(\d{4})/;

  const formato2 =
    /(\d{2})\s+(jan|fev|mar|abr|maio|jun|jul|ago|set|out|nov|dez|janeiro|fevereiro|março|abril|junho|julho|agosto|setembro|outubro|novembro|dezembro)\s+(\d{4})/i;

  const formato3 =
    /(\d{2})\s+de\s+(jan|fev|mar|abr|maio|jun|jul|ago|set|out|nov|dez|janeiro|fevereiro|março|abril|junho|julho|agosto|setembro|outubro|novembro|dezembro)\s+de\s+(\d{4})/i;

  if (formato1.test(data)) {
    const [, dia, mes, ano] = data.match(formato1);
    return `${ano}-${mes}-${dia}`;
  } else if (formato2.test(data)) {
    const [, dia, mesTexto, ano] = data.match(formato2);
    const mesNumero = meses[mesTexto.toLowerCase()];
    return `${ano}-${mesNumero}-${dia}`;
  } else if (formato3.test(data)) {
    const [, dia, mesTexto, ano] = data.match(formato3);
    const mesNumero = meses[mesTexto.toLowerCase()];
    return `${ano}-${mesNumero}-${dia}`;
  }

  return data;
}

const datasParaTratar = [
  '30/11/2022',
  '01 dez 2022',
  '25/12/2022',
  '31 de dezembro de 2022',
];

datasParaTratar.forEach((data) => {
  console.log(q3TratarDatas(data));
});
