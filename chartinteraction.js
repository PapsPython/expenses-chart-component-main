import {loggedexpenses} from '/data.js'


let suffix = "vh" 

let highestNumber= 0

function loopthroughloggedexpenses(){
    const graphEl = document.querySelector(".listexpensegraph")  
    let graph=""
    
    let arrayofdailyspend=[]
        loggedexpenses.forEach(function(dailyexpense){
           let scaledForGraph =(dailyexpense.amount*0.75).toFixed(2) 
         arrayofdailyspend.push(scaledForGraph)    
          graph += `
      <div class ="gridme">
        <p class="tooltip" >$${dailyexpense.amount}</p> 
        <p class="box" style="height:${scaledForGraph}${suffix};"></p>
      </div>
  ` 
         })
         
         highestNumber = Number(highestdailyspend(arrayofdailyspend))
         let highestNumberWithSuffix = highestdailyspend(arrayofdailyspend) + suffix           
     graphEl.innerHTML = graph
 
 colourhighestspend(highestNumberWithSuffix)
}

loopthroughloggedexpenses()

function highestdailyspend(arr){
   
const highestdailyspend = arr.reduce(function (a,b){
    if(a<b){
        return b} 
    else
    {return a}    
},0)
return highestdailyspend
}


function colourhighestspend(a){
 const pEl = document.querySelectorAll("p")
     pEl.forEach(function(p){
        if (p.style.height == a){
           p.classList.add("blue")
        } else{
          p.classList.remove("blue")  
        }
    })
}

function showTooltip(){
if(this.classList.contains("box")){
  let height = this.style.height
const arrayOfHeightStrings = height.split("") 
// const numbersinarrayOfHeightStrings = arrayOfHeightStrings.filter(heightstring => {
//   if (isNaN(Number(heightstring))){
//     return heightstring
//   }
// })
// console.log(numbersinarrayOfHeightStrings)
const heightWithoutSuffix = Number(arrayOfHeightStrings[0] + arrayOfHeightStrings[1]) //what if 3 numbs use filter fxn
let toolTipPosition = (highestNumber-2.6)  - heightWithoutSuffix 
this.previousElementSibling.style.transform = `translateY(${toolTipPosition}${suffix})`
this.previousElementSibling.style.visibility = "visible"
}else{
  return
}
}


 const pEl = document.querySelectorAll("p")
 pEl.forEach(p => p.addEventListener("mouseenter",showTooltip))

   
