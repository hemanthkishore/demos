!function(){function e(){if(window.ekomiWidgetJquery=window.jQuery.noConflict(!0),t()&&t()<=9){var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","https://s3.eu-central-1.amazonaws.com/smart-widget/static_resources/jquery.xdomainrequest.min.js"),e.readyState?e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||i()}:i(),(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(e)}else i()}function t(){var e=navigator.userAgent.toLowerCase();return-1!=e.indexOf("msie")&&parseInt(e.split("msie")[1])}function i(){window.ekomiWidgetJquery(document).ready(function(e){function t(t){var i="";if(void 0!=window._customerId&&(i="customerId="+window._customerId),void 0!=window._language&&(0==i.length||""==i?i="language="+window._language:i+="&language="+window._language),i.length>0&&""!=i&&(i="?"+i),e("<link>",{rel:"stylesheet",type:"text/css",href:window._ekomiServerUrl+"/get-css/"+t+i}).appendTo("head"),e(".ekomi-widget-"+t).length)a=e(".ekomi-widget-"+t);else var a=e("#widget-container");var d=window._ekomiServerUrl+"/get-widget/"+t,o=e("#ekomi-product-widget-identifier").text();o.trim()||(o=""),e.get({url:d,cache:!1,data:{customerId:void 0!=window._customerId?window._customerId:"",productId:o,html:void 0!=window._ekomiUpdatedHtml?window._ekomiUpdatedHtml:"",language:void 0!=window._language?window._language:""}},function(i){var d="",o=i.indexOf("*|date_format_"),n=i.indexOf("|*");if(o>0){for(z=o+14;z<n;z++)d+=i[z];i=i.replace("*|date_format_"+d+"|*",""),"xxxxx"==d&&(d="d.M.yyyy")}else d="d.M.yyyy";var r=e.format.date(new Date,d);if((i=i.replace("*|today_date|*",r)).indexOf("SimpleScrollbar.initEl")>0){var s=document.createElement("script");s.src="https://s3.eu-central-1.amazonaws.com/smart-widget/static_resources/simple-scrollbar.min.js",s.type="text/javascript",s.onload=function(){a.html(i)},document.getElementsByTagName("head")[0].appendChild(s)}else a.html(i);if(a.find(".ekomi-slick-slider").length&&(window.jq=e,e.getScript("https://s3.eu-central-1.amazonaws.com/smart-widget/static_resources/slick.js",function(){e(".ekomi-slick-slider").each(function(){e(this).not(".slick-initialized").slick()})})),a.find(".show-form-modal").on("click",function(){a.find(".widget-form-modal").show()}),a.find("#last_review_date").length){var m=e.format.date(a.find("#last_review_date").html(),d);a.find("#last_review_date").html(m)}if(a.find("#last_positive_review_date").length){var c=e.format.date(a.find("#last_positive_review_date").html(),d);a.find("#last_positive_review_date").html(c)}a.find(".review_date").length&&e(".review_date").each(function(){var t=e.format.date(e(this).html(),d);e(this).html(t)}),a.find(".show-form-modal").on("click",function(){a.find(".widget-form-modal").show()}),a.find(".hide-form-modal").on("click",function(){e(".success-msg").hide(),e(".error-msg").hide(),a.find(".widget-form-modal").hide()}),a.find(".widget-form-modal .submit-form-data").on("click",function(){var i=e(this).parents(".widget-form-modal:first"),d=e(this).parents(".widget-form-modal:first").find("form.widget-form"),o=window._ekomiServerUrl+"/save-widget-form/"+t;i.find(".success-msg").hide(),i.find(".error-msg").hide(),a.find(".modal-ajaxloader").show(),a.find(".modal-backdrop").show(),e.post(o,d.serialize(),function(e){a.find(".modal-ajaxloader").hide(),a.find(".modal-backdrop").hide(),"success"==e.status?i.find(".success-msg").show():i.find(".error-msg").show()},"json")})})}e("<link>",{rel:"stylesheet",type:"text/css",href:"https://s3.eu-central-1.amazonaws.com/smart-widget/static_resources/widget.css"}).appendTo("head"),void 0!==window._ekomiToken&&t(window._ekomiToken),e.each(window._ekomiWidgetTokens,function(e,i){t(i)})})}window.ekomiWidgetJquery;if(void 0===window.jQuery||"3.1.0"!==window.jQuery.fn.jquery){var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("src","https://s3.eu-central-1.amazonaws.com/smart-widget/static_resources/jquery.min.js"),a.readyState?a.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||e()}:a.onload=e,(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(a)}else{window.ekomiWidgetJquery=window.jQuery;var d=document.createElement("script");d.src="https://s3.eu-central-1.amazonaws.com/smart-widget/static_resources/jquery-dateFormat.min.js",d.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(d),i()}window.ekomiWidgetMain=i}();