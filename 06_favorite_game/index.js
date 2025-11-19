var currentPage = "#page1"
var videoButton, theVideo
var videoPlayin = true
var newPage


function setup (){
    console.log("p5 setup kaldt")

    shiftPage(currentPage)

        theVideo = select("#theVideo")
    videoButton = select("#videoButton")
    videoButton.mousePressed(()=>{
        //console.log("button pressed")
        if (videoPlayin){
            theVideo.pause()
            videoPlayin = false
        }else{
            theVideo.loop()
            videoPlayin = true
        }
    })

    var theDrop = select("#theSelect")
    var currentClass = ("Terminids")
    theDrop.changed(()=>{
        select("#page2").removeClass(currentClass)
        currentClass = theDrop.value()
        select("#page2").addClass(theDrop.value())
        console.log(currentClass)
    })



  

    var allPages = selectAll(".page")
    allPages.map(
        page => {
            var menuItem = createElement("a")
            menuItem.html(page.attribute("title"))
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
    //console.log ("shift page kaldt")
}

