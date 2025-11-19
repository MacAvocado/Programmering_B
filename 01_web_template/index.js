var currentPage = "#page5"
var videoButton, theVideo
var videoPlayin = true


function setup (){
    console.log("p5 setup kaldt")
    //set menu op

    theVideo = select("#theVideo")
    videoButton = select("#videoButton")
    videoButton.mousePressed(()=>{
        //console.log("button pressed")
        if videoPlayin{
            theVideo.pause()
            videoPlayin = false
        }else{
            theVideo.loop()
            videoPlayin = true
        }
    })


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

