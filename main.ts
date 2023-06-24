input.onGesture(Gesture.Shake, function () {
	
})
input.onGesture(Gesture.ThreeG, function () {
	
})
basic.showIcon(IconNames.Yes)
basic.showNumber(0)
let 이런신발 = 0
basic.forever(function () {
    if (1500 < input.acceleration(Dimension.Strength)) {
        이런신발 += 1
        basic.showNumber(이런신발)
        music.playTone(1200, music.beat(BeatFraction.Whole))
    }
})
