const Grid=document.querySelector("#gridCont");
const ResetBut=document.querySelector("#resetB");
let numRows=80;
let numCul=80;
ResetBut.addEventListener('click',function (){
    resetGrid();
});

function resetGrid(){
    let allGridDivs = document.querySelectorAll(".gridDiv").forEach(div => {
        div.style.backgroundColor = "blue";
    })
}

function resizeGrid(){

}
   

function createGrid(){
    let i;
    let j;
    for (i=0;i<numRows;i++){
        const addDiv=createDiv(i);
        Grid.appendChild(addDiv);
        for (j=0;j<numCul;j++){
            const addDiv1=createDivVer(j);
            addDiv.appendChild(addDiv1);
            addDiv1.addEventListener('mouseenter', ()=> addDiv1.style.backgroundColor="red");
        }
    }
    

}

function mouseOverDiv(){

}

function createDivVer(num){
    const addDiv= document.createElement("div");
    addDiv.setAttribute("id",`div${num}`);
    addDiv.style.width=`${600/numRows}px`;
    addDiv.style.height=`${600/numCul}px`;
    addDiv.style.backgroundColor="blue";
    addDiv.style.borderColor="red";
    //addDiv.style.border="solid";
    addDiv.classList.add("gridDiv");
    
    
    return addDiv;
}

function createDiv(num){
    const addDiv= document.createElement("div");
    addDiv.setAttribute("id",`divs${num}`);
    addDiv.style.width=`${600/numRows}px`;
    addDiv.style.height=`${600/numCul}px`;
    addDiv.style.float="none";
    addDiv.style.display="inline-table";
    //addDiv.style.border="solid"
    addDiv.classList.add("gridDiv");
   
    
    return addDiv;
}

createGrid();




