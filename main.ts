let Fase_2 = 0
let decolar = 0
basic.showLeds(`
    # . # # .
    # # . . #
    # # . . #
    # # . . #
    # . # # .
    `)
basic.pause(100)
let list = 9
while (list > 0) {
    basic.showNumber(list)
    list = list - 1
    basic.pause(100)
}
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    . # # # .
    # . . . #
    `)
basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    # . . . #
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    . # # # .
    # . . . #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.clearScreen()
let Fase_1 = randint(decolar, 1)
basic.showString("Estagio 1 desacoplou?")
if (Fase_1 == 1) {
    basic.showString("Sim!")
    basic.showString("Entrou em orbita?")
    Fase_2 = randint(decolar, 1)
    if (Fase_2 == 1) {
        basic.showString("Sim!")
    } else {
        basic.showString("Soltar torre de escape")
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . . #
            # # . . .
            . . # . .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . #
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . # . .
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            `)
        basic.clearScreen()
    }
} else {
    basic.showString("Soltar torre de escape")
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        # # # . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # . . #
        # # . . .
        . . # . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . #
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        . . # . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        `)
    basic.clearScreen()
}
