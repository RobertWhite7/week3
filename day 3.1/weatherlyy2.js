function getGoogle() {

    var zip = $(".submitField").val();
    console.log(zip);
    var googleSend = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=AIzaSyANgZVmo6IYYgJX4bG2m0mxyKsQhvM6aiE";
    console.log(googleSend);
    $.ajax({
        url: googleSend,
        success: function (result) {
            console.log(result.results[0].geometry.location.lat);
            var lat = (result.results[0].geometry.location.lat);
            console.log(result.results[0].geometry.location.lng);
            var lng = (result.results[0].geometry.location.lng);
            var city = (result.results[0].address_components[1].short_name);
            var state = (result.results[0].address_components[3].short_name)
            var cityHTMLName = $("#cityNameText").text();
            console.log(city);
            console.log(cityHTMLName);
            $(".cityNameText").text(city + "," + state);
            var darkSkyURL = (+lat + "," + lng);
            $.ajax({
                url: "https://api.darksky.net/forecast/3076dd7488b4447914c19faca690a9f0/" + darkSkyURL,
                dataType: "jsonp",
                success: function (result) {
                    console.log(result.currently.summary);
                    var temp = (result.currently.temperature);
                    var rainchance = (result.currently) //not finished
                    var unfloat = Math.round(temp);
                    var currentWeather = (result.currently.icon);
                    $(".sunnyCurrentTemp").text(unfloat + "\u2109");
                    $(".rainyCurrentTemp").text(unfloat + "\u2109");
                    if (currentWeather == "clear" || currentWeather == "rain" || currentWeather == "fog"
                        || currentWeather == "snow" || currentWeather == "sleet" || currentWeater == "cloudy") {
                        $(".weatherImage").attr("src", 'http://wallpapercave.com/wp/4W2pw5V.jpg');
                        $("#defaultCard").removeClass("defaultDay rainyDay");
                        $("#defaultCard").addClass("sunnyDay");

                        if (currentWeather == "clear") {
                            $(“#weatherImage”).addClass(ds - sunny)
                        }
                        if (currentWeather == "rain") {
                            $(“#weatherImage”).addClass(ds - rain)
                        }
                        if (currentWeather == "fog") {
                            $(“#weatherImage”).addClass(ds - fog)
                        }
                        if (currentWeather == "snow") {
                            $(#weatherImage”).addClass(ds - snow)
                        }
                        if (currentWeather == "sleet") {
                            $(“#weatherImage”).addClass(ds - sleet)
                        }
                        if (currentWeather == "cloudy") {
                            $(“#weatherImage”).addClass(ds - cloudy)
                        };
                       else{
                        return;
                    }
                );
            $(function () {
                $("#postButton").on("click", zip)
            });