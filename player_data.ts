//player.data
let create_red_ = false
let create_blue_ = false
let create_yellow_ = false
let create_green_ = false
function check_player() {    
    controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
        if(create_red_ != true) {
            create_red()
        }
    })
    controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
        if (create_blue_ != true) {
            create_blue()
        }
        
    })
    controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
        if (create_yellow_ != true) {
            create_yellow()
        }
    })
    controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
        if (create_green_ != true) {
            create_green()
        }
    })
}

function create_red() {
    let mySprite_red = sprites.create(assets.image`player_red`, SpriteKind.Player)
    mySprite_red.setPosition(9, 6)
    let red_speed_x = 80
    let red_speed_y = 80
    controller.player1.moveSprite(mySprite_red, red_speed_x, red_speed_y)
    create_red_ = true
}
function create_blue() {
    let mySprite_blue = sprites.create(assets.image`player_blue`, SpriteKind.Player)
    mySprite_blue.setPosition(1, 6)
    let blue_speed_x = 80
    let blue_speed_y = 80
    controller.player2.moveSprite(mySprite_blue, blue_speed_x, blue_speed_y)
    create_blue_ = true
}
function create_yellow() {
    let mySprite_yellow = sprites.create(assets.image`player_yellow`, SpriteKind.Player)
    mySprite_yellow.setPosition(0,6)
    let yellow_speed_x = 80
    let yellow_speed_y = 80
    controller.player3.moveSprite(mySprite_yellow, yellow_speed_x, yellow_speed_y)
    create_yellow_ = true
}
function create_green() {
    let mySprite_green = sprites.create(assets.image`player_green`, SpriteKind.Player)
    mySprite_green.setPosition(5, 6)
    let green_speed_x = 80
    let green_speed_y = 80
    controller.player4.moveSprite(mySprite_green, green_speed_x, green_speed_y)
    create_green_ = true
}

