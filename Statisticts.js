class Statistics {
  constructor() {
    let _totalGames = 0
    let _wins = 0
    let _loses = 0

    this.countGameStats = function (result) {
      if (result == '+') {
        wins.innerHTML = `${++_wins}`
      } else if (result == '-') {
        loses.innerHTML = `${++_loses}`
      }
      games.innerHTML = `${++_totalGames}`
    }
  }
}
