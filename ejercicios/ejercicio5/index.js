const $FORM = document.getElementById('form')
const $LIMIT = document.getElementById('limit')
const $RESULT = document.getElementById('result')

function handleSubmit ( e ) {
  e.preventDefault()
  const limit = $LIMIT.value
  $FORM.reset()

  const series = fibonacci(limit)

  $RESULT.innerText = `[${series}].`
}

function fibonacci ( limit,  acumulator = [] ) {
  const length = acumulator.length
  
  if (length < limit && length < 2) {
    return fibonacci(limit, acumulator = [...acumulator, 1])
  }

  return length < limit
    ? fibonacci(limit, acumulator = [...acumulator, acumulator[length -2] + acumulator[length - 1]])
    : acumulator
}

$FORM.addEventListener('submit', handleSubmit)
$FORM.addEventListener('reset', () => $RESULT.innerText = 'Esperando serie.')
