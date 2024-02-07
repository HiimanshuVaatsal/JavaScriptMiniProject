function mousemover(){
   let mousepoint=document.querySelector(".mouse");
   window.addEventListener('mousemove',(e)=>{
    mousepoint.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
   });
}

mousemover()