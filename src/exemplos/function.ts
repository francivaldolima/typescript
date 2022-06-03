type input = number | string;

function somarValores(input1: input, input2: input) {
  if (typeof input1 === "string" || typeof input2 === "string") {
    return input1.toString() + input2.toString();
  } else {
    return input1 + input2;
  }
}

function somarValoresNumericos(num1: number, num2: number): number {
  return num1 + num2;
}

function printaValoresNumericos(num1: number, num2: number): void {
  console.log(num1 + num2);
}

function somarValoresNumericosCall(
  num1: number,
  num2: number,
  callback: (num: number) => number
): number {
  let result = num1 + num2;

  return callback(result);
}

function aoQuadrado(numero: number): number {
  return numero * numero;
}

console.log(somarValoresNumericos(1, 5));

console.log(somarValoresNumericosCall(1, 5, aoQuadrado));


console.log(somarValores(1, 5));
console.log(somarValores("Hello", "World"));
console.log(somarValores("1", "1"));
