let colorsTable = ['red', 'green', 'blue']
let cards = [document.querySelector('.card_1'), document.querySelector('.card_2'), document.querySelector('.card_3')]

class Draw {
  constructor() {
    this.randomizeCardColor = function () {
      let timer
      const random = randomNumber(0, 1)
      if (random) {
        timer = 200
      } else {
        timer = 400
      }

      cards.forEach(card => {
        card.style.opacity = 0
        card.style.background = colorsTable[randomNumber(0, 2)]

        setTimeout(() => {
          card.style.opacity = 1
        }, timer)

        random ? (timer += 100) : (timer -= 100)
      })
    }

    this.result = function () {
      const map = cards.map(card => card.style.background)

      return new Set(map).size != 2 ? '+' : '-'
    }
  }
}
