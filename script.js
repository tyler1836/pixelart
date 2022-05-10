const pixel = document.getElementsByClassName('bg')
const main = document.querySelector('.main')
const random = Math.floor(Math.random() * 17)
const random2 = Math.floor(Math.random() * 13)
const randomPixel = async() => {
    try{
        for (let i = random; i < pixel.length; i+=random2) {
        const element = pixel[i];
        element.classList.add('violet');
        
    }
    for (let i = random2; i < pixel.length; i += random) {
        const element = pixel[i];
        element.classList.add('blue');
    }
    }
    catch{

    }
    // pixel[44].classList.add('black')
    //window.location.reload()
}


 randomPixel()


