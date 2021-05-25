def on_button_pressed_a():
    global on
    on = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global on
    on = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

on = 0
on = 0

def on_forever():
    pass
basic.forever(on_forever)

def on_in_background():
    if on >= 1:
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digital_write_pin(DigitalPin.P0, 0)
        basic.pause(500)
control.in_background(on_in_background)
