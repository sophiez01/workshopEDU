'use strict';


requirejs.config({
    paths: {
    	'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min'
    }
});


require(['jquery'], function ($) {

    var app = {
        initialize: function () {
            
         $("#flip").click(function(){
            $("#panel").slideToggle("slow");
          });

        }
    };

    app.initialize();

});
