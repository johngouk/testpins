input.onButtonPressed(Button.A, function on_button_pressed_a() {
//    pins.digitalWritePin(DigitalPin.P0, 1)
    on = 1
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
//    pins.digitalWritePin(DigitalPin.P0, 0)
    on = 0
    basic.showIcon(IconNames.Sad)
})
let on = 0
on = 0


control.inBackground(function on_in_background() {
    while (true) {
       if (on >= 1) {
//            basic.showIcon(IconNames.Happy)
            pins.digitalWritePin(DigitalPin.P0, 1)
//            control.waitMicros(500000)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(200) 
        } else {
//            basic.showIcon(IconNames.Sad)
//            pins.digitalWritePin(DigitalPin.P0, 0)
//            control.waitMicros(500000)
            basic.pause(500) 
        }
    }
    
}) 