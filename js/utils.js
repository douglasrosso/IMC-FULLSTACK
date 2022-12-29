  // Função - Function
export function calculeteIMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

export function notANumber(value) {
  return isNaN(value) || value == ""
  // isNaN verifica se é número e retorna true se não for e true se for
}
// Função - Function