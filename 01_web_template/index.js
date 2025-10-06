var currentPage = "#page5"


function setup (){
    console.log("p5 setup kaldt")
    select("#menu-side1").mousePressed(
        function (){
            shiftPage("#page1")
        }
    )
    select("#menu-side2").mousePressed(
        function (){
            shiftPage("#page2")
        }
    )
    select("#menu-side3").mousePressed(
        function (){
            shiftPage("#page3")
        }
    )
    select("#menu-side4").mousePressed(
        function (){
            shiftPage("#page4")
        }
    )
    select("#menu-side5").mousePressed(
        function (){
            shiftPage("#page5")
        }
    )
}


function shiftPage (newPage){
    select(currentPage).removeClass("show")
    select(newPage).addClass("show")
    currentPage = newPage
}

