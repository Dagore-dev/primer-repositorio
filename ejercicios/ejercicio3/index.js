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

    concat(array1, array2)
  }
}

function readInput ( input ) {
  return input.split(',').map(item => parseInt(item))
}

function concat ( array1, array2 ) {
  if (array1.length === array2.length) {
    concatSameLength(array1, array2)
  }
  else {
    concatDifferentLength(array1, array2)
  }
}

function concatSameLength ( array1, array2 ) {
  let resultArray = []

  for (let i = 0; i < array1.length; i++) {
    const num1 = array1[i]
    const num2 = array2[i]
    
    resultArray.push(num1)
    resultArray.push(num2)
  }

  $RESULT.innerText = `Resultado = [${resultArray}]`
}

function concatDifferentLength ( array1, array2 ) {
  let resultArray = []
  
  if (array1.length > array2.length) {
    for (let i = 0; i < array2.length; i++) {
      const num1 = array1[i]
      const num2 = array2[i]
      
      resultArray.push(num1)
      resultArray.push(num2)
    }

    for (let i = array2.length; i < array1.length; i++) {
      const num = array1[i]
      resultArray.push(num)
    }
  }
  else {
    for (let i = 0; i < array1.length; i++) {
      const num1 = array1[i]
      const num2 = array2[i]
      
      resultArray.push(num1)
      resultArray.push(num2)
    }

    for (let i = array1.length; i < array2.length; i++) {
      const num = array2[i]
      resultArray.push(num)
    }
  }

  $RESULT.innerText = `Resultado = [${resultArray}]`
}

$FORM.addEventListener('submit', handleSubmit)
$FORM.addEventListener('reset', () => $RESULT.innerText = 'Esperando arrays.')
