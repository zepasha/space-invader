//scene
info.setScore(0)
let level_ = 0
function level() {
    if(level_ == 0) {
        tiles.setCurrentTilemap(tilemap`niveau1`)
    }
    if(level_ == 1) {
        tiles.setCurrentTilemap(tilemap`niveau2`)
    }
    level_ += 1
}

//main
forever(function() {
    if(info.score() == 32) {
        info.changeScoreBy(1)
        level()
    }
    if(info.score() >= 64 && enemy_count == 0) {
        level()
        pause(5000)
    }
})

pause(1000)
level()

