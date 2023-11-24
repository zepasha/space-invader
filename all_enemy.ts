let enemy1_1: Sprite = null
let enemy1_2: Sprite = null
let enemy_count = 0
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 250)
    sprites.destroy(otherSprite, effects.trail, 100)
    info.changeScoreBy(1)
})
function enemy_create() {
    for (let value of tiles.getTilesByType(assets.tile`enemy1`)) {
        let enemy1_1 = sprites.create(assets.image`enemy1_1`, SpriteKind.Enemy)
        let enemy1_2 = sprites.create(assets.image`enemy1_1`, SpriteKind.Enemy)
        enemy_count += 2
        tiles.placeOnTile(enemy1_1, value)
        tiles.placeOnTile(enemy1_2, value)
        enemy1_1.setPosition(enemy1_1.x -= 4, enemy1_1.y)
        enemy1_2.setPosition(enemy1_2.x += 4, enemy1_2.y)
        tiles.setTileAt(value, assets.tile`black`)
    }
}
