(()=>{"use strict";const e=new class{constructor(){this.div='<div widget="popover-top" class="invisible">\n    <div class="arrow"></div>\n    <h3 class="popover-header">Popover title</h3>\n    <div class="popover-body">And here\'s some amazing content. It\'s very engaging. Right?</div>\n    </div>'}},t=document.querySelector(".container"),o=document.querySelector('[toggle="popover"]');t.insertAdjacentHTML("afterbegin",e.div),o.addEventListener("click",(e=>{const o=t.querySelector('[widget="popover-top"]');o.classList.toggle("invisible"),o.classList.toggle("active")}))})();