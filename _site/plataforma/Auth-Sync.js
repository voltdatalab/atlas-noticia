var settings = {
  "async": false,
  "crossDomain": true,
  "url": "https://api.atlas.jor.br/api/v1/auth/login",
  "method": "POST",
  "headers": {
  "Content-Type": "application/json"
  },
  "processData": false,
  "data": "{\n    \"email\": \"api@voltdata.info\",\n    \"password\": \"techvolt2019\"\n}"
}

var token;

$.ajax(settings).done(function (response) {
  token = response
  getRegions();
});

function getRegions() {
  token = token.access_token;

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.atlas.jor.br/api/v1/data/qtd-cities-without-media-state",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer " + token
    },
    "success": function(data) {
        dumpData(data)
    },
    "dataType": 'JSON'
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}

// console.log(token);
