import{j as r,L as m,a as t,F as u,m as p,H as S,R as w,b as h,c as x,d as b}from"./vendor.124cb1b2.js";const C=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};C();var O="/assets/favicon.d2057d60.png";const n={set:({name:e,data:a})=>window.localStorage.setItem(e,a),get:e=>window.localStorage.getItem(e),remove:e=>window.localStorage.removeItem(e)};const f=e=>document.querySelector(e),T=document.documentElement.style,$=()=>(setTimeout(A,10),r("header",{children:[r(m,{to:"/",className:"logo_header",children:[t("img",{src:O,alt:"logo"}),t("strong",{children:" TextSnap"})]}),t(m,{to:"/user",className:"logo_header",children:r("div",{className:"user_link",children:[r("div",{className:"names_header",children:[t("strong",{id:"name_header",children:"Name"}),t("strong",{id:"username_header",children:"@Username"})]}),t("div",{className:"profile_img_header imgProfile"})]})})]})),A=()=>{if(n.get("names")){const e=JSON.parse(n.get("names"));f("#name_header").textContent=e[0],f("#username_header").textContent="@"+e[1]}if(n.get("profile_img")){const e=n.get("profile_img");T.setProperty("--profile_img",`url(${e})`)}};const l=e=>document.querySelector(e),_=document.documentElement.style,J=t("i",{className:"fas fa-camera",children:" "}),P=t("i",{className:"fas fa-user"}),L={hidden:{opacity:0,y:-30},visible:{opacity:1,y:0}},E={type:"spring",ease:"anticipate",duration:.5},R=()=>(document.title="User | TextSnap",r(u,{children:[t("strong",{id:"clean_data",onClick:k,children:" Clean Data "}),t(p.div,{initial:"hidden",animate:"visible",variants:L,transition:E,children:r("div",{className:"main_user",children:[r("h2",{children:[" ",P," User Config "]}),r("form",{id:"form_user",onSubmit:U,children:[r("div",{onClick:q,className:"profile_img_viewer imgProfile",children:[" ",J," "]}),t("input",{name:"name",required:!0,type:"text",maxlength:"15",placeholder:"Name",autocomplete:"none"}),t("input",{name:"username",required:!0,type:"text",maxlength:"15",placeholder:"Username",autocomplete:"none"}),t("button",{type:"submit",children:" Save "})]})]})})]})),U=e=>{e.preventDefault();const a=e.target.name.value,o=e.target.username.value;let c=[];c.push(a,o),n.set({name:"names",data:JSON.stringify(c)}),l("#name_header").textContent=c[0],l("#username_header").textContent="@"+c[1],e.target.reset()},q=()=>{const e=document.createElement("input");e.type="file",e.accept="image/*",e.click(),e.onchange=()=>{const a=new FileReader;a.readAsDataURL(e.files[0]),a.onload=()=>{const o=a.result;_.setProperty("--profile_img",`url(${o})`),n.set({name:"profile_img",data:o})}}},k=()=>{localStorage.clear(),l("#name_header").textContent="Name",l("#username_header").textContent="@Username",_.setProperty("--profile_img","")};const v=e=>document.querySelectorAll(e);document.documentElement.style;const D={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},I={type:"spring",ease:"anticipate",duration:.7},j=t("i",{className:"fas fa-plus",children:" "}),F=()=>n.get("sentences")?JSON.parse(n.get("sentences")):new Array("\u0CA0_\u0CA0 Write anything please "),H=()=>{n.get("sentences")&&(v(".name_main").forEach(e=>{e.textContent=JSON.parse(n.get("names"))[0]}),v(".username_main").forEach(e=>{e.textContent="@"+JSON.parse(n.get("names"))[1]}))},M=()=>(document.title="TextSnap",setTimeout(H,10),r(u,{children:[t(p.div,{initial:"hidden",animate:"visible",variants:D,transition:I,children:t("div",{className:"main_home",children:F().map(e=>r("div",{className:"sentences",children:[r("div",{className:"names_main",children:[t("div",{className:"profile_img_main imgProfile",children:" "}),r("div",{className:"names_id",children:[t("strong",{className:"name_main",children:" Name "}),t("strong",{className:"username_main",children:" @Username "})]}),t("i",{onClick:B,className:"fas fa-times delete_sentence",children:" "})]}),r("strong",{className:"sentences_loaded",children:[" ",e," "]})]}))})}),r(m,{id:"plus_icon",to:"/new",children:[" ",j," "]})]})),B=e=>{const a=e.target.offsetParent,o=e.target.offsetParent.lastChild.outerText;if(n.get("sentences")){let s=JSON.parse(n.get("sentences")).filter(i=>i!==o);a.classList.add("remove_sentence"),setTimeout(()=>{a.remove()},300),console.log(e),n.set({name:"sentences",data:JSON.stringify(s)}),console.log(s)}else a.classList.add("remove_sentence"),setTimeout(()=>{a.remove()},300),n.set({name:"sentences",data:JSON.stringify(new Array)})};var K="/assets/tap.670e50a8.mp3";const g=e=>document.querySelector(e);document.documentElement.style;const y=new Audio(K);y.preload=!0;const W={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1}},z={type:"spring",ease:"anticipate",duration:.8},G=()=>(document.title="New | TextSnap",setTimeout(V,10),r(u,{children:[t(p.div,{initial:"hidden",animate:"visible",variants:W,transition:z,children:r("div",{className:"main_new",children:[t("div",{className:"profile_img_new imgProfile"}),r("form",{onSubmit:Q,children:[t("textarea",{row:"auto",column:"auto",name:"textarea",placeholder:"Relax and flow..."}),t("button",{type:"submit",children:" Save "})]})]})}),t("div",{className:"alert",children:" Please write more "}),t("strong",{id:"username_new",children:" @Username "})]}));let N=[];const Q=e=>{e.preventDefault();const a=e.target.textarea.value.replace(/(\r\n|\n|\r)/gm,"");if(a.length>=5){if(n.get("sentences")){const o=JSON.parse(n.get("sentences"));o.push(a),n.set({name:"sentences",data:JSON.stringify(o)})}else N.push(a),n.set({name:"sentences",data:JSON.stringify(N)});window.history.back(),e.target.reset(),y.play()}else g(".alert").style.display="grid",setTimeout(()=>{g(".alert").style.display="none"},2e3)},V=()=>{if(n.get("names")){const e=JSON.parse(n.get("names"))[1];g("#username_new").textContent="@"+e}};function X(){return r(S,{children:[t("div",{className:"preloader"}),t($,{}),r(w,{children:[t(h,{path:"/",element:t(M,{}),children:" "}),t(h,{path:"/user",element:t(R,{}),children:" "}),t(h,{path:"/new",element:t(G,{}),children:" "})]})]})}window.addEventListener("load",()=>{setTimeout(()=>{document.querySelector(".preloader").remove()},500)});x.render(t(b.StrictMode,{children:t(X,{})}),document.getElementById("root"));
