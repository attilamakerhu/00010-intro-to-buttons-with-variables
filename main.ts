let variable_b = 0
let variable_a = 0
input.onButtonPressed(Button.A, function () {
    variable_b = 1
})
input.onButtonPressed(Button.B, function () {
    variable_b = 1
})
basic.forever(function () {
    if (variable_a == 1) {
        basic.showString("A")
        variable_a = 0
    } else if (variable_b == 0) {
        basic.showString("B")
        variable_b = 0
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
