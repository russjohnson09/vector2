module('Vector2');
var Vector2 = vector.Vector2;
var utils = vector.utils;
test("creation", function() {
    var v = new Vector2(1,1);
    ok(v);
    ok(v.x == 1, "equals");
    ok(v.y == 1);
});

test("functions", function() {
    var v = new Vector2(2,2);
    v.isEqual(v);
    v.normalize();  //equivalent to v.length = 1;
    ok(v.x == 1/Math.sqrt(2));
    ok(v.x == 1/Math.sqrt(2));
    v.x = 1;
    v.y = 1;
    ok(v.radians == Math.PI/4);
    ok(utils.radiansToDegrees(v.radians) == 45);
    ok(v.dotProduct(v) === 2);
    ok(utils.degreesToRadians(utils.radiansToDegrees(v.radians)) == v.radians);
    
    //0 vectors will remain 0
    v.length = 0;
    ok(v.x == 0);
    v.length =5;
    ok(v.x == 0);
    ok(v.y == 0);
    v.normalize();
    ok(v.x == 0);
    ok(v.y == 0);
    
    var v = new Vector2(0,3);
    ok(v.length === 3);
    v.length = 5;
    ok(v.length === 5);
    
    var v = new Vector2(1,3);
    v.add(v);
    ok(v.x == 2);
    ok(v.y == 6);
    v.scalar(3);
    ok(v.x == 6);
    ok(v.y == 18);
});


module("Physics");
var Physics = physics.Physics;

var Particle = physics.Particle;

test("basic", function() {
    var pos = new Vector2(0,0);
    var p = new Particle(1,new Vector2(0,0),new Vector2(1,1),new Vector2(1,1));
    p.tick();
    ok(p.position.x == 1);
    ok(p.position.y == 1); 
    ok(p.velocity.x == 2);
    ok(p.velocity.y == 2);
    p.tick();
    ok(p.position.x == 3);
    ok(p.position.y == 3); 
    ok(p.velocity.x == 3);
    ok(p.velocity.y == 3);
    var p = new Particle(5,new Vector2(0,0),new Vector2(-1,1),new Vector2(-1,1));
    ok(p.position.x == 0);
    ok(p.position.y == 0);
    ok(p.velocity.x == -5);
    ok(p.velocity.y == 5);
    ok(p.acceleration.x == -5);
    ok(p.acceleration.y == 5);
    p.tick();
    ok(p.position.x == -5);
    ok(p.position.y == 5);
    console.log( p.velocity.x);
    ok(p.velocity.x == -10);
    ok(p.velocity.y == 10);
    ok(p.acceleration.x == -5);
    ok(p.acceleration.y == 5);
    p.tick();
});
