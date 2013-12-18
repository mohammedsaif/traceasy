//Location Code            

var geocoder;

var onGetCurrentPositionSuccess = function(position)
{
console.log("lat: " + position.coords.latitude);
console.log("long: " + position.coords.longitude);

var lat = parseFloat(position.coords.latitude);
var lng = parseFloat(position.coords.longitude);
var latlng = new google.maps.LatLng(lat, lng);

geocoder.geocode({'latLng': latlng}, function(results, status)
{
    if (status == google.maps.GeocoderStatus.OK)
    {
        if (results[0])
        {
            var arrAddress = results[0].address_components;

            $.each(arrAddress, function (i, address_component)
            {
                if (address_component.types[0] == "locality")
                {
                    var x = address_component.long_name;

                    document.getElementById('txtLocation').value = x;

                    return false;
                }
            });
        }
        else
        {
            alert("No results found");
            document.getElementById('txtLocation').value = ' please enter city, country';
        }
    }
    else
    {
        alert("Geocoder failed due to: " + status);
        document.getElementById('txtLocation').value = ' please enter city, country';
    }
});
}
var onGetCurrentPositionError = function(error)
{
console.log("Couldn't get geo coords from device");
}