const Grid=document.querySelector("#gridCont");



function createGrid(){
    let i;
    let j;
    for (i=0;i<16;i++){
        const addDiv=createDiv(i);
        Grid.appendChild(addDiv);
        for (j=0;j<16;j++){
            const addDiv1=createDiv(j);
            addDiv.appendChild(addDiv1);
        }
    }
    

}



function createDiv(num){
    const addDiv= document.createElement("div");
    addDiv.classList.add(`div${num}`);
    addDiv.style.width="40px";
    addDiv.style.height="20px";
    addDiv.style.backgroundColor="blue";
    addDiv.style.border="10px";
    addDiv.style.borderColor="red";
    //addDiv.style.display="inline";
    
    return addDiv;
}

createGrid();




