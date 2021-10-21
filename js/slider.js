const sliderBlock = document.querySelector(".slider");
let sliderItems = document.querySelectorAll(".slider-item");
let widthItem = sliderItems[0].offsetWidth;
let stepCounterR=null;
let stepCounterL=null;
let step = 0;
let coordinateX1 = null;
let coordinateY1 = null;
let slider = [];

for (let i = 0; i < sliderItems.length; i++){
    slider[i] = sliderItems[i];
    sliderItems[i].remove();
}

/* Начальное положение блоков слайдера*/

function initialPlacePosition(){
    /* Блок 1 */
    let div = document.createElement("div");
    div = slider[slider.length-2];
    div.classList.add("slider-item");
    div.style.left = -(widthItem * 2) + 10 + "px";
    sliderBlock.append(div); 
    /* Блок 2 */
    div = slider[slider.length-1];
    div.classList.add("item");
    div.style.left = -(widthItem) + 15 + "px";
    sliderBlock.append(div); 
    /* Блок 3 */
    div = slider[step];
    div.classList.add("slider-item");
    div.style.left = 20 + "px"; 
    sliderBlock.append(div); 
    /* Блок 4 */
    div = slider[step + 1];
    div.classList.add("slider-item");
    div.style.left = (widthItem + 25) + "px"; 
    sliderBlock.append(div); 
    /* Блок 5 */
    div = slider[step + 2];
    div.classList.add("slider-item");
    div.style.left = (widthItem * 2) + 30 + "px"; 
    sliderBlock.append(div);
}
initialPlacePosition();

/* Добавение нового элемента при прокрутке слайдера влево*/

function addNewElementLeft(){
    /* Перерасчёт step после прокрутки вправо*/
    if(stepCounterR != null){
        if(stepCounterR >= 1 && stepCounterR <= (slider.length-4)){
            step++;
        }else if(stepCounterR == (slider.length-3)){
            step = -2;
        }else if(stepCounterR >= (slider.length-2)){
            step = step - (slider.length-1);
        }
        stepCounterR = null;
    }

    /* Номер добавляемого элемента */
    if(step == (slider.length-1)){
        step =1;
    }else if(step == (slider.length-3)){
        step = 0;
    }else{
        step = step + 3;
    }

    let div = document.createElement("div");
    div = slider[step];
    div.classList.add("slider-item");
    div.style.left = (widthItem * 2) + 30 + "px";
    sliderBlock.append(div); 
    /* Номер следующего добавляемого элемента */
    if(step == 0){
        step = slider.length-1;
    }else{
        step = step - 2;
    }

    stepCounterL = step;
}

/* Сдвиг слайдера влево, удаление первого элемента и добавление нового */

function sliderMoveLeft(){
    sliderBlock.removeEventListener("touchstart", touchStart);

    let sliderItems2 = document.querySelectorAll(".slider-item");
    let positionElement = -3;
    for(let value of sliderItems2) {
        value.style.left = positionElement * (widthItem + 5) + 20 + "px";
        positionElement++;
    }

    setTimeout(()=>{
        sliderItems2[0].remove();
        addNewElementLeft();
        sliderBlock.addEventListener("touchstart", touchStart);
    }, 500);
}

/* Добавение нового элемента при прокрутке слайдера вправо*/

function addNewElementRight(){
    /* Перерасчёт step после прокрутки влево*/
    if(stepCounterL != null){
        if(stepCounterL > 2 && stepCounterL <= (slider.length-3)){
            step--;
        }else if(stepCounterL == (slider.length-1)){
            step = step -2;
        }else if(stepCounterL <= 2 ){
            step = step + (slider.length-1);
        }
        stepCounterL = null;
    }
    /* Номер добавляемого элемента */
    if(step == 0){
        step = slider.length-3;
    }else if(step == 1){
      step = slider.length-1;
    }else{
      step = step -2;
    }
  
    let div = document.createElement("div");
    div = slider[step];
    div.classList.add("slider-item");
    div.style.left = -(widthItem * 2) + 10 + "px";
    sliderBlock.prepend(div);
    /* Номер следующего добавляемого элемента */
    step++;
    stepCounterR = step;
}

/* Сдвиг слайдера вправо, удаление первого элемента и добавление нового */

function sliderMoveRight(){
    sliderBlock.removeEventListener("touchstart", touchStart);
  
    let sliderItems2 = document.querySelectorAll(".slider-item");
    let positionElement = (sliderItems2.length-2);
 
    for(let i = (sliderItems2.length-1); i>=0; i--){
        sliderItems2[i].style.left = positionElement * (widthItem + 5)  + 20 + "px";
        positionElement --;
    }

    setTimeout(()=>{
        sliderItems2[(sliderItems2.length-1)].remove();
        addNewElementRight();
        sliderBlock.addEventListener("touchstart", touchStart);
     }, 500);
}

/* Сдвиг слайдера влево с интервалом */

let sliderInterval = setInterval(()=>{
    sliderMoveLeft();
}, 5000);

/* swipe */ 

sliderBlock.addEventListener("touchstart", touchStart);
sliderBlock.addEventListener("touchmove", touchMove );

function touchStart(event){
    coordinateX1 = event.touches[0].clientX;
    coordinateY1 = event.touches[0].clientY;
}

function touchMove(event){
    if(coordinateX1 == null) return false;

    let coordinateX2 =  event.touches[0].clientX;
    let coordinateY2 =  event.touches[0].clientY;
    let coordinateXDifference = coordinateX2-coordinateX1;
    let coordinateYDifference = coordinateY2-coordinateY1;

    if(Math.abs(coordinateXDifference) > Math.abs(coordinateYDifference)){
        if(coordinateXDifference > 0){
            sliderMoveRight();
        }else{
            sliderMoveLeft();
        }
        coordinateX1 = null;
        clearInterval(sliderInterval);
    }else{
        return false;
    }
}