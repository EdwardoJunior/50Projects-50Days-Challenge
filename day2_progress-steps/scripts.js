const prevBtn = document.getElementById('previus-button');
const nextBtn = document.getElementById('next-button');
const stpes = document.getElementsByTagName('span');
const stpesArray = Array.from(stpes);

const progressBar = document.getElementById('progress-bar');


let counter = 1;
let progress = 0;

nextBtn.addEventListener('click', () => {
    counter ++;
    activeStep()
    prevBtn.removeAttribute("disabled");
    if(counter == 4){
        nextBtn.setAttribute("disabled", "");
    }
});  

prevBtn.addEventListener('click', () =>{
    disableStep()
    counter --;
    nextBtn.removeAttribute("disabled");
    if(counter == 1){
        prevBtn.setAttribute("disabled", "");
    }
});

function activeStep(){
    stpesArray.forEach(step => {
        if(step.textContent == counter){
            step.classList.add('active');
            progress = progress + 33.33;
            progressBar.style.setProperty("--width", `${progress}%`)
        }
    });
}

function disableStep(){
    stpesArray.forEach(step => {
        if(step.textContent == counter){
            step.classList.remove('active');
            progress = progress - 33.33;
            progressBar.style.setProperty("--width", `${progress}%`)
        }
    });
}