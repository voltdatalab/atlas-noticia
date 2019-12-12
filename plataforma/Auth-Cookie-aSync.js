function setCookie(cname, cvalue, exdays) {
  var d = new Date();
 d.setTime(d.getTime() + (exdays*24*60*60*1000));
 var expires = "expires="+ d.toUTCString();
 document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.atlas.jor.br/api/v1/auth/login",
  "method": "POST",
  "headers": {
  "Content-Type": "application/json"
  },
  "processData": false,
  "data": "{\n    \"email\": \"api@voltdata.info\",\n    \"password\": \"techvolt2019\"\n}"
}

$.ajax(settings).done(function (response) {
  setCookie('token', JSON.stringify(response), 1)
  getRegions();
});

function getRegions() {
  token = JSON.parse(getCookie('token')).access_token;

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.atlas.jor.br/api/v1/data/qtd-cities-without-media-region",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer " + token
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

