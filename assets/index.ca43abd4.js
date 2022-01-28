const p=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};p();const e=t=>document.querySelector(t),i=t=>document.querySelectorAll(t);e("#logo").src="https://i.ibb.co/4SqPMtx/238344.png";let d=[];const g=t=>{const s=t.target.nextElementSibling;s.classList.add("canvas_save"),document.documentElement.style.setProperty("--radius","0px"),html2canvas(s,{onrendered(a){const n=document.createElement("a"),r=a.toDataURL();n.href=r,n.download="screenshot.png",n.click()}})},v=()=>{e(".user_settings").style.display="flex",setTimeout(()=>{e(".user_settings").classList.add("user_settings_active")},10),document.body.style.cssText="overflow: hidden"},l=()=>{e(".user_settings").classList.remove("user_settings_active"),setTimeout(()=>{e(".user_settings").style.display="none"},500)};let u=[];const x=t=>{t.preventDefault();const s=t.target.name.value,a="@"+t.target.username.value;u.push(s,a),db.set({name:"names_textsnap",data:JSON.stringify(u)}),e(".name_card")&&i(".name_card").forEach(n=>{n.textContent=s}),e(".usuario_card")&&i(".usuario_card").forEach(n=>{n.textContent=a}),e("#username").textContent=a,e(".user > strong").textContent=s,t.target.reset()},y=()=>{const t=JSON.parse(db.get("names_textsnap"))[0],s=JSON.parse(db.get("names_textsnap"))[1],a=db.get("profile_img_textsnap");e(".name_card")&&i(".name_card").forEach(n=>{n.textContent=t}),e(".usuario_card")&&i(".usuario_card").forEach(n=>{n.textContent=s}),e(".user_img")&&i(".user_img").forEach(n=>{n.src=a}),e("#username").textContent=s,document.documentElement.style.setProperty("--profile_img",`url(${a})`),e(".user > strong").textContent=t,l()},m=()=>{if(e("#content .capturar")){const t=i(".capturar");for(let s of t)s.addEventListener("click",g)}},b=()=>{e(".main_form").style.display="flex",setTimeout(()=>{e(".main_form").classList.add("main_form_active")},10),document.body.style.cssText="overflow: hidden"},_=()=>{e(".main_form").classList.remove("main_form_active"),setTimeout(()=>{e(".main_form").style.display="none",document.body.style.cssText="overflow-y: auto"},500)},L=()=>{let t=JSON.parse(db.get("user_text"));e("#content").innerHTML="",t.map(s=>{e("#content").innerHTML+=`
    <i class="fas fa-camera capturar"></i>
      <div class="kid_content">
      <div>
      <img class="user_img user_img_src" />
        <div class="names">
          <strong class="name_card"> Name </strong>
          <span class="usuario_card"> @Usuario </span>
        </div>
      </div>

        <div id="content_text">
          ${s}
        </div>
      </div>
    `})},f=t=>{e("#content > strong")&&e("#content > strong").remove(),e("#content").innerHTML+=`
    <i class="fas fa-camera capturar"></i>
    <div class="kid_content">
    <div>
    <img class="user_img" />
      <div class="names">
      <strong class="name_card"> Name </strong>
        <span class="usuario_card"> @Usuario </span>
      </div>
    </div>

      <div id="content_text">
        ${t}
      </div>
    </div>
  `,m()},h=()=>{const t=e(".main_form textarea").value;if(db.get("user_text")){let s=JSON.parse(db.get("user_text"));f(t),s.push(t),db.set({name:"user_text",data:JSON.stringify(s)})}else d.push(t),db.set({name:"user_text",data:JSON.stringify(d)}),d.push(t),f(t);e(".main_form textarea").value="",_()},E=t=>{const s=e('input[type="file"]');s.click(),s.addEventListener("change",()=>{const a=new FileReader;a.readAsDataURL(s.files[0]),a.addEventListener("load",()=>{const n=a.result;db.set({name:"profile_img_textsnap",data:n}),document.documentElement.style.setProperty("--profile_img",`url(${n})`)})})};db.get("user_text")&&L();db.get("names_textsnap")&&y();e("#save").addEventListener("click",h);e("#add_text_btn").addEventListener("click",b);e("#close_form").addEventListener("click",_);e(".user").addEventListener("click",v);e(".close_form").addEventListener("click",l);e("#form_user").addEventListener("submit",x);e("#upload_image").addEventListener("click",E);window.addEventListener("load",m);
