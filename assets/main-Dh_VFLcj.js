var W=Object.defineProperty;var k=(t,e,r)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var w=(t,e,r)=>k(t,typeof e!="symbol"?e+"":e,r);import{i as I,a as v}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const L="https://your-energy.b.goit.study/api",i={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"},O={Muscles:"muscles",Equipment:"equipment",Bodyparts:"bodypart"};function S(t){return I.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function N(t){return I.success({title:"Success",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}class R{async getExercises(){const{data:e}=await v.get(`${L}/exercises`);return e}async getExerciseById(e){const{data:r}=await v.get(`${L}/exercises/${e}`);return r}async getExercisesWithParams({category_type:e,category_name:r,limit:o=8,page:s=1,keyword:n=""}){const c={[e]:r,limit:o,page:s};n&&(c.keyword=n);const{data:d}=await v.get(`${L}/exercises`,{params:c});return d}}const h=class h{getFilterQuery(){return h.filterQuery===""?"Muscles":h.filterQuery}setFilterQuery(e){h.filterQuery=e}async fetchFilteredData(e,r,o){const s={filter:e,limit:r,page:o};return(await v.get(`${L}/filters`,{params:s})).data}};w(h,"filterQuery","");let E=h;class U{constructor(){w(this,"email","")}getFormData(){this.email=document.getElementById("email").value.trim()}verifyData(){return console.log(this.email),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)?(document.getElementById("email").value="",!0):(console.log(this.email),S("Please enter a valid email address."),!1)}async postEmail(){try{const e=await v.post(`${L}/subscription`,{email:this.email})}catch{S("Subscription failed.");return}N("Email address added to subscriptions.")}}const b=class b{async getQuote(){const{data:e}=await v.get(`${L}/quote`);return e}setQuoteDataToLS(e,r=Date.now()){const o={quote:e,currentDate:r};localStorage.setItem(b.QUOTE_LS_KEY,JSON.stringify(o))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(b.QUOTE_LS_KEY))}};w(b,"QUOTE_LS_KEY","quote-and-date");let M=b;const x=class x{getNextPage(){return x.page}getPreviousPage(){return x.page}getCurrentPage(){return x.page}};w(x,"page",1);let T=x;const D=new R,C=new E,P=new U,q=new M,j=new T;document.addEventListener("DOMContentLoaded",Q);async function Q(){const t=document.getElementById("categories-container"),e=C.getFilterQuery(),r=window.innerWidth<768?9:12,o=j.getCurrentPage();try{const n=(await C.fetchFilteredData(e,r,o)).results.sort(function(c,d){return c.name.localeCompare(d.name)});t.innerHTML="",n.forEach(function(c){const d=document.createElement("div");d.className="category-card",d.innerHTML=`
        <img
          src="${c.imgURL}"
          srcset="${c.imgURL} 1x, ${c.imgURL} 2x"
          alt="${c.name} exercise"
        />
        <div class="category-name">${c.name.charAt(0).toUpperCase()+c.name.slice(1)}</div>
        <div class="category-type">${c.filter}</div>
      `,t.appendChild(d)})}catch{S("Failed to load exercise categories. Please try again later.")}}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),r=document.querySelector(".mobile-menu-backdrop"),o=document.querySelectorAll(".menu-item"),s=document.querySelector(".js-header-nav-list"),n=document.querySelector(".logo"),c=document.querySelectorAll(".nav-link"),d=document.querySelectorAll(".menu-link"),g=(l,u)=>{l.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",l.classList.toggle("js-nav-link-active",u);const f=l.closest(".nav-item");f&&(f.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",f.classList.toggle("js-nav-item-active",u))},m=()=>{const l=localStorage.getItem("activePath"),u=window.location.pathname,f=u==="/"||u==="/index.html",H=u==="/"?"./index.html":`./${u.split("/").pop()}`;c.forEach(y=>{const p=y.getAttribute("href");g(y,l&&p===l||!l&&f&&p==="./index.html"||!l&&!f&&p===H)}),d.forEach(y=>{const p=y.getAttribute("href"),F=l&&p===l||!l&&f&&p==="./index.html"||!l&&!f&&p===H;y.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",y.classList.toggle("active",F)})};t&&r&&t.addEventListener("click",()=>{r.style.transition="opacity 300ms ease, visibility 300ms ease",r.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&r&&e.addEventListener("click",()=>{r.style.transition="opacity 300ms ease, visibility 300ms ease",r.classList.remove("is-open"),document.body.style.overflow=""}),o.forEach(l=>{const u=l.querySelector(".menu-link");u&&u.addEventListener("click",()=>{localStorage.setItem("activePath",u.getAttribute("href")),r&&(r.style.transition="opacity 300ms ease, visibility 300ms ease",r.classList.remove("is-open"),document.body.style.overflow=""),m()})}),s&&s.addEventListener("click",l=>{const u=l.target.closest(".nav-link");u&&(localStorage.setItem("activePath",u.getAttribute("href")),m())}),n&&n.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),m()}),m()});const a={exerciseModal:document.querySelector("#exercise-modal"),openExerciseModalBtn:document.querySelector(".exercise-header-button"),exerciseContainer:document.querySelector(".exercise-container"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),qouteWrap:document.querySelector(".quote-wrap"),exercisesHeader:document.querySelector(".exercises-header"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),cardContainer:document.querySelector(".card-container"),categories:document.querySelector("#categories-container"),categoriesWrap:document.querySelector(".category-page-wrapper"),footerForm:document.querySelector(".footer-form")};function $(t,e){const r=a.exercisePageWrapper;r.innerHTML="";const o=2,s=2;function n(g){const m=document.createElement("button");return m.classList.add("page-number"),m.textContent=g,g===t&&(m.disabled=!0,m.classList.add("active")),m.addEventListener("click",z),m}const c=Math.max(1,t-o),d=Math.min(e,t+s);for(let g=c;g<=d;g++)r.appendChild(n(g));console.log(t,e)}function A(t){return t.map(e=>`<li class="exercise-item" data-id="${e.id}">
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
      </li>`).join("")}async function z(t){const e=t.target.textContent;i.page=Number(e),a.exercisePageWrapper.innerHTML="",a.exercises.innerHTML="",window.innerWidth>=768?i.limit=10:i.limit=8;try{const o=await D.getExercisesWithParams(i);if(i.maxPage=o.totalPages,o.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=A(o.results),i.maxPage===1)return;$(i.page,i.maxPage)}catch(o){console.log(o)}finally{}}async function K(t){t.preventDefault();const e=t.currentTarget,r=e.elements.query.value.trim();if(r===""){S("Please entered your request");return}a.exercisePageWrapper.innerHTML="",a.exercises.innerHTML="",i.page=1,window.innerWidth>=768?i.limit=10:i.limit=8,i.keyword=r;try{const s=await D.getExercisesWithParams(i);if(i.maxPage=s.totalPages,s.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=A(s.results),i.maxPage===1)return;$(i.page,i.maxPage)}catch(s){console.log(s)}finally{e.reset()}}async function _(t){if(t.preventDefault(),t.target===t.currentTarget)return;a.searchForm.classList.add("active-search-form"),a.exerciseContainer.classList.remove("hidden"),a.exercises.innerHTML="",a.cardContainer.classList.add("hidden"),a.exercisePageWrapper.innerHTML="",i.page=1,i.keyword="",window.innerWidth>=768?i.limit=10:i.limit=8,i.category_name=t.target.querySelector(".category-name").textContent,i.category_type=O[t.target.querySelector(".category-type").textContent.replace(/\s/g,"")],a.exercisesHeader.innerHTML=`Exercises / <span class="exercise-header-category">${i.category_name}</span>`,i.category_name=i.category_name.toLowerCase();try{const r=await D.getExercisesWithParams(i);if(i.maxPage=r.totalPages,r.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=A(r.results),i.maxPage===1)return;$(i.page,i.maxPage)}catch(r){console.log(r)}finally{}}function B({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function Y(){try{const t=q.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await q.getQuote();q.setQuoteDataToLS(e),a.qouteWrap.insertAdjacentHTML("beforeend",B(e))}else a.qouteWrap.insertAdjacentHTML("beforeend",B(t.quote))}catch(t){S(t.message)}}function J(t){a.filterBtns.forEach(e=>{e.classList.remove("active-filter-btn")}),t.target.nodeName==="BUTTON"&&(t.target.classList.add("active-filter-btn"),a.searchForm.classList.remove("active-search-form"),a.cardContainer.classList.remove("hidden"),a.exerciseContainer.classList.add("hidden"),a.exercisesHeader.innerHTML="Exercises",C.setFilterQuery(t.target.textContent.trim()),Q())}async function Z(t){t.preventDefault(),P.getFormData(),P.verifyData()&&P.postEmail()}a.searchForm.addEventListener("submit",K);Y();a.filterBtnsList.addEventListener("click",J);a.footerForm.addEventListener("submit",Z);a.categories.addEventListener("click",_);
//# sourceMappingURL=main-Dh_VFLcj.js.map
