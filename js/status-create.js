//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/create.volar.ga"; //insert  server here

$.getJSON(url, function(r) {
  //data is the JSON string
  if (r.error) {
    $('#rest-create').html('<br>This is an example text that shows when the server is offline.<br><br><font color= "#333"><b>Players Online:</b>?<b>/</b>?<br> <b>Latency:</b> ?ms<br><font color= "#E74C3C">Server Offline<br><br>');
    return false;
  }
  var pl = '';
  if (r.players.sample.length > 0) {
    pl = '<br>OP: ' + r.players.sample[0].name;
  }
  $('#rest-create').html('<br>' + r.description.replace(/§(.+?)/gi, '') + '<br><br><font color= "#333"><b>Players Online:</b> ' + r.players.online + '<b>/</b>'+ r.players.max + '<br><b>Latency:</b> ' + latency + 'ms' + '<br><font color= "#28B463">Server Online' + '<br><br>');
  $('#favicon-create').attr('src', r.favicon);

});