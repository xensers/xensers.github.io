"use strict";function blurBox(){respondFrom(breakpoint.small,function(){return document.querySelectorAll(".blur-box__outer").forEach(function(i){var e;function o(e){var o,t,n=e.clientX/window.outerWidth,u=e.clientY/window.outerHeight;o=10*u-5,t=10*n-5,requestAnimationFrame(function(){i.style.top=o+"%",i.style.left=t+"%"})}i.onmouseout=function(){clearTimeout(e),e=setTimeout(function(){window.addEventListener("mousemove",o)},300)},i.onmouseover=function(){clearTimeout(e),window.removeEventListener("mousemove",o),i.style.top="0%",i.style.left="0%"}})},!0)}
"use strict";!function(e,n,t){t=t||window;var i=!1;t.addEventListener(e,function(){i||(i=!0,requestAnimationFrame(function(){t.dispatchEvent(new CustomEvent(n)),i=!1}))})}("resize","optimizedResize");
"use strict";var breakpoint={small:767,medium:992,large:1200};function respondTo(i,e,n,t){if(i>=window.innerWidth){n&&requestAnimationFrame(e)}else;t&&window.addEventListener("optimizedResize",function(){if(!active&&(active=!0,i>=window.innerWidth))return setTimeout(function(){requestAnimationFrame(e)},100),!0;i<=window.innerWidth&&(active=!1)})}function respondFrom(i,e,n,t){if(i<=window.innerWidth){n&&requestAnimationFrame(e)}else;t&&window.addEventListener("optimizedResize",function(){if(!active&&(active=!0,i<=window.innerWidth))return setTimeout(function(){requestAnimationFrame(e)},100),!0;i>=window.innerWidth&&(active=!1)})}
"use strict";function initForm(e){var t=e.querySelector('button[type="submit"]');validateForm(e),t&&(t.onclick=function(){var t=validateForm(e);return console.log(t),t||(document.documentElement.classList.add("form_submit"),setTimeout(function(){e.submit()},5e3)),!1}),e.querySelectorAll("input").forEach(function(t){inputMask(t),t.addEventListener("blur",function(t){var s;this.parentNode.classList.contains("form__input")&&(s=this.parentNode.querySelector(".icon"),validateInput(this)?(s.classList.remove("icon_success"),s.classList.add("icon_error")):(s.classList.remove("icon_error"),s.classList.add("icon_success"))),validateForm(e)}),t.addEventListener("input",function(t){var s;this.parentNode.classList.contains("form__input")&&((s=this.parentNode.querySelector(".icon")).classList.remove("icon_error"),validateInput(this)?s.classList.remove("icon_success"):(s.classList.add("icon_success"),validateForm(e)))})})}
"use strict";function inputMask(e){e.dataset.mask&&(e.addEventListener("input",function(e){var t=this.dataset.mask,a=0,s=t.replace(/\D/g,""),n=this.value.replace(/\D/g,"");s.length>=n.length&&(n=s),t=t.replace(/[_\d]/g,function(e){return n.charAt(a++)||"_"}),this.value=t,(a=t.lastIndexOf(n.substr(-1)))<t.length&&t!==this.dataset.mask?a++:a=t.indexOf("_"),function(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var a=t.createTextRange();a.collapse(!0),a.moveEnd("character",e),a.moveStart("character",e),a.select()}}(a,this)},!1),e.addEventListener("focus",function(e){0===this.value.length&&(this.value=this.dataset.mask)},!0),e.addEventListener("blur",function(e){this.dataset.mask===this.value&&(this.value="")},!0))}
"use strict";function validateForm(t){for(var a,e=!1,i=0;i<=t.length-1;i++){var r=t[i];e=e||validateInput(r),"submit"===r.type&&((a=r).disabled=!0)}return e||(a.disabled=!1),e}
"use strict";function validateInput(e){var t=!1;return e.value.match(e.pattern)||(t="pattern"),0<e.maxLength&&e.maxLength<e.value.length&&(t="maxLength"),0<e.minLength&&e.minLength>e.value.length&&(t="minLength"),e.required&&e.value.length<=0&&(t="required"),t}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmx1ckJveC5qcyIsImhlbHBlcnMvY3VzdG9tRXZlbnRSZXNpemUuanMiLCJoZWxwZXJzL3Jlc3BvbmQuanMiLCJjb21wb25lbnRzL2Zvcm1zL2luaXRGb3JtLmpzIiwiY29tcG9uZW50cy9mb3Jtcy9pbnB1dE1hc2suanMiLCJjb21wb25lbnRzL2Zvcm1zL3ZhbGlkYXRlRm9ybS5qcyIsImNvbXBvbmVudHMvZm9ybXMvdmFsaWRhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJibHVyQm94IiwicmVzcG9uZEZyb20iLCJicmVha3BvaW50Iiwic21hbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbSIsInN0eWxlIiwiZXZlbnQiLCJ0b3AiLCJ3YXRjaGluZyIsImNsaWVudFgiLCJ3aW5kb3ciLCJvdXRlcldpZHRoIiwicGVyY2VudFkiLCJjbGllbnRZIiwib3V0ZXJIZWlnaHQiLCJwZXJjZW50WCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxlZnQiLCJvbm1vdXNlb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbm1vdXNlb3ZlciIsInR5cGUiLCJuYW1lIiwib2JqIiwicnVubmluZyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsInRocm90dGxlIiwibGFyZ2UiLCJyZXNwb25kVG8iLCJjYWxsYmFjayIsInJ1bldoZW5DYWxsZWQiLCJhZGRFdmVudCIsImlubmVyV2lkdGgiLCJhY3RpdmUiLCJpbml0Rm9ybSIsImZvcm0iLCJzdWJtaXQiLCJxdWVyeVNlbGVjdG9yIiwidmFsaWRhdGVGb3JtIiwib25jbGljayIsImVycm9yIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5wdXQiLCJpbnB1dE1hc2siLCJlIiwiY29udGFpbnMiLCJpY29uIiwidGhpcyIsInBhcmVudE5vZGUiLCJ2YWxpZGF0ZUlucHV0IiwicmVtb3ZlIiwiZGF0YXNldCIsIm1hc2siLCJtYXRyaXgiLCJpIiwiZGVmIiwicmVwbGFjZSIsInZhbCIsInZhbHVlIiwibGVuZ3RoIiwiYSIsImNoYXJBdCIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwiaW5kZXhPZiIsInBvcyIsInNldEN1cnNvclBvc2l0aW9uIiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJhbmdlIiwiY3JlYXRlVGV4dFJhbmdlIiwiY29sbGFwc2UiLCJtb3ZlRW5kIiwibW92ZVN0YXJ0Iiwic2VsZWN0IiwiZGlzYWJsZWQiLCJwYXR0ZXJuIiwibWF4TGVuZ3RoIiwibWluTGVuZ3RoIiwicmVxdWlyZWQiXSwibWFwcGluZ3MiOiJhQUFBLFNBQVNBLFVBOEJBQyxZQUFBQyxXQUFBQyxNQTdCSSxXQUFBLE9BQU1DLFNBQVNDLGlCQUFpQixvQkFBb0JDLFFBQVEsU0FBQ0MsR0FEMUUsSUFBU1AsRUFhR08sU0FBS0MsRUFBYUMsR0FDZCxJQU1BQyxFQUhDQyxFQUhBSCxFQUFhQyxFQUFsQkcsUUFBQUMsT0FBQUMsV0FKSkMsRUFBQU4sRUFBQU8sUUFBQUgsT0FBQUksWUFTUUYsRUFBaUJDLEdBQWpCRCxFQUFpQkMsRUFDakJOLEVBQUosR0FBQVEsRUFBQSxFQUdHQyxzQkFBSCxXQUNPRCxFQUFBQSxNQUFXUixJQUFsQkEsRUFBQSxJQUVBUyxFQUFBQSxNQUFBQSxLQUFzQkMsRUFBQSxNQXpCeEJiLEVBQUdjLFdBQUEsV0FBTWpCLGFBQVNDLEdBQ2hCaUIsRUFBSkMsV0FBQSxXQUlRVixPQUFPVyxpQkFBaUIsWUFBYWIsSUFIeENVLE1BR0dSLEVBQUFBLFlBQU9XLFdBQ1JDLGFBRkhILEdBRkpULE9BQUFhLG9CQUFBLFlBQUFmLEdBVUlKLEVBQUtDLE1BQU1FLElBQU8sS0FIakJpQixFQUFBQSxNQUFMUCxLQUFtQixVQW9CbEI7Y0M3QlQsU0FBQVEsRUFBQUMsRUFBQUMsR0FHV0EsRUFBTUEsR0FBSWpCLE9BQ1RrQixJQUFBQSxHQUFV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XG4gICAgbGV0IGNiID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsdXItYm94X19vdXRlcicpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgbGV0IHRpbWVyO1xuICAgICAgICBlbGVtLm9ubW91c2VvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgd2F0Y2hpbmcpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlbGVtLm9ubW91c2VvdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB3YXRjaGluZyk7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLnRvcCAgPSAnMCUnO1xuICAgICAgICAgICAgZWxlbS5zdHlsZS5sZWZ0ID0gJzAlJztcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiB3YXRjaGluZyhldmVudCkge1xuICAgICAgICAgICAgbGV0IHBlcmNlbnRYID0gZXZlbnQuY2xpZW50WCAvIHdpbmRvdy5vdXRlcldpZHRoO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnRZID0gZXZlbnQuY2xpZW50WSAvIHdpbmRvdy5vdXRlckhlaWdodDtcbiAgICAgICAgICAgIGxldCB0b3A7XG4gICAgICAgICAgICBsZXQgbGVmdDtcblxuICAgICAgICAgICAgdG9wICA9IHBlcmNlbnRZICogMTAgLSA1O1xuICAgICAgICAgICAgbGVmdCA9IHBlcmNlbnRYICogMTAgLSA1O1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUudG9wID0gdG9wICsgJyUnO1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUubGVmdCA9IGxlZnQgKyAnJSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3BvbmRGcm9tKGJyZWFrcG9pbnQuc21hbGwsIGNiLCB0cnVlKTtcbn0iLCIoZnVuY3Rpb24oKVxue1xuICAgIGxldCB0aHJvdHRsZSA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIG9iailcbiAgICB7XG4gICAgICAgIG9iaiA9IG9iaiB8fCB3aW5kb3c7XG4gICAgICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgcnVubmluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBvYmouZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSkpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMpO1xuICAgIH07XG5cbiAgICAvKiBpbml0IC0geW91IGNhbiBpbml0IGFueSBldmVudCAqL1xuICAgIHRocm90dGxlKFwicmVzaXplXCIsIFwib3B0aW1pemVkUmVzaXplXCIpO1xufSkoKTtcbiIsImxldCBicmVha3BvaW50ID0ge1xuICAgICdzbWFsbCc6IDc2NyxcbiAgICAnbWVkaXVtJzogOTkyLFxuICAgICdsYXJnZSc6IDEyMDBcbn07XG5cbmZ1bmN0aW9uIHJlc3BvbmRUbyhicmVha3BvaW50LCBjYWxsYmFjaywgcnVuV2hlbkNhbGxlZCwgYWRkRXZlbnQpIHtcbiAgICBpZiAoYnJlYWtwb2ludCA+PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICBsZXQgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHJ1bldoZW5DYWxsZWQpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGFkZEV2ZW50KSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3B0aW1pemVkUmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChicmVha3BvaW50ID49IHdpbmRvdy5pbm5lcldpZHRoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJyZWFrcG9pbnQgPD0gd2luZG93LmlubmVyV2lkdGgpIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc3BvbmRGcm9tKGJyZWFrcG9pbnQsIGNhbGxiYWNrLCBydW5XaGVuQ2FsbGVkLCBhZGRFdmVudCkge1xuICAgIGlmIChicmVha3BvaW50IDw9IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgIGxldCBhY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAocnVuV2hlbkNhbGxlZCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBhY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYWRkRXZlbnQpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcHRpbWl6ZWRSZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGJyZWFrcG9pbnQgPD0gd2luZG93LmlubmVyV2lkdGgpIHtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnJlYWtwb2ludCA+PSB3aW5kb3cuaW5uZXJXaWR0aCkgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImZ1bmN0aW9uIGluaXRGb3JtKGZvcm0pIHtcbiAgICBsZXQgc3VibWl0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgIHZhbGlkYXRlRm9ybShmb3JtKTtcblxuICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgc3VibWl0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSB2YWxpZGF0ZUZvcm0oZm9ybSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9ybV9zdWJtaXQnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0TWFzayhpbnB1dCk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBsZXQgaWNvbjtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtX19pbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaWNvbiA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xuICAgICAgICAgICAgICAgIGlmKHZhbGlkYXRlSW5wdXQodGhpcykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdpY29uX3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uX2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdpY29uX2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbl9zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsaWRhdGVGb3JtKGZvcm0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGxldCBpY29uO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm1fX2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICBpY29uID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5pY29uJyk7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdpY29uX2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgaWYodmFsaWRhdGVJbnB1dCh0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ljb25fc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbl9zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybShmb3JtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG59IiwiZnVuY3Rpb24gaW5wdXRNYXNrKGlucHV0KSB7XG4gICAgaWYgKGlucHV0LmRhdGFzZXQubWFzaykge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgbWFzaywgZmFsc2UpO1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmRhdGFzZXQubWFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFzZXQubWFzayA9PT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q3Vyc29yUG9zaXRpb24ocG9zLCBlbGVtKSB7XG4gICAgICAgIGVsZW0uZm9jdXMoKTtcbiAgICAgICAgaWYgKGVsZW0uc2V0U2VsZWN0aW9uUmFuZ2UpIGVsZW0uc2V0U2VsZWN0aW9uUmFuZ2UocG9zLCBwb3MpO1xuICAgICAgICBlbHNlIGlmIChlbGVtLmNyZWF0ZVRleHRSYW5nZSkge1xuICAgICAgICAgICAgbGV0IHJhbmdlID0gZWxlbS5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgICAgICAgICAgcmFuZ2UubW92ZUVuZChcImNoYXJhY3RlclwiLCBwb3MpO1xuICAgICAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIHBvcyk7XG4gICAgICAgICAgICByYW5nZS5zZWxlY3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFzayhldmVudCkge1xuICAgICAgICBsZXQgbWF0cml4ID0gdGhpcy5kYXRhc2V0Lm1hc2ssXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGRlZiA9IG1hdHJpeC5yZXBsYWNlKC9cXEQvZywgXCJcIiksXG4gICAgICAgICAgICB2YWwgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgICAgZGVmLmxlbmd0aCA+PSB2YWwubGVuZ3RoICYmICh2YWwgPSBkZWYpO1xuICAgICAgICBtYXRyaXggPSBtYXRyaXgucmVwbGFjZSgvW19cXGRdL2csIGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwuY2hhckF0KGkrKykgfHwgXCJfXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBtYXRyaXg7XG4gICAgICAgIGkgPSBtYXRyaXgubGFzdEluZGV4T2YodmFsLnN1YnN0cigtMSkpO1xuICAgICAgICBpIDwgbWF0cml4Lmxlbmd0aCAmJiBtYXRyaXggIT09IHRoaXMuZGF0YXNldC5tYXNrID8gaSsrIDogaSA9IG1hdHJpeC5pbmRleE9mKFwiX1wiKTtcbiAgICAgICAgc2V0Q3Vyc29yUG9zaXRpb24oaSwgdGhpcylcbiAgICB9XG59IiwiZnVuY3Rpb24gdmFsaWRhdGVGb3JtIChmb3JtKSB7XG4gICAgbGV0IHN1Ym1pdDtcbiAgICBsZXQgZXJyb3IgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGZvcm0ubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGxldCBpbnB1dCA9IGZvcm1baV07XG5cbiAgICAgICAgaWYgKCFlcnJvcikgZXJyb3IgPSB2YWxpZGF0ZUlucHV0KGlucHV0KTtcblxuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICAgIHN1Ym1pdCA9IGlucHV0O1xuICAgICAgICAgICAgc3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgc3VibWl0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yO1xufSIsImZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoaW5wdXQpIHtcbiAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICBpZiAoIWlucHV0LnZhbHVlLm1hdGNoKGlucHV0LnBhdHRlcm4pKSB7XG4gICAgICAgIGVycm9yID0gJ3BhdHRlcm4nO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC5tYXhMZW5ndGggPiAwICYmIGlucHV0Lm1heExlbmd0aCA8IGlucHV0LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBlcnJvciA9ICdtYXhMZW5ndGgnO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC5taW5MZW5ndGggPiAwICYmIGlucHV0Lm1pbkxlbmd0aCA+IGlucHV0LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBlcnJvciA9ICdtaW5MZW5ndGgnO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC5yZXF1aXJlZCAmJiBpbnB1dC52YWx1ZS5sZW5ndGggPD0gMCkge1xuICAgICAgICBlcnJvciA9ICdyZXF1aXJlZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yO1xufSJdfQ==
