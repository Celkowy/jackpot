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
  const random = randomNumber(0, 1)
  if (inputValue.value > 0 && wallet.updateBalance() >= inputValue.value) {
    draw.randomizeCardColor(random)

    if (random) {
      animation.forEach(card => card.classList.add('rotate'))
    } else {
      animation.forEach(card => card.classList.add('rotate-back'))
    }
    setTimeout(() => {
      if (random) {
        animation.forEach(card => card.classList.remove('rotate'))
      } else {
        animation.forEach(card => card.classList.remove('rotate-back'))
      }
      wallet.canPlay(inputValue.value, draw.resultOfBet())
      stats.countGameStats(draw.resultOfBet())
      wallet.updateBalance()
      inputValue.value = ''
    }, 1250)
  } else if (wallet.updateBalance() < inputValue.value) {
    alert('You do not have that much money')
  } else if (inputValue.value == '') {
    alert('Insert $')
  } else if (wallet.updateBalance() >= 0) {
    alert('Insert at least 5$')
  }
})

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
