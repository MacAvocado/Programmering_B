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

function mouseMoved(e){
    //console.log("p5 js",mouseX, mouseY,windowHeight,windowWidth)
    selectAll(".parallaxMouse").map(div => {
        const speed = div.attribute("dataSpeed")
        //console.log(speed)
        div.style('transform',`translate(${-(mouseX - windowWidth/2)*speed}px, ${-(mouseY - windowHeight/2)*speed}px)`)
    })
}

/*document.addEventListener("mousemove",(e)=>{
    mouseX = e.clientX
    mouseY = e.clientY

    var screenWidth = window.innerWidth
    var screenHeight = window.innerHeight
    //console.log(mouseX, mouseY)
    document.querySelectorAll(".parallaxMouse").forEach((elem)=>{
        const speed = elem.getAttribute("dataSpeed")
        elem.style.transform = `translate(${(mouseX - screenWidth/2)*speed}px, ${(mouseY - screenHeight/2)*speed}px)`
    })
})*/



