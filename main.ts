//let number = 0;
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
//basic.showNumber(number);
//basic.forever(function() {
//    let isPressed = input.buttonIsPressed(Button.A);
 //   if (isPressed) {
  //      if (number < 50) {
//            number += 1
  //      basic.pause(200)
    //    }
    //}
    //let bPressed = input.buttonIsPressed(Button.B);
//    if (bPressed) {
  //      if (number > 0) {
    //        number -= 1
      //  basic.pause(200)
        //}
  //  }
  //  whaleysans.showNumber(number)
//})
let number1 = 4
let previewStateAPressed = input.buttonIsPressed(Button.A);
let previewStateBPressed = input.buttonIsPressed(Button.B);

let makej2A = () => {
    number1 -= 1
    whaleysans.showNumber(number1)
}
let makej2B = () => {
    number1 += 1
    whaleysans.showNumber(number1)
}

let makej = function() {
    if (input.buttonIsPressed(Button.A)) {
        //let actualStateA = true;
        //if (previewStateAPressed == false && actualStateA == true)
        if (!previewStateAPressed) {
            number1 -= 1
            previewStateAPressed = true;
        } 
    } else {
        previewStateAPressed = false;
    }

    if (input.buttonIsPressed(Button.B)) {
        if (!previewStateBPressed) {
            number1 += 1
            previewStateBPressed = true;
        }
    } else {
        previewStateBPressed = false
    }
    whaleysans.showNumber(number1)
}

input.onButtonPressed(Button.A, makej2A); //registrace k události...
input.onButtonPressed(Button.B, makej2B); //registrace k události...

//while (true) {
//    makej()
//}