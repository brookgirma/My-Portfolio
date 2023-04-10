const styleswitchertoggle = document.querySelector(".styleswitchertoggler");
styleswitchertoggle.addEventListener("click", () =>{
    document.querySelector(".styleswitcher").classList.toggle("open");
})
//hide switch on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".styleswitcher").classList.contains("open"))
    {
        document.querySelector(".styleswitcher").classList.remove("open");   
    }
})

//theme colors
const altstyle = document.querySelectorAll(".altstyle");
function setActiveStyle(color)
{
    altstyle.forEach ((style) => {
        if (color === style.getAttribute("title")) 
        {
            style.removeAttribute("disabled");   
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

//night mode
const daynight = document.querySelector(".nightmode");
daynight.addEventListener("click", () => {
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) 
    {
        daynight.querySelector("i").classList.add("fa-sun");   
    }
    else
    {
        daynight.querySelector("i").classList.add("fa-moon");
    }
})