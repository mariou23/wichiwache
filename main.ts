radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("papel")
})
radio.onReceivedString(function (receivedString) {
    tool = randint(0, 2)
    if (0 < 0) {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    basic.clearScreen()
})
let tool = 0
basic.clearScreen()
radio.setGroup(74)
basic.forever(function () {
	
})
