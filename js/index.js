// variable Initialization

var city = ["Darwin", "Lakeside Drive", "Nightcliff", "Wulagi", "Casurina", "Rosebery", "FannieBay", "Karama"];   //array for binding From Location and To location droupdown (In Journey Planer page)

var route = ["Chan Ward", "Lyons Ward", "Richardson Ward", "Water ward", "Palmerston", "Litchfield"];         //array for binding Route droupdown (In Timetable page)

var slideIndex = 0;

// Bind From location To location and Route dropdown on window load event
window.onload = function () {
    debugger;
    //From location To location binding
    var selectFrom = document.getElementById("ddlFrom");
    var selectTo = document.getElementById("ddlTo");

    for (var i = 0; i < city.length; i++) {
        var optionFrom = document.createElement('option');
        var optionTo = document.createElement('option');

        optionFrom.text = city[i];
        optionFrom.value = i + 1;
        selectFrom.add(optionFrom, 0);

        optionTo.text = city[i];
        optionTo.value = i + 1;
        selectTo.add(optionTo, 0);
    }

    //Route dropdown binding
    var selectRoute = document.getElementById("ddlRoute");

    for (var j = 0; j < route.length; j++) {
        var optionRoute = document.createElement('option');

        optionRoute.text = route[j];
        optionRoute.value = j + 1;
        selectRoute.add(optionRoute, 0);

    }

};

//Call after document will ready
$(document).ready(function () {
    //Call Change Image in Slider Function
    showSlides();
});

// add random distance to show in journey planer page for From location and To location
var distArray = []
for (i = 0; i < city.length; i++) {
    distArray[i] = [];
    for (j = 0; j < city.length; j++) {
        if (i == j) {
            distArray[i][j] == 0;
        } else {
            distArray[i][j] = (i + j + 1) * 5;
        }
    }
}
console.log(distArray);

//for Going to different pages ---------------------------------------------------------
function GotoUrl(div) {
    debugger;

    // Remove Active class from whole page
    var elems = document.querySelectorAll(".active");

    [].forEach.call(elems, function (el) {
        el.classList.remove("active");
    });

    // Home link click event
    if (div == "lnkHome") {
        document.activeElement.classList.add("active");                                         // add active class on home link
        document.getElementById("loadArea").style.display = "none";                             // hide loadArea
    }

        //other link click event
    else {
        document.getElementById("loadArea").style.display = "block";                            // show loadArea
        var lnkHome = document.getElementById("lnkHome");
        lnkHome.classList.remove("active");                                                     // remove active class from Home link

        //var x = document.activeElement.getAttribute("data-lnk");;

        document.activeElement.parentElement.parentElement.classList.add("active");             // add active class to current link

        document.getElementById("loadArea").innerHTML = "";
        document.getElementById("loadArea").innerHTML = document.getElementById(div).innerHTML; //Load page content in loadArea

    }

    $('html, body').animate({ scrollTop: $('#loadArea').offset().top }, 'slow');
    //$('#loadArea').focus();

    return false;
}

//for Going to different pages from Card click ---------------------------------------------------------
function GotoUrlFromCard(div) {
    debugger;

    // Remove Active class from whole page
    var elems = document.querySelectorAll(".active");

    [].forEach.call(elems, function (el) {
        el.classList.remove("active");
    });

    document.getElementById("loadArea").style.display = "block";                            // show loadArea

    document.getElementById("loadArea").innerHTML = "";
    document.getElementById("loadArea").innerHTML = document.getElementById(div).innerHTML; //Load page content in loadArea

    $('html, body').animate({ scrollTop: $('#loadArea').offset().top }, 'slow');
    //$('#loadArea').focus();

    return false;
}

// Card No and Card Detail Save Event  ('btnTopUp' click event)
function TopUpCard() {
    debugger;

    var txtCardNo = document.getElementById('txtCardNo').value;

    var txtCardDetail = document.getElementById('txtCardDetail').value;

    if (txtCardNo) {                                                                            // check null validation of txtCardNo
        if (txtCardDetail) {                                                                    // check null validation of txtCardDetail
            var div = document.getElementById("dvTopUpContent");
            div.remove();
            var div = document.getElementById("dvWarningTopUp");
            div.classList.remove("display-none");
        }
        else {
            alert("Card Detail can not be null");
        }
    }
    else {
        alert("Card No can not be null");
    }

}

// ShowTimetable click event
function ShowTimetable() {
    var div = document.getElementById("dvTimeTableContent");
    div.remove();
    var div = document.getElementById("lblTimetableWarning");
    div.classList.remove("display-none");
}

// Show random distance between from location and To location
function ShowDistance() {
    debugger;
    var ddlFrom = document.getElementById("ddlFrom");
    var FromLocation = ddlFrom.options[ddlFrom.selectedIndex].value;
    FromLocation = parseInt(FromLocation);

    var ddlTo = document.getElementById("ddlTo");
    var ToLocation = ddlTo.options[ddlTo.selectedIndex].value;
    ToLocation = parseInt(ToLocation);

    if (FromLocation) {                                                                          // check null validation of FromLocation
        if (ToLocation) {                                                                        // check null validation of ToLocation
            if (FromLocation != ToLocation) {                                                    // check validation of FromLocation and ToLocation can't be same
                var lbldist = document.getElementById("lbldist");
                lbldist.classList.remove("display-none");

                document.getElementById('lbldist').innerHTML = 'Distance is ' + distArray[FromLocation - 1][ToLocation - 1] + ' By Bus.';

            } else {
                alert("From and To location can not be same");
                var lbldist = document.getElementById("lbldist");
                lbldist.classList.add("display-none");
            }
        } else {
            alert("To Location can not be null");
            var lbldist = document.getElementById("lbldist");
            lbldist.classList.add("display-none");
        }
    } else {
        alert("From Location can not be null");
        var lbldist = document.getElementById("lbldist");
        lbldist.classList.add("display-none");
    }
}

//Change Image in Slider
function showSlides() {
    var i;
    var mySlides = document.getElementsByClassName("mySlides");
    // Hide all slider images
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > mySlides.length)
    {
        slideIndex = 1;
    }
    //Show one by one image
    mySlides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}
