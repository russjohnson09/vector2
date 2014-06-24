module('Vector2');
test("creation", function() {
    var v = new Vector2(1,1);
    ok(v);
    ok(v.x == 1, "equals");
    ok(v.y == 1);
});

test("functions", function() {
    var v = new Vector2(2,2);
    v.isEqual(v);
    v.normalize();
    ok(v.x == 1/Math.sqrt(2));
    ok(v.x == 1/Math.sqrt(2));
    v.x = 1;
    v.y = 1;
    var angle = v.angle;
    ok(angle == Math.PI/4);
    var deg = Vector2.radToDeg(angle)
    ok(deg == 45);
    ok(v.getAngleDeg() == 45);
    
    //0 vectors will remain 0
    v.setLength(0);
    ok(v.x == 0);
    v.setLength(5);
    ok(v.x == 0);
    ok(v.y == 0);
    v.normalize();
    ok(v.x == 0);
    ok(v.y == 0);
    
    var v = new Vector2(0,3);
    ok(v.getLength() == 3);
    v.setXY(1,v.y);
    v.setLength(5);
    ok(v.getLength() == 5);
});
