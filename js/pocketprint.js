$(document).ready(function() {
	$('.pocketprint').click( function()	{
		$("html").html();
	});
	
	$('.pocketprintpreview').click( function()	{
		
		var htmlToPrint = $("#searchFormId").clone();
		//alert(htmlToPrint.html());
		htmlToPrint.find('input[type=\'text\']').remove();
		htmlToPrint.find('input[type=\'button\']').remove();
		htmlToPrint.find('input[type=\'radio\']').remove();
		htmlToPrint.find('input[type=\'checkbox\']').remove();
		
		htmlToPrint.find('a[href]').each(function() {
			var text = $(this).text();
			var style= $(this).attr('style');
			var className= $(this).attr('style');
			var divTag = "<div style='"+style+"' class='"+className+"'>" + text +"</div>";
			$(this).replaceWith(divTag);
			
		});
		
		
		var printPreview = window.open('about:blank', 'print_preview', "resizable=yes,scrollbars=yes,status=yes");
		var printDocument = printPreview.document;
		printDocument.open();
		printDocument.write(htmlToPrint.html());
		printDocument.close();
	})
});


(function ( $ ) {
	 
    $.fn.pocketprint = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            print: true,
            backgroundColor: "white"
        }, options );
 
        // Greenify the collection based on the settings variable.
        if(settings.print){
        	alert(this.html());
        }else{
        	alert(false);
        }
 
    };
 
}( jQuery ));