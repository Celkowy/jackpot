const dra = new Draw()
const wal = new Wallet()
const stats = new Statistics()
let credits = document.querySelector('p.credits')
let games = document.querySelector('p.games')
let win = document.querySelector('p.win')
let lose = document.querySelector('p.lose')
let lastResult = document.querySelector('p.last-result')

const form = document.querySelector('.form')
const text = document.querySelector('.text')

form.addEventListener('submit', e => {
  e.preventDefault()
  let check = wal.updateCredit()
  if (text.value != '' && text.value > 0 && check >= text.value) {
    dra.randomizeCardColor()
    const result = dra.result()
    wal.canPlay(parseInt(text.value), result)
    stats.countGameStats(result)
    wal.updateCredit()
    text.value = ''
  } else {
    alert('Insert value')
  }
})

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
