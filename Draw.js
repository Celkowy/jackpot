let colorsTable = ['cherry', 'diamond', 'seven']
let cards = [document.getElementById('img1'), document.getElementById('img2'), document.getElementById('img3')]
let animation = [
  document.querySelector('.card_1'),
  document.querySelector('.card_2'),
  document.querySelector('.card_3'),
]

class Draw {
  constructor() {
    this.randomizeCardColor = random => {
      let timer

      if (random) {
        timer = 500
      } else {
        timer = 1000
      }

      cards.forEach((card, index, table) => {
        card.style.opacity = 0

        table[index].src = `./icons/${colorsTable[randomNumber(0, 2)]}${window.innerWidth > 480 ? 256 : 80}.png`

        setTimeout(() => {
          card.style.opacity = 1
        }, timer)

        random ? (timer += 250) : (timer -= 250)
      })
    }

    this.resultOfBet = () => {
      const map = cards.map(card => card.src)
      return new Set(map).size != 2 ? '+' : '-'
    }
  }
}
