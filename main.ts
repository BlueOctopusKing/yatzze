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
let Shake_count = 0
input.onPinPressed(TouchPin.P0, function () {
    if (Stored_D3 > 0) {
        Stored_D3 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_D3 = dice_3
    }
})
input.onButtonPressed(Button.A, function () {
    if (Stored_D1 > 0) {
        Stored_D1 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_D1 = dice_1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (Stored_D5 > 0) {
        Stored_D5 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_D5 = dice_5
    }
})
input.onButtonPressed(Button.B, function () {
    if (Stored_D2 > 0) {
        Stored_D2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_D2 = dice_2
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Stored_D4 > 0) {
        Stored_D4 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_D4 = dice_4
    }
})
input.onGesture(Gesture.Shake, function () {
    Shake_count = Shake_count + 1
    dice_1 = randint(1, 6)
    dice_2 = randint(1, 6)
    dice_3 = randint(1, 6)
    dice_4 = randint(1, 6)
    dice_5 = randint(1, 6)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (true) {
            basic.showString("")
            basic.showNumber(Stored_D1)
        } else {
            basic.showString("S#1")
            basic.showIcon(IconNames.No)
        }
    } else {
    	
    }
})
