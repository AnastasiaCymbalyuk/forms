!function(){"use strict";document.querySelector(".btn").addEventListener("click",(function(e){document.querySelector(".box")||function(e){e.insertAdjacentHTML("beforebegin",'\n    <div class="box">\n      <h3 class="title">Popover title</h3>\n      <p class="text">\n        And here\'s some amazing content. It\'s very engaging. Right?\n      </p>\n    </div>\n    ');var t=document.querySelector(".box");t.style.top="".concat(e.offsetTop-(t.offsetHeight+e.offsetHeight/2),"px"),t.style.left="".concat(e.offsetLeft+e.offsetWidth/2-t.offsetWidth/2,"px")}(e.target),e.preventDefault()})),document.querySelector(".btn").addEventListener("blur",(function(){var e=document.querySelector(".box");e&&e.remove()}))}();