datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "X",
    "Y",
    "Z"
    )
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.No)
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else if (name == "y") {
        y = value
    } else if (name == "z") {
        z = value
    }
})
let z = 0
let y = 0
let x = 0
let logging = false
radio.setGroup(99)
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"X",
"Y",
"Z"
)
loops.everyInterval(5000, function () {
    if (logging) {
        basic.showIcon(IconNames.Heart)
        datalogger.log(
        datalogger.createCV("X", x),
        datalogger.createCV("Y", y),
        datalogger.createCV("Z", z)
        )
        basic.clearScreen()
    }
})
