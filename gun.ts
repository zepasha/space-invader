//guns guns guns
let nb_cannon_red = 1
let nb_cannon_blue = 1
let nb_cannon_yellow = 1
let nb_cannon_green = 1

let red_cooldown = 500
let blue_cooldown = 500
let yellow_cooldown = 500
let green_cooldown = 500

controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
        let bullet = sprites.create(assets.image`bullet`, SpriteKind.Projectile)
        bullet.setPosition(0,110)
        bullet.x = mySprite_red.x
        bullet.setVelocity(0, -40)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    let bullet = sprites.create(assets.image`bullet`, SpriteKind.Projectile)
    bullet.setPosition(0, 110)
    bullet.x = mySprite_blue.x
    bullet.setVelocity(0, -40)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    let bullet = sprites.create(assets.image`bullet`, SpriteKind.Projectile)
    bullet.setPosition(0, 110)
    bullet.x = mySprite_yellow.x
    bullet.setVelocity(0, -40)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    let bullet = sprites.create(assets.image`bullet`, SpriteKind.Projectile)
    bullet.setPosition(0, 110)
    bullet.x = mySprite_green.x
    bullet.setVelocity(0, -40)
})


