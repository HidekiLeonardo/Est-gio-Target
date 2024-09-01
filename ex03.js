const faturamento = [
    { "dia": 1, "valor": 200.0 },
    { "dia": 2, "valor": 300.0 },
    { "dia": 3, "valor": 0.0 },
    { "dia": 4, "valor": 150.0 },
    { "dia": 5, "valor": 500.0 }
  ];
  
  let menorValor = Number.MAX_VALUE;
  let maiorValor = 0;
  let soma = 0;
  let diasComFaturamento = 0;
  
  faturamento.forEach(dia => {
    if (dia.valor > 0) {
      if (dia.valor < menorValor) menorValor = dia.valor;
      if (dia.valor > maiorValor) maiorValor = dia.valor;
      soma += dia.valor;
      diasComFaturamento++;
    }
  });
  
  const mediaMensal = soma / diasComFaturamento;
  
  let diasAcimaDaMedia = 0;
  
  faturamento.forEach(dia => {
    if (dia.valor > mediaMensal) diasAcimaDaMedia++;
  });
  
  console.log(`Menor valor de faturamento: ${menorValor}`);
  console.log(`Maior valor de faturamento: ${maiorValor}`);
  console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
  