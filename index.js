var H=Object.defineProperty;var O=(t,e,s)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var w=(t,e,s)=>O(t,typeof e!="symbol"?e+"":e,s);import{i as Q,a as y}from"./assets/vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const h="https://your-energy.b.goit.study/api",i={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"};function q(t){return Q.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}document.addEventListener("DOMContentLoaded",k);async function k(){const t=document.getElementById("categories-container"),e=window.innerWidth<768?9:12;try{const s=await y.get(`${h}/filters`,{params:{filter:"Muscles",page:1,limit:12}}),a=await y.get(`${h}/filters`,{params:{filter:"Muscles",page:2,limit:12}}),m=s.data.results.concat(a.data.results).sort(function(l,u){return l.name.localeCompare(u.name)}).slice(0,e);t.innerHTML="",m.forEach(function(l){const u=document.createElement("div");u.className="category-card",u.innerHTML=`
        <img
          src="${l.imgURL}"
          srcset="${l.imgURL} 1x, ${l.imgURL} 2x"
          alt="${l.name} exercise"
        />
        <div class="category-name">${l.name.charAt(0).toUpperCase()+l.name.slice(1)}</div>
        <div class="category-type">${l.filter}</div>
      `,t.appendChild(u)})}catch{q("Failed to load exercise categories. Please try again later.")}}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),s=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item"),r=document.querySelector(".js-header-nav-list"),o=document.querySelector(".logo"),m=document.querySelectorAll(".nav-link"),l=document.querySelectorAll(".menu-link"),u=(c,d)=>{c.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",c.classList.toggle("js-nav-link-active",d);const f=c.closest(".nav-item");f&&(f.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",f.classList.toggle("js-nav-item-active",d))},g=()=>{const c=localStorage.getItem("activePath"),d=window.location.pathname,f=d==="/"||d==="/index.html",C=d==="/"?"./index.html":`./${d.split("/").pop()}`;m.forEach(x=>{const p=x.getAttribute("href");u(x,c&&p===c||!c&&f&&p==="./index.html"||!c&&!f&&p===C)}),l.forEach(x=>{const p=x.getAttribute("href"),$=c&&p===c||!c&&f&&p==="./index.html"||!c&&!f&&p===C;x.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",x.classList.toggle("active",$)})};t&&s&&t.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&s&&e.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""}),a.forEach(c=>{const d=c.querySelector(".menu-link");d&&d.addEventListener("click",()=>{localStorage.setItem("activePath",d.getAttribute("href")),s&&(s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""),g()})}),r&&r.addEventListener("click",c=>{const d=c.target.closest(".nav-link");d&&(localStorage.setItem("activePath",d.getAttribute("href")),g())}),o&&o.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),g()}),g()});const n={exerciseModal:document.querySelector("#exercise-modal"),openExerciseModalBtn:document.querySelector(".exercise-header-button"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),qouteWrap:document.querySelector(".quote-wrap"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),categories:document.querySelector("#categories-container")};class B{async getExercises(){const{data:e}=await y.get(`${h}/exercises`);return e}async getExerciseById(e){const{data:s}=await y.get(`${h}/exercises/${e}`);return s}async getExercisesWithParams({category_type:e,category_name:s,limit:a=8,page:r=1,keyword:o=""}){const m={params:{[e]:s,limit:a,page:r,keyword:o}},{data:l}=await y.get(`${h}/exercises/`,m);return l}}const v=class v{getFilterQuery(){return v.filterQuery}setFilterQuery(e){v.filterQuery=e}async fetchFilteredData(e=12,s=1){const a={params:{filter:this.getFilterQuery(),limit:e,page:s}},{filteredData:r}=await y.get(`${h}/filters/`,a);return r}};w(v,"filterQuery","");let S=v;const L=class L{async getQuote(){const{data:e}=await y.get(`${h}/quote`);return e}setQuoteDataToLS(e,s=Date.now()){const a={quote:e,currentDate:s};localStorage.setItem(L.QUOTE_LS_KEY,JSON.stringify(a))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(L.QUOTE_LS_KEY))}};w(L,"QUOTE_LS_KEY","quote-and-date");let P=L;const E=new B,A=new S,b=new P;function M(t,e){const s=n.exercisePageWrapper;s.innerHTML="";const a=2,r=2;function o(u){const g=document.createElement("button");return g.classList.add("page-number"),g.textContent=u,u===t&&(g.disabled=!0,g.classList.add("active")),g.addEventListener("click",W),g}const m=Math.max(1,t-a),l=Math.min(e,t+r);for(let u=m;u<=l;u++)s.appendChild(o(u));console.log(t,e)}function T(t){return t.map(e=>`<li class="exercise-item" data-id="${e.id}">
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
      </li>`).join("")}async function W(t){const e=t.target.textContent;i.page=Number(e),n.exercisePageWrapper.innerHTML="",n.exercises.innerHTML="",window.innerWidth>=768?i.limit=10:i.limit=8;try{const a=await E.getExercisesWithParams(i);if(i.maxPage=a.totalPages,a.results.length===0&&(n.exercises.innerHTML=""),n.exercises.innerHTML=T(a.results),i.maxPage===1)return;M(i.page,i.maxPage)}catch(a){console.log(a)}finally{}}async function F(t){t.preventDefault(),n.exercisePageWrapper.innerHTML="",n.exercises.innerHTML="",i.page=1,window.innerWidth>=768?i.limit=10:i.limit=8;const s=t.currentTarget,a=s.elements.query.value.trim();if(a===""){q("Please entered your request");return}i.keyword=a;try{const r=await E.getExercisesWithParams(i);if(i.maxPage=r.totalPages,r.results.length===0&&(n.exercises.innerHTML=""),n.exercises.innerHTML=T(r.results),i.maxPage===1)return;M(i.page,i.maxPage)}catch(r){console.log(r)}finally{s.reset()}}async function I(t){if(t.preventDefault(),n.searchForm.classList.add("active-search-form"),n.exercisePageWrapper.innerHTML="",n.exercises.innerHTML="",i.page=1,i.keyword="",t.target===t.currentTarget)return;window.innerWidth>=768?i.limit=10:i.limit=8,i.category_name=t.target.querySelector(".category-name").textContent.toLowerCase(),i.category_type=t.target.querySelector(".category-type").textContent.toLowerCase(),console.log(i.category_name,i.category_type);try{const s=await E.getExercisesWithParams(i);if(i.maxPage=s.totalPages,s.results.length===0&&(n.exercises.innerHTML=""),n.exercises.innerHTML=T(s.results),i.maxPage===1)return;M(i.page,i.maxPage)}catch(s){console.log(s)}finally{}}function D({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function R(){try{const t=b.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await b.getQuote();b.setQuoteDataToLS(e),n.qouteWrap.insertAdjacentHTML("beforeend",D(e))}else n.qouteWrap.insertAdjacentHTML("beforeend",D(t.quote))}catch(t){q(t.message)}}function N(t){n.filterBtns.forEach(e=>{e.classList.remove("active-filter-btn")}),t.target.nodeName==="BUTTON"&&(t.target.classList.add("active-filter-btn"),A.setFilterQuery(t.target.textContent.trim()),console.log(A.getFilterQuery()))}n.searchForm.addEventListener("submit",F);R();n.filterBtnsList.addEventListener("click",N);n.categories.addEventListener("click",I);
//# sourceMappingURL=index.js.map
