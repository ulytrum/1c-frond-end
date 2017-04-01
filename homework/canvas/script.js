
var canvas = document.getElementById("sandbox")
var context = canvas.getContext("2d")




function krugokwatch() {

     var circle = new Path2D();
     var square = new Path2D();

    circle.arc(150, 150, 150, 0, 2 * Math.PI);
    context.strokeStyle = "black";
    context.stroke(circle);

    var R = 300 / 2,d, angle, pX, pY, qX, qY;
    var d, angle, pX, pY, qX, qY;
    for (d = 0; d < 60; ++d) {
        angle = (d / 60) * (2 * Math.PI);
        pX = Math.cos(angle) * R;
        pY = -Math.sin(angle) * R;
        qX = 0.9 * pX;
        qY = 0.9 * pY;
        pX += R;
        pY += R;
        qX += R;
        qY += R;
        context.lineWidth = 3;
        square.moveTo(qX, qY);
        square.lineTo(pX, pY);
        context.stroke(square);
    }
}


function palki() {
    var minute = new Path2D();
    var hour = new Path2D();
    var second = new Path2D();
    var date = new Date();

    var hours  = new Path2D();
    var minutes = new Path2D();
    var seconds = new Path2D();

    hours = date.getHours();
    minutes = date.getMinutes();
    seconds= date.getSeconds();



    secondsAngle = (seconds / 60) * (2 * Math.PI);
    minutesAngle = (minutes / 60) * (2 * Math.PI);
    hoursAngle = ((hours % 12) / 12) * (2 * Math.PI);


    secondsAngle = Math.PI / 2 - secondsAngle;
    minutesAngle = Math.PI / 2 - minutesAngle;
    hoursAngle = Math.PI / 2 - hoursAngle;



    var R = 300 / 2,
    hpX = Math.cos(hoursAngle) * R *0.5;
    hpY = -Math.sin(hoursAngle) * R*0.5;
//hpX = 0.5 * hpX;
//hpY = 0.5 * hpY;
    hpX += R;
    hpY += R;
    context.lineWidth = 6;
    hour.moveTo(150, 150);
    context.strokeStyle = "red";
    hour.lineTo(hpX, hpY);
    context.stroke(hour);




    var R = 300 / 2;
    mpX = Math.cos(minutesAngle) * R*0.6;
    mpY = -Math.sin(minutesAngle) * R*0.6;
    //mpX = 0.6 * mpX;
    //mpY = 0.6 * mpY;
    mpX += R;
    mpY += R;
    context.lineWidth = 6;
    minute.moveTo(150, 150);
    context.strokeStyle = "red";
    minute.lineTo(mpX, mpY);
    context.stroke(minute);



    var R = 300 / 2;
    spX = Math.cos(secondsAngle) * R*0.9;
    spY = -Math.sin(secondsAngle) * R*0.9;
    //spX = 0.9 * spX;
    //spY = 0.9 * spY;
    spX += R;
    spY += R;
    context.lineWidth = 6;
    second.moveTo(150, 150);
    context.strokeStyle = "black";
    second.lineTo(spX, spY);
    context.stroke(second);
    }




function DrawWatch() {
    context.clearRect(0, 0, 300, 300);
    krugokwatch();
    palki();
    setTimeout(DrawWatch, 1000);
}
DrawWatch();
