export const dateMask = [
  /\d/,
  /\d/, // Dia: Dois dígitos
  '/', // Separador
  /\d/,
  /\d/, // Mês: Dois dígitos
  '/', // Separador
  /\d/,
  /\d/,
  /\d/,
  /\d/, // Ano: Quatro dígitos
];

export const timeMask = [
  /[0-2]/, // Primeira posição da hora: 0 a 2
  /\d/, // Segunda posição da hora: 0 a 9
  ':', // Separador
  /[0-5]/, // Primeira posição dos minutos: 0 a 5
  /\d/, // Segunda posição dos minutos: 0 a 9
];
