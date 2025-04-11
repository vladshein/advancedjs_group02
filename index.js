var $=Object.defineProperty;var A=(t,e,s)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var S=(t,e,s)=>A(t,typeof e!="symbol"?e+"":e,s);import{i as E,a as h}from"./assets/vendor-CBLHhzjb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const p="https://your-energy.b.goit.study/api";function P(t){return E.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}document.addEventListener("DOMContentLoaded",M);async function M(){const t=document.getElementById("categories-container"),e=window.innerWidth<768?9:12;try{const s=await h.get(`${p}/filters`,{params:{filter:"Muscles",page:1,limit:12}}),a=await h.get(`${p}/filters`,{params:{filter:"Muscles",page:2,limit:12}}),l=s.data.results.concat(a.data.results).sort(function(c,d){return c.name.localeCompare(d.name)}).slice(0,e);t.innerHTML="",l.forEach(function(c){const d=document.createElement("div");d.className="category-card",d.innerHTML=`
        <img
          src="${c.imgURL}"
          srcset="${c.imgURL} 1x, ${c.imgURL} 2x"
          alt="${c.name} exercise"
        />
        <div class="category-name">${c.name.charAt(0).toUpperCase()+c.name.slice(1)}</div>
        <div class="category-type">${c.filter}</div>
      `,t.appendChild(d)})}catch{P("Failed to load exercise categories. Please try again later.")}}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),s=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item"),o=document.querySelector(".js-header-nav-list"),i=document.querySelector(".logo"),l=document.querySelectorAll(".nav-link"),c=document.querySelectorAll(".menu-link"),d=(r,n)=>{r.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",r.classList.toggle("js-nav-link-active",n);const u=r.closest(".nav-item");u&&(u.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",u.classList.toggle("js-nav-item-active",n))},v=()=>{const r=localStorage.getItem("activePath"),n=window.location.pathname,u=n==="/"||n==="/index.html",b=n==="/"?"./index.html":`./${n.split("/").pop()}`;l.forEach(f=>{const m=f.getAttribute("href");d(f,r&&m===r||!r&&u&&m==="./index.html"||!r&&!u&&m===b)}),c.forEach(f=>{const m=f.getAttribute("href"),L=r&&m===r||!r&&u&&m==="./index.html"||!r&&!u&&m===b;f.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",f.classList.toggle("active",L)})};t&&s&&t.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&s&&e.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""}),a.forEach(r=>{const n=r.querySelector(".menu-link");n&&n.addEventListener("click",()=>{localStorage.setItem("activePath",n.getAttribute("href")),s&&(s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""),v()})}),o&&o.addEventListener("click",r=>{const n=r.target.closest(".nav-link");n&&(localStorage.setItem("activePath",n.getAttribute("href")),v())}),i&&i.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),v()}),v()});const g={exerciseModal:document.querySelector("#exercise-modal"),openExerciseModalBtn:document.querySelector(".exercise-header-button"),exercises:document.querySelector(".exercise-list"),searchForm:document.querySelector(".search-form"),qouteWrap:document.querySelector(".quote-wrap")};class T{async getExercises(){const{data:e}=await h.get(`${p}/exercises`);return e}async getExerciseById(e){const{data:s}=await h.get(`${p}/exercises/${e}`);return s}async getExercisesWithParams({category_type:e,category_name:s,limit:a,page:o,keyword:i}){const l={params:{[e]:s,limit:a,page:o,keyword:i}},{data:c}=await h.get(`${p}/exercises/`,l);return c}}const y=class y{async getQuote(){const{data:e}=await h.get(`${p}/quote`);return e}setQuoteDataToLS(e,s=Date.now()){const a={quote:e,currentDate:s};localStorage.setItem(y.QUOTE_LS_KEY,JSON.stringify(a))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(y.QUOTE_LS_KEY))}};S(y,"QUOTE_LS_KEY","quote-and-date");let w=y;const D=new T,x=new w;function O(t){return t.map(e=>`<li class="exercise-item" data-id="${e.id}">
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
      </li>`).join("")}async function I(t){t.preventDefault();const e={page:1,limit:8,maxPage:1,keyword:"",category_type:"bodypart",category_name:"waist"};window.innerWidth>=768&&(e.limit=10),console.log(e);const a=t.currentTarget,o=a.elements.query.value.trim();if(console.log(o),o===""){g.exercises.innerHTML="",E.show({message:"Please entered your request"});return}e.keyword=o;try{const i=await D.getExercisesWithParams(e);if(e.maxPage=i.totalPages,i.results.length===0&&(g.exercises.innerHTML=""),g.exercises.innerHTML=O(i.results),e.maxPage===1)return}catch(i){console.log(i)}finally{a.reset()}}function q({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function R(){try{const t=x.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await x.getQuote();x.setQuoteDataToLS(e),g.qouteWrap.insertAdjacentHTML("beforeend",q(e))}else g.qouteWrap.insertAdjacentHTML("beforeend",q(t.quote))}catch(t){P(t.message)}}console.log(g);g.searchForm.addEventListener("submit",I);R();
//# sourceMappingURL=index.js.map
