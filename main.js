const draw = new Draw()
const wallet = new Wallet()
const stats = new Statistics()
let credits = document.querySelector('.credits')
let games = document.querySelector('.games')
let wins = document.querySelector('.win')
let loses = document.querySelector('.lose')
let lastResult = document.querySelector('.last-result')
const form = document.querySelector('.form')
const inputValue = document.querySelector('.text')

form.addEventListener('submit', e => {
  e.preventDefault()

  if (inputValue.value > 0 && wallet.updateCredit() >= inputValue.value) {
    draw.randomizeCardColor()
    const resultOfBet = draw.result()
    wallet.canPlay(inputValue.value, resultOfBet)
    stats.countGameStats(resultOfBet)
    wallet.updateCredit()
    inputValue.value = ''
  } else if (wallet.updateCredit() < inputValue.value) {
    alert('You do not have that much money')
  } else if (inputValue.value == '') {
    alert('Insert value')
  } else if (wallet.updateCredit() >= 0) {
    alert('Insert at least 1$')
  }
})

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
