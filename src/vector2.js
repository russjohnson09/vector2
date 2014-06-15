
//x and y are optional, default to 0
function Vector2(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

//sets vector value of vector v
Vector2.prototype.equals = function(v) {
	this.x = v.x;
	this.y = v.y;
	return this;
}

Vector2.prototype.toString = function() {
	return "(" + this.x.toFixed(5) + ", " + this.y.toFixed(5) + ")";
}

Vector2.prototype.isEqualTo = function(v) {
	return (this.x == v.x && this.y == v.y);
}

Vector2.prototype.setXY = function(x,y) {
    this.x = x;
    this.y = y;
}

Vector2.prototype.isEqualToXY = function(x, y) {
	return (this.x == x && this.y == y);
}

Vector2.prototype.normalize = function() {
    this.setLength(1);
}

Vector2.prototype.getLength = function() {
    return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
}

Vector2.prototype.setLength = function(len) {
	var s = Math.pow(this.x,2)+Math.pow(this.y,2);
	if (!s) return;
	s = 1.0 / Math.sqrt(s) * len;
	this.x *= s;
	this.y *= s;
}

Vector2.prototype.getAngle = function() {
    return Math.atan(this.x/this.y);
}

Vector2.prototype.getAngleDeg = function() {
    return Vector2.radToDeg(this.getAngle());
}

Vector2.prototype.setAngle = function(a) {
	this.x = Math.cos(a);
	this.y = Math.sin(a);
}

Vector2.radToDeg = function(rad) {
    return rad * (180/Math.PI);
}

Vector2.dotProduct = function(v1, v2) {
	return v1.x * v2.x + v1.y * v2.y;
}
