var k=Object.defineProperty;var B=(t,e,r)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var b=(t,e,r)=>B(t,typeof e!="symbol"?e+"":e,r);import{i as W,a as v}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const L="https://your-energy.b.goit.study/api",i={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"};function T(t){return W.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}class F{async getExercises(){const{data:e}=await v.get(`${L}/exercises`);return e}async getExerciseById(e){const{data:r}=await v.get(`${L}/exercises/${e}`);return r}async getExercisesWithParams({category_type:e,category_name:r,limit:a=8,page:s=1,keyword:n=""}){const c={params:{[e]:r,limit:a,page:s,keyword:n}},{data:d}=await v.get(`${L}/exercises/`,c);return d}}const h=class h{getFilterQuery(){return h.filterQuery===""?"Muscles":h.filterQuery}setFilterQuery(e){h.filterQuery=e}async fetchFilteredData(e,r,a){const s={filter:e,limit:r,page:a};return(await v.get(`${L}/filters`,{params:s})).data}};b(h,"filterQuery","");let S=h;const w=class w{async getQuote(){const{data:e}=await v.get(`${L}/quote`);return e}setQuoteDataToLS(e,r=Date.now()){const a={quote:e,currentDate:r};localStorage.setItem(w.QUOTE_LS_KEY,JSON.stringify(a))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(w.QUOTE_LS_KEY))}};b(w,"QUOTE_LS_KEY","quote-and-date");let q=w;const x=class x{getNextPage(){return x.page}getPreviousPage(){return x.page}getCurrentPage(){return x.page}};b(x,"page",1);let E=x;const C=new F,M=new S,P=new q,I=new E;document.addEventListener("DOMContentLoaded",Q);async function Q(){const t=document.getElementById("categories-container"),e=M.getFilterQuery(),r=window.innerWidth<768?9:12,a=I.getCurrentPage();try{const n=(await M.fetchFilteredData(e,r,a)).results.sort(function(c,d){return c.name.localeCompare(d.name)});t.innerHTML="",n.forEach(function(c){const d=document.createElement("div");d.className="category-card",d.innerHTML=`
        <img
          src="${c.imgURL}"
          srcset="${c.imgURL} 1x, ${c.imgURL} 2x"
          alt="${c.name} exercise"
        />
        <div class="category-name">${c.name.charAt(0).toUpperCase()+c.name.slice(1)}</div>
        <div class="category-type">${c.filter}</div>
      `,t.appendChild(d)})}catch{T("Failed to load exercise categories. Please try again later.")}}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),r=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item"),s=document.querySelector(".js-header-nav-list"),n=document.querySelector(".logo"),c=document.querySelectorAll(".nav-link"),d=document.querySelectorAll(".menu-link"),m=(l,u)=>{l.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",l.classList.toggle("js-nav-link-active",u);const f=l.closest(".nav-item");f&&(f.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",f.classList.toggle("js-nav-item-active",u))},g=()=>{const l=localStorage.getItem("activePath"),u=window.location.pathname,f=u==="/"||u==="/index.html",$=u==="/"?"./index.html":`./${u.split("/").pop()}`;c.forEach(y=>{const p=y.getAttribute("href");m(y,l&&p===l||!l&&f&&p==="./index.html"||!l&&!f&&p===$)}),d.forEach(y=>{const p=y.getAttribute("href"),H=l&&p===l||!l&&f&&p==="./index.html"||!l&&!f&&p===$;y.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",y.classList.toggle("active",H)})};t&&r&&t.addEventListener("click",()=>{r.style.transition="opacity 300ms ease, visibility 300ms ease",r.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&r&&e.addEventListener("click",()=>{r.style.transition="opacity 300ms ease, visibility 300ms ease",r.classList.remove("is-open"),document.body.style.overflow=""}),a.forEach(l=>{const u=l.querySelector(".menu-link");u&&u.addEventListener("click",()=>{localStorage.setItem("activePath",u.getAttribute("href")),r&&(r.style.transition="opacity 300ms ease, visibility 300ms ease",r.classList.remove("is-open"),document.body.style.overflow=""),g()})}),s&&s.addEventListener("click",l=>{const u=l.target.closest(".nav-link");u&&(localStorage.setItem("activePath",u.getAttribute("href")),g())}),n&&n.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),g()}),g()});const o={exerciseModal:document.querySelector("#exercise-modal"),openExerciseModalBtn:document.querySelector(".exercise-header-button"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),qouteWrap:document.querySelector(".quote-wrap"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),categories:document.querySelector("#categories-container")};function A(t,e){const r=o.exercisePageWrapper;r.innerHTML="";const a=2,s=2;function n(m){const g=document.createElement("button");return g.classList.add("page-number"),g.textContent=m,m===t&&(g.disabled=!0,g.classList.add("active")),g.addEventListener("click",N),g}const c=Math.max(1,t-a),d=Math.min(e,t+s);for(let m=c;m<=d;m++)r.appendChild(n(m));console.log(t,e)}function D(t){return t.map(e=>`<li class="exercise-item" data-id="${e.id}">
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
      </li>`).join("")}async function N(t){const e=t.target.textContent;i.page=Number(e),o.exercisePageWrapper.innerHTML="",o.exercises.innerHTML="",window.innerWidth>=768?i.limit=10:i.limit=8;try{const a=await C.getExercisesWithParams(i);if(i.maxPage=a.totalPages,a.results.length===0&&(o.exercises.innerHTML=""),o.exercises.innerHTML=D(a.results),i.maxPage===1)return;A(i.page,i.maxPage)}catch(a){console.log(a)}finally{}}async function U(t){t.preventDefault(),o.exercisePageWrapper.innerHTML="",o.exercises.innerHTML="",i.page=1,window.innerWidth>=768?i.limit=10:i.limit=8;const r=t.currentTarget,a=r.elements.query.value.trim();if(a===""){T("Please entered your request");return}i.keyword=a;try{const s=await C.getExercisesWithParams(i);if(i.maxPage=s.totalPages,s.results.length===0&&(o.exercises.innerHTML=""),o.exercises.innerHTML=D(s.results),i.maxPage===1)return;A(i.page,i.maxPage)}catch(s){console.log(s)}finally{r.reset()}}async function R(t){if(t.preventDefault(),o.searchForm.classList.add("active-search-form"),o.exercisePageWrapper.innerHTML="",o.exercises.innerHTML="",i.page=1,i.keyword="",t.target===t.currentTarget)return;window.innerWidth>=768?i.limit=10:i.limit=8,i.category_name=t.target.querySelector(".category-name").textContent.toLowerCase(),i.category_type=t.target.querySelector(".category-type").textContent.toLowerCase(),console.log(i.category_name,i.category_type);try{const r=await C.getExercisesWithParams(i);if(i.maxPage=r.totalPages,r.results.length===0&&(o.exercises.innerHTML=""),o.exercises.innerHTML=D(r.results),i.maxPage===1)return;A(i.page,i.maxPage)}catch(r){console.log(r)}finally{}}function O({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function j(){try{const t=P.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await P.getQuote();P.setQuoteDataToLS(e),o.qouteWrap.insertAdjacentHTML("beforeend",O(e))}else o.qouteWrap.insertAdjacentHTML("beforeend",O(t.quote))}catch(t){T(t.message)}}function K(t){o.filterBtns.forEach(e=>{e.classList.remove("active-filter-btn")}),t.target.nodeName==="BUTTON"&&(t.target.classList.add("active-filter-btn"),M.setFilterQuery(t.target.textContent.trim()),Q())}o.searchForm.addEventListener("submit",U);j();o.filterBtnsList.addEventListener("click",K);o.categories.addEventListener("click",R);
//# sourceMappingURL=main-Gobcu941.js.map
