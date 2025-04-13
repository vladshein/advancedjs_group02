var Q=Object.defineProperty;var N=(t,e,s)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var $=(t,e,s)=>N(t,typeof e!="symbol"?e+"":e,s);import{a as h,i as W}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),s=document.querySelector(".mobile-menu-backdrop"),r=document.querySelectorAll(".menu-item"),i=document.querySelector(".js-header-nav-list"),o=document.querySelector(".logo"),l=document.querySelectorAll(".nav-link"),p=document.querySelectorAll(".menu-link"),b=(c,d)=>{c.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",c.classList.toggle("js-nav-link-active",d);const f=c.closest(".nav-item");f&&(f.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",f.classList.toggle("js-nav-item-active",d))},u=()=>{const c=localStorage.getItem("activePath"),d=window.location.pathname,f=d==="/"||d==="/index.html",P=d==="/"?"./index.html":`./${d.split("/").pop()}`;l.forEach(v=>{const y=v.getAttribute("href");b(v,c&&y===c||!c&&f&&y==="./index.html"||!c&&!f&&y===P)}),p.forEach(v=>{const y=v.getAttribute("href"),E=c&&y===c||!c&&f&&y==="./index.html"||!c&&!f&&y===P;v.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",v.classList.toggle("active",E)})};t&&s&&t.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&s&&e.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""}),r.forEach(c=>{const d=c.querySelector(".menu-link");d&&d.addEventListener("click",()=>{localStorage.setItem("activePath",d.getAttribute("href")),s&&(s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""),u()})}),i&&i.addEventListener("click",c=>{const d=c.target.closest(".nav-link");d&&(localStorage.setItem("activePath",d.getAttribute("href")),u())}),o&&o.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),u()}),u()});const a={exerciseModal:document.querySelector("#exercise-modal"),exerciseContainer:document.querySelector(".exercise-container"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),quoteWrap:document.querySelector(".quote-wrap"),exercisesHeader:document.querySelector(".exercises-header"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),cardContainer:document.querySelector(".card-container"),categories:document.querySelector("#categories-container"),categoriesWrap:document.querySelector(".category-page-wrapper"),footerForm:document.querySelector(".footer-form"),giveRatingModal:document.querySelector("#give-rating-modal"),ratingBlock:document.querySelector(".rating-modal-rating-block"),ratingDisplay:document.querySelector(".rating-modal-rating"),footerYear:document.querySelector(".footer-year")},x="https://your-energy.b.goit.study/api",n={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"},_={Muscles:"muscles",Equipment:"equipment",Bodyparts:"bodypart"},O="Oops! We couldn't find any exercises matching your search. Try another keyword and keep moving! 💪";class U{async getExercises(){const{data:e}=await h.get(`${x}/exercises`);return e}async getExerciseById(e){try{const{data:s}=await h.get(`${x}/exercises/${e}`);return s}catch(s){throw console.error("Error fetching exercise by ID:",s),s}}async getExercisesWithParams({category_type:e,category_name:s,limit:r=8,page:i=1,keyword:o=""}){const l={[e]:s,limit:r,page:i};o&&(l.keyword=o);const{data:p}=await h.get(`${x}/exercises`,{params:l});return p}async updateRating(e,s){try{const{data:r}=await h.patch(`${x}/exercises/${e}/rating`,s);return r}catch(r){throw r}}}const L=class L{getFilterQuery(){return L.filterQuery===""?"Muscles":L.filterQuery}setFilterQuery(e){L.filterQuery=e}async fetchFilteredData(e,s,r){const i={filter:e,limit:s,page:r};return(await h.get(`${x}/filters`,{params:i})).data}};$(L,"filterQuery","");let D=L;function m(t){return W.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function w(t){return W.success({title:"Success",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function j(t,e,s){const r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return t?!e||!r.test(e)?(m("Please enter a valid email address."),!1):s?!0:(m("Please enter a comment."),!1):(m("Please select a rating before submitting."),!1)}function q(t,e){return t.length>e?t.slice(0,e-1)+"...":t}class z{constructor(){$(this,"email","")}getFormData(){this.email=document.getElementById("email").value.trim()}verifyData(){return console.log(this.email),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)?(document.getElementById("email").value="",!0):(console.log(this.email),m("Please enter a valid email address."),!1)}async postEmail(){try{const e=await h.post(`${x}/subscription`,{email:this.email})}catch(e){m(e.response.data.message);return}w("Email address added to subscriptions.")}}const S=class S{async getQuote(){const{data:e}=await h.get(`${x}/quote`);return e}setQuoteDataToLS(e,s=Date.now()){const r={quote:e,currentDate:s};localStorage.setItem(S.QUOTE_LS_KEY,JSON.stringify(r))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(S.QUOTE_LS_KEY))}};$(S,"QUOTE_LS_KEY","quote-and-date");let F=S;const M=new U,A=new D,T=new z,C=new F;function k(t,e,s,r){t.innerHTML="";const i=2,o=2;function l(u){const c=document.createElement("button");return c.classList.add("page-number"),c.textContent=u,u===e&&(c.disabled=!0,c.classList.add("active")),c.addEventListener("click",r),c}const p=Math.max(1,e-i),b=Math.min(s,e+o);for(let u=p;u<=b;u++)t.appendChild(l(u))}const g="/advancedjs_group02/assets/icons-DsHkvW1c.svg";function R(t){return t.map(e=>`<li class="exercise-item" data-id="${e._id}">
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
              <use href="${g}#star"></use>
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
              <use href="${g}#arrow-right"></use>
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
              <use href="${g}#running-man"></use>
            </svg>
          </div>
          <h3 class="exercise-title-text">${window.innerWidth<=1440?q(e.name,25):e.name}</h3>
        </div>
        <ul class="exercise-footer">
          <li>
            <span class="exercise-footer-item-accent">Burned calories:</span>
            ${window.innerWidth<=1440?q(e.burnedCalories,8):e.burnedCalories}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Body part:</span>
            ${window.innerWidth<=1440?q(e.bodyPart,5):e.bodyPart}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Target:</span>
            ${window.innerWidth<=1440?q(e.target,4):e.target}
          </li>
        </ul>
      </li>`).join("")}async function B(t){const e=t.target.textContent;n.page=Number(e),n.limit=window.innerWidth>=768?10:8,a.exercisePageWrapper.innerHTML="",a.exercises.innerHTML="";try{const s=await M.getExercisesWithParams(n);if(n.maxPage=s.totalPages,a.exercises.innerHTML=R(s.results),n.maxPage===1)return;k(a.exercisePageWrapper,n.page,n.maxPage,B)}catch{m("Failed to load exercises. Please try again later.")}finally{}}async function Y(t){t.preventDefault();const e=t.currentTarget,s=e.elements.query.value.trim();if(s===""){m("Please entered your request");return}a.exercisePageWrapper.innerHTML="",a.exercises.innerHTML="",n.page=1,n.limit=window.innerWidth>=768?10:8,n.keyword=s;try{const r=await M.getExercisesWithParams(n);if(n.maxPage=r.totalPages,r.results.length===0){a.exercises.innerHTML=`<p class="exercise-title-text">${O}</p>`;return}if(a.exercises.innerHTML=R(r.results),n.maxPage===1)return;k(a.exercisePageWrapper,n.page,n.maxPage,B)}catch{m("Failed to load exercises. Please try again later.")}finally{e.reset()}}async function J(t){if(t.preventDefault(),t.target!==t.currentTarget){a.exercises.innerHTML="",a.exercisePageWrapper.innerHTML="",a.searchForm.classList.add("active-search-form"),a.cardContainer.classList.add("hidden"),a.exerciseContainer.classList.remove("hidden"),n.page=1,n.keyword="",n.limit=window.innerWidth>=768?10:8,n.category_name=t.target.querySelector(".category-name").textContent,n.category_type=_[t.target.querySelector(".category-type").textContent.replace(/\s/g,"")],a.exercisesHeader.innerHTML=`Exercises / <span class="exercise-header-category">${n.category_name}</span>`,n.category_name=n.category_name.toLowerCase();try{const e=await M.getExercisesWithParams(n);if(n.maxPage=e.totalPages,e.results.length===0){a.exercises.innerHTML=`<p class="exercise-title-text">${O}</p>`;return}if(a.exercises.innerHTML=R(e.results),n.maxPage===1)return;k(a.exercisePageWrapper,n.page,n.maxPage,B)}catch{m("Failed to load exercises. Please try again later.")}finally{}}}function H({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function K(){try{const t=C.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await C.getQuote();C.setQuoteDataToLS(e),a.quoteWrap.insertAdjacentHTML("beforeend",H(e))}else a.quoteWrap.insertAdjacentHTML("beforeend",H(t.quote))}catch(t){m(t.message)}}async function I(t=1){const e=A.getFilterQuery(),s=window.innerWidth<768?9:12;try{const r=await A.fetchFilteredData(e,s,t),i=r.results.sort((o,l)=>o.name.localeCompare(l.name));a.categories.innerHTML="",i.forEach(o=>{const l=document.createElement("div");l.className="category-card",l.innerHTML=`
        <img
          src="${o.imgURL}"
          srcset="${o.imgURL} 1x, ${o.imgURL} 2x"
          alt="${o.name} exercise"
        />
        <div class="category-name">${o.name.charAt(0).toUpperCase()+o.name.slice(1)}</div>
        <div class="category-type">${o.filter}</div>
      `,a.categories.appendChild(l)}),a.categoriesWrap.innerHTML="",r.totalPages>1&&k(a.categoriesWrap,t,r.totalPages,G)}catch{m("Failed to load exercise categories. Please try again later.")}}function G(t){const e=Number(t.target.textContent);I(e)}function V(t){a.filterBtns.forEach(e=>{e.classList.remove("active-filter-btn")}),t.target.nodeName==="BUTTON"&&(t.target.classList.add("active-filter-btn"),a.searchForm.classList.remove("active-search-form"),a.cardContainer.classList.remove("hidden"),a.exerciseContainer.classList.add("hidden"),a.exercisesHeader.innerHTML="Exercises",A.setFilterQuery(t.target.textContent.trim()),I())}async function Z(t){t.preventDefault(),T.getFormData(),T.verifyData()&&T.postEmail()}function X(){const t=new Date().getFullYear();a.footerYear.textContent=`@${t}`}function ee(t){return`<div class="container">
    <form data-id=${t} class="rating-modal-form">
      <button class="close-modal-btn" type="button">
        <svg class="close-modal-icon">
          <use href="${g}#close"></use>
        </svg>
      </button>
      <h2 class="rating-modal-title">Rating</h2>
      <div class="rating-modal-rating-block">
        <p class="rating-modal-rating">0.0</p>
        <input type="radio" id="star-1" name="rating" value="1"/>
        <label for="star-1">
          <svg class="rating-modal-rating-icon">
            <use href="${g}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-2" name="rating" value="2" />
        <label for="star-2">
          <svg class="rating-modal-rating-icon">
            <use href="${g}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-3" name="rating" value="3" />
        <label for="star-3">
          <svg class="rating-modal-rating-icon">
            <use href="${g}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-4" name="rating" value="4" />
        <label for="star-4">
          <svg class="rating-modal-rating-icon">
            <use href="${g}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-5" name="rating" value="5" />
        <label for="star-5">
          <svg class="rating-modal-rating-icon">
            <use href="${g}#star"></use>
          </svg>
        </label>
      </div>
      <input
        type="email"
        name="email"
        class="rating-modal-email"
        placeholder="Email"
      />
      <textarea
        name="comment"
        class="rating-modal-comment"
        rows="4"
        placeholder="Your comment"
      ></textarea>
      <button class="btn primary-btn" type="submit">
        Send
    </form>
  </div>`}function te({_id:t,name:e,target:s,bodyPart:r,popularity:i,time:o,burnedCalories:l,rating:p,description:b,gifUrl:u,equipment:c}){var v;const f=Array.from({length:5},(y,E)=>`<svg class="exercise-modal-rating-icon ${E<Math.floor(p)?"rated":""}">
              <use href="${g}#star"></use>
            </svg>`).join(""),P=(v=localStorage.getItem("favorites"))==null?void 0:v.includes(t);return`<div data-id=${t} class="exercise-modal-card">
            <button class="close-modal-btn">
              <svg class="close-modal-icon">
                <use href="${g}#close"></use>
              </svg>
            </button>
            <div class="exercise-gif-wrapper">
              <img
                class="exercise-gif"
                src=${u}
                alt="alt text from backend here"
              />
            </div>
            <div class="exercise-modal-overview">
              <div>
                <h2 class="exercise-modal-title">${e}</h2>
                <div class="exercise-modal-rating-block">
                  <p class="exercise-modal-rating">${p}</p>
                  ${f}
                </div>
              </div>
              <div class="exercise-modal-info-block">
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Target</p>
                  <p class="exercise-modal-info-descr">${s}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Body Part</p>
                  <p class="exercise-modal-info-descr">${r}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Equipment</p>
                  <p class="exercise-modal-info-descr">${c}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Popular</p>
                  <p class="exercise-modal-info-descr">${i}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Burned Calories</p>
                  <p class="exercise-modal-info-descr">${l}/${o} min</p>
                </div>
              </div>
              <div class="exercise-modal-descr">${b}</div>
              <div class="exercise-modal-buttons-block">
              ${P?`<button id="remove-from-favorites" class="btn btn-primary">
                      Remove favorite
                      <svg class="exercise-modal-btn-icon">
                        <use href="${g}#trash"></use>
                      </svg>
                    </button>`:`<button id="add-to-favorites" class="btn btn-primary">
                      Add to favorites
                      <svg class="exercise-modal-btn-icon">
                        <use href="${g}#heart"></use>
                      </svg>
                    </button>`}
                <button id="give-rating" class="btn btn-secondary">Give a rating</button>
              </div>
            </div>
          </div>
          `}async function se(t){try{const e=await M.getExerciseById(t);a.exerciseModal.classList.add("is-open");const s=te(e);a.exerciseModal.innerHTML=s}catch(e){m(e.message)}}function ae(t){var i;const s=((i=localStorage.getItem("favorites"))==null?void 0:i.includes(t))?`<button id="remove-from-favorites" class="btn btn-primary">
         Remove favorite
         <svg class="exercise-modal-btn-icon">
           <use href="./images/icons.svg#trash"></use>
         </svg>
       </button>`:`<button id="add-to-favorites" class="btn btn-primary">
         Add to favorites
         <svg class="exercise-modal-btn-icon">
           <use href="./images/icons.svg#heart"></use>
         </svg>
       </button>`,r=document.querySelector(".exercise-modal-buttons-block");r&&(r.innerHTML=`
      ${s}
      <button id="give-rating" class="btn btn-secondary">Give a rating</button>
    `)}function re(t){try{const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t])),w("Exercise added to favorites!");else{const s=JSON.parse(e);if(!s.includes(t))localStorage.setItem("favorites",JSON.stringify([...s,t])),w("Exercise added to favorites!");else{const r=s.filter(i=>i!==t);localStorage.setItem("favorites",JSON.stringify(r)),w("Exercise removed from favorites!")}}ae(t)}catch(e){m(e.message)}}function ie(){document.addEventListener("click",t=>{if(a.exerciseModal.classList.contains("is-open")){if((t.target===a.exerciseModal||t.target.closest(".close-modal-btn"))&&a.exerciseModal.classList.remove("is-open"),t.target.closest("#add-to-favorites")||t.target.closest("#remove-from-favorites")){const e=t.target.closest(".exercise-modal-card").dataset.id;re(e)}if(t.target.closest("#give-rating")){a.exerciseModal.classList.remove("is-open"),a.giveRatingModal.classList.add("is-open");const e=t.target.closest(".exercise-modal-card").dataset.id,s=ee(e);a.giveRatingModal.innerHTML=s,a.ratingBlock=document.querySelector(".rating-modal-rating-block"),a.ratingDisplay=document.querySelector(".rating-modal-rating"),oe()}}a.giveRatingModal.classList.contains("is-open")&&(t.target===a.giveRatingModal||t.target.closest(".close-modal-btn"))&&(a.giveRatingModal.classList.remove("is-open"),a.exerciseModal.classList.add("is-open"))})}function oe(){a.ratingBlock.addEventListener("change",t=>{if(t.target.name==="rating"){const e=parseInt(t.target.value,10);a.ratingDisplay.textContent=e.toFixed(1),a.ratingBlock.querySelectorAll(".rating-modal-rating-icon").forEach((r,i)=>{i<e?r.style.fill="rgba(var(--cl-orange))":r.style.fill="rgba(var(--cl-lighthouse), 0.2)"})}})}function ne(){document.addEventListener("click",t=>{if(t.target.closest(".exercise-header-button")){const e=t.target.closest(".exercise-item").dataset.id;se(e)}})}function ce(){document.addEventListener("submit",async t=>{var s,r;t.preventDefault();const e=t.target;if(e.classList.contains("rating-modal-form")){const i=new FormData(e),o=e.querySelector('input[name="rating"]:checked'),l=i.get("email"),p=i.get("comment");if(!j(o,l,p))return;const u={rate:Number(o.value),email:l,review:p},c=e.dataset.id;try{await M.updateRating(c,u),a.giveRatingModal.classList.remove("is-open"),w("Rating submitted successfully!")}catch(d){const f=((r=(s=d.response)==null?void 0:s.data)==null?void 0:r.message)||"An unknown error occurred";m(f)}}})}a.searchForm.addEventListener("submit",Y);K();a.filterBtnsList.addEventListener("click",V);a.footerForm.addEventListener("submit",Z);a.categories.addEventListener("click",J);I();X();document.addEventListener("DOMContentLoaded",()=>{ie(),ne(),ce()});document.addEventListener("keydown",t=>{t.key==="Escape"&&(a.exerciseModal.classList.contains("is-open")&&a.exerciseModal.classList.remove("is-open"),a.giveRatingModal.classList.contains("is-open")&&(a.giveRatingModal.classList.remove("is-open"),a.exerciseModal.classList.add("is-open")))});
//# sourceMappingURL=main-BVfrPmA6.js.map
