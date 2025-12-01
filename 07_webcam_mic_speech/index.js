var currentPage = "#page2"
var capture
var otterSound

function preload(){
    otterSound = loadSound("./assets/ottter-352821.mp3")
}


function setup (){
    console.log("p5 setup kaldt")

    shiftPage(currentPage)


    capture = createCapture(VIDEO, {flipped:true})
    capture.size(720,468)
    select("#page1").child(capture)


    select("#otter").mousePressed(()=>{
        otterSound.play()
    })


    


    //set menu op
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
}

