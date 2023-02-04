let myVal = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    led.toggleAll()
myVal = Math.map(input.rotation(Rotation.Pitch), -180, 180, 0, 127)
})
