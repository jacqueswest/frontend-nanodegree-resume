//$("#main").append(["Jacques van der Westhuizen"]);

//var awesomethoughts = "My name is JAcques and I am the real superman";

//console.log(awesomethoughts);

//var funthoughts = awesomethoughts.replace("superman", "globalman");

//$("#main").append(funthoughts);

var formattedname = HTMLheaderName.replace("%data%", "Jacques van der Westhuizen");
var formattedrole = HTMLheaderRole.replace("%data%", "Python Developer");

$("#header").prepend(formattedname);
$("#header").append(formattedrole);

var bio = {"name": "Jacques",
           "role": "Automation Engineer",
		   "contact_info": "jacqueswest@gmail.com",
		   "pic_url": "",
		   "welcome_message": "Welcome to me CV",
		   "skills": "Python Dev"
		  };
		  
$("#header").append(bio.welcome_message);
$("#header").append(bio.role);
$("#header").append(bio.skills);
$("#header").append(bio.contact_info);

//document.getElementById("#header").style.backgroundColor = "black"; 

/* if (bio["skills"].lenght > 0;){
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
} */