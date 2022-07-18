function cargarPersonas(
  nombres: string[],
  edad: number[],
  altura: number[],
  num: number
) {
  for (let indice = 0; indice < num; indice++) {
    nombres[indice] = String(prompt("Nombre: "));
    edad[indice] = Number(prompt("Edad: "));
    altura[indice] = Number(prompt("Altura (en cm): "));
  }
  console.log();
}

function escribirPorPantalla(
  nombres: string[],
  edad: number[],
  altura: number[],
  num: number
) {
  for (let indice = 0; indice < num; indice++) {
    console.log(
      `${nombres[indice]} - ${edad[indice]} años - ${altura[indice]} cm`
    );
  }
}

function comparar(
  edad: number[],
  altura: number[],
  i: number,
  j: number
): number {
  let comparacion: number;
  if (edad[i] === edad[j]) {
    if (altura[i] === altura[j]) {
      comparacion = 0;
    } else if (altura[i] < altura[j]) {
      comparacion = -1;
    } else {
      comparacion = 1;
    }
  } else if (edad[i] < edad[j]) {
    comparacion = -1;
  } else {
    comparacion = 1;
  }
  return comparacion;
}

function intercambiar(arreglo: any[], i: number, j: number) {
  let aux: number;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = aux;
}

function burbuja(
  nombres: string[],
  edad: number[],
  altura: number[],
  num: number
) {
  let i: number;
  let j: number;
  for (i = 0; i < num - 1; i++) {
    for (j = 0; j < num - 1 - i; j++) {
      if (comparar(edad, altura, j, j + 1) === 1) {
        intercambiar(nombres, j, j + 1);
        intercambiar(edad, j, j + 1);
        intercambiar(altura, j, j + 1);
      }
    }
  }
}

let num: number = Number(prompt("Cantidad de personas: "));
if (num) {
  let nombres: string[] = new Array(num);
  let edad: number[] = new Array(num);
  let altura: number[] = new Array(num);
  cargarPersonas(nombres, edad, altura, num);
  console.log("Sin ordenar");
  escribirPorPantalla(nombres, edad, altura, num);
  console.log("Ordenado");
  burbuja(nombres, edad, altura, num);
  escribirPorPantalla(nombres, edad, altura, num);
}
