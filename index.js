import{i as b,a as h}from"./assets/vendor-CBLHhzjb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const f="https://your-energy.b.goit.study/api";function w(o){return b.error({title:"Error",message:o,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}document.addEventListener("DOMContentLoaded",L);async function L(){const o=document.getElementById("categories-container"),e=window.innerWidth<768?9:12;try{const i=await h.get(`${f}/filters`,{params:{filter:"Muscles",page:1,limit:12}}),a=await h.get(`${f}/filters`,{params:{filter:"Muscles",page:2,limit:12}}),l=i.data.results.concat(a.data.results).sort(function(c,u){return c.name.localeCompare(u.name)}).slice(0,e);o.innerHTML="",l.forEach(function(c){const u=document.createElement("div");u.className="category-card",u.innerHTML=`
        <img
          src="${c.imgURL}"
          srcset="${c.imgURL} 1x, ${c.imgURL} 2x"
          alt="${c.name} exercise"
        />
        <div class="category-name">${c.name.charAt(0).toUpperCase()+c.name.slice(1)}</div>
        <div class="category-type">${c.filter}</div>
      `,o.appendChild(u)})}catch{w("Failed to load exercise categories. Please try again later.")}}document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),i=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item"),t=document.querySelector(".js-header-nav-list"),s=document.querySelector(".logo"),l=document.querySelectorAll(".nav-link"),c=document.querySelectorAll(".menu-link"),u=(r,n)=>{r.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",r.classList.toggle("js-nav-link-active",n);const d=r.closest(".nav-item");d&&(d.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",d.classList.toggle("js-nav-item-active",n))},p=()=>{const r=localStorage.getItem("activePath"),n=window.location.pathname,d=n==="/"||n==="/index.html",y=n==="/"?"./index.html":`./${n.split("/").pop()}`;l.forEach(g=>{const m=g.getAttribute("href");u(g,r&&m===r||!r&&d&&m==="./index.html"||!r&&!d&&m===y)}),c.forEach(g=>{const m=g.getAttribute("href"),x=r&&m===r||!r&&d&&m==="./index.html"||!r&&!d&&m===y;g.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",g.classList.toggle("active",x)})};o&&i&&o.addEventListener("click",()=>{i.style.transition="opacity 300ms ease, visibility 300ms ease",i.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&i&&e.addEventListener("click",()=>{i.style.transition="opacity 300ms ease, visibility 300ms ease",i.classList.remove("is-open"),document.body.style.overflow=""}),a.forEach(r=>{const n=r.querySelector(".menu-link");n&&n.addEventListener("click",()=>{localStorage.setItem("activePath",n.getAttribute("href")),i&&(i.style.transition="opacity 300ms ease, visibility 300ms ease",i.classList.remove("is-open"),document.body.style.overflow=""),p()})}),t&&t.addEventListener("click",r=>{const n=r.target.closest(".nav-link");n&&(localStorage.setItem("activePath",n.getAttribute("href")),p())}),s&&s.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),p()}),p()});const v={exerciseModal:document.querySelector("#exercise-modal"),openExerciseModalBtn:document.querySelector(".exercise-header-button"),exercises:document.querySelector(".exercise-list"),searchForm:document.querySelector(".search-form")};class E{async getExercises(){const{data:e}=await h.get(`${f}/exercises`);return e}async getExerciseById(e){const{data:i}=await h.get(`${f}/exercises/${e}`);return i}async getExercisesWithParams({category_type:e,category_name:i,limit:a,page:t,keyword:s}){const l={params:{[e]:i,limit:a,page:t,keyword:s}},{data:c}=await h.get(`${f}/exercises/`,l);return c}}const P=new E;function S(o){return o.map(e=>`<li class="exercise-item" data-id="${e.id}">
        <div class="exercise-header">
          <p class="exercise-header-badge">WORKOUT</p>
          <div class="exercise-header-rating">
            <p>${e.rating}</p>
            <svg
              class="exercise-rating-icon"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="./images/icons.svg#star"></use>
            </svg>
          </div>
          <button class="exercise-header-button" type="button">
            <p>Start</p>
            <svg
              class="exercise-btn-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <use href="./images/icons.svg#arrow-right"></use>
            </svg>
          </button>
        </div>
        <div class="exercise-title">
          <div class="exercise-title-icon-tumb" width="24" height="24">
            <svg
              class="exercise-title-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="./images/icons.svg#running-man"></use>
            </svg>
          </div>
          <h3 class="exercise-title-text">${e.name}</h3>
        </div>
        <ul class="exercise-footer">
          <li>
            <span class="exercise-footer-item-accent">Burned calories:</span>
            ${e.burnedCalories}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Body part:</span>
            ${e.bodyPart}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Target:</span>
            ${e.target}
          </li>
        </ul>
      </li>`).join("")}async function $(o){o.preventDefault();const e={page:1,limit:8,maxPage:1,keyword:"",category_type:"bodypart",category_name:"waist"};window.innerWidth>=768&&(e.limit=10),console.log(e);const a=o.currentTarget,t=a.elements.query.value.trim();if(console.log(t),t===""){v.exercises.innerHTML="",b.show({message:"Please entered your request"});return}e.keyword=t;try{const s=await P.getExercisesWithParams(e);if(e.maxPage=s.totalPages,s.results.length===0&&(v.exercises.innerHTML=""),v.exercises.innerHTML=S(s.results),e.maxPage===1)return}catch(s){console.log(s)}finally{a.reset()}}console.log(v);v.searchForm.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
