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