
let words: string[] = [
  'COMPUTADORA',
  'AGUACATE',
  'PAPAYA',
  'VEHICULO',
  'AUTOMOVIL',
  'BICICLETA',
  'MANDARINA',
  'CHAPULIN',
  'LEOPARDO'
]

// Generamos palabras secretas o ocultas
export function getRandomWord() {
  let randomIndex = Math.floor(Math.random()*words.length);
  return words[randomIndex];
}