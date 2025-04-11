var T=Object.defineProperty;var D=(t,e,s)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var w=(t,e,s)=>D(t,typeof e!="symbol"?e+"":e,s);import{i as A,a as f}from"./assets/vendor-CBLHhzjb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const y="https://your-energy.b.goit.study/api";function M(t){return A.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}document.addEventListener("DOMContentLoaded",O);async function O(){const t=document.getElementById("categories-container"),e=window.innerWidth<768?9:12;try{const s=await f.get(`${y}/filters`,{params:{filter:"Muscles",page:1,limit:12}}),n=await f.get(`${y}/filters`,{params:{filter:"Muscles",page:2,limit:12}}),l=s.data.results.concat(n.data.results).sort(function(c,m){return c.name.localeCompare(m.name)}).slice(0,e);t.innerHTML="",l.forEach(function(c){const m=document.createElement("div");m.className="category-card",m.innerHTML=`
        <img
          src="${c.imgURL}"
          srcset="${c.imgURL} 1x, ${c.imgURL} 2x"
          alt="${c.name} exercise"
        />
        <div class="category-name">${c.name.charAt(0).toUpperCase()+c.name.slice(1)}</div>
        <div class="category-type">${c.filter}</div>
      `,t.appendChild(m)})}catch{M("Failed to load exercise categories. Please try again later.")}}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),s=document.querySelector(".mobile-menu-backdrop"),n=document.querySelectorAll(".menu-item"),r=document.querySelector(".js-header-nav-list"),i=document.querySelector(".logo"),l=document.querySelectorAll(".nav-link"),c=document.querySelectorAll(".menu-link"),m=(o,a)=>{o.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",o.classList.toggle("js-nav-link-active",a);const u=o.closest(".nav-item");u&&(u.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",u.classList.toggle("js-nav-item-active",a))},x=()=>{const o=localStorage.getItem("activePath"),a=window.location.pathname,u=a==="/"||a==="/index.html",q=a==="/"?"./index.html":`./${a.split("/").pop()}`;l.forEach(h=>{const g=h.getAttribute("href");m(h,o&&g===o||!o&&u&&g==="./index.html"||!o&&!u&&g===q)}),c.forEach(h=>{const g=h.getAttribute("href"),E=o&&g===o||!o&&u&&g==="./index.html"||!o&&!u&&g===q;h.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",h.classList.toggle("active",E)})};t&&s&&t.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&s&&e.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""}),n.forEach(o=>{const a=o.querySelector(".menu-link");a&&a.addEventListener("click",()=>{localStorage.setItem("activePath",a.getAttribute("href")),s&&(s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""),x()})}),r&&r.addEventListener("click",o=>{const a=o.target.closest(".nav-link");a&&(localStorage.setItem("activePath",a.getAttribute("href")),x())}),i&&i.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),x()}),x()});const d={exerciseModal:document.querySelector("#exercise-modal"),openExerciseModalBtn:document.querySelector(".exercise-header-button"),exercises:document.querySelector(".exercise-list"),searchForm:document.querySelector(".search-form"),qouteWrap:document.querySelector(".quote-wrap"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn")};class Q{async getExercises(){const{data:e}=await f.get(`${y}/exercises`);return e}async getExerciseById(e){const{data:s}=await f.get(`${y}/exercises/${e}`);return s}async getExercisesWithParams({category_type:e,category_name:s,limit:n,page:r,keyword:i}){const l={params:{[e]:s,limit:n,page:r,keyword:i}},{data:c}=await f.get(`${y}/exercises/`,l);return c}}const p=class p{getFilterQuery(){return p.filterQuery}setFilterQuery(e){p.filterQuery=e}async fetchFilteredData(e=12,s=1){const n={params:{filter:this.getFilterQuery(),limit:e,page:s}},{filteredData:r}=await f.get(`${y}/filters/`,n);return r}};w(p,"filterQuery","");let L=p;const v=class v{async getQuote(){const{data:e}=await f.get(`${y}/quote`);return e}setQuoteDataToLS(e,s=Date.now()){const n={quote:e,currentDate:s};localStorage.setItem(v.QUOTE_LS_KEY,JSON.stringify(n))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(v.QUOTE_LS_KEY))}};w(v,"QUOTE_LS_KEY","quote-and-date");let S=v;const B=new Q,P=new L,b=new S;function F(t){return t.map(e=>`<li class="exercise-item" data-id="${e.id}">
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
      </li>`).join("")}async function I(t){t.preventDefault();const e={page:1,limit:8,maxPage:1,keyword:"",category_type:"bodypart",category_name:"waist"};window.innerWidth>=768&&(e.limit=10),console.log(e);const n=t.currentTarget,r=n.elements.query.value.trim();if(console.log(r),r===""){d.exercises.innerHTML="",A.show({message:"Please entered your request"});return}e.keyword=r;try{const i=await B.getExercisesWithParams(e);if(e.maxPage=i.totalPages,i.results.length===0&&(d.exercises.innerHTML=""),d.exercises.innerHTML=F(i.results),e.maxPage===1)return}catch(i){console.log(i)}finally{n.reset()}}function $({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function C(){try{const t=b.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await b.getQuote();b.setQuoteDataToLS(e),d.qouteWrap.insertAdjacentHTML("beforeend",$(e))}else d.qouteWrap.insertAdjacentHTML("beforeend",$(t.quote))}catch(t){M(t.message)}}function k(t){d.filterBtns.forEach(e=>{e.classList.remove("active-filter-btn")}),t.target.nodeName==="BUTTON"&&(t.target.classList.add("active-filter-btn"),P.setFilterQuery(t.target.textContent.trim()),console.log(P.getFilterQuery()))}d.searchForm.addEventListener("submit",I);C();d.filterBtnsList.addEventListener("click",k);
//# sourceMappingURL=index.js.map
