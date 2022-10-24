const Grid=document.querySelector("#gridCont");
const ResetBut=document.querySelector("#resetB");
const ResizeBut=document.querySelector("#resizeB");
let numRows=80;
let numCul=80;
//let slider = document.getElementById("myRange");
ResetBut.addEventListener('click',function (){
    resetGrid();
});
ResizeBut.addEventListener('click',function (){
    resizeGrid();
});




function resetGrid(){
    let allGridDivs = document.querySelectorAll(".gridDiv").forEach(div => {
        div.style.backgroundColor = "blue";
    })
}


function resizeGrid(){
    let slider = document.getElementById("myRange");
    dim = slider.value;
    alert(slider.value);
    cancelGrid();
    reCreateGrid(dim);
   
}

function cancelGrid(){
    let allGridDivs = document.querySelectorAll(".gridDiv").forEach(div => {
        div.remove();
    });
}

function reCreateGrid(dimension){
    let i;
    let j;
    for (i=0;i<dimension;i++){
        const addDiv=createDiv(i,dimension);
        Grid.appendChild(addDiv);
        for (j=0;j<dimension;j++){
            const addDiv1=createDivVer(j,dimension);
            addDiv.appendChild(addDiv1);
            addDiv1.addEventListener('mouseenter', ()=> addDiv1.style.backgroundColor="red");
        }
    }
    

}
   

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
            addDiv1.addEventListener('mouseenter', ()=> addDiv1.style.backgroundColor="red");
        }
    }
    

}




function mouseOverDiv(){

}

function createDivVer(num,dim){
    const addDiv= document.createElement("div");
    addDiv.setAttribute("id",`div${num}`);
    addDiv.style.width=`${600/dim}px`;
    addDiv.style.height=`${600/dim}px`;
    addDiv.style.backgroundColor="blue";
    addDiv.style.borderColor="red";
    //addDiv.style.border="solid";
    addDiv.classList.add("gridDiv");
    
    
    return addDiv;
}

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

createGrid();




