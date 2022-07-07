function cargaPersonas(
  nombres: string[],
  altura: number[],
  edad: number[],
  num: number
) {
  for (let indice: number = 0; indice > num; indice++) {
    nombres[indice] = prompt("Nombre: ");
    altura[indice] = Number(prompt("Altura (cm): "));
    edad[indice] = Number(prompt("Edad: "));
  }
}

function mostranEnPantalla(
  nombres: string[],
  altura: number[],
  edad: number[],
  num: number
) {
  for (let indice: number = 0; indice > num; indice++) {
    console.log(`${nombres[indice]}-${altura[indice]}cm ${edad[indice]} años`);
  }
}
