var T=Object.defineProperty;var Q=(r,e,t)=>e in r?T(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var v=(r,e,t)=>Q(r,typeof e!="symbol"?e+"":e,t);import{a as d,i as I}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const r=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),t=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item"),s=document.querySelector(".js-header-nav-list"),o=document.querySelector(".logo"),c=document.querySelectorAll(".nav-link"),S=document.querySelectorAll(".menu-link"),O=(i,n)=>{i.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",i.classList.toggle("js-nav-link-active",n);const l=i.closest(".nav-item");l&&(l.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",l.classList.toggle("js-nav-item-active",n))},h=()=>{const i=localStorage.getItem("activePath"),n=window.location.pathname,l=n==="/"||n==="/index.html",E=n==="/"?"./index.html":`./${n.split("/").pop()}`;c.forEach(g=>{const u=g.getAttribute("href");O(g,i&&u===i||!i&&l&&u==="./index.html"||!i&&!l&&u===E)}),S.forEach(g=>{const u=g.getAttribute("href"),P=i&&u===i||!i&&l&&u==="./index.html"||!i&&!l&&u===E;g.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",g.classList.toggle("active",P)})};r&&t&&r.addEventListener("click",()=>{t.style.transition="opacity 300ms ease, visibility 300ms ease",t.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&t&&e.addEventListener("click",()=>{t.style.transition="opacity 300ms ease, visibility 300ms ease",t.classList.remove("is-open"),document.body.style.overflow=""}),a.forEach(i=>{const n=i.querySelector(".menu-link");n&&n.addEventListener("click",()=>{localStorage.setItem("activePath",n.getAttribute("href")),t&&(t.style.transition="opacity 300ms ease, visibility 300ms ease",t.classList.remove("is-open"),document.body.style.overflow=""),h()})}),s&&s.addEventListener("click",i=>{const n=i.target.closest(".nav-link");n&&(localStorage.setItem("activePath",n.getAttribute("href")),h())}),o&&o.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),h()}),h()});const $={exerciseModal:document.querySelector("#exercise-modal"),exerciseContainer:document.querySelector(".exercise-container"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),quoteWrap:document.querySelector(".quote-wrap"),exercisesHeader:document.querySelector(".exercises-header"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),cardContainer:document.querySelector(".card-container"),categories:document.querySelector("#categories-container"),categoriesWrap:document.querySelector(".category-page-wrapper"),footerForm:document.querySelector(".footer-form"),giveRatingModal:document.querySelector("#give-rating-modal"),ratingBlock:document.querySelector(".rating-modal-rating-block"),ratingDisplay:document.querySelector(".rating-modal-rating"),scrollUp:document.querySelector(".scroll-to-top"),footerYear:document.querySelector(".footer-year")},m="https://your-energy.b.goit.study/api",j={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"},z={Muscles:"muscles",Equipment:"equipment",Bodyparts:"bodypart"},C="Oops! We couldn't find any exercises matching your search. Try another keyword and keep moving! 💪";class k{async getExercises(){const{data:e}=await d.get(`${m}/exercises`);return e}async getExerciseById(e){try{const{data:t}=await d.get(`${m}/exercises/${e}`);return t}catch(t){throw console.error("Error fetching exercise by ID:",t),t}}async getExercisesWithParams({category_type:e,category_name:t,limit:a=8,page:s=1,keyword:o=""}){const c={[e]:t,limit:a,page:s};o&&(c.keyword=o);const{data:S}=await d.get(`${m}/exercises`,{params:c});return S}async updateRating(e,t){try{const{data:a}=await d.patch(`${m}/exercises/${e}/rating`,t);return a}catch(a){throw a}}}const f=class f{getFilterQuery(){return f.filterQuery===""?"Muscles":f.filterQuery}setFilterQuery(e){f.filterQuery=e}async fetchFilteredData(e,t,a){const s={filter:e,limit:t,page:a};return(await d.get(`${m}/filters`,{params:s})).data}};v(f,"filterQuery","");let x=f;function y(r){return I.error({title:"Error",message:r,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function B(r){return I.success({title:"Success",message:r,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function R(r,e,t){const a=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return r?!e||!a.test(e)?(y("Please enter a valid email address."),!1):t?!0:(y("Please enter a comment."),!1):(y("Please select a rating before submitting."),!1)}function w(r,e){return r.length>e?r.slice(0,e-1)+"...":r}function A(r,e){return`${r} / ${e} min`}class M{constructor(){v(this,"email","")}getFormData(){this.email=document.getElementById("email").value.trim()}verifyData(){return console.log(this.email),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)?(document.getElementById("email").value="",!0):(console.log(this.email),y("Please enter a valid email address."),!1)}async postEmail(){try{const e=await d.post(`${m}/subscription`,{email:this.email})}catch(e){y(e.response.data.message);return}B("Email address added to subscriptions.")}}const p=class p{async getQuote(){const{data:e}=await d.get(`${m}/quote`);return e}setQuoteDataToLS(e,t=Date.now()){const a={quote:e,currentDate:t};localStorage.setItem(p.QUOTE_LS_KEY,JSON.stringify(a))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(p.QUOTE_LS_KEY))}};v(p,"QUOTE_LS_KEY","quote-and-date");let L=p;const N=new k,U=new x,_=new M,b=new L,q="/advancedjs_group02/assets/icons-DsHkvW1c.svg";function H(r,e=!1){return r.map(t=>`<li class="exercise-item" data-id="${t._id}">
        <div class="exercise-header">
          <p class="exercise-header-badge">WORKOUT</p>
          <div class="exercise-header-rating">
            <p>${e?"":t.rating}</p>
            <svg
              class="${e?"favorite-exercise-rating-icon":"exercise-rating-icon"}"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="${q}#${e?"trash":"star"}"></use>
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
              <use href="${q}#arrow-right"></use>
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
              <use href="${q}#running-man"></use>
            </svg>
          </div>
          <h3 class="exercise-title-text">${window.innerWidth<1440?w(t.name,25):t.name}</h3>
        </div>
        <ul class="exercise-footer">
          <li>
            <span class="exercise-footer-item-accent">Burned calories:</span>
            ${window.innerWidth<1440?w(A(t.burnedCalories,t.time),6):A(t.burnedCalories,t.time)}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Body part:</span>
            ${window.innerWidth<1440?w(t.bodyPart,4):t.bodyPart}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Target:</span>
            ${window.innerWidth<1440?w(t.target,3):t.target}
          </li>
        </ul>
      </li>`).join("")}function D({author:r,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${r}</p>`}async function K(){try{const r=b.getQuoteDataFromLS();if(!r||Date.now()!==r.currentDate){const e=await b.getQuote();b.setQuoteDataToLS(e),$.quoteWrap.insertAdjacentHTML("beforeend",D(e))}else $.quoteWrap.insertAdjacentHTML("beforeend",D(r.quote))}catch(r){y(r.message)}}export{k as E,H as a,_ as b,z as c,B as d,N as e,U as f,R as g,K as h,q as i,C as n,j as q,$ as r,y as s};
//# sourceMappingURL=quote-D0xpoCrY.js.map
