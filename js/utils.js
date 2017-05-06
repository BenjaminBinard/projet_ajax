'use strict';

function ajaxRequest(type, request, callback, data=null){
  var xhr;
  xhr = new XMLHttpRequest();
  if(type=='GET'){
    request += '?' + data;
  }
  xhr.open(type, request, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function(){
    if(xhr.readyState != 4)
    return;
    switch(xhr.status){
      case 200:
      callback(xhr.responseText);
      break;
      case 404:
      httpErrors(404);
      case 400:
      httpErrors(400);
      default:
      console.log('Http Error : '+xhr.status);
    }
  };
  xhr.send(data);
}

function loadHtmlAndJs(ajaxResponse){
  var data;
  console.log(ajaxResponse);
  data = JSON.parse(ajaxResponse);
  $('#'+data.divId).load(data.html);
  $.getScript(data.js);
}
