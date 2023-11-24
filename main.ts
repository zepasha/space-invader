//variable (some variable will be declared here and modified later)

//scene
scene.cameraProperty(CameraProperty.X)
tiles.setCurrentTilemap(tilemap`niveau1`)
info.score()

//main


forever(function() {
    score()
    
})

function score() {
pause(250)
info.changeScoreBy(1)
}


