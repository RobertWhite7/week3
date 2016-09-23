
var darkSky= "darksky_complete";


function darksky_complete(result) {
    console.log(result.latitude);
    console.log(result.longitude);
    console.log(result.timezone);
    console.log(result.currently.icon);
    console.log(result.currently.time);
    console.log(result.currently.tempature);
}


function lookupLatLong_Complete(result) {

    var latitude = result.results["0"].geometry.location.lat;
    var longitude = result.results["0"].geometry.location.lng;
    console.log("The lat and long is " + latitude + ", " + longitude);


    var request = {
        url: "https://api.darksky.net/forecast/3076dd7488b4447914c19faca690a9f0/" + latitude + "," + longitude,
        dataType: "jsonp",
        success: darksky_complete


    };
    $.ajax(request);

}
function lookupLatLong(city, state, postalCode) {

    var address = "";
    if (postalCode.length != 0) {
        address = postalCode.trim();
    }
    else if (city.length != 0 && state != 0) {
        address = city.trim() + ", " + state;
    }
    else {
        return;
    }


    var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="
        + address + "&key=AIzaSyANgZVmo6IYYgJX4bG2m0mxyKsQhvM6aiE";

    var request = {
        url: googleUrl,
        success: lookupLatLong_Complete

    };

    $.ajax(request);
}


/*  function lookupWeatherForPostalCode_Click() {
          var pcode = $("#postalCode").val();
          lookupLatLong("", "", pcode);
          console.log(test);
       
      } */

function lookupWeatherForPostalCode_Click() {
    var pcode = $("#postalCode").val();
    lookupLatLong("", "", pcode);

}

function generateCard(darkSky) {
    // Insert the original HTML into a string by reading from the div. I wrote the HTML first, tested it looked right, 
    // then grabbed it as a string by asking jQuery to go get me the HTML from the DOM.
    var template = $("#templateDiv").html(); // gets the html from inside the templateDiv div

    // Swap out the values.
    template = template.replace("@@IMGURL@@", darkSky.latitude);
    template = template.replace("@@NAME@@", darkSky.longitude);
    template = template.replace("@@LOCATION@@", darkSky.timezone);
    template = template.replace("@@IMGURL@@", rdarkSky.currently.icon);
    template = template.replace("@@NAME@@", darkSky.currently.time);
    template = template.replace("@@LOCATION@@", darkSky.currently.tempature);

    // Return the new HTML.
    return template;
}


// The divs will automatically wrap because of Bootstrap knowing it's a col-md-3.
var html = generateCard(darkSky);
$("#cards").append(html);

        


$(function () {
    $("#postButton").on("click", lookupWeatherForPostalCode_Click, generateCard)
});





