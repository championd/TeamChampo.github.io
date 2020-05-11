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
