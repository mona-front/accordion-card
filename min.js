const qestion=document.querySelectorAll(".questions")
const article=document.querySelectorAll("article")
for(let i=0;i<qestion.length;i++){
    qestion[i].addEventListener("click", ()=>{
       
            article[i].classList.toggle("active")
      
        
    })
}
