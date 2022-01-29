import{j as n,L as m,a as t,F as u,m as p,H as S,R as w,b as h,c as x,d as b}from"./vendor.124cb1b2.js";const C=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};C();var O="/assets/favicon.d2057d60.png";const a={set:({name:e,data:r})=>window.localStorage.setItem(e,r),get:e=>window.localStorage.getItem(e),remove:e=>window.localStorage.removeItem(e)};const f=e=>document.querySelector(e),$=document.documentElement.style,T=()=>(setTimeout(A,10),n("header",{children:[n(m,{to:"/",className:"logo_header",children:[t("img",{src:O,alt:"logo"}),t("strong",{children:" TextSnap"})]}),t(m,{to:"/user",className:"logo_header",children:n("div",{className:"user_link",children:[n("div",{className:"names_header",children:[t("strong",{id:"name_header",children:"Name"}),t("strong",{id:"username_header",children:"@Username"})]}),t("div",{className:"profile_img_header imgProfile"})]})})]})),A=()=>{if(a.get("names")){const e=JSON.parse(a.get("names"));f("#name_header").textContent=e[0],f("#username_header").textContent="@"+e[1]}if(a.get("profile_img")){const e=a.get("profile_img");$.setProperty("--profile_img",`url(${e})`)}};const l=e=>document.querySelector(e),_=document.documentElement.style,E=t("i",{className:"fas fa-camera",children:" "}),P=t("i",{className:"fas fa-user"}),J={hidden:{opacity:0,y:-30},visible:{opacity:1,y:0}},L={type:"spring",ease:"anticipate",duration:.5},R=()=>(document.title="User | TextSnap",n(u,{children:[t("strong",{id:"clean_data",onClick:k,children:" Clean Data "}),t(p.div,{initial:"hidden",animate:"visible",variants:J,transition:L,children:n("div",{className:"main_user",children:[n("h2",{children:[" ",P," User Config "]}),n("form",{id:"form_user",onSubmit:U,children:[n("div",{onClick:q,className:"profile_img_viewer imgProfile",children:[" ",E," "]}),t("input",{name:"name",required:!0,type:"text",maxlength:"15",placeholder:"Name",autocomplete:"none"}),t("input",{name:"username",required:!0,type:"text",maxlength:"15",placeholder:"Username",autocomplete:"none"}),t("button",{type:"submit",children:" Save "})]})]})})]})),U=e=>{e.preventDefault();const r=e.target.name.value,o=e.target.username.value;let c=[];c.push(r,o),a.set({name:"names",data:JSON.stringify(c)}),l("#name_header").textContent=c[0],l("#username_header").textContent="@"+c[1],e.target.reset()},q=()=>{const e=document.createElement("input");e.type="file",e.accept="image/*",e.click(),e.onchange=()=>{const r=new FileReader;r.readAsDataURL(e.files[0]),r.onload=()=>{const o=r.result;_.setProperty("--profile_img",`url(${o})`),a.set({name:"profile_img",data:o})}}},k=()=>{localStorage.clear(),l("#name_header").textContent="Name",l("#username_header").textContent="@Username",_.setProperty("--profile_img","")};const v=e=>document.querySelectorAll(e);document.documentElement.style;const D={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},I={type:"spring",ease:"anticipate",duration:.7},j=t("i",{className:"fas fa-plus",children:" "}),F=()=>a.get("sentences")?JSON.parse(a.get("sentences")):new Array("\u0CA0_\u0CA0 Write anything please "),H=()=>{a.get("sentences")&&(v(".name_main").forEach(e=>{e.textContent=JSON.parse(a.get("names"))[0]}),v(".username_main").forEach(e=>{e.textContent="@"+JSON.parse(a.get("names"))[1]}))},M=()=>(document.title="TextSnap",setTimeout(H,10),n(u,{children:[t(p.div,{initial:"hidden",animate:"visible",variants:D,transition:I,children:t("div",{className:"main_home",children:F().map(e=>n("div",{className:"sentences",children:[n("div",{className:"names_main",children:[t("div",{className:"profile_img_main imgProfile",children:" "}),n("div",{className:"names_id",children:[t("strong",{className:"name_main",children:" Name "}),t("strong",{className:"username_main",children:" @Username "})]})]}),n("strong",{className:"sentences_loaded",children:[" ",e," "]})]}))})}),n(m,{id:"plus_icon",to:"/new",children:[" ",j," "]})]}));var B="/assets/tap.2225d4ca.mp3";const g=e=>document.querySelector(e);document.documentElement.style;const y=new Audio(B);y.preload=!0;const K={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1}},W={type:"spring",ease:"anticipate",duration:.8},z=()=>(document.title="New | TextSnap",setTimeout(Q,10),n(u,{children:[t(p.div,{initial:"hidden",animate:"visible",variants:K,transition:W,children:n("div",{className:"main_new",children:[t("div",{className:"profile_img_new imgProfile"}),n("form",{onSubmit:G,children:[t("textarea",{row:"auto",column:"auto",name:"textarea",placeholder:"Relax and flow..."}),t("button",{type:"submit",children:" Save "})]})]})}),t("div",{className:"alert",children:" Please write more "}),t("strong",{id:"username_new",children:" @Username "})]}));let N=[];const G=e=>{e.preventDefault();const r=e.target.textarea.value;if(r.length>=5){if(a.get("sentences")){const o=JSON.parse(a.get("sentences"));o.push(r),a.set({name:"sentences",data:JSON.stringify(o)})}else N.push(r),a.set({name:"sentences",data:JSON.stringify(N)});window.history.back(),e.target.reset(),y.play()}else g(".alert").style.display="grid",setTimeout(()=>{g(".alert").style.display="none"},2e3)},Q=()=>{if(a.get("names")){const e=JSON.parse(a.get("names"))[1];g("#username_new").textContent="@"+e}};function V(){return n(S,{children:[t("div",{className:"preloader"}),t(T,{}),n(w,{children:[t(h,{path:"/",element:t(M,{}),children:" "}),t(h,{path:"/user",element:t(R,{}),children:" "}),t(h,{path:"/new",element:t(z,{}),children:" "})]})]})}window.addEventListener("load",()=>{setTimeout(()=>{document.querySelector(".preloader").remove()},500)});x.render(t(b.StrictMode,{children:t(V,{})}),document.getElementById("root"));
