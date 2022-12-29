  import { Modal } from "./modal.js" 
  import { AlertError } from "./alert-error.js"
  import { calculeteIMC, notANumber } from "./utils.js"
  // Chave serve para digitar uma constante
  
  // Variáveis - Variables
  const form = document.querySelector('form')
  const inputWeight = document.querySelector('#weight')
  const inputHeight = document.querySelector('#height')
  // Variáveis - Variables
  
  // Função - Function
  inputWeight.oninput = () => AlertError.close()
  inputHeight.oninput = () => AlertError.close()
  
  form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
      AlertError.open()
      return
    }

    const result = calculeteIMC(weight, height)
    displayResultMssage(result)
  }

  function displayResultMssage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
  }
    // Função - Function
  