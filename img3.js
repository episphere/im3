console.log('img3.js loaded');

// loading ES6 module for script tag

(async function(){
    //console.log('loading from module img3Mod.js');
    img3 = await import('./img3Mod.js')
})()
