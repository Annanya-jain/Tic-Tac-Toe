let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#new");
let msg=document.querySelector("#score")
const win=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]]
let presso=true;
let count=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(presso){
            box.innerText="O";
            presso=false;
            box.disabled=true;
            count++;
        }
        else{
            box.innerText="X";
            presso=true;
            box.disabled=true;
            count++;
        }
        let cw=checkwin();
        if(cw===false && count===9)
            {
                msg.innerText="Draw";
            }
    })
})
function checkwin(){
    for (let winners of win)
        {
            let val1=boxes[winners[0]].innerText;
            let val2=boxes[winners[1]].innerText;
            let val3=boxes[winners[2]].innerText;
            if(val1!="" && val2!="" && val3!=""){
                if(val1===val2 && val2==val3){
                    msg.innerText=`The winner is ${val1}`;
                    disableboard();ss
                    return true;
                }

            }

        }

return false;
}
const disableboard=()=>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
}
const enableboard=()=>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
}
btn.addEventListener("click",()=>{
    enableboard();
    msg.innerText="";
    presso=true;
    count=0;
})
