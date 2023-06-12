input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.temperature() + 32)
    basic.showString("f")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() + 273)
    basic.showString("K")
})
let lectura = 0
led.plotBarGraph(
lectura,
1023
)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(lectura)
    }
})
