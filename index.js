import{a as f,i as b}from"./assets/vendor-CBLHhzjb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const c=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),i=document.querySelector(".mobile-menu-backdrop"),n=document.querySelectorAll(".menu-item"),t=document.querySelector(".js-header-nav-list"),s=document.querySelector(".logo"),l=document.querySelectorAll(".nav-link"),h=document.querySelectorAll(".menu-link"),x=(r,o)=>{r.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",r.classList.toggle("js-nav-link-active",o);const a=r.closest(".nav-item");a&&(a.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",a.classList.toggle("js-nav-item-active",o))},g=()=>{const r=localStorage.getItem("activePath"),o=window.location.pathname,a=o==="/"||o==="/index.html",y=o==="/"?"./index.html":`./${o.split("/").pop()}`;l.forEach(d=>{const u=d.getAttribute("href");x(d,r&&u===r||!r&&a&&u==="./index.html"||!r&&!a&&u===y)}),h.forEach(d=>{const u=d.getAttribute("href"),p=r&&u===r||!r&&a&&u==="./index.html"||!r&&!a&&u===y;d.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",d.classList.toggle("active",p)})};c&&i&&c.addEventListener("click",()=>{i.style.transition="opacity 300ms ease, visibility 300ms ease",i.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&i&&e.addEventListener("click",()=>{i.style.transition="opacity 300ms ease, visibility 300ms ease",i.classList.remove("is-open"),document.body.style.overflow=""}),n.forEach(r=>{const o=r.querySelector(".menu-link");o&&o.addEventListener("click",()=>{localStorage.setItem("activePath",o.getAttribute("href")),i&&(i.style.transition="opacity 300ms ease, visibility 300ms ease",i.classList.remove("is-open"),document.body.style.overflow=""),g()})}),t&&t.addEventListener("click",r=>{const o=r.target.closest(".nav-link");o&&(localStorage.setItem("activePath",o.getAttribute("href")),g())}),s&&s.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),g()}),g()});const m={exerciseModal:document.querySelector("#exercise-modal"),openExerciseModalBtn:document.querySelector(".exercise-header-button"),exercises:document.querySelector(".exercise-list"),searchForm:document.querySelector(".search-form")},v="https://your-energy.b.goit.study/api";class w{async getExercises(){const{data:e}=await f.get(`${v}/exercises`);return e}async getExerciseById(e){const{data:i}=await f.get(`${v}/exercises/${e}`);return i}async getExercisesWithParams({category_type:e,category_name:i,limit:n,page:t,keyword:s}){const l={params:{[e]:i,limit:n,page:t,keyword:s}},{data:h}=await f.get(`${v}/exercises/`,l);return h}}const L=new w;function S(c){return c.map(e=>`<li class="exercise-item" data-id="${e.id}">
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
      </li>`).join("")}async function P(c){c.preventDefault();const e={page:1,limit:8,maxPage:1,keyword:"",category_type:"bodypart",category_name:"waist"};window.innerWidth>=768&&(e.limit=10),console.log(e);const n=c.currentTarget,t=n.elements.query.value.trim();if(console.log(t),t===""){m.exercises.innerHTML="",b.show({message:"Please entered your request"});return}e.keyword=t;try{const s=await L.getExercisesWithParams(e);if(e.maxPage=s.totalPages,s.results.length===0&&(m.exercises.innerHTML=""),m.exercises.innerHTML=S(s.results),e.maxPage===1)return}catch(s){console.log(s)}finally{n.reset()}}console.log(m);m.searchForm.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
