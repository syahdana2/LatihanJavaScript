// var mountains = ['semeru', 'bromo', 'merapi'];
// var mountainsfromjapan = ['fuji'];

// var allmountains = [...mountains, ...mountainsfromjapan];
// alert(allmountains);

var rivers = ['ciliwung', 'brantas', 'bengawan solo'];
var [first, ...rest] = rivers;

alert(rest);