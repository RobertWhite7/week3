           $(function(){
       
       $.ajax({
            url:"https://api.darksky.net/forecast/3076dd7488b4447914c19faca690a9f0/37.8267,-122.4233",
            dataType: "jsonp",
            success: function(result) {
                console.log(result.latitude);
                console.log(result.longitude);
                console.log(result.timezone);

                
              

            }
                      
            $.ajax({
             url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBnKuo11baAEflbC-XhzUwxabQuawina9I";
                dataType: "json",
                success: function(result){
               console.log(result.results)

                }
               
            };

           
        }

       });
       

    });