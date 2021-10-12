console.log('img3.js loaded');

(async function(){ // loading ES6 module for script tag
    img3 = await import('./img3Mod.js')    
})()

if (typeof (define) != 'undefined') {
    define(import('https://episphere.github.io/img3/img3Mod.js'))
}