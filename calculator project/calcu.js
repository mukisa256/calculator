let result= document.getElementById("input");

let caculator=(number)=>{
    result.value = result.value+number;
}
let Result=()=>{
    result.value =eval(result.value);
}
function clr(){ 
        result.value="";
}
function del(){
    result.value=result.value.slice(0,-1);
}