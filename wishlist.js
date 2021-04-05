$(document).ready(function(){
$( function() {
    $( "#sortable" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( "#sortable" ).disableSelection();
  } );

//popup login
  $("#prvi").click(function(){
   PopupLogin();
   });

   function PopupLogin(){
    $("#loginpopup").fadeIn();
    $("#loginpopup").css({"visibility":"visible","display":"block"})
    
    $("nav,footer,div:not(#loginpopup)").css({ //koristia san nav footer div umisto cili body jer inace ne radi
      'filter':'blur(13px)',
   });

   }

   $("#exitbtn").click(function(){
    hidepopuplogin();
   });


   function hidepopuplogin(){
    $("#loginpopup").fadeOut();
    $("loginpopup").css({"visibility":"hidden","display":"none"});
    $("nav,footer,div:not(#loginpopup)").css({ //koristia san nav footer div umisto cili body jer inace ne radi
      'filter':'blur(0px)',
   });


    }

});