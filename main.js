(()=>{"use strict";const e=[{title:"Default",desc:"",selected:!0,todoArr:[]}],t=t=>{var o;"project-button"===t.target.getAttribute("class")&&(o=t.target.textContent,e.forEach((e=>{e.title===o?e.selected=!0:e.selected=!1})),c())},c=()=>{(()=>{const e=document.querySelectorAll(".project"),t=document.querySelector("#projects-container");e.forEach((e=>{t.removeChild(e)}))})(),(()=>{for(let c=0;c<e.length;c++){const o=document.querySelector("#projects-container"),n=document.createElement("div"),d=document.createElement("button");n.classList.add("project"),!0===e[c].selected?d.classList.add("project-button-selected"):d.classList.add("project-button"),o.appendChild(n),n.appendChild(d),console.log(e),d.textContent=e[c].title,d.addEventListener("click",t)}})()};document.querySelector("#content"),console.log(e),document.querySelector(".new-project").addEventListener("click",(()=>{document.querySelector(".new-project-modal")||(()=>{const t=document.querySelector("#content");document.querySelector(".new-project").removeEventListener,console.log("running");const o=document.createElement("div"),n=document.createElement("input"),d=document.createElement("textarea"),l=document.createElement("div"),r=document.createElement("button"),a=document.createElement("button");o.classList.add("new-project-modal"),n.classList.add("new-project-modal-title"),d.classList.add("new-project-modal-description"),l.classList.add("new-project-modal-buttons"),r.classList.add("new-project-modal-submit"),a.classList.add("new-project-modal-cancel"),n.setAttribute("placeholder","Project Name"),d.setAttribute("placeholder","Project Description"),r.textContent="Submit",a.textContent="Cancel",t.appendChild(o),o.appendChild(n),o.appendChild(d),o.appendChild(l),l.appendChild(r),l.appendChild(a);const s=()=>{for(;o.firstChild;)o.removeChild(o.lastChild);t.removeChild(o)};r.addEventListener("click",(()=>{((t,c)=>{e.push(((e,t)=>({title:e,desc:t,selected:!1,todoArr:[]}))(t,c))})(n.value,d.value),c(),s()})),a.addEventListener("click",s)})()}))})();