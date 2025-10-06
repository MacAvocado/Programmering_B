var currentPage = "#page5"


function setup (){
    console.log("p5 setup kaldt")
    var allMenuItems = selectAll(".sidebar a")
    allMenuItems.map( 
        function(item){
            item.mousePressed(
                function(){
                    shiftPage(item.attribute("action"))
                }
            )
        }
    )
}


function shiftPage (newPage){
    select(currentPage).removeClass("show")
    select(newPage).addClass("show")
    currentPage = newPage
}

