var currentPage = "#page1"
var capture


function setup (){
    console.log("p5 setup kaldt")

    shiftPage(currentPage)


    capture = createCapture(VIDEO, {flipped:true})
    capture.size(720,468)
    select("#page1").child(capture)


    


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

