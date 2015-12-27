
$(document).ready(function () {
    
    var appId = '7f7fb89e25c6e106c2d4e85aac3f1042';
    navigator.geolocation.getCurrentPosition(function(position) {
        var x = position.coords.latitude;
        var y = position.coords.longitude;
        var apiurl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + x + '&lon=' + y + "&APPID=" + appId;
        $.getJSON(apiurl, function(data) {
            
            console.log('hello');
            
            var temp = Math.floor((data.main.temp - 272.15) * (9 / 5) + 32);
            if (temp > 90) {
                $('body').addClass('hot');
            }
            if (temp < 32) {
                $('body').addClass('cold');
            }
                
            $('.main-temp').append(temp + " °F");
            $('.place').append(data.name);
            $('.wind').append("Wind " + data.wind.speed + " mph");
            $('.description').append(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.substring(1));
                         
        });
        
        $('button').on('click', function() {
            var city = document.getElementById('city').value;
            apiurl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + appId;
            console.log(apiurl);
            
            $.getJSON(apiurl, function(data) {
            
                console.log('boo');

                var temp = Math.floor((data.main.temp - 272.15) * (9 / 5) + 32);
                if (temp > 90) {
                    $('body').removeClass();
                    $('body').addClass('hot');
                }
                if (temp < 32) {
                    $('body').removeClass();
                    $('body').addClass('cold');
                }
                
                $('.main-temp').empty();
                $('.main-temp').append(temp + " °F");
                $('.place').empty();
                $('.place').append(data.name);
                $('.wind').empty();
                $('.wind').append("Wind " + data.wind.speed + " mph");
                $('.description').empty();
                $('.description').append(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.substring(1));
                         
            }); 
        });
    });
});



