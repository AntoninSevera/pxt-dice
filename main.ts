let number = 0;
//input.onButtonPressed(Button.A, function() {
//    if (number > 0)
//   {
//       number -= 1
//    }
//    whaleysans.showNumber(10)
//})
//input.onButtonPressed(Button.B, function() {
//    if (number < 10) {
//        number += 1
//    }
//    whaleysans.showNumber(0)
//})
basic.showNumber(number);
basic.forever(function() {
    let isPressed = input.buttonIsPressed(Button.A);
    if (isPressed) {
        if (number < 50) {
            number += 1
        }
    }
    let bPressed = input.buttonIsPressed(Button.B);
    if (bPressed) {
        if (number > 0) {
            number -= 1
        }
    }
    whaleysans.showNumber(number)
})