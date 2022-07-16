//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/create.volar.ga"; //insert  server here

$.getJSON(url, function(r) {
  //data is the JSON string
  if (r.error) {
    $('#rest-create').html('Server Offline');
    return false;
  }
  var pl = '';
  if (r.players.sample.length > 0) {
    pl = '<br>OP: ' + r.players.sample[0].name;
  }
  $('#rest-create').html(r.description.replace(/§(.+?)/gi, '') + '<br><br><b>Players Online:</b> ' + r.players.online + '<b>/</b>'+ r.players.max );
  $('#favicon-create').attr('src', r.favicon);

});