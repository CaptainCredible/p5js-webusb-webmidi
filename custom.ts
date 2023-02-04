
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

let messageDelay = 10

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace p5midi {

    //% block="send note number = $note on channel = $channel"
    export function sendNote(channel: number, note: number) {
        channel = Math.constrain(channel, 0, 9)
        note = Math.constrain(note, 0, 127)
        serial.writeLine("N" + channel + note)
    }

    //% block="send ccVal = $ccVal to ccNumber = $ccNum"
    export function sendCC(ccNum: number, ccVal: number) {
        ccNum = Math.constrain(ccNum, 0, 9)
        ccVal = Math.constrain(ccVal, 0, 127)
        serial.writeLine("C" + ccNum + ccVal)
        basic.pause(messageDelay)
    }
}
