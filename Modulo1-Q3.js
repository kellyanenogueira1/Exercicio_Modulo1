const numeros = [5, 6, 10, 3, 7, 1]

const Media = (numeros.reduce((acumulador, valor) => acumulador + valor)) / numeros.length
const maioresqueaMedia = numeros.filter(valor => valor>Media)
console.log(maioresqueaMedia)