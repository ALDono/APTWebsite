const navToggle = document.querySelector("#navToggle");
    const navList = document.querySelector("#navList");
    const navImage = document.querySelector("#navImage");
    let navState = false;
    navToggle.addEventListener("click",function(){
      if(navState === false){
        navState = true;
        navList.style.display = "flex";
        navImage.src = "images/close.png";
        navImage.style.width = "30px";
      }else{
        navState = false;
        navList.style.display = "none";
        navImage.src = "images/more.png";
        navImage.style.width = "40px";
      }
    })


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry.target.className)
    let subStr = entry.target.className;
    if (entry.isIntersecting && subStr.includes("about")){
      entry.target.classList.add("animate-about");
    }
    if (entry.isIntersecting && subStr.includes("article-left")){
      entry.target.classList.add("article-left-anim");
    }
    if (entry.isIntersecting && subStr.includes("article-right")){
      entry.target.classList.add("article-right-anim");
    }
  });
});

const aboutElement = document.querySelectorAll("#about");
const articleLeftElement = document.querySelectorAll(".article-left");
const articleRightElement = document.querySelectorAll(".article-right");

aboutElement.forEach((el) => observer.observe(el));
articleLeftElement.forEach((el) => observer.observe(el));
articleRightElement.forEach((el) => observer.observe(el));


