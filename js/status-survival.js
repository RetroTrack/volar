//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/play.volar.ga"; //insert  server here

$.getJSON(url, function(r) {
  //data is the JSON string
  if (r.error) {
    $('#rest-survival').html('<br><br><b><br><font color= "#E74C3C">Server Offline</b><br><br>');
    return false;
  }
  var latency = Math.round(r.latency);
  var pl = '';
  if (r.players.sample.length > 0) {
    pl = '<br>OP: ' + r.players.sample[0].name;
  }
  $('#rest-survival').html('<br>' + r.description.replace(/§(.+?)/gi, '') + '<br><br><font color= "#333"><b>Players Online:</b> ' + r.players.online + '<b>/</b>'+ r.players.max + '<br><b>Latency:</b> ' + latency + 'ms' + '<br><font color= "#28B463">Server Online' + '<br><br>');
  $('#favicon-survival').attr('src', r.favicon);

});