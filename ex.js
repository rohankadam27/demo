console.log($);
$(document).ready(function () {
$("#checkuser_id").hide();

$("#p1").click(function () {
 //console.log("para1 clicked....");
 //alert("this is para1");
 $("#info").hide();
});
$("#t1").keyup(function () {
 validate();
});
function validate() {
 let uname = $("#t1").val();
 if (uname.length < 3 || uname.length > 10) {
     $("#checkuser_id").show();
     return false;
 }
 else {
     $("#checkuser_id").hide();
 }
}
$("#p2").click(function () {
 //document.write("para1 clicked....");
 $("#p2").text("this is called para2")
});
$("#course").fadeToggle(3000);

$("#but").click(function(){
 $("#car1").animate({left: '+=800px'},1000);
});
});
