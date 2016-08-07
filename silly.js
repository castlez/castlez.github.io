// adds the joke in the inputjoke field to the joke list
function submitjoke() {
    
    var txt = document.getElementById("inputjoke").value;
    
    //var jokes = JSON.parse($("jokes.json").text);
    
    $jokestring = file_get_contents('jokes.json');
    
    $data = json_decode($jokestring, true);
    
    $data[0]['1'] = "json joke";
    // or if you want to change all entries with activity_code "1"
    foreach ($data as $key => $entry) {
        $data['1'] = "TENNIS";
    }
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