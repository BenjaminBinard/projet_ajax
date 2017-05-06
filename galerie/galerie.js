ajaxRequest('GET', 'php/request.php/galerie/', loadGalerie);

function loadGalerie(ajaxResponse){
  var element;
  var list;
  var badge;
  var data;
  data = JSON.parse(ajaxResponse);

  list=document.getElementById('galerie_photo');
  list.innerHTML='TEST';
  console.log("JE SUIS LA");

  }
}
