class Wallet {
  constructor() {
    let _money = 100

    this.canPlay = function (value, operation) {
      if (typeof value === 'number' && typeof value != NaN && value > 0) {
        if (operation === '+') {
          _money += value * 3
          lastResult.classList.remove('red')
          lastResult.classList.add('green')
          lastResult.innerHTML = `+${value * 3}$`
        } else if (operation === '-') {
          if (_money - value >= 0) {
            _money -= value
            lastResult.classList.remove('green')
            lastResult.classList.add('red')
            lastResult.innerHTML = `-${value}$`
          } else {
            alert('You do not have enough cash')
          }
        } else {
          alert('Wrong operation')
        }
      } else if (value <= 0) {
        alert('Insert at least 1$')
      } else {
        alert('Give me a number')
      }
    }

    this.updateCredit = function () {
      credits.innerHTML = `${_money}$`
      return _money
    }
  }
}
