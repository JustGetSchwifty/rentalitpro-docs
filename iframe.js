document.addEventListener("DOMContentLoaded", function() {
  window.gcinterval = setInterval( function() {
    if (document.querySelectorAll('#frame').length == 1) {
          clearInterval( window.gcinterval );
          window.gcinterval = null;
        document.querySelector('#frame').addEventListener('load', function () {
        
            if (document.querySelectorAll('#iframe-magic').length == 1) {
                document.querySelector('#iframe-magic').classList.add( 'hideInside' );                        
            }
      });
    }
  }, 500 );
});