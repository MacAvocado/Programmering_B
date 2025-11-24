var currentPage = "#page3"
var mouseX = 0
var mouseY = 0


function setup (){
    console.log("p5 setup kaldt")




  
    shiftPage(currentPage)
    //set menu op
    var allPages = selectAll(".page")
    allPages.map(
        page => {
            var menuItem = createElement("a")
            menuItem.html(page.attribute("id"))
            menuItem.mousePressed(
                () => shiftPage("#" + page.attribute("id"))
            )
            select(".sidebar").child(menuItem)
        }
    )
}

//
function shiftPage (newPage){
    select(currentPage).removeClass("show")
    select(newPage).addClass("show")
    currentPage = newPage
}

document.addEventListener("mousemove",(e)=>{
    mouseX = e.clientX
    mouseY = e.clientY

    var screenWidth = window.innerWidth
    var screenHeight = window.innerHeight
    //console.log(mouseX, mouseY)
    document.querySelectorAll(".parallaxMouse").forEach((elem)=>{
        elem.style.transform = `translate(${mouseX - screenWidth/2}px, ${mouseY - screenHeight/2}px)`
    })
})



