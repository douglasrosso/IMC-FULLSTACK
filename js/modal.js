// Objeto - Object
export const Modal = {
  wrapper: /* Propriedade - Properties */ document.querySelector('.modal-wrapper'), // Valor - Value
  message: /* Propriedade - Properties */ document.querySelector('.modal .title span'), // Valor - Value
  buttonClose: /* Propriedade - Properties */ document.querySelector('.modal button.close'), // Valor - Value

  open() /* Função Anônima - Anonymous Function */ {
    Modal.wrapper.classList.add('open')
  },
  close() /* Função Anônima - Anonymous Function */ {
    Modal.wrapper.classList.remove('open')
  }
}
// Objeto - Object

Modal.buttonClose.onclick = () => {
  Modal.close()
}

// event.key é a tecla pressionada
window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}