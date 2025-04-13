var b=Object.defineProperty;var $=(t,e,r)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var m=(t,e,r)=>$(t,typeof e!="symbol"?e+"":e,r);import{a as i,i as x}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const w={exerciseModal:document.querySelector("#exercise-modal"),exerciseContainer:document.querySelector(".exercise-container"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),quoteWrap:document.querySelector(".quote-wrap"),exercisesHeader:document.querySelector(".exercises-header"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),cardContainer:document.querySelector(".card-container"),categories:document.querySelector("#categories-container"),categoriesWrap:document.querySelector(".category-page-wrapper"),footerForm:document.querySelector(".footer-form"),giveRatingModal:document.querySelector("#give-rating-modal"),ratingBlock:document.querySelector(".rating-modal-rating-block"),ratingDisplay:document.querySelector(".rating-modal-rating"),scrollUp:document.querySelector(".scroll-to-top"),footerYear:document.querySelector(".footer-year")},n="https://your-energy.b.goit.study/api",O={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"},Q={Muscles:"muscles",Equipment:"equipment",Bodyparts:"bodypart"},A="Oops! We couldn't find any exercises matching your search. Try another keyword and keep moving! 💪";class D{async getExercises(){const{data:e}=await i.get(`${n}/exercises`);return e}async getExerciseById(e){try{const{data:r}=await i.get(`${n}/exercises/${e}`);return r}catch(r){throw console.error("Error fetching exercise by ID:",r),r}}async getExercisesWithParams({category_type:e,category_name:r,limit:o=8,page:s=1,keyword:a=""}){const c={[e]:r,limit:o,page:s};a&&(c.keyword=a);const{data:v}=await i.get(`${n}/exercises`,{params:c});return v}async updateRating(e,r){try{const{data:o}=await i.patch(`${n}/exercises/${e}/rating`,r);return o}catch(o){throw o}}}const u=class u{getFilterQuery(){return u.filterQuery===""?"Muscles":u.filterQuery}setFilterQuery(e){u.filterQuery=e}async fetchFilteredData(e,r,o){const s={filter:e,limit:r,page:o};return(await i.get(`${n}/filters`,{params:s})).data}};m(u,"filterQuery","");let y=u;function l(t){return x.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function E(t){return x.success({title:"Success",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function W(t,e,r){const o=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return t?!e||!o.test(e)?(l("Please enter a valid email address."),!1):r?!0:(l("Please enter a comment."),!1):(l("Please select a rating before submitting."),!1)}function g(t,e){return t.length>e?t.slice(0,e-1)+"...":t}function S(t,e){return`${t} / ${e} min`}class P{constructor(){m(this,"email","")}getFormData(){this.email=document.getElementById("email").value.trim()}verifyData(){return console.log(this.email),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)?(document.getElementById("email").value="",!0):(console.log(this.email),l("Please enter a valid email address."),!1)}async postEmail(){try{const e=await i.post(`${n}/subscription`,{email:this.email})}catch(e){l(e.response.data.message);return}E("Email address added to subscriptions.")}}const d=class d{async getQuote(){const{data:e}=await i.get(`${n}/quote`);return e}setQuoteDataToLS(e,r=Date.now()){const o={quote:e,currentDate:r};localStorage.setItem(d.QUOTE_LS_KEY,JSON.stringify(o))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(d.QUOTE_LS_KEY))}};m(d,"QUOTE_LS_KEY","quote-and-date");let h=d;const B=new D,F=new y,I=new P,f=new h,p="/advancedjs_group02/assets/icons-DsHkvW1c.svg";function M(t){return t.map(e=>`<li class="exercise-item" data-id="${e._id}">
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
              <use href="${p}#star"></use>
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
              <use href="${p}#arrow-right"></use>
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
              <use href="${p}#running-man"></use>
            </svg>
          </div>
          <h3 class="exercise-title-text">${window.innerWidth<1440?g(e.name,25):e.name}</h3>
        </div>
        <ul class="exercise-footer">
          <li>
            <span class="exercise-footer-item-accent">Burned calories:</span>
            ${window.innerWidth<1440?g(S(e.burnedCalories,e.time),6):S(e.burnedCalories,e.time)}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Body part:</span>
            ${window.innerWidth<1440?g(e.bodyPart,4):e.bodyPart}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Target:</span>
            ${window.innerWidth<1440?g(e.target,3):e.target}
          </li>
        </ul>
      </li>`).join("")}function q({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function R(){try{const t=f.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await f.getQuote();f.setQuoteDataToLS(e),w.quoteWrap.insertAdjacentHTML("beforeend",q(e))}else w.quoteWrap.insertAdjacentHTML("beforeend",q(t.quote))}catch(t){l(t.message)}}export{D as E,M as a,I as b,Q as c,E as d,B as e,F as f,W as g,R as h,p as i,A as n,O as q,w as r,l as s};
//# sourceMappingURL=quote-eFGLzBdb.js.map
