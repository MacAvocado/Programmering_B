var currentPage = "#page5"


function setup (){
    console.log("p5 setup kaldt")
    select("#menu-side1").mousePressed(
        function (){
            shiftPage("#page1")
        }
    )
}


function shiftPage (newPage){
    select(currentPage).removeClass("show")
    select(newPage).addClass("show")
    currentPage = newPage
}

