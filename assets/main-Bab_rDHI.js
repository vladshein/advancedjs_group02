var O=Object.defineProperty;var B=(t,e,s)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var L=(t,e,s)=>B(t,typeof e!="symbol"?e+"":e,s);import{i as C,a as h}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const x="https://your-energy.b.goit.study/api",i={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"};function k(t){return C.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),s=document.querySelector(".mobile-menu-backdrop"),n=document.querySelectorAll(".menu-item"),r=document.querySelector(".js-header-nav-list"),o=document.querySelector(".logo"),d=document.querySelectorAll(".nav-link"),p=document.querySelectorAll(".menu-link"),g=(c,l)=>{c.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",c.classList.toggle("js-nav-link-active",l);const m=c.closest(".nav-item");m&&(m.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",m.classList.toggle("js-nav-item-active",l))},u=()=>{const c=localStorage.getItem("activePath"),l=window.location.pathname,m=l==="/"||l==="/index.html",M=l==="/"?"./index.html":`./${l.split("/").pop()}`;d.forEach(y=>{const f=y.getAttribute("href");g(y,c&&f===c||!c&&m&&f==="./index.html"||!c&&!m&&f===M)}),p.forEach(y=>{const f=y.getAttribute("href"),A=c&&f===c||!c&&m&&f==="./index.html"||!c&&!m&&f===M;y.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",y.classList.toggle("active",A)})};t&&s&&t.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&s&&e.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""}),n.forEach(c=>{const l=c.querySelector(".menu-link");l&&l.addEventListener("click",()=>{localStorage.setItem("activePath",l.getAttribute("href")),s&&(s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""),u()})}),r&&r.addEventListener("click",c=>{const l=c.target.closest(".nav-link");l&&(localStorage.setItem("activePath",l.getAttribute("href")),u())}),o&&o.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),u()}),u()});const a={exerciseModal:document.querySelector("#exercise-modal"),openExerciseModalBtn:document.querySelector(".exercise-header-button"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),qouteWrap:document.querySelector(".quote-wrap"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),categories:document.querySelector("#categories-container")};class H{async getExercises(){const{data:e}=await h.get(`${x}/exercises`);return e}async getExerciseById(e){const{data:s}=await h.get(`${x}/exercises/${e}`);return s}async getExercisesWithParams({category_type:e,category_name:s,limit:n=8,page:r=1,keyword:o=""}){const d={params:{[e]:s,limit:n,page:r,keyword:o}},{data:p}=await h.get(`${x}/exercises/`,d);return p}}const v=class v{getFilterQuery(){return v.filterQuery}setFilterQuery(e){v.filterQuery=e}async fetchFilteredData(e=12,s=1){const n={params:{filter:this.getFilterQuery(),limit:e,page:s}},{filteredData:r}=await h.get(`${x}/filters/`,n);return r}};L(v,"filterQuery","");let S=v;const w=class w{async getQuote(){const{data:e}=await h.get(`${x}/quote`);return e}setQuoteDataToLS(e,s=Date.now()){const n={quote:e,currentDate:s};localStorage.setItem(w.QUOTE_LS_KEY,JSON.stringify(n))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(w.QUOTE_LS_KEY))}};L(w,"QUOTE_LS_KEY","quote-and-date");let P=w;const q=new H,D=new S,b=new P;function E(t,e){const s=a.exercisePageWrapper;s.innerHTML="";const n=2,r=2;function o(g){const u=document.createElement("button");return u.classList.add("page-number"),u.textContent=g,g===t&&(u.disabled=!0,u.classList.add("active")),u.addEventListener("click",W),u}const d=Math.max(1,t-n),p=Math.min(e,t+r);for(let g=d;g<=p;g++)s.appendChild(o(g));console.log(t,e)}function T(t){return t.map(e=>`<li class="exercise-item" data-id="${e.id}">
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
      </li>`).join("")}async function W(t){const e=t.target.textContent;i.page=Number(e),a.exercisePageWrapper.innerHTML="",a.exercises.innerHTML="",window.innerWidth>=768?i.limit=10:i.limit=8;try{const n=await q.getExercisesWithParams(i);if(i.maxPage=n.totalPages,n.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=T(n.results),i.maxPage===1)return;E(i.page,i.maxPage)}catch(n){console.log(n)}finally{}}async function F(t){t.preventDefault(),a.exercisePageWrapper.innerHTML="",a.exercises.innerHTML="",i.page=1,window.innerWidth>=768?i.limit=10:i.limit=8;const s=t.currentTarget,n=s.elements.query.value.trim();if(n===""){k("Please entered your request");return}i.keyword=n;try{const r=await q.getExercisesWithParams(i);if(i.maxPage=r.totalPages,r.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=T(r.results),i.maxPage===1)return;E(i.page,i.maxPage)}catch(r){console.log(r)}finally{s.reset()}}async function $(t){if(t.preventDefault(),a.searchForm.classList.add("active-search-form"),a.exercisePageWrapper.innerHTML="",a.exercises.innerHTML="",i.page=1,i.keyword="",t.target===t.currentTarget)return;window.innerWidth>=768?i.limit=10:i.limit=8,i.category_name=t.target.querySelector(".category-name").textContent.toLowerCase(),i.category_type=t.target.querySelector(".category-type").textContent.toLowerCase(),console.log(i.category_name,i.category_type);try{const s=await q.getExercisesWithParams(i);if(i.maxPage=s.totalPages,s.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=T(s.results),i.maxPage===1)return;E(i.page,i.maxPage)}catch(s){console.log(s)}finally{}}function Q({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function I(){try{const t=b.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await b.getQuote();b.setQuoteDataToLS(e),a.qouteWrap.insertAdjacentHTML("beforeend",Q(e))}else a.qouteWrap.insertAdjacentHTML("beforeend",Q(t.quote))}catch(t){k(t.message)}}function N(t){a.filterBtns.forEach(e=>{e.classList.remove("active-filter-btn")}),t.target.nodeName==="BUTTON"&&(t.target.classList.add("active-filter-btn"),D.setFilterQuery(t.target.textContent.trim()),console.log(D.getFilterQuery()))}a.searchForm.addEventListener("submit",F);I();a.filterBtnsList.addEventListener("click",N);a.categories.addEventListener("click",$);export{x as A,k as s};
//# sourceMappingURL=main-Bab_rDHI.js.map
