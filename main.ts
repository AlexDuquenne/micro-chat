input.onButtonPressed(Button.A, function () {
    radio.sendString("SOS")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(0)
