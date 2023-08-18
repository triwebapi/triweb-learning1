let myImage = document.querySelector('img');

myImage.onclick = function(){
    let imgsrc = myImage.getAttribute('src');
    if(imgsrc== 'car.jpg'){
        myImage.setAttribute('src','car1.jpg');
    }else{
        myImage.setAttribute('src','car.jpg');
    }
}