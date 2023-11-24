let enemy1_1: Sprite = null
let enemy1_2: Sprite = null
let enemy1_1_ini_x = 0
let enemy_count = 0
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 250)
    sprites.destroy(otherSprite, effects.trail, 100)
    info.changeScoreBy(1)
})
game.onUpdate(function() {
    for (let value of tiles.getTilesByType(assets.tile`enemy1`)) {
        let enemy1_1 = sprites.create(assets.image`enemy1_1`, SpriteKind.Enemy)
        let enemy1_2 = sprites.create(assets.image`enemy1_1`, SpriteKind.Enemy)
        enemy_count += 2
        tiles.placeOnTile(enemy1_1, value)
        tiles.placeOnTile(enemy1_2, value)
        enemy1_1_ini_x = enemy1_1.x
        enemy1_1.setPosition(enemy1_1.x -= 4, enemy1_1.y)
        enemy1_2.setPosition(enemy1_2.x += 4, enemy1_2.y)
        tiles.setTileAt(value, assets.tile`black`)
        enemy1_1.setVelocity(7, 0)
        enemy1_2.setVelocity(7, 0)
        forever(function() {
            pause(4000)
            enemy1_1.setVelocity(enemy1_1.vx *-1, 0)
            enemy1_2.setVelocity(enemy1_2.vx *-1, 0)
            enemy1_1.setPosition(enemy1_1.x, enemy1_1.y + 7)
            enemy1_2.setPosition(enemy1_2.x, enemy1_2.y + 7)
            pause(4000)
        })
        
    }
    /*
    for (let value of tiles.getTilesByType(assets.tile`enemy2`)) {
        let enemy1_1 = sprites.create(assets.image`enemy1_1`, SpriteKind.Enemy)
        let enemy1_2 = sprites.create(assets.image`enemy1_1`, SpriteKind.Enemy)
        let enemy1_3 = sprites.create(assets.image`enemy1_1`, SpriteKind.Enemy)
        let enemy1_4 = sprites.create(assets.image`enemy1_1`, SpriteKind.Enemy)
        enemy_count += 4
        tiles.placeOnTile(enemy1_1, value)
        tiles.placeOnTile(enemy1_2, value)
        tiles.placeOnTile(enemy1_3, value)
        tiles.placeOnTile(enemy1_4, value)
        enemy1_1.setPosition(enemy1_1.x -= 4, enemy1_1.y)
        enemy1_2.setPosition(enemy1_2.x += 4, enemy1_2.y)
        enemy1_3.setPosition(enemy1_1.x -= 4, enemy1_1.y)
        enemy1_4.setPosition(enemy1_2.x += 4, enemy1_2.y)
        tiles.setTileAt(value, assets.tile`black`)
        enemy1_1.setVelocity(7, 0)
        enemy1_2.setVelocity(7, 0)
        enemy1_3.setVelocity(7, 0)
        enemy1_4.setVelocity(7, 0)
        forever(function () {
            pause(4000)
            enemy1_1.setVelocity(enemy1_1.vx * -1, 0)
            enemy1_2.setVelocity(enemy1_2.vx * -1, 0)
            enemy1_1.setPosition(enemy1_1.x, enemy1_1.y + 7)
            enemy1_2.setPosition(enemy1_2.x, enemy1_2.y + 7)
            enemy1_3.setVelocity(enemy1_1.vx * -1, 0)
            enemy1_4.setVelocity(enemy1_2.vx * -1, 0)
            enemy1_3.setPosition(enemy1_1.x, enemy1_1.y + 7)
            enemy1_4.setPosition(enemy1_2.x, enemy1_2.y + 7)
            pause(4000)
        })

    }
    */
    
})
    

