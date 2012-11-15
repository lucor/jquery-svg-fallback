/*
 Author: Luca Corbo (http://lucor.github.com)
 Twitter: @lucacorbo
 Version: 1.0
 License: MIT
 */

(function ($) {
  $.extend($.fn, {
    svg_fallback:function () {
      /*
       * SVG test from Modernizr
       * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/svg-svg.js
       */
      if (!!document.createElementNS &&
          !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect)
      return

      var check_svg = new RegExp("(.+)(\\.svg)");
      this.each(function (index, element) {
        if (!$(element).attr('src') || !check_svg.test($(element).attr('src'))) return;
        var png_src = $(element).attr('src').replace(/(\.svg)$/, ".png");
        $.ajax({url:png_src, type:"HEAD", success:function () {
          $(element).attr('src', png_src);
        }});
      });
      return this;
    }
  })
})(jQuery)
