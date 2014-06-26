var physics = {};

//http://en.wikipedia.org/wiki/Runge_kutta 
//http://en.wikipedia.org/wiki/Eulers_method

physics.Physics = function() {


};

//lesser dealy means greater accuracy, but for a lot of cases a small difference in delay will not have
//a huge impact.
physics.Particle = function(delay,position,velocity,acceleration) {
    var _d = delay;   //time between ticks used to calculate change in velocity etc.
    var _pos = position;
    var _v = velocity.scalar(_d);  // units per tick
    var _a = acceleration.scalar(_d);  //normalize velocity (stores increase in velocity for each 'tick')
    
    this.tick = function(){
        _pos.add(_v);
        _v.add(_a);
    };
    
    Object.defineProperties(this, {
        "delay": {
            get: function() {return _delta;}
        },
        "position": {
            get: function() {return _pos;}
        },
        "velocity": {
            get: function() {return _v;}
        },
        "acceleration": {
            get: function() {return _a;}
        }
    
    });

};
