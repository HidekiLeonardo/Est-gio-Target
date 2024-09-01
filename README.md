# Estagio-Target
Respostas - da prova tecnica

# Est-gio-Target
Respostas - da prova tecnica

#1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
(em JavaScript)

let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

##Resultado = 91


#2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
(em Python)

def is_fibonacci(num):
    a, b = 0, 1  # Início da sequência de Fibonacci
    while b < num:
        a, b = b, a + b  # Gera o próximo número da sequência
# Número a ser verificado
num = 21
if is_fibonacci(num):
    print(f"O número {num} pertence à sequência de Fibonacci.")
else:
    print(f"O número {num} não pertence à sequência de Fibonacci.")


#3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
(em JavaScript)

const faturamento = [ // Exemplo de dados de faturamento
  { "dia": 1, "valor": 200.0 },
  { "dia": 2, "valor": 300.0 },
  { "dia": 3, "valor": 0.0 }, // Final de semana ou feriado
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


#4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
(em Python)

faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
}

total = sum(faturamento.values())

percentual = {estado: (valor / total) * 100 for estado, valor in faturamento.items()}

for estado, perc in percentual.items():
    print(f"{estado}: {perc:.2f}%")


#5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
(em JavaScript)

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const string = "OpenAI";
console.log(reverseString(string)); // Saída: "IAnepO"
