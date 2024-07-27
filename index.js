
var popup=document.getElementById("popup")
var closePopup=document.getElementById("closePopup")
var popupImg=document.getElementById("popupImg")

var image=document.querySelectorAll("img")

for(var i=0;i<image.length;i++){
    image[i].addEventListener("click", (event)=>{
        popup.style.display="flex"
        popupImg.src=event.target.src
    })

    closePopup.addEventListener("click", ()=>{
        popup.style.display="none"
    })
}