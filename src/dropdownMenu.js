
function dropdownMenu(){
    console.log("here");
    const menu = document.querySelector(".dropdown-menu");
    if (menu.style.display != "block"){
        menu.style.display = "block"
    } else menu.style.display = "none";
};

function theme(){
    console.log("over here");
    if (document.body.style.background != "black"){
        document.body.style.background = "black";
    } else document.body.style.background = "blue";
    //getElementById("theme");

};

export {dropdownMenu,theme};