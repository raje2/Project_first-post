import {getResult,append, getResult2, append3} from "./fetch.js"
const api = "a17ced5e05604855ae43d10e50556dd7";


// categories 1 start here ...
let categories = document.getElementById("categories1").children;
function cSearch(){
    let container = document.getElementById("container3");
    container.innerHTML=null;
    getResult(this.id, api).then((data)=>{
     append(data.articles, container, this.id);
 })

}
for(let el of categories){
    el.addEventListener("click", cSearch);
}

// categories2 start here



let categories2 = document.getElementById("categories2").children;

function cSearch2(){
    let container = document.getElementById("container3");
    container.innerHTML=null;
    getResult2(this.id, api).then((data)=>{
     append3(data.articles, container, this.id);
 })

}
for(let el of categories2){
    el.addEventListener("click", cSearch2);
}




// Auto suggest news start here

import {getValue,append2} from "./fetch.js"

function myAuto(){
    const api = "a17ced5e05604855ae43d10e50556dd7";
    let container = document.getElementById("container3");
    container.innerHTML=null;
    getValue(api).then((data)=>{
     append2(data.articles, container);
    // console.log(data);
 })

}

myAuto();


// right side news heading

import { getValue2, append4 } from "./fetch.js";


function myAuto2(){
    const api = "a17ced5e05604855ae43d10e50556dd7";
    let container = document.getElementById("news_bar");
    container.innerHTML=null;
    getValue2(api).then((data)=>{
     append4(data.articles, container);
    // console.log(data);
 })

}

myAuto2();



