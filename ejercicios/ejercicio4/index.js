const $FORM = document.getElementById('form')
const $INPUT = document.getElementById('input')
const $WORDS = document.getElementById('words')
const $FIRSTWORD = document.getElementById('firstWord')
const $LASTWORD = document.getElementById('lastWord')

function handleSubmit ( e ) {
  e.preventDefault()
  const string = $INPUT.value
  $FORM.reset()

  if (string) {
    const words = wordsFromString(string)
        
    $WORDS.innerText += ' ' + words.length
    $FIRSTWORD.innerText += ' ' + words[0]
    $LASTWORD.innerText += ' ' + words[words.length - 1]
  }
}

function handleReset () {
  $WORDS.innerText = 'Número de palabras:'
  $FIRSTWORD.innerText = 'Primera palabra:'
  $LASTWORD.innerText = 'Última palabra:'
}

function wordsFromString ( string ) {
  let cleanedString = ''
  
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if(isLetter(char) || char === ' ') {
      cleanedString += char
    }
    
  }

  return cleanedString.split(' ').filter(word => word)
}

function isLetter ( char ) {
  return char.toLowerCase() != char.toUpperCase()
}

$FORM.addEventListener('submit', handleSubmit)
$FORM.addEventListener('reset', handleReset)
