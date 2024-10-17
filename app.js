const counter=document.querySelector("#counter");

const increment=()=>{
     let value=counter.innerText;
     value++;
     counter.innerText=value;
};
const decrement=()=>{
     let value=counter.innerText;
     value--;
     counter.innerText=value;
};