class Wallet {
  constructor() {
    let _actualBalance = 100

    this.canPlay = function (betValue, operation) {
      if (operation === '+') {
        _actualBalance += betValue * 3
        lastResult.classList.remove('red')
        lastResult.classList.add('green')
        lastResult.innerHTML = `+${betValue * 3}$`
      } else if (operation === '-') {
        _actualBalance -= betValue
        lastResult.classList.remove('green')
        lastResult.classList.add('red')
        lastResult.innerHTML = `-${betValue}$`
      }
    }

    this.updateCredit = function () {
      credits.innerHTML = `${_actualBalance}$`
      return _actualBalance
    }
  }
}
