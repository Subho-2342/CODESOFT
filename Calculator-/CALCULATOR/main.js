const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const special = ["%","*","/","-","+","="];
let output = "";

const calculate = (btnvalue)=>{
    if(btnvalue === "=" && btnvalue !== ""){
        output = eval(output);
    }
    else if(btnvalue === "AC"){
        output = "";
    }
    else if(btnvalue === "DEL"){
        output = output.toString().slice(0,-1);
    }
    else{
        if(output === "" && special.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;
}

buttons.forEach((buttons)=>{
    buttons.addEventListener("click",(e)=> calculate(e.target.dataset.value))
})