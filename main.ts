let y = 0
let row0 = 0
let row1 = 0
let row2 = 0
let row3 = 0
let row4 = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 3; index++) {
        led.plot(index, randint(0, 5))
        led.plot(index, randint(0, 5))
        led.plot(index, randint(0, 5))
        led.plot(index, randint(0, 5))
        led.plot(index, randint(0, 5))
    }
})
input.onButtonPressed(Button.B, function () {
    y = 0
    row0 = 0
    for (let x = 0; x <= 3; x++) {
        if (led.point(x, y)) {
            row0 += 1
        }
    }
    if (row0 % 2 == 1) {
        led.plot(4, 0)
    }
    y = 1
    row1 = 0
    for (let x = 0; x <= 3; x++) {
        if (led.point(x, y)) {
            row1 += 1
        }
    }
    if (row1 % 2 == 1) {
        led.plot(4, 1)
    }
    y = 2
    row2 = 0
    for (let x = 0; x <= 3; x++) {
        if (led.point(x, y)) {
            row2 += 1
        }
    }
    if (row2 % 2 == 1) {
        led.plot(4, 2)
    }
    y = 3
    row3 = 0
    for (let x = 0; x <= 3; x++) {
        if (led.point(x, y)) {
            row3 += 1
        }
    }
    if (row3 % 2 == 1) {
        led.plot(4, 3)
    }
    y = 4
    row4 = 0
    for (let x = 0; x <= 3; x++) {
        if (led.point(x, y)) {
            row4 += 1
        }
    }
    if (row4 % 2 == 1) {
        led.plot(4, 4)
    }
})
