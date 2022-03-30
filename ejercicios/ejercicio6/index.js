const $FORM = document.getElementById('form')
const $LIMIT = document.getElementById('limit')
const $RESULT = document.getElementById('result')

function handleSubmit ( e ) {
  e.preventDefault()
  const limit = $LIMIT.value
  $FORM.reset()
  
  const series = countdownFrom(limit)

  $RESULT.innerText = `[${series}].`

}

function countdownFrom ( limit ) {
  let series = []

  for (let i = limit; i > 0; i--) {
    series.push(i)
  }

  return series
}

$FORM.addEventListener('submit', handleSubmit)
$FORM.addEventListener('reset', () => $RESULT.innerText = 'Esperando serie.')