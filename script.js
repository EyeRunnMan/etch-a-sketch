const getRandomColor=()=> {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const getCurrentColor=()=>{
    return currentColor;
}
const setCurrentColor=(color)=>{
    currentColor=color;
}
const updateColor= (divToUpdate)=>{
    divToUpdate.style.backgroundColor=getCurrentColor();
}

const buildGridCanvas = (size,parentNode)=>{
    clearGrid(parentNode);
    for (let index = 0; index < size; index++) {
    
        for (let j = 0; j < size; j++) {
            const divTag=document.createElement('div');
            divTag.addEventListener('mouseenter',(e)=>(updateColor(divTag)));
            divTag.style.height=`${100/size}%`;
            divTag.style.width=`${100/size}%`;
            divTag.className+="grid-pixel";
            parentNode.appendChild(divTag);
        }
    }
}
const buildColorPallet = (size,parentNode)=>{
    clearGrid(parentNode);

    for (let index = 0; index < size; index++) {
    
        for (let j = 0; j < size; j++) {
            const divTag=document.createElement('div');
            const colorRandom=getRandomColor();
            divTag.addEventListener('click',()=>(setCurrentColor(colorRandom)))
            divTag.style.background=colorRandom;
            divTag.className+="pallet-pixel";
            parentNode.appendChild(divTag);
        }
    }
}



const clearGrid = (parentNode)=>{
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

const updateGridSize = (value)=>{
    currentSize=value;
    sliderValueDiv.textContent=currentSize;
    buildGridCanvas(currentSize,container);
}


//variables
let currentColor="rgb(199, 40, 40)";
let currentSize=5;
const palletSize=3;
const container=document.getElementById("container");
const pallet=document.getElementById("pallet");
const clearButton=document.getElementById("clear-button");
const sliderInput=document.getElementById("myRange");
const sliderValueDiv=document.getElementById("size-display");
sliderValueDiv.textContent=currentSize;
sliderInput.addEventListener('input',()=>{updateGridSize(sliderInput.value);})

clearButton.onclick = ()=>{buildGridCanvas(currentSize,container)};
buildColorPallet(palletSize,pallet);
buildGridCanvas(currentSize,container);


