var inpt=document.getElementById("input");
var btns=document.querySelectorAll("button");
var str=" ";
var arr=Array.from(btns);
arr.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            str=eval(str);
            inpt.value=str;
        }
        else if(e.target.innerHTML=="AC"){
            str="";
            inpt.value=str;
        }
        else if(e.target.innerHTML=="DEL"){
            str=str.substring(0,str.length-1);
            inpt.value=str;
        }
        else{
            str+=e.target.innerHTML;
            inpt.value=str;
        }
           
        
    })
})
