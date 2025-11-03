var currentPage = "#page1"


function setup (){
    console.log("p5 setup kaldt")


    //Buttons
    var theButton = select("#theButton")
    theButton.mousePressed(()=>{
        if(confirm("Er du sikker")){
            theButton.html("I was clicked")
        }else{
            theButton.html("I feel empty and without purpose")
        }
    })


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

