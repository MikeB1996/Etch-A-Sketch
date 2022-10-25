const Grid=document.querySelector("#gridCont");
const ResetBut=document.querySelector("#resetB");
const ResizeBut=document.querySelector("#resizeB");
const divsCells=document.getElementsByClassName("gridDiv");
const divCells = Array.prototype.filter.call(
    divsCells,
    (divsCells) => divsCells.nodeName === 'DIV',
  );
//default hovering color
let color="black";
//boolean variable that shows if rainbow is active or not
let isRainbow=false;



//reset button event listener that class the reset function
ResetBut.addEventListener('click',function (){
    resetGrid();
});
//resize button event listener that calls the resize function
ResizeBut.addEventListener('click',function (){
    resizeGrid();
});
let slider = document.getElementById("myRange");
let Pslide = document.getElementById("myPSlide");
Pslide.innerHTML= slider.value;
//shows in a paragraph the value in the slider when changed
slider.onchange=function(){
    Pslide.innerHTML= slider.value;
}

let redButton=document.getElementById("colorBRed");
//red button click event listener
redButton.addEventListener('click',function(){
    color="red";
    isRainbow=false;
});

let blackButton=document.getElementById("colorBBlack");
//red button click event listener
blackButton.addEventListener('click',function(){
    color="black";
    isRainbow=false;
});

let blueButton=document.getElementById("colorBBlue");
//blue button click event listener
blueButton.addEventListener('click',function(){
    color="blue";
    isRainbow=false;
});
let rainbowButton=document.getElementById("colorBRainbow");

//rainbow button click event listener
rainbowButton.addEventListener('click',function(){
    //color=generateRandomColor();
    color=generateRandomColor();
    isRainbow=true;
    /*if(isRainbow=="true"){ 
            divCells.forEach((cell) => cell.addEventListener("mouseenter", function(e){
            color=generateRandomColor();
        }));

    }*/
});


        
//used for the rainbow button it generates a random color with hex notation
function generateRandomColor(){
    let letters = '0123456789ABCDEF';
    let col = '#';
    if (isRainbow==true){
        for (let i = 0; i < 6; i++) {
            col += letters[Math.floor(Math.random() * 16)];
            }
    } else {
        col=color;
    }
    
    
    return col;
}

// changes the grid background color back to white
function resetGrid(){
    let allGridDivs = document.querySelectorAll(".gridDiv").forEach(div => {
        div.style.backgroundColor = "white";
    })
}

//function to cancel the current grid and rebuild a new one with the dimension that we get from the slider
function resizeGrid(){
    
    dim = slider.value;
    cancelGrid();
    reCreateGrid(dim);
   
}

//cancels all the divs in the grid
function cancelGrid(){
    let allGridDivs = document.querySelectorAll(".gridDiv").forEach(div => {
        div.remove();
    });
}

//creates the grid with the dimension taken from the slider
function reCreateGrid(dimension){
    let i;
    let j;
    for (i=0;i<dimension;i++){
        const addDiv=createDiv(i,dimension);
        Grid.appendChild(addDiv);
        for (j=0;j<dimension;j++){
            const addDiv1=createDivVer(j,dimension);
            addDiv.appendChild(addDiv1);
            //if(isRainbow==true){
                addDiv1.addEventListener('mouseenter', ()=>  addDiv1.style.backgroundColor=generateRandomColor());
            /*} else {
                addDiv1.addEventListener('mouseenter', ()=>  addDiv1.style.backgroundColor=color);
            }*/
        }
    }
    

}
   
//creates the grid with the default dimensions
function createGrid(){
    let i;
    let j;
    let dim=32;
    for (i=0;i<dim;i++){
        const addDiv=createDiv(i,dim);
        Grid.appendChild(addDiv);
        for (j=0;j<dim;j++){
            const addDiv1=createDivVer(j,dim);
            addDiv.appendChild(addDiv1);
            //if(isRainbow==true){
                addDiv1.addEventListener('mouseenter', ()=>  addDiv1.style.backgroundColor=generateRandomColor());
            /*} else {
                addDiv1.addEventListener('mouseenter', ()=>  addDiv1.style.backgroundColor=color);
            }*/
            
            
        }  
    

    }
}



function mouseOverDiv(){

}


//creates a single div used for the vertical cell creation
function createDivVer(num,dim){
    const addDiv= document.createElement("div");
    addDiv.setAttribute("id",`div${num}`);
    addDiv.style.width=`${600/dim}px`;
    addDiv.style.height=`${600/dim}px`;
    addDiv.style.backgroundColor="white";
    //addDiv.style.borderColor="red";
    //addDiv.style.border="solid";
    addDiv.classList.add("gridDiv");
    
    
    return addDiv;
}

//creates a single div used for the horizontal cell creation
function createDiv(num,dim){
    const addDiv= document.createElement("div");
    addDiv.setAttribute("id",`divs${num}`);
    addDiv.style.width=`${600/dim}px`;
    addDiv.style.height=`${600/dim}px`;
    addDiv.style.float="none";
    addDiv.style.display="inline-table";
    //addDiv.style.border="solid"
    addDiv.classList.add("gridDiv");
   
    
    return addDiv;
}


//initializes the grid at the beginning
createGrid();




