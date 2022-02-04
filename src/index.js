const Player = require("./game/Player")
const GameManager = require('./game/GameManager')
const PLAYER_NUM = 5
const ACCURACY = 1

let players = Array.apply(null, Array(PLAYER_NUM)).map((index) => { return new Player(index, 500) })
let gm = new GameManager(players, ACCURACY)
gm.displayedCards = ['DK', 'S3', 'S5']
gm.refreshWinRates()

console.log('\nThe win rate of all hands: ')
gm.winTable.reduced().print()
// winTable.printMatrix()
// winTable.reduced().printMatrix()
console.log('Number of players: ' + PLAYER_NUM)
console.log('Cards revealed: ' + gm.displayedCards)
// let yourHand = ['D7', 'D5']
// console.log('Your hand ' + yourHand + ' has a win rate of ' + winTable.getWinRateOfHand(yourHand) + '%')
// yourHand = ['H7', 'H5']
// console.log('Your hand ' + yourHand + ' has a win rate of ' + winTable.getWinRateOfHand(yourHand) + '%')

