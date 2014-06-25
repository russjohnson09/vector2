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
    console.log(v.dotProduct(v));
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
});
