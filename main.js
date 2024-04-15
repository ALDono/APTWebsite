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

// Show/Hide Package info

const subBtn = document.querySelector("#subBtn");
const otpBtn = document.querySelector("#otpBtn");
const addonBtn = document.querySelector("#addonBtn");
const otpPriceCard = document.querySelector("#otpPriceCard");
const subPriceCard = document.querySelector("#subPriceCard");
const addonCard = document.querySelector("#addonCard");
const closePackageInfo1 = document.querySelector("#closePackageInfo1");
const closePackageInfo2 = document.querySelector("#closePackageInfo2");
const closePackageInfo3 = document.querySelector("#closePackageInfo3");

subBtn.addEventListener("click",function(){
  subPriceCard.style.display = "flex";
});

otpBtn.addEventListener("click",function(){
  otpPriceCard.style.display = "flex";
});

addonBtn.addEventListener("click",function(){
  addonCard.style.display = "flex";
});

closePackageInfo1.addEventListener("click",function(){
  otpPriceCard.style.display = "none";
  subPriceCard.style.display = "none";
  addonCard.style.display = "none";
})

closePackageInfo2.addEventListener("click",function(){
  otpPriceCard.style.display = "none";
  subPriceCard.style.display = "none";
  addonCard.style.display = "none";
})

closePackageInfo3.addEventListener("click",function(){
  otpPriceCard.style.display = "none";
  subPriceCard.style.display = "none";
  addonCard.style.display = "none";

})




