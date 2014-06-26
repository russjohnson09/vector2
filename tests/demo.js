var particles = [];
var canvas;
var ctx;
var Particle = physics.Particle;
var Vector2 = vector.Vector2;
function startDemo() {
    var delay = 30; //30 millisecond delay
    console.log("started");
    canvas = document.getElementById("canvas");
    canvas.width = 640;
    canvas.height = 360;
    ctx = canvas.getContext('2d');
    var p = new Particle(delay,new Vector2(0,0),new Vector2(0.001,0.001),new Vector2(0.0000001,0.00000001));
    particles.push(p);
    console.log(particles);
    var interval = setInterval(tick,delay);

}


function tick() {
    clear(ctx);
    
    for (var i=particles.length-1; i>-1;i--) {
        var p = particles[i];
        draw(ctx,p);
        p.tick();
    }
}

function clear(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


function draw(ctx,particle,options) {
    drawCircle(ctx,particle.position.x,particle.position.y,5,options);
}


function drawCircle(ctx,x,y,radius,options) {
    var options = options || {};
    ctx.fillStyle = options.fillStyle || "black";
    ctx.beginPath();                    //begin path, I think fill might already closepath.
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
}

