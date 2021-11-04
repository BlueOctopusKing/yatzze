let Stored_D3 = 0
let dice_3 = 0
let Stored_D1 = 0
let dice_1 = 0
let Stored_D5 = 0
let dice_5 = 0
let Stored_D2 = 0
let dice_2 = 0
let Stored_D4 = 0
let dice_4 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    Stored_D3 = dice_3
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    Stored_D1 = dice_1
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Yes)
    Stored_D5 = dice_5
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    Stored_D2 = dice_2
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Yes)
    Stored_D4 = dice_4
})
input.onGesture(Gesture.Shake, function () {
    dice_1 = randint(1, 6)
    dice_2 = randint(1, 6)
    dice_3 = randint(1, 6)
    dice_4 = randint(1, 6)
    dice_5 = randint(1, 6)
})
basic.forever(function () {
    if (true) {
        basic.showString("D1")
        basic.showNumber(dice_1)
        basic.showString("D2")
        basic.showNumber(dice_2)
        basic.showString("D3")
        basic.showNumber(dice_3)
        basic.showString("D4")
        basic.showNumber(dice_4)
        basic.showString("D5")
        basic.showNumber(dice_5)
    } else {
        basic.showString("D1")
        basic.showNumber(Stored_D1)
        basic.showString("D2")
        basic.showNumber(Stored_D2)
        basic.showString("D3")
        basic.showNumber(Stored_D3)
        basic.showString("D4")
        basic.showNumber(Stored_D4)
        basic.showString("D5")
        basic.showNumber(Stored_D5)
    }
})
