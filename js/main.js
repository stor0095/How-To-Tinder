/*******************************
jquery-1.11.1.min.js
jquery.mobile-1.4.5.min.js
have both been attached
*******************************/



$(document).bind("mobileinit", function(ev){
  //alert("mobileinit event");
  //when jqm has loaded and we can set default settings
});



$(document).bind("ready", function(ev){
  //jquery, jqm, and the DOM are ready
  //we can now attach listeners to page elements
  //alert("ready event ");
  
  $("#partone").bind("pageinit", function(ev){
    
    //when each page loads for the first time.
  });
  
  $(".dlg").on("click", function(ev){
    ev.preventDefault();
    //$.mobile.changePage( "#bob", { role: "dialog" } );
    //the above line is the old jQM version of opening a dialog
    //below is the new recommended method    
    $.mobile.pageContainer.pagecontainer("change", "#partwo", {role: "dialog"});
  });
  
  $(".test").on("click", function(ev){
    //add listeners to the objects with class="test"
    ev.preventDefault();
    //stop normal navigation
    
    //send the user to the page fred.
    $.mobile.pageContainer.pagecontainer("change", "#partwo");
    /*************************
    Inside $ / jQuery there is an object called mobile.
    Inside mobile there is an object called pageContainer which
    is wrapped around all the data-role="page" elements.
    pageContainer has a method called pagecontainer which will,
    amoung other things, allow us to load a page.
    **************************/
  });
  
  
});