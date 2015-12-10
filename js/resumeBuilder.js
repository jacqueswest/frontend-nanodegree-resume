//$("#main").append(["Jacques van der Westhuizen"]);

//var awesomethoughts = "My name is JAcques and I am the real superman";

//console.log(awesomethoughts);

//var funthoughts = awesomethoughts.replace("superman", "globalman");

//$("#main").append(funthoughts);

var formattedname = HTMLheaderName.replace("%data%", "Jacques van der Westhuizen");
var formattedrole = HTMLheaderRole.replace("%data%", "Python Developer");

$("#header").prepend(formattedname);
$("#header").append(formattedrole);


