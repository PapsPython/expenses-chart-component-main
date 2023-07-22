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
    <div>
        <p class="tooltip" >$${dailyexpense.amount}</p> 
        <p class="box" style="height:${scaledForGraph}${suffix};" ></p>
        <p class="day">${dailyexpense.day}</p>
     </div>
  ` 
         })
         
         highestNumber += Number(highestdailyspend(arrayofdailyspend))
         let highestNumberWithSuffix = highestdailyspend(arrayofdailyspend) + suffix           
          // showTooltip(highestdailyspend(arrayofdailyspend))
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
if(this.classList[0] === "box"){
  let height = this.style.height
const arrayOfHeightStrings = height.split("") 
const heightWithoutSuffix = Number(arrayOfHeightStrings[0] + arrayOfHeightStrings[1]) 
let toolTipPosition = (highestNumber-2.6)  - heightWithoutSuffix 
this.previousElementSibling.style.transform = `translateY(${toolTipPosition}${suffix})`
this.previousElementSibling.style.visibility = "visible"
}else{
  return
}
}

 //would not want to repeat this ava
 const pEl = document.querySelectorAll("p")
 pEl.forEach(p => p.addEventListener("mouseenter",showTooltip))

   
