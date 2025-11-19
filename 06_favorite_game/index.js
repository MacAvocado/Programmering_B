var currentPage = "#page1"
var videoButton, theVideo
var videoPlayin = true


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


  

    //set menu op
    var allPages = selectAll(".page")
    allPages.map(
        page => {
            var menuItem = createElement("a")
            menuItem.html(page.attribute("title"))
            menuItem.mousePressed(
                () => shiftPage(page.attribute("title"))
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

