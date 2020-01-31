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
  getData();
});

function dumpData(result){
    console.log(result);
    for(var i = 0; i < result.length; i++) {
        $('<tr>').append(
            $('<td>').text(result[i].estado),
            $('<td>').text(result[i].qtd_cidades),
            $('<td>').text(result[i].qtd_desertos)
        ).appendTo('#desertos_por_regiao');
    }
}

function getData() {
  token = token.access_token;

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.atlas.jor.br/api/v1/data/qtd-cities-without-media-region",
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

//console.log(token);
