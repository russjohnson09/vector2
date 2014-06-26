var vector = {}; //declare vector as namespace //http://en.wikipedia.org/wiki/Vector_calculus
vector.Vector2 = function(x, y) {
    var _x = x;
    var _y = y;    
    this.isEqual = function(vector){
        return _x === vector.x && _y === vector.y;
    };
    
    this.normalize = function() {
        return this.length = 1;
    };
    
    this.add = function(vector) {
        _x += vector.x;
        _y += vector.y;
        return this;
    };
    
    this.scalar = function(a) {
        _x *= a;
        _y *= a;
        return this;
    };
    
    this.dotProduct = function(vector) {
        return (_x * vector.x )+ (_y * vector.y);
    };
    
    Object.defineProperties(this, {
            "x": {
                get: function() {return _x;},
                set: function(val) { _x=val;}, 
            },
            "y": {
                get: function() {return _y;},
                set: function(val) {_y = val;}
            },
            "radians": {
                get: function() {return Math.atan2(_y,_x);}
            },
            "length": {
                get: function() {return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},
                set: function(len) {
                    if(_x === 0 && _y === 0) return null;
                    var s = Math.pow(_x,2)+Math.pow(_y,2);
                    s = 1.0 / Math.sqrt(s) * len;
                    _x *= s;
                    _y *= s;
                    return this;
            }
        }});
}

vector.utils = {
    radiansToDegrees: function(r) {
        return r * (180/Math.PI);
    },
    degreesToRadians: function(d) {
        return (Math.PI/180) * d;
    }
};
