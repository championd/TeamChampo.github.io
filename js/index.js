var city = ["Darwin", "LacksideDr", "Nightcliff", "Wulagi", "Casurina", "Rosebery", "FannieBay", "Karama"];

var route = ["Chan Ward", "Lyons Ward", "Richardson Ward", "Water ward", "Palmerston", "Litchfield"];

window.onload = function () {
    debugger;
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

    var selectRoute = document.getElementById("ddlRoute");

    for (var j = 0; j < route.length; j++) {
        var optionRoute = document.createElement('option');

        optionRoute.text = route[j];
        optionRoute.value = j + 1;
        selectRoute.add(optionRoute, 0);

    }

};

//GotoUrl ---------------------------------------------------------
function GotoUrl(div) {
    debugger;

    var elems = document.querySelectorAll(".active");

    [].forEach.call(elems, function (el) {
        el.classList.remove("active");
    });

    if (div == "lnkHome") {
        document.activeElement.classList.add("active");
        document.getElementById("loadArea").style.display = "none";
    }
    else {
        document.getElementById("loadArea").style.display = "block";
        var lnkHome = document.getElementById("lnkHome");
        lnkHome.classList.remove("active");

        //var x = document.activeElement.getAttribute("data-lnk");;

        document.activeElement.parentElement.parentElement.classList.add("active");

        document.getElementById("loadArea").innerHTML = "";
        document.getElementById("loadArea").innerHTML = document.getElementById(div).innerHTML;

        //document.getElementById("loadArea").innerHTML = '<object type="text/html" data="managingcard.html" ></object>';
    }
    return false;
}

// Card No and Card Detail Save Event  ('btnTopUp' click event)
function TopUpCard() {
    debugger;
   
    var txtCardNo = document.getElementById('txtCardNo').value;

    var txtCardDetail = document.getElementById('txtCardDetail').value;

    if (txtCardNo) {
        if (txtCardDetail) {
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



