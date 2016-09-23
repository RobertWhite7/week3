//js brainstorm pages


$(function () {

    $.ajax({
     
       }
     function darksky_complete(result){
     console.log(result.currently.summary);
     var hour1 = result.hourly.data[0];
     var time = new Date(hour1.time *1000);
     console.log("Time" + time.toLocaleString());

                      
            $.ajax({
            url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBnKuo11baAEflbC-XhzUwxabQuawina9I";
            dataType: "json",
            success: function (result) {
                console.log(result.results.formatted_address.geometry);
                

            }
               function lookupLatLong(city, state, location) {
            
                var address = "";
                if(postalCode.length != 0) {
                    address = postalCode.trim();
                }
                else if (city.length != 0 && state != 0) {
                    address = city.trim() + ", " + state;
                }
                 else {
                    return; 
                }
               }
                function lookupLatLong_Complete(result) {
                var latitude = result.results["0"].geometry.location.lat;
                var longitude = result.results["0"].geometry.location.lng;
                console.log("The lat and long is " + latitude + ", " + longitude);
            }
               function location=(latitude, longitude){
                var result = latitude + longitude;
                return result;
                console.log(lookupLatLong_complete);
            }
                   function lookupWeatherForPostalCode_Click() {
                var pcode = $("#location").val();
                lookupLatLong("" + "", pcode);
                console.log(result.results[0].geometry.location);
            
        }
            };
          }
      });
   });
$(function () {
    $("#lookupWeatherForPostalCode").on("click", lookupWeatherForPostalCode_Click)
    console.log(result.location);
});