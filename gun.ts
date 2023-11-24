//guns guns guns
let nb_cannon_red = 1
let nb_cannon_blue = 1
let nb_cannon_yellow = 1
let nb_cannon_green = 1

let red_cooldown = 500
let blue_cooldown = 500
let yellow_cooldown = 500
let green_cooldown = 500

let red_last_attack = 0
let blue_last_attack = 0
let yellow_last_attack = 0
let green_last_attack = 0

forever(function() {
    if (controller.player1.isPressed(ControllerButton.A) == true) {
        if(game.runtime() - red_last_attack >= red_cooldown) {
            let bullet = sprites.create(assets.image`bullet`, SpriteKind.Projectile)
            bullet.setPosition(0,110)
            bullet.x = mySprite_red.x
            bullet.setVelocity(0, -40)
            bullet.setFlag(SpriteFlag.DestroyOnWall, true)
            red_last_attack = game.runtime()
        }
    }
    if (controller.player2.isPressed(ControllerButton.A) == true) {
        if (game.runtime() - blue_last_attack >= blue_cooldown) {
            let bullet = sprites.create(assets.image`bullet`, SpriteKind.Projectile)
            bullet.setPosition(0, 110)
            bullet.x = mySprite_blue.x
            bullet.setVelocity(0, -40)
            bullet.setFlag(SpriteFlag.DestroyOnWall, true)
            blue_last_attack = game.runtime()
        }
    }
    if (controller.player3.isPressed(ControllerButton.A) == true) {
        if (game.runtime() - yellow_last_attack >= yellow_cooldown) {
            let bullet = sprites.create(assets.image`bullet`, SpriteKind.Projectile)
            bullet.setPosition(0, 110)
            bullet.x = mySprite_yellow.x
            bullet.setVelocity(0, -40)
            bullet.setFlag(SpriteFlag.DestroyOnWall, true)
            yellow_last_attack = game.runtime()
        }
    }
    if (controller.player4.isPressed(ControllerButton.A) == true) {
        if (game.runtime() - green_last_attack >= green_cooldown) {
            let bullet = sprites.create(assets.image`bullet`, SpriteKind.Projectile)
            bullet.setPosition(0, 110)
            bullet.x = mySprite_green.x
            bullet.setVelocity(0, -40)
            bullet.setFlag(SpriteFlag.DestroyOnWall, true)
            green_last_attack = game.runtime()
        }
    }





})



