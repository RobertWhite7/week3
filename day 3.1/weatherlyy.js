 



  function darksky_complete(result){
     console.log(result.currently.summary);




}
 

        function lookupLatLong_Complete(result) {
            
            var latitude = result.results["0"].geometry.location.lat;
            var longitude = result.results["0"].geometry.location.lng;
            console.log("The lat and long is " + latitude + ", " + longitude);
      
            var darkSkyUrl= "https://api.darksky.net/forecast/3076dd7488b4447914c19faca690a9f0/" + latitude +"," + longitude;
             url: darkSkyUrl,
             dataType: "jsonp",
             success: darksky_complete
         

               };
               $.ajax(request);

               }
           function lookupLatLong(city, state, location) {
            
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

   
        function lookupWeatherForPostalCode_Click() {
            var pcode = $("#postalCode").val();
            lookupLatLong(""+ "", pcode);
            console.log(test);
         
       
     }


 

      $(function() {
              var postalCode=lookupLatLong;
            $("#postButton").on("click", lookupWeatherForPostalCode_Click)
        });
