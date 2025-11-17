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

    //p5 buttons
    var myButton = createButton("Button created with js")
    //Læg den nd i side fem
    select("#page5").child(myButton)
    myButton.mousePressed(()=>{
        shiftPage("#page1")
    })


    //Drop downs
    var theDrop = select("#theSelect")
    theDrop.changed(()=>{
        select("#page2").style("background-color",theDrop.value())
    })




    //Input field
    var theInput = select("#theInput")
    var theInputButton = select("#theInputButton")
    var theInputTitle = select("#theInputTitle")
    theInputButton.mousePressed(()=>{
        var title = theInput.value()
        theInput.hide()
        theInputButton.hide()
        theInputTitle.html(title)
    })




    //Check boxes
    var ck = select("#ck1")
    ck.changed(()=>{
        ck.hide()
        select("#ckl").hide()
        select("#rebel").html("DEATH TO THE REBELLION")
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

