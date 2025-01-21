function changetoColor(color){
    let bgAnimated = document.querySelector(".bg-animated")
    let colorChange = document.querySelector(".color-change")

    bgAnimated.style.background = color
    colorChange.style.background = color
    bgAnimated.classList.add("active")
   setTimeout(()=>{
    bgAnimated.classList.remove("active")

   }, 1200)
}
color = document.querySelectorAll(".color")


function colorBorder(){
    color.forEach((item) => {
       item.classList.remove('active')
       this.classList.add('active')
        
    });
}


color.forEach((item) => {
    item.addEventListener('click',colorBorder)
 })



 

 




























