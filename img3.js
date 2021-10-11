console.log('img3.js loaded');

// loading ES6 module for script tag

/*
(async function(){
    //debugger
    //console.log('loading from module img3Mod.js');
    img3 = await import('https://episphere.github.io/img3/img3Mod.js')
})()

if (typeof (define) != 'undefined') {
    var fun = function(){return ':-)'}
    define(fun)
}
*/

img3 = import('https://episphere.github.io/img3/img3Mod.js')

if (typeof (define) != 'undefined') {
    var fun = function(){return ':-)'}
    define(img3)
}