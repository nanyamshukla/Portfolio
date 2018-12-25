/* ----  SCRIPT FOR LOADER PAGE  ----  */

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body_wrapper').style.display = "none";
    } else if (state == 'complete') {
        setTimeout(function () {
            /* document.getElementById('interactive'); */
            document.getElementById('load').style.display = "none";
            document.getElementById('body_wrapper').style.display = "block";
            smoothScroll(document.getElementById('header'));
        }, 3000);
    }
}

var flag = 0;
var convertn;
var myfunc
function myFunction() {
    document.getElementById("menu_icon").classList.toggle("change");
    convertn = setTimeout(function () { convert(); }, 670);
}

function convert() {
    document.getElementById("menu_icon").classList.toggle("change_n");
    //convertn = setTimeout(function(){ convert(); } ,700);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "17vw";
    document.getElementById("menu_closer").style.width = "100vw";
    document.getElementById("menu_closer").style.opacity = "1";
    document.getElementById("menu_icon").style.marginLeft = "18.5vw";
    document.getElementById("b1").style.boxShadow = "0 0 1.5vw rgb(190, 190, 190)";
    document.getElementById("b2").style.boxShadow = "0 0 1.5vw rgb(190, 190, 190)";
    document.getElementById("b3").style.boxShadow = "0 0 1.5vw rgb(190, 190, 190)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu_closer").style.opacity = "0";
    document.getElementById("menu_closer").style.width = "0";
    document.getElementById("menu_icon").style.marginLeft = "6vw";
    document.getElementById("b1").style.boxShadow = "0 0 0 rgb(190, 190, 190)";
    document.getElementById("b2").style.boxShadow = "0 0 0 rgb(190, 190, 190)";
    document.getElementById("b3").style.boxShadow = "0 0 0 rgb(190, 190, 190)";
    //clearTimeout(convertn,1000);
}
function toggleFunc() {
    myFunction();
    if (flag == 0) {
        openNav();
        flag = 1;
    }
    else {
        //clearTimeout(convertn);
        //setTimeout(function() { closeNav(); }, 1000);     
        //document.getElementById("menu_icon").classList.toggle("change_n"); 
        closeNav();
        flag = 0;
    }
}


var scrollTo;
// When the user scrolls the page, execute myFunction 
window.onscroll = function () { scroll_Indic() };

function scroll_Indic() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if (scrolled < 33) {
        document.getElementById("myBar").style.background = "rgb(81, 85, 163)";
    }
    if (scrolled >= 33 && scrolled < 66) {
        document.getElementById("myBar").style.background = "rgb(239, 244, 137)";
    }
    if (scrolled >= 66) {
        document.getElementById("myBar").style.background = "rgb(121, 204, 110)";
    }
    document.getElementById("myBar").style.width = scrolled + "%";

    /*  ----  For Head Navbar  ----  */
    if (scrolled >= 20 && scrolled <= 95) {
        document.getElementById("head_icons").style.height = "7.875vh";
        /* document.getElementById("menu_icon").style.marginTop = "0.5vh"; */
        document.getElementById("b1").style.marginTop = "-0.75vh";
        document.getElementById("menu_icon").style.transform = "scale(0.75,0.75)";
        document.getElementById("ns_logo").style.top = "1.5vh";
        document.getElementById("logo_image").style.width = "5vh";
        document.getElementById("head_icons").style.background = "rgba(0, 0, 0, 0.4)";
        document.getElementById("head_icons").style.borderBottom = "solid thin rgb(0,0,0,0.2)";

    } else {
        document.getElementById("head_icons").style.height = "10.5vh";
        /* document.getElementById("menu_icon").style.marginTop = "2.5vh"; */
        document.getElementById("b1").style.marginTop = "0.75vh";
        document.getElementById("menu_icon").style.transform = "scale(1,1)";
        document.getElementById("ns_logo").style.top = "1.85vh";
        document.getElementById("logo_image").style.width = "7.5vh";
        document.getElementById("head_icons").style.background = "rgba(17, 17, 17)";
        document.getElementById("head_icons").style.borderBottom = "solid thin rgb(255,255,255,0)";
        document.getElementById("b1").style.backgroundColor = "rgb(187, 187, 187)";
        document.getElementById("b2").style.backgroundColor = "rgb(187, 187, 187)";
        document.getElementById("b3").style.backgroundColor = "rgb(187, 187, 187)";
    }

    /*  ----  For Side Navbar Opening on Clicking Menu Icon  ----  */
    if (scrolled <= 16) {
        document.getElementById("link_1").setAttribute("style", "background-color:rgba(17,17,17); box-shadow:0vw -0.1vw  rgb(157, 155, 155) inset; border-top:solid 0.005vh rgb(73, 73, 73);");
        document.getElementById("link_2").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_3").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_4").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_5").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        scrollTo = 'footer';
    }
    if (scrolled >= 17 && scrolled <= 41) {
        document.getElementById("link_2").setAttribute("style", "background-color:rgba(17,17,17); box-shadow:0vw -0.1vw  rgb(157, 155, 155) inset; border-top:solid 0.005vh rgb(73, 73, 73);");
        document.getElementById("link_1").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_3").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_4").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_5").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
    }
    if (scrolled >= 42 && scrolled <= 70) {
        document.getElementById("link_3").setAttribute("style", "background-color:rgba(17,17,17); box-shadow:0vw -0.1vw  rgb(157, 155, 155) inset; border-top:solid 0.005vh rgb(73, 73, 73);");
        document.getElementById("link_1").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_2").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_4").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_5").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
    }
    if (scrolled >= 71 && scrolled <= 98) {
        document.getElementById("link_4").setAttribute("style", "background-color:rgba(17,17,17); box-shadow:0vw -0.1vw  rgb(157, 155, 155) inset; border-top:solid 0.005vh rgb(73, 73, 73);");
        document.getElementById("link_1").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_2").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_3").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_5").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
    }
    if (scrolled >= 96 && scrolled <= 100) {
        document.getElementById("link_5").setAttribute("style", "background-color:rgba(17,17,17); box-shadow:0vw -0.1vw  rgb(157, 155, 155) inset; border-top:solid 0.005vh rgb(73, 73, 73);");
        document.getElementById("link_1").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_2").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_3").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
        document.getElementById("link_4").setAttribute("style", "background-color:rgba(17, 17, 17,0.6); box-shadow:0 -0.01vh white; border-top:none;");
    }


    /*  ---- For Who is Nanyam heading Section activation ----*/
    if (scrolled >= 14) {
        setTimeout(function () { document.getElementById("who").style.opacity = "1"; }, 300);
        setTimeout(function () { document.getElementById("my_img").style.opacity = "1"; }, 800);
        setTimeout(function () { document.getElementById("click_me").style.opacity = "1"; }, 800);
        setTimeout(function () { document.getElementById("scroll_btn").style.transform = "scale(1,1)"; }, 300);
        scrollTo = 'scroll_coding_skill';
    } else {
        setTimeout(function () { document.getElementById("scroll_btn").style.transform = "scale(0,0)"; }, 300);
    }

    /*  ---- For My Skill Set Div Display  ----*/
    var skill_show;
    var skill_pos;
    if (scrolled >= 36) {
        document.getElementById("skill_head").style.opacity = "1";
        setTimeout(function () { document.getElementById("skill_sub_head_1").style.opacity = "1"; }, 500);
        setTimeout(function () {
            skill_show = document.getElementsByClassName("web_d");
            for (skill_pos = 0; skill_pos < skill_show.length; skill_pos++) {
                skill_show[skill_pos].style.opacity = "1";
            }
        }, 1000);
        setTimeout(function () { document.getElementById("skill_sub_head_2").style.opacity = "1"; }, 1500);
        setTimeout(function () {
            skill_show = document.getElementsByClassName("prog");
            for (skill_pos = 0; skill_pos < skill_show.length; skill_pos++) {
                skill_show[skill_pos].style.opacity = "1";
            }
        }, 2000);
        setTimeout(function () { document.getElementById("skill_sub_head_3").style.opacity = "1"; }, 2500);
        setTimeout(function () {
            skill_show = document.getElementsByClassName("other");
            for (skill_pos = 0; skill_pos < skill_show.length; skill_pos++) {
                skill_show[skill_pos].style.opacity = "1";
            }
        }, 3000);
        scrollTo = 'info_7';
    }

    /*  ----  For My Projects Section Activation  ----  */
    if (scrolled >= 39) {
        setTimeout(function () { document.getElementById("my_project_head").style.opacity = "1"; }, 100);
        setTimeout(function () { document.getElementById("my_project_img").style.opacity = "1"; }, 500);
        setTimeout(function () { document.getElementById("click_me_project").style.opacity = "1"; }, 500);
        scrollTo = 'scroll_personal_skill';
    }

    /*  ----  For Interpersonal Skill Set Div Activation  ----  */
    if (scrolled >= 63) {
        document.getElementById("personal_skill_head").style.opacity = "1";
        setTimeout(function () {
            var p_skill_show = document.getElementsByClassName("p_skill_info");
            var p_skill_pos;
            for (p_skill_pos = 0; p_skill_pos < p_skill_show.length; p_skill_pos++) {
                p_skill_show[p_skill_pos].style.opacity = "1";
            }
        }, 500);
        scrollTo = 'p_info_3';
    }




    /*  ----  For Looking For Section Activation  ----  */
    if (scrolled >= 68) {
        setTimeout(function () { document.getElementById("looking_for_head").style.opacity = "1"; }, 100);
        setTimeout(function () { document.getElementById("looking_for_img").style.opacity = "1"; }, 500);
        setTimeout(function () { document.getElementById("click_me_looking").style.opacity = "1"; }, 500);
    }

    if (scrolled >= 70) {
        scrollTo = 'footer';
    }


    /*  ----  For Thank You Section Activation  ----  */
    if (scrolled >= 90) {
        document.getElementById("thanks_txt").style.transform = "scale(1,1)";
        document.getElementById("scroll_icon").style.transform = "rotate(180deg)";
        document.getElementById("scroll_icon").style.marginTop = "1vw";
        setTimeout(function() { document.getElementById("quote_carousel").style.opacity = "1"; }, 500);
        document.getElementById("social_media").style.transform = "scale(0,0)";
        document.getElementById("social_media_2").style.transform = "scale(1,1)";
        scrollTo = 'header'
    }
    else {
        document.getElementById("scroll_icon").style.transform = "rotate(0deg)";
        document.getElementById("scroll_icon").style.marginTop = "2vh";
        document.getElementById("social_media").style.transform = "scale(1,1)";
        document.getElementById("social_media_2").style.transform = "scale(0,0)";
    }
}

/*  ----  For Scrolling Through Sections  ----  */
function letscroll() {
    smoothScroll(document.getElementById(scrollTo));
}