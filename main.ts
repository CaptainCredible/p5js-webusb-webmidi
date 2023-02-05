input.onLogoEvent(TouchButtonEvent.Touched, function () {
    p5midi.sendNote(0, 44)
})
basic.forever(function () {
    p5midi.sendCC(0, Math.map(input.rotation(Rotation.Pitch), -90, 90, 0, 127))
    p5midi.sendCC(1, Math.map(input.rotation(Rotation.Roll), -90, 90, 0, 127))
    p5midi.sendCC(2, Math.map(input.lightLevel(), 0, 255, 0, 127))
    led.toggle(2, 0)
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . . . . .
        . . . . .
        `)
})
