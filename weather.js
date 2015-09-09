$(document).ready(function() {

  navigator.geolocation.getCurrentPosition(function(position) {
    var x = position.coords.latitude;
    var y = position.coords.longitude;
    var apiurl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + x + '&lon=' + y;

    $.getJSON(apiurl, function(data) {

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
  });
});