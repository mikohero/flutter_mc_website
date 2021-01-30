let map;
let selValue;
//Create an array of locations from the pushpins
let locs = [];

let selRejser = document.getElementById("rejser");
let selButton = document.getElementById("sendrejser");
let selText = document.getElementById("rname");




function getRejseData() {
    $.getJSON("https://domain/getRejseData.php")
        .done(function(json) {
            console.log(json[0].rname);
            /*
            for (property in json) {
                console.log(property + " " + json[property]);
                for (second in json[property]) {
                    console.log(second + " " + json[property][second]);
                }
            }*/
            let dropdown = $('#rejser');
            dropdown.empty();
            dropdown.append('<option selected="true" disabled>Choose Rejse</option>');
            dropdown.prop('selectedIndex', 0);
            $.each(json, function(key, entry) {
                dropdown.append($('<option></option>').attr('value', entry.rid).text(entry.rname));
            })
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
}

function updateSelData(id, text) {
    selText.value = "";
    console.log("updateSelData " + id + " " + text);
    $.post("https://domain/updateRejseData.php", { rid: id, rname: text })
        .done(function(data) {
            console.log("update done: " + data);
            getRejseData();
        });
}
selButton.addEventListener("click", function() {
    //console.log(selText.value + " " + selValue);
    updateSelData(selText.value, selValue);
});

function pushpinClicked(e) {
    var desr = "Here is my data: <div id='myimg' name='myimg'>super</div>";
    var link = "https://domain/images/" + e.target.metadata.title;
    var infobox = new Microsoft.Maps.Infobox(e.target.getLocation(), {
        title: "Image is: " + e.target.metadata.title,
        maxHeight: 300,
        maxWidth: 420,
        description: '<iframe src="https://domain/newImage.php?id=' + link + '" width="400" height="225" allowFullScreen frameBorder="0"></iframe>'
    });
    //console.log("link is: " + link);
    infobox.setMap(map);

}

function getMapData(id) {
    console.log("readMapDataWithId: " + id);
    $.post("https://domain/getMapData.php", { rid: id })
        .done(function(data) {

            //console.log("Map Data: " + data); //url,lat,lng
            map.entities.clear();
            const parsed = JSON.parse(data);
            //console.log(parsed[0].url);
            for (var i = 0; i < parsed.length; i++) {
                console.log(parsed[i].url);
                var lat = parseFloat(parsed[i].lat);
                var lng = parseFloat(parsed[i].lng)
                var loc = new Microsoft.Maps.Location(lat, lng);
                var pushpin = new Microsoft.Maps.Pushpin(loc, {
                    //title: parsed[0].url,
                });
                pushpin.metadata = {
                    title: parsed[i].url,

                };
                var s = parsed[i].url;

                Microsoft.Maps.Events.addHandler(pushpin, 'click', pushpinClicked);
                pushpin.setOptions({ enableHoverStyle: true, enableClickedStyle: true });
                locs.push(pushpin.getLocation());
                map.entities.push(pushpin);
            }
            map.setView({
                bounds: Microsoft.Maps.LocationRect.fromLocations(locs),
                padding: 100 //Add a padding to buffer map to account for pushpin pixel dimensions
            });
            /*
            Map Data: [{"mid":"3","url":"2021_0126_122821_005.JPG","lat":"55.4574008","lng":"10.3708703","rid":"6"},{"mid":"4","url":"2021_0126_122841_006.JPG","lat":"55.457392","lng":"10.3709021","rid":"6"}]

    
    var pushpin = new Microsoft.Maps.Pushpin(center, null);
    map.entities.push(pushpin);
    pushpin.setOptions({ enableHoverStyle: true, enableClickedStyle: true });
        */
        });
}

selRejser.addEventListener("change", function() {
    console.log(selRejser.value);
    selValue = selRejser.value;
    console.log(selRejser.options[selRejser.selectedIndex].text);
    if (selRejser.options[selRejser.selectedIndex].text != "") {
        //retrieve data for map
        //console.log("getDataForMapNow");
        getMapData(selRejser.value);
    }
});

function getData() {


    $.getJSON("https://domain/getData.php")
        .done(function(json) {
            console.log("JSON Data: " + json.marks[0].file);
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });

}

function GetMap() {

    map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'map-code',
        center: new Microsoft.Maps.Location(55.457397, 10.371471),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 16
    });
    getRejseData();
}
GetMap();