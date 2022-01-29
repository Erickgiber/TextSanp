import{j as n,L as l,a as t,F as d,m,H as b,R as w,b as u,c as S,d as x}from"./vendor.124cb1b2.js";const C=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};C();var k="/assets/favicon.d2057d60.png";const a={set:({name:e,data:s})=>window.localStorage.setItem(e,s),get:e=>window.localStorage.getItem(e),remove:e=>window.localStorage.removeItem(e)};const f=e=>document.querySelector(e),O=document.documentElement.style,T=()=>(setTimeout($,10),n("header",{children:[n(l,{to:"/",className:"logo_header",children:[t("img",{src:k,alt:"logo"}),t("strong",{children:" TextSnap"})]}),t(l,{to:"/user",className:"logo_header",children:n("div",{className:"user_link",children:[n("div",{className:"names_header",children:[t("strong",{id:"name_header",children:"Name"}),t("strong",{id:"username_header",children:"@Username"})]}),t("div",{className:"profile_img_header imgProfile"})]})})]})),$=()=>{if(a.get("names")){const e=JSON.parse(a.get("names"));f("#name_header").textContent=e[0],f("#username_header").textContent="@"+e[1]}if(a.get("profile_img")){const e=a.get("profile_img");O.setProperty("--profile_img",`url(${e})`)}};const p=e=>document.querySelector(e),_=document.documentElement.style,E=t("i",{className:"fas fa-camera",children:" "}),A=t("i",{className:"fas fa-user"}),J={hidden:{opacity:0,y:-30},visible:{opacity:1,y:0}},P={type:"spring",ease:"anticipate",duration:.5},L=()=>(document.title="User | TextSnap",n(d,{children:[t("strong",{id:"clean_data",onClick:q,children:" Clean Data "}),t(m.div,{initial:"hidden",animate:"visible",variants:J,transition:P,children:n("div",{className:"main_user",children:[n("h2",{children:[" ",A," User Config "]}),n("form",{id:"form_user",onSubmit:R,children:[n("div",{onClick:U,className:"profile_img_viewer imgProfile",children:[" ",E," "]}),t("input",{name:"name",required:!0,type:"text",maxlength:"15",placeholder:"Name",autocomplete:"none"}),t("input",{name:"username",required:!0,type:"text",maxlength:"15",placeholder:"Username",autocomplete:"none"}),t("button",{type:"submit",children:" Save "})]})]})})]})),R=e=>{e.preventDefault();const s=e.target.name.value,o=e.target.username.value;let c=[];c.push(s,o),a.set({name:"names",data:JSON.stringify(c)}),p("#name_header").textContent=c[0],p("#username_header").textContent="@"+c[1],e.target.reset()},U=()=>{const e=document.createElement("input");e.type="file",e.accept="image/*",e.click(),e.onchange=()=>{const s=new FileReader;s.readAsDataURL(e.files[0]),s.onload=()=>{const o=s.result;_.setProperty("--profile_img",`url(${o})`),a.set({name:"profile_img",data:o})}}},q=()=>{localStorage.clear(),p("#name_header").textContent="Name",p("#username_header").textContent="@Username",_.setProperty("--profile_img","")};const v=e=>document.querySelectorAll(e);document.documentElement.style;const D={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},I={type:"spring",ease:"anticipate",duration:.7},j=t("i",{className:"fas fa-plus",children:" "}),F=t("i",{className:"fab fa-github",children:" "}),H=()=>a.get("sentences")?JSON.parse(a.get("sentences")):new Array("\u0CA0_\u0CA0 Write anything please "),M=()=>{a.get("sentences")&&(v(".name_main").forEach(e=>{e.textContent=JSON.parse(a.get("names"))[0]}),v(".username_main").forEach(e=>{e.textContent="@"+JSON.parse(a.get("names"))[1]}))},B=()=>(document.title="TextSnap",setTimeout(M,10),n(d,{children:[t(m.div,{initial:"hidden",animate:"visible",variants:D,transition:I,children:t("div",{className:"main_home",children:H().map(e=>n("div",{className:"sentences",children:[n("div",{className:"names_main",children:[t("div",{className:"profile_img_main imgProfile",children:" "}),n("div",{className:"names_id",children:[t("strong",{className:"name_main",children:" Name "}),t("strong",{className:"username_main",children:" @Username "})]}),t("i",{onClick:K,className:"fas fa-times delete_sentence",children:" "})]}),n("strong",{className:"sentences_loaded",children:[" ",e," "]})]}))})}),n(l,{id:"social_icon",to:"/social",children:[" ",F," "]}),n(l,{id:"plus_icon",to:"/new",children:[" ",j," "]})]})),K=e=>{const s=e.target.offsetParent,o=e.target.offsetParent.lastChild.outerText;if(a.get("sentences")){let r=JSON.parse(a.get("sentences")).filter(i=>i!==o);s.classList.add("remove_sentence"),setTimeout(()=>{s.remove()},300),console.log(e),a.set({name:"sentences",data:JSON.stringify(r)}),console.log(r)}else s.classList.add("remove_sentence"),setTimeout(()=>{s.remove()},300),a.set({name:"sentences",data:JSON.stringify(new Array)})};var W="/assets/tap.670e50a8.mp3";const g=e=>document.querySelector(e);document.documentElement.style;const y=new Audio(W);y.preload=!0;const z={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1}},G={type:"spring",ease:"anticipate",duration:.8},Q=()=>(document.title="New | TextSnap",setTimeout(X,10),n(d,{children:[t(m.div,{initial:"hidden",animate:"visible",variants:z,transition:G,children:n("div",{className:"main_new",children:[t("div",{className:"profile_img_new imgProfile"}),n("form",{onSubmit:V,children:[t("textarea",{row:"auto",column:"auto",name:"textarea",placeholder:"Relax and flow..."}),t("button",{type:"submit",children:" Save "})]})]})}),t("div",{className:"alert",children:" Please write more "}),t("strong",{id:"username_new",children:" @Username "})]}));let N=[];const V=e=>{e.preventDefault();const s=e.target.textarea.value.replace(/(\r\n|\n|\r)/gm,"");if(s.length>=5){if(a.get("sentences")){const o=JSON.parse(a.get("sentences"));o.push(s),a.set({name:"sentences",data:JSON.stringify(o)})}else N.push(s),a.set({name:"sentences",data:JSON.stringify(N)});window.history.back(),e.target.reset(),y.play()}else g(".alert").style.display="grid",setTimeout(()=>{g(".alert").style.display="none"},2e3)},X=()=>{if(a.get("names")){const e=JSON.parse(a.get("names"))[1];g("#username_new").textContent="@"+e}};document.documentElement.style;const Y={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},Z={type:"spring",ease:"anticipate",duration:.7},ee=()=>(document.title="Social | TextSnap",t(d,{children:t(m.div,{initial:"hidden",animate:"visible",variants:Y,transition:Z,children:n("div",{className:"main_social",children:[t("i",{onClick:te,className:"fab fa-twitter"}),t("i",{onClick:ne,className:"fab fa-linkedin"}),t("i",{onClick:ae,className:"fab fa-github"})]})})})),te=()=>{window.open("https://twitter.com/Erickgiber","_blank")},ne=()=>{window.open("https://linkedin.com/in/erickgiber","_blank")},ae=()=>{window.open("https://github.com/Erickgiber","_blank")};function se(){return n(b,{children:[t("div",{className:"preloader"}),t(T,{}),n(w,{children:[t(u,{path:"/",element:t(B,{}),children:" "}),t(u,{path:"/user",element:t(L,{}),children:" "}),t(u,{path:"/new",element:t(Q,{}),children:" "}),t(u,{path:"/social",element:t(ee,{}),children:" "})]})]})}window.addEventListener("load",()=>{setTimeout(()=>{document.querySelector(".preloader").remove()},500)});S.render(t(x.StrictMode,{children:t(se,{})}),document.getElementById("root"));
