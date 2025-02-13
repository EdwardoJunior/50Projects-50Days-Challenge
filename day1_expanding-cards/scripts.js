const imgs = document.getElementsByClassName('img-container');

const imgsArray = Array.from(imgs);

imgsArray.forEach(img => {
    img.addEventListener('click', () => {
        removeClass();
        img.classList.add('selected');
    });
});

function removeClass(){
    imgsArray.forEach(img => {
        img.classList.remove('selected');
    });
}