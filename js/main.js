/*******************************
jquery-1.11.1.min.js
jquery.mobile-1.4.5.min.js
have both been attached
*******************************/



$(document).on('mobileinit', init); //({
   // console.log('Tutorial Loaded');
    //when jqm has loaded and we can set default settings
//});
               
  function init(){
        $(document).on('pageshow', '#home', dialogHome);
        $(document).on('pageshow', '.dialogSequence', dialogSteps);
    }
    
 function dialogHome(){
        
        if ('localStorage' in window) {
            var storePage = window.localStorage.getItem('#home');
                if (storePage != null)
                {
                    $('a[id="startTutorial"]').attr('href', storePage);
                }
            }
    }
    
    function dialogSteps() {
        
        if ('localStorage' in window) {
                var currentPage = '#' + $(this).attr('id');
                window.localStorage.setItem('#home', currentPage);
        }
      
            $('#home').click(function() { //http://stackoverflow.com/questions/10087370/how-to-close-jquery-dialogue-box-for-mobile-application
            $('.ui-dialog').dialog('close');
      });
        
        
    }
    
 


    