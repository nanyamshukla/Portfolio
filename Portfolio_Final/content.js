/*  ----  SCRIPT FOR OPENING PAGE NAME  ----  */
setTimeout(function () { document.getElementById("name_p").style.transform = "scale(1.1,0.8)"; }, 3300);
setTimeout(function () { document.getElementById("name_p").style.transform = "scale(1.1,0.8)"; }, 3300);
setTimeout(function () { document.getElementById("name_p").style.transform = "scale(0,0.8)"; }, 4100);
setTimeout(function () {
	document.getElementById("name_span").style.opacity = "1";
	document.getElementById("name_p").style.transform = "scale(1.1,0.8)";
}, 4800);
setTimeout(function () { document.getElementById("name_span").style.opacity = "0"; }, 13500);
setInterval(function () {
	setTimeout(function () { document.getElementById("name_p").style.transform = "scale(0,0.8)"; }, 4100);
	setTimeout(function () {
		document.getElementById("name_span").style.opacity = "1";
		document.getElementById("name_p").style.transform = "scale(1.1,0.8)";
	}, 4800);
	setTimeout(function () { document.getElementById("name_span").style.opacity = "0"; }, 13500);
}, 10000);



/*  ----  SCRIPT FOR TEXT CAROUSEL ON FOOTER PAGE  ----  */
var list_of_starts = ["Made", "Styled", "Effects"];
var list_of_follows = ["with HTML-5", "using CSS-3", "implemented via JavaScript"];
var starter = 1;
function doit_first() {
	document.getElementById("start").innerHTML = list_of_starts[starter];
	document.getElementById("follow_span").innerHTML = list_of_follows[starter];
	starter = starter + 1;
	if (starter == 3) { starter = 0; }
}
setTimeout(function () { var begin_first = setInterval(function () { doit_first(); }, 5000); }, 3000)

/*  ----  SCRIPT FOR my_info DIV VISIBILITY ON CLICKING MY IMAGE AND BEGIN TYPEWRITING EFFECT ----  */
var typewrite;
function my_info_visible() {
	document.getElementById("click_me").style.opacity = "0";
	document.getElementById("click_me").style.visibility = "hidden";
	document.getElementById("my_info").style.opacity = "1";
	document.getElementById("my_img").style.left = "60vw";
	document.getElementById("my_img").style.borderRadius = "0 50% 50% 0";
	typewrite = setTimeout(function () { begin_typing(); }, 1000);
}
var type_flag = 0;
var i = 0;
var txt = ["- Hi I am Nanyam Shukla. ", "- A 20 year old web development enthusiast from Lucknow. ", "- Currently pursuing the degree of Electronics & Communications Engineering.", "- Studying at the L.N.M. Institute of Information Technology,Jaipur Rajasthan.", "- I like to solve real life problems through programming.", "- I am interested in responsive and fluid web designing."];
var speed = 40; /* The speed/duration of the effect in milliseconds */


function begin_typing() {						/*FUNCTION CONTROLLING TYPEWRITING EFFECT  ----  */
	if (i < txt[type_flag].length) {
		document.getElementById("my_info_p").innerHTML += txt[type_flag].charAt(i);
		i++;
		setTimeout(begin_typing, speed);
	}
	if (i == txt[type_flag].length) {
		document.getElementById("my_info_p").innerHTML += '<br>';
		type_flag++;
		i = 0;
		begin_typing();
	}

}

/*  ----  END OF TYPEWRITING EFFECT  ----*/

/*  ----  SCRIPT FOR my_projects_info DIV VISIBILITY ON CLICKING MY IMAGE  ----  */
function my_project_visible() {
	document.getElementById("my_project_img").style.left = "0";
	document.getElementById("my_project_img").style.borderRadius = "50% 0 0 50%";
	document.getElementById("click_me_project").style.opacity = "0";
	document.getElementById("click_me_project").style.visibility = "hidden";
	document.getElementById("my_project_info").style.opacity = "1";
	document.getElementById("my_project_info").style.visibility = "visible";
	var pro_var;
	pro_var = document.getElementsByClassName("pro_head_holder");
	for (let i = 0; i < pro_var.length; i++) {
		pro_var[i].style.display = "block";
	}
}

/*  ----  SCRIPT FOR DISPLAYING PROJECT DETAILS ON CLICKING PROJECT ACCORDION  ----  */

function turn(turning) {
	var turner = document.getElementsByClassName("project_indic");
	if (turner[turning].style.transform == "rotate(225deg)") {
		turner[turning].style.transform = "rotate(45deg)";
	} else {
		turner[turning].style.transform = "rotate(225deg)";
	}

}


var acc = document.getElementsByClassName("pro_head_holder");
var acc_i;

for (acc_i = 0; acc_i < acc.length; acc_i++) {
	acc[acc_i].addEventListener("click", function () {
		this.classList.toggle("switch");
		var project_data = this.nextElementSibling;
		if (project_data.style.display === "block") {
			project_data.style.display = "none";
		} else {
			project_data.style.display = "block";
		}
	});
}



/*  ----  SCRIPT FOR looking_for_info DIV VISIBILITY ON CLICKING MY IMAGE AND BEGIN TYPEWRITING EFFECT  ----  */
var typewrite_2;
function looking_for_visible() {
	document.getElementById("click_me_looking").style.opacity = "0";
	document.getElementById("click_me_looking").style.visibility = "hidden";
	document.getElementById("looking_for_info").style.opacity = "1";
	document.getElementById("looking_for_img").style.left = "60vw";
	document.getElementById("looking_for_img").style.borderRadius = "0 50% 50% 0";
	typewrite_2 = setTimeout(function () { begin_typing_2(); }, 1000);
}
var type_flag_2 = 0;
var i_2 = 0;
var txt_2 = ["I'm Looking for opportunities in which I can : ", "- 	Use my knowledge of tech. towards development of a mass usable product", "- Learn to work with new technologies and techniques", "- Work with skilled and experienced personnel and learn from them", "- Have an overall development in my own skill sets through my work","- Have a healthy working environment with sensible working hours"];
var speed_2 = 35; /* The speed/duration of the effect in milliseconds */

function begin_typing_2() {						/*FUNCTION CONTROLLING TYPEWRITING EFFECT  ----  */
	if (i_2 < txt_2[type_flag_2].length) {
		document.getElementById("looking_for_info_p").innerHTML += txt_2[type_flag_2].charAt(i_2);
		i_2++;
		setTimeout(begin_typing_2, speed_2);
	}
	if (i_2 == txt_2[type_flag_2].length) {
		document.getElementById("looking_for_info_p").innerHTML += '<br>';
		type_flag_2++;
		i_2 = 0;
		begin_typing_2();
	}

}


/*  ----  SCRIPT FOR THANK YOU TEXT DISPLAY TRIGGER AND SCALING  ----  */




/*  ----  SCRIPT FOR SCROLL DOWN BALL ON HEADER  ----  */
window.smoothScroll = function (target) {
	var scrollContainer = target;
	do { //find scroll container
		scrollContainer = scrollContainer.parentNode;
		if (!scrollContainer) return;
		scrollContainer.scrollTop += 1;
	} while (scrollContainer.scrollTop == 0);

	var targetY = 0;
	do { //find the top of target relatively to the container
		if (target == scrollContainer) break;
		targetY += target.offsetTop;
	} while (target = target.offsetParent);

	scroll = function (c, a, b, i) {
		i++; if (i > 15) return;
		c.scrollTop = a + (b - a) / 15 * i;
		setTimeout(function () { scroll(c, a, b, i); }, 15);
	}
	// start scrolling
	scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

