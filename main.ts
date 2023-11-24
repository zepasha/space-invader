//scene
scene.cameraProperty(CameraProperty.X)
tiles.setCurrentTilemap(tilemap`niveau1`)
info.score()

//main


forever(function() {
    if (info.score() <= 50) {
        check_player()
    }
    score()
    controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
        gun_red()
    })
    controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
        gun_blue()
    })
    controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
        gun_yellow()
    })
    controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
        gun_green()
    })

})

function score() {
pause(250)
info.changeScoreBy(1)
}


