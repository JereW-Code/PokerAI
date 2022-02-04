const GameManager = require('./game/GameManager')
const Player = require('./game/Player')

const PLAYER_NUM = 6
let players = Array.apply(null, Array(PLAYER_NUM)).map((p, index) => { return new Player(index, 500) })
let GM = new GameManager(players)

let running = true
let count = 0
while(running){
    console.log('<<< ' + ++count + ' round >>>')
    GM.run()

    GM.restart()
    if(GM.players.length === 1){
        running = false
        break
    }
    console.log(GM.players.map(p => p.id))
}

console.log('<<< END >>>')