const $FORM = document.getElementById('form')
const $INPUT1 = document.getElementById('input1')
const $INPUT2 = document.getElementById('input2')
const $RESULT = document.getElementById('result')

function handleSubmit ( e ) {
  e.preventDefault()
  const input1 = $INPUT1.value
  const input2 = $INPUT2.value
  $FORM.reset()

  if (input1 && input2) {
    const array1 = readInput(input1)
    const array2 = readInput(input2)

    if (array1.length === array2.length) {
      let resultArray = []

      for (let i = 0; i < array1.length; i++) {
        const num1 = array1[i]
        const num2 = array2[i]
        
        resultArray.push(num1)
        resultArray.push(num2)
      }

      $RESULT.innerText = `Resultado = [${resultArray}]`
    }
    else {
      $RESULT.innerText = 'No se han introducido arrays con el mismo tamaño.'
    }
  }
}

function readInput ( input ) {
  return input.split(',').map(item => parseInt(item))
}

$FORM.addEventListener('submit', handleSubmit)
$FORM.addEventListener('reset', () => $RESULT.innerText = 'Esperando arrays.')
