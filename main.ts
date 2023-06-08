input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 3; index++) {
        led.plot(index, randint(0, 5))
        led.plot(index, randint(0, 5))
        led.plot(index, randint(0, 5))
        led.plot(index, randint(0, 5))
    }
})
input.onButtonPressed(Button.B, function () {
    if (led.point(0, 0)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
