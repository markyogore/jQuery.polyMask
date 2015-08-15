/*  PolyMask.js - Cross Browser Responsive HTML Element Masking
* Author: Mark Yogore
* Version: 1.0
*/
;(function ( $ ) {
	$.fn.polyMask = function( options ) {
		var settings = $.extend({
			responsive: true,
		}, options );
		this.hide();
		var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
		var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
		var _svgNS = 'http://www.w3.org/2000/svg';
		var maskCounter = 1;
		var wrapperDiv = document.createElement('div');
		wrapperDiv.setAttribute('style','width:1px;height:1px;overflow:hidden;position:relative;margin-left:-9999px;margin-top:-9999px;')
		this.each(function(){
			var pathVal = $(this).data('mask-path');
			var svg = document.createElementNS(_svgNS, 'svg');
			//svg.setAttribute('class','clip-svg');
			var defs = document.createElementNS(_svgNS, 'defs');
			var clippath = document.createElementNS(_svgNS, 'clipPath');
			var polygon = document.createElementNS(_svgNS, 'polygon');
			if(settings.responsive == false){
				var elementHeight = $(this).height();
				var elementWidth = $(this).width();
				svg.setAttribute('width',elementWidth);
				svg.setAttribute('height',elementHeight);
				var clipPathIdName = 'polymaskPathId-'+maskCounter;
			}else{
				var clipPathIdName = 'ResponsivePolymaskPathId-'+maskCounter;
				clippath.setAttribute("clipPathUnits",'objectBoundingBox');
			}
			clippath.setAttribute('id',clipPathIdName);
			if((isChrome || isSafari) && settings.responsive == false){
				$(this).css('-webkit-clip-path','polygon('+pathVal+')')
					.css('-moz-clip-path','polygon('+pathVal+')')
					.css('-ms-clip-path','polygon('+pathVal+')')
					.css('clip-path','polygon('+pathVal+')');
			}else{
				if(pathVal.indexOf("%") > -1 ){
					var pointPairs = pathVal.split(',');
					for (var i = 0; i < pointPairs.length; i++) {
					    var pointCoords = pointPairs[i];
						pointCoords = pointCoords.trim();
						pointCoords = pointCoords.split(' ');
						var pointCoordX = pointCoords[0];
						var pointCoordY = pointCoords[1];
						pointCoordX = pointCoordX.split('%').join('');
						pointCoordY = pointCoordY.split('%').join('');
						pointCoordX = parseInt(pointCoordX) / 100;
						pointCoordY = parseInt(pointCoordY) / 100;
						pointCoords[0] = pointCoordY;
						pointCoords[1] = pointCoordX;
						pointCoords = pointCoords.join(' ');
						pointPairs[i] = pointCoords;
					}
					pathVal = pointPairs.join(',');
				}else{
					pathVal = pathVal.split('px').join('');
				}
				polygon.setAttribute('points',pathVal);
				$(clippath).append(polygon);
				$(defs).append(clippath);
				$(svg).append(defs);
				$(wrapperDiv).append(svg);
				$('body').append(wrapperDiv);
				$(this).css('-webkit-clip-path','url("#'+clipPathIdName+'")')
					.css('-moz-clip-path','url("#'+clipPathIdName+'")')
					.css('-ms-clip-path','url("#'+clipPathIdName+'")')
					.css('clip-path','url("#'+clipPathIdName+'")');
			}
			$(this).show();
			maskCounter++;
		});
	};
}( jQuery));
