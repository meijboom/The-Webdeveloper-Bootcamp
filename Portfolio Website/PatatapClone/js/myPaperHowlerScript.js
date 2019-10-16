// create empty array for the circles
var circles = [];
// create array of sounds
var soundArr = {
        a: { color: "IndianRed", 
             sound: new Howl({ src: ['Sounds/bubbles.mp3']})},
        b: { color: "LightSalmon", 
             sound: new Howl({ src: ['Sounds/clay.mp3']})},
        c: { color: "DeepPink", 
             sound: new Howl({ src: ['Sounds/confetti.mp3']})},
        d: { color: "Tomato", 
             sound: new Howl({ src: ['Sounds/corona.mp3']})},
        e: { color: "Orange", 
             sound: new Howl({ src: ['Sounds/dotted-spiral.mp3']})},
        f: { color: "YellowGreen", 
             sound: new Howl({ src: ['Sounds/flash-1.mp3']})},
        g: { color: "DarkCyan", 
             sound: new Howl({ src: ['Sounds/flash-2.mp3']})},
        h: { color: "Chocolate", 
             sound: new Howl({ src: ['Sounds/flash-3.mp3']})},
        i: { color: "Fuchsia", 
             sound: new Howl({ src: ['Sounds/glimmer.mp3']})},
        j: { color: "Wheat", 
             sound: new Howl({ src: ['Sounds/moon.mp3']})},
        k: { color: "RosyBrown", 
             sound: new Howl({ src: ['Sounds/pinwheel.mp3']})},
        l: { color: "GoldenRod", 
             sound: new Howl({ src: ['Sounds/piston-1.mp3']})},
        m: { color: "DarkGreen", 
             sound: new Howl({ src: ['Sounds/piston-2.mp3']})},
        n: { color: "Maroon", 
             sound: new Howl({ src: ['Sounds/piston-3.mp3']})},
        o: { color: "Lime", 
             sound: new Howl({ src: ['Sounds/prism-1.mp3']})},
        p: { color: "Teal", 
             sound: new Howl({ src: ['Sounds/prism-2.mp3']})},
        q: { color: "Maroon", 
             sound: new Howl({ src: ['Sounds/prism-3.mp3']})},
        r: { color: "Yellow", 
             sound: new Howl({ src: ['Sounds/splits.mp3']})},
        s: { color: "Aquamarine", 
             sound: new Howl({ src: ['Sounds/squiggle.mp3']})},
        t: { color: "Olive", 
             sound: new Howl({ src: ['Sounds/strike.mp3']})},
        u: { color: "Purple", 
             sound: new Howl({ src: ['Sounds/suspension.mp3']})},
        v: { color: "Blue", 
             sound: new Howl({ src: ['Sounds/timer.mp3']})},
        w: { color: "Red", 
             sound: new Howl({ src: ['Sounds/ufo.mp3']})},
        x: { color: "MidnightBlue", 
             sound: new Howl({ src: ['Sounds/veil.mp3']})},
        y: { color: "Green", 
             sound: new Howl({ src: ['Sounds/wipe.mp3']})},
        z: { color: "OrangeRed", 
             sound: new Howl({ src: ['Sounds/zig-zag.mp3']})},
}

// keypress listener, when a letter is pressed, corresponding sound and color will display!
function onKeyDown(event) {
    if(soundArr[event.key]){
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 500)
        newCircle.fillColor = soundArr[event.key].color;
        soundArr[event.key].sound.play();
        circles.push(newCircle);
    }
}

// change the Hue when animation starts and fades out the circle area.
function onFrame(){
    for(var i = 0; i < circles.length; i++){
        circles[i].fillColor.hue += 1;
        circles[i].scale (0.9);
        // remove the circle from the cirles Array when the area is smaller than 1.
        if(circles[i].area < 1){
            circles[i].remove(); // remove the circle from the canvas
            circles.splice(i, 1); // remove the circle from the array
            console.log(circles);
          }
    }
};

