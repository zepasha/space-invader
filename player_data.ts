//player.data
/*let mySprite_red =sprites.create(assets.image`blank`, SpriteKind.Player)
let mySprite_blue = sprites.create(assets.image`blank`, SpriteKind.Player)
let mySprite_yellow = sprites.create(assets.image`blank`, SpriteKind.Player)
let mySprite_green = sprites.create(assets.image`blank`, SpriteKind.Player)
*/
//if(mp.isConnected(mp.playerSelector(mp.PlayerNumber.One)) == true) {
    let mySprite_red = sprites.create(assets.image`player_red`, SpriteKind.Player)
    let red_speed_x = 50
    mySprite_red.setPosition(1, 115)
    controller.player1.moveSprite(mySprite_red, red_speed_x, 0)
//}
//if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two)) == true){
    let mySprite_blue = sprites.create(assets.image`player_blue`, SpriteKind.Player)
    let blue_speed_x = 50
    mySprite_blue.setPosition(3, 115)
    controller.player2.moveSprite(mySprite_blue, blue_speed_x, 0)
//}
//if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Three)) == true) {
    let mySprite_yellow = sprites.create(assets.image`player_yellow`, SpriteKind.Player)
    let yellow_speed_x = 50
    mySprite_yellow.setPosition(96, 115)
    controller.player3.moveSprite(mySprite_yellow, yellow_speed_x, 0)
//}
//if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Four)) == true) {
    let mySprite_green = sprites.create(assets.image`player_green`, SpriteKind.Player)
    let green_speed_x = 50
    mySprite_green.setPosition(8, 115)
    controller.player4.moveSprite(mySprite_green, green_speed_x, 0)
//}








