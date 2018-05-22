import React, { Component } from 'react';
import { View, WebView, StatusBar } from 'react-native';

export default class App extends Component {
    render() {

        var webViewCode = `
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="https://static.codehs.com/gulp/1be21bf8577aa9f6c6fffd21c209031c2f907753/chs-js-lib/chs.js"></script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
    canvas {
        margin: 0px;
        padding: 0px;
        display: inline-block;
        vertical-align: top;
    }
    #btn-container {
        text-align: center;
        padding-top: 10px;
    }
    #btn-play {
        background-color: #8cc63e;
    }
    #btn-stop {
        background-color: #de5844;
    }
    .glyphicon {
        margin-top: -3px;
        color: #FFFFFF;
    }
</style>
</head>

<body>
    <div id="canvas-container" style="margin: 0 auto; ">
        <canvas
        id="game"
        width="400"
        height="480"
        class="codehs-editor-canvas"
        style="width: 100%; height: 100%; margin: 0 auto;"
        ></canvas>
    </div>
    <div id="console"></div>
    <div id="btn-container">
        <button class="btn btn-main btn-lg" id="btn-play" onclick='stopProgram(); runProgram();'><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
        <button class="btn btn-main btn-lg" id="btn-stop" onclick='stopProgram();'><span class="glyphicon glyphicon-stop" aria-hidden="true"></span></button>
    </div>

<script>
    var console = {};
    console.log = function(msg){
        $("#console").html($("#console").html() + "     " + msg);
    };

    var runProgram = function() {
        //Sets the size of the canvas
setSize(600,600);

//Sets the background color of the canvas to be black
var backGround = new Rectangle(getWidth(),getHeight());
backGround.setColor(Color.black);
add(backGround);

var brown = new Color(139, 69, 19);

//Lines 12-53 set the size and color of each planet and the sun and adds them to the canvas
var sunx = getWidth()/2;
var suny = getHeight()/2;
var sun = new Circle(20);
sun.setPosition(getWidth()/2, getHeight()/2);
sun.setColor(Color.orange);
add(sun);

var marmo = new Circle(1);
marmo.setColor(Color.white);
add(marmo);
var moon = new Circle(1);
moon.setColor(Color.white);
add(moon);

var mercury = new Circle(3);
mercury.setColor(Color.red);
add(mercury);

var venus = new Circle(5.3);
venus.setColor(Color.green);
add(venus);

var earth = new Circle(5.5);
earth.setColor(Color.blue);
add(earth);

var mars = new Circle(5.9);
mars.setColor(Color.red);
add(mars);

var saturn = new Circle(8);
saturn.setColor(brown);
add(saturn);

var jupiter = new Circle(12);
jupiter.setColor(brown);
add(jupiter);

var neptune = new Circle(7);
neptune.setColor(Color.blue);
add(neptune);

var comet = new Circle(2);
comet.setColor(Color.blue);
add(comet);

// Each timer makes each planet move at a rate of 100 milliseconds
function start(){
    setTimer(merc,100);
    setTimer(ven,100);
    setTimer(eart,100);
    setTimer(mar,100);
    setTimer(sat,100);
    setTimer(jup,100);
    setTimer(nep,100);
    setTimer(com,100);
    setTimer(moo,100);
    setTimer(marmoon,100);
}

//Sets a constant for the TotalTime for each function below
var mercTotalTime = 0;
var venTotalTime = 0;
var eartTotalTime = 0;
var marTotalTime = 0;
var satTotalTime = 0;
var jupTotalTime =0;
var nepTotalTime = 0;
var comTotalTime = 0;
var moonTotalTime = 0;
var marmoTotalTime =0;
var pi = 3.14;
var centerx = sun.getX();
var centery = sun.getY();


//Each function below corresponds to each planet in the solar system. The functions set the shape
//of the ellipse of each planet, the rate of its orbit and initiates the movement of each planet.
function merc() {
    mercTotalTime += pi/10;
    var mercx = sunx + 35 * Math.cos(mercTotalTime);
    var mercy = (5+suny) - 30 * Math.sin(mercTotalTime);
    mercury.setPosition(mercx, mercy);
}
function ven(){
    venTotalTime+=pi/40;
    var venx = (10+sunx) + 55 * Math.cos(venTotalTime);
    var veny = suny - 50 * Math.sin(venTotalTime);
    venus.setPosition(venx, veny);
}
function eart(){
    eartTotalTime+=pi/68;
    var earthx = (10+sunx) + 85 * Math.cos(eartTotalTime);
    var earthy = suny - 70 * Math.sin(eartTotalTime);
    earth.setPosition(earthx, earthy);
}
function marmoon(){
    marmoTotalTime+=pi/70;
    var marmox = mars.getX() + 10 * Math.cos(marTotalTime);
    var marmoy = mars.getY() - 10 * Math.sin(marTotalTime);
    mars.setPosition(marmox, marmoy);
}
function mar(){
    marTotalTime+=pi/70;
    var marsx = (11+sunx) + 115 * Math.cos(marTotalTime);
    var marsy = suny - 100 * Math.sin(marTotalTime);
    mars.setPosition(marsx, marsy);
}
function sat(){
    satTotalTime+=pi/150;
    var satx = (15+sunx )+ 175 * Math.cos(satTotalTime);
    var saty = suny - 160 * Math.sin(satTotalTime);
    saturn.setPosition(satx,saty);
}
function jup(){
    jupTotalTime+=pi/200;
    var jupx = sunx + 240 * Math.cos(jupTotalTime);
    var jupy = (15+suny) - 265 * Math.sin(jupTotalTime);
    jupiter.setPosition(jupx,jupy);
}
function nep(){
    nepTotalTime+=pi/250;
    var nepx = sunx + 300 * Math.cos(nepTotalTime);
    var nepy = (20+suny) - 350 * Math.sin(nepTotalTime);
    neptune.setPosition(nepx,nepy);
}

function com(){
    comTotalTime+=pi/350;
    var comx = sunx + 35 * Math.cos(comTotalTime);
    var comy = (50+suny) - 500 * Math.sin(comTotalTime);
    comet.setPosition(comx,comy);
}

function moo(){
    moonTotalTime+=pi/68;
    var moox = earth.getX() + 10 * Math.cos(moonTotalTime);
    var mooy = earth.getY() + 10 * Math.sin(moonTotalTime);
    moon.setPosition(moox,mooy);
}



        if (typeof start === 'function') {
            start();
        }

        // Overrides setSize() if called from the user's code. Needed because
        // we have to change the canvas size and attributes to reflect the
        // user's desired program size. Calling setSize() from user code only
        // has an effect if Fit to Full Screen is Off. If Fit to Full Screen is
        // On, then setSize() does nothing.
        function setSize(width, height) {
            if (!true) {
                // Call original graphics setSize()
                window.__graphics__.setSize(width, height);

                // Scale to screen width but keep aspect ratio of program
                // Subtract 2 to allow for border
                var canvasWidth = window.innerWidth - 2;
                var canvasHeight = canvasWidth * getHeight() / getWidth();

                // Make canvas reflect desired size set
                adjustMarginTop(canvasHeight);
                setCanvasContainerSize(canvasWidth, canvasHeight);
                setCanvasAttributes(canvasWidth, canvasHeight);
            }
        }
    };

    var stopProgram = function() {
        removeAll();
        window.__graphics__.fullReset();
    }

    window.onload = function() {
        if (!false) {
            $('#btn-container').remove();
        }

        var canvasWidth;
        var canvasHeight;
        if (true) {
            // Get device window width and set program size to those dimensions
            setSize(window.innerWidth, window.innerHeight);
            canvasWidth = getWidth();
            canvasHeight = getHeight();

            if (false) {
                // Make room for buttons if being shown
                $('#btn-container').css('padding', '5px 0');
                canvasHeight -= $('#btn-container').outerHeight();
            }

            setCanvasAttributes(canvasWidth, canvasHeight);
        } else {
            // Scale to screen width but keep aspect ratio of program
            // Subtract 2 to allow for border
            canvasWidth = window.innerWidth - 2;
            canvasHeight = canvasWidth * getHeight() / getWidth();

            // Light border around canvas if not full screen
            $('#canvas-container').css('border', '1px solid #beccd4');

            adjustMarginTop(canvasHeight);
        }

        setCanvasContainerSize(canvasWidth, canvasHeight);

        if (true) {
            runProgram();
        }
    };

    // Set the canvas container width and height.
    function setCanvasContainerSize(width, height) {
        $('#canvas-container').width(width);
        $('#canvas-container').height(height);
    }

    // Set the width and height attributes of the canvas. Allows
    // getTouchCoordinates to sense x and y correctly.
    function setCanvasAttributes(canvasWidth, canvasHeight) {
        $('#game').attr('width', canvasWidth);
        $('#game').attr('height', canvasHeight);
    }

    // Assumes the Fit to Full Screen setting is Off. Adjusts the top margin
    // depending on the Show Play/Stop Buttons setting.
    function adjustMarginTop(canvasHeight) {
        var marginTop = (window.innerHeight - canvasHeight)/2;
        if (false) {
            marginTop -= $('#btn-container').height()/3;
        }
        $('#canvas-container').css('margin-top', marginTop);
    }
</script>
</body>
</html>
`;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <WebView
                    source={{html: webViewCode, baseUrl: "/"}}
                    javaScriptEnabled={true}
                    style={{ flex: 1 }}
                    scrollEnabled={false}
                    bounces={false}
                    scalesPageToFit={false}
                ></WebView>
            </View>
        );
    }
}
