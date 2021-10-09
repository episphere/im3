function img2Read(imgUrl='https://storage.googleapis.com/imagebox_test/Slide-0027830_Y561170_1002408.svs',xPos=30720,yPos=6144,resol=512){ // read with imageBox2 tile service
    const url = `https://imageboxv2-oxxe7c4jbq-uc.a.run.app/iiif/?iiif=${imgUrl}/${xPos},${yPos},1024,1024/${resol},/0/default.jpg`;
    let im = document.createElement('img')
    im.src=url
    return im
}

export {img2Read}


