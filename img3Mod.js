async function img2Read(imgUrl='https://storage.googleapis.com/imagebox_test/Slide-0027830_Y561170_1002408.svs',xPos=30720,yPos=6144,resol=512){ // read with imageBox2 tile service
    const url = `https://imageboxv2-oxxe7c4jbq-uc.a.run.app/iiif/?iiif=${imgUrl}/${xPos},${yPos},1024,1024/${resol},/0/default.jpg`;
    let im = document.createElement('img')
    im.crossOrigin = "Anonymous"
    im.src=url
    let imgPromise = new Promise((resolve, reject) => {
        //debugger
        im.onload=resolve
    })
    await imgPromise
    return im
}

function imgReadData(img){ // read image data
    //document.body.appendChild(img)
    let cv = document.createElement('canvas')
    //document.body.appendChild(cv)
    cv.width=img.width
    cv.height=img.height
    let ctx=cv.getContext('2d')
    ctx.drawImage(img,0,0)
    return ctx.getImageData(0,0,cv.width,cv.height)
    //return ctx
}

function range(n){ // create a range vector [0,...,n-1]
    return [...Array(n)].map((_,i)=>i)
}

function imgData2Array(imData){
    // extract rgba quads
    let rgba = range(imData.data.length/4).map(i=>imData.data.slice(i*4,i*4+4))
    // fold into a 2d array
    // debugger
    /*
    let 2dArr=([...Array(imData.height)].map((_,i)=>i)).map(i=>{
        return ([...Array(imData.width)].map((_,j)=>j)).map(j=>{
            return imData.data.slice(i*imData.width,i*imData.width+j*imData.height)
        })
    })
    return 2dArr
    */
}


export {img2Read,imgReadData,imgData2Array}


