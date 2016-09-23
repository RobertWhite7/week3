 
 // Function brainstorm page
 $(function() {
              var postalCode=lookupLatLong;
            $("#postalCode").on("click", lookupWeatherForPostalCode_Click)
        });

  function darksky_complete(result){
     console.log(result.currently.summary);
     var hour1 = result.hourly.data[0];
     var time = new Date(hour1.time *1000);
     console.log("Time" + time.toLocaleString());



}
 
    $(function(){
       
      var request = {
            url:"https://api.darksky.net/forecast/3076dd7488b4447914c19faca690a9f0/37.8267,-122.4233",
            dataType: "jsonp",
            success: darksky_complete
      };

   $.ajax(request);

    });

        function lookupLatLong_Complete(result) {
            var latitude = result.results["0"].geometry.location.lat;
            var longitude = result.results["0"].geometry.location.lng;
            console.log("The lat and long is " + latitude + ", " + longitude);
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

           
            var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBnKuo11baAEflbC-XhzUwxabQuawina9I";

            var request = {
                url: googleUrl,
                dataType: "json",
                success: lookupLatLong_Complete,
               
            };

            $.ajax(request);
        }

   
        function lookupWeatherForPostalCode_Click() {
            var pcode = $("#location").val();
            lookupLatLong(""+ "", pcode);
             console.log(result.results[0].geometry.location);
       
     }


 

        $(function() {
            $("#lookupWeatherForPostalCode").on("click", lookupWeatherForPostalCode_Click)
        });
