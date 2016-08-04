// adds the joke in the inputjoke field to the joke list
function submitjoke() {
    
    var txt = document.getElementById("inputjoke").value;
    
    //var file_json = require('./jokes.json');
    //var file_json = $.getJSON("jokes.json", function(data){
      //  alert(data;
    //});
    //var jokes = JSON.parse($(file_json).txt);
    
    $.getJSON("jokes.json", function (data) {
       // data.push("3", "another joke");
        
        var after = JSON.stringify(data.push("3", "dumb joke"));
        localStorage.setItem('jokes', after);
        alert(after);
    });
    
}

// TODO: FOR GETTING JOKES
//  $.getJSON( "jokes.json", function( data ) {
//  var items = [];
//  $.each( data, function( key, val ) {
//    items.push( "<li id='" + key + "'>" + val + "</li>" );
//  });
// 
//  $( "<ul/>", {
//    "class": "my-new-list",
//    html: items.join( "" )
//  }).appendTo( "body" );
//});

//  $.getJSON("jokes.json", function (data) {
//        var items = [];
//        $.each(data, function (key, val) {
//            items.push(val);
//        });
//        
//        alert(items[1]);
//    });