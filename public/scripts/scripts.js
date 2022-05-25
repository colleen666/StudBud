//Overall menu list funtion
var menuList = document.getElementById("menuList");
        
menuList.style.maxHeight = "0px";

function togglemenu(){
    
    if(menuList.style.maxHeight == "0px")
        {
             menuList.style.maxHeight = "130px";
        }
    else
        {
            menuList.style.maxHeight = "0px";
        }
    
}

// function btnClicked(){
//     document.location.href="signup.html";
// }

// function myFunction() {
//     document.getElementById("demo").click().location.href="home.html";
// }