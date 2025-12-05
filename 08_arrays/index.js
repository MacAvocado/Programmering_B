var currentPage = "#page1"






function setup (){
    console.log("p5 setup kaldt")

    shiftPage(currentPage)


    

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
