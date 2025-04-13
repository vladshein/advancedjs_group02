var N=Object.defineProperty;var _=(t,e,a)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var $=(t,e,a)=>_(t,typeof e!="symbol"?e+"":e,a);import{a as x,i as O}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),a=document.querySelector(".mobile-menu-backdrop"),r=document.querySelectorAll(".menu-item"),i=document.querySelector(".js-header-nav-list"),o=document.querySelector(".logo"),l=document.querySelectorAll(".nav-link"),v=document.querySelectorAll(".menu-link"),b=(c,d)=>{c.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",c.classList.toggle("js-nav-link-active",d);const f=c.closest(".nav-item");f&&(f.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",f.classList.toggle("js-nav-item-active",d))},u=()=>{const c=localStorage.getItem("activePath"),d=window.location.pathname,f=d==="/"||d==="/index.html",P=d==="/"?"./index.html":`./${d.split("/").pop()}`;l.forEach(p=>{const y=p.getAttribute("href");b(p,c&&y===c||!c&&f&&y==="./index.html"||!c&&!f&&y===P)}),v.forEach(p=>{const y=p.getAttribute("href"),E=c&&y===c||!c&&f&&y==="./index.html"||!c&&!f&&y===P;p.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",p.classList.toggle("active",E)})};t&&a&&t.addEventListener("click",()=>{a.style.transition="opacity 300ms ease, visibility 300ms ease",a.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&a&&e.addEventListener("click",()=>{a.style.transition="opacity 300ms ease, visibility 300ms ease",a.classList.remove("is-open"),document.body.style.overflow=""}),r.forEach(c=>{const d=c.querySelector(".menu-link");d&&d.addEventListener("click",()=>{localStorage.setItem("activePath",d.getAttribute("href")),a&&(a.style.transition="opacity 300ms ease, visibility 300ms ease",a.classList.remove("is-open"),document.body.style.overflow=""),u()})}),i&&i.addEventListener("click",c=>{const d=c.target.closest(".nav-link");d&&(localStorage.setItem("activePath",d.getAttribute("href")),u())}),o&&o.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),u()}),u()});const s={exerciseModal:document.querySelector("#exercise-modal"),exerciseContainer:document.querySelector(".exercise-container"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),quoteWrap:document.querySelector(".quote-wrap"),exercisesHeader:document.querySelector(".exercises-header"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),cardContainer:document.querySelector(".card-container"),categories:document.querySelector("#categories-container"),categoriesWrap:document.querySelector(".category-page-wrapper"),footerForm:document.querySelector(".footer-form"),giveRatingModal:document.querySelector("#give-rating-modal"),ratingBlock:document.querySelector(".rating-modal-rating-block"),ratingDisplay:document.querySelector(".rating-modal-rating"),footerYear:document.querySelector(".footer-year")},h="https://your-energy.b.goit.study/api",n={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"},U={Muscles:"muscles",Equipment:"equipment",Bodyparts:"bodypart"},Q="Oops! We couldn't find any exercises matching your search. Try another keyword and keep moving! 💪";class j{async getExercises(){const{data:e}=await x.get(`${h}/exercises`);return e}async getExerciseById(e){try{const{data:a}=await x.get(`${h}/exercises/${e}`);return a}catch(a){throw console.error("Error fetching exercise by ID:",a),a}}async getExercisesWithParams({category_type:e,category_name:a,limit:r=8,page:i=1,keyword:o=""}){const l={[e]:a,limit:r,page:i};o&&(l.keyword=o);const{data:v}=await x.get(`${h}/exercises`,{params:l});return v}async updateRating(e,a){try{const{data:r}=await x.patch(`${h}/exercises/${e}/rating`,a);return r}catch(r){throw r}}}const L=class L{getFilterQuery(){return L.filterQuery===""?"Muscles":L.filterQuery}setFilterQuery(e){L.filterQuery=e}async fetchFilteredData(e,a,r){const i={filter:e,limit:a,page:r};return(await x.get(`${h}/filters`,{params:i})).data}};$(L,"filterQuery","");let D=L;function g(t){return O.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function w(t){return O.success({title:"Success",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function z(t,e,a){const r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return t?!e||!r.test(e)?(g("Please enter a valid email address."),!1):a?!0:(g("Please enter a comment."),!1):(g("Please select a rating before submitting."),!1)}function q(t,e){return t.length>e?t.slice(0,e-1)+"...":t}function I(t,e){return`${t} / ${e} min`}class Y{constructor(){$(this,"email","")}getFormData(){this.email=document.getElementById("email").value.trim()}verifyData(){return console.log(this.email),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)?(document.getElementById("email").value="",!0):(console.log(this.email),g("Please enter a valid email address."),!1)}async postEmail(){try{const e=await x.post(`${h}/subscription`,{email:this.email})}catch(e){g(e.response.data.message);return}w("Email address added to subscriptions.")}}const S=class S{async getQuote(){const{data:e}=await x.get(`${h}/quote`);return e}setQuoteDataToLS(e,a=Date.now()){const r={quote:e,currentDate:a};localStorage.setItem(S.QUOTE_LS_KEY,JSON.stringify(r))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(S.QUOTE_LS_KEY))}};$(S,"QUOTE_LS_KEY","quote-and-date");let F=S;const M=new j,H=new D,k=new Y,C=new F;function T(t,e,a,r){t.innerHTML="";const i=2,o=2;function l(u){const c=document.createElement("button");return c.classList.add("page-number"),c.textContent=u,u===e&&(c.disabled=!0,c.classList.add("active")),c.addEventListener("click",r),c}const v=Math.max(1,e-i),b=Math.min(a,e+o);for(let u=v;u<=b;u++)t.appendChild(l(u))}const m="/advancedjs_group02/assets/icons-DsHkvW1c.svg";function A(t){return t.map(e=>`<li class="exercise-item" data-id="${e._id}">
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
              <use href="${m}#star"></use>
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
              <use href="${m}#arrow-right"></use>
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
              <use href="${m}#running-man"></use>
            </svg>
          </div>
          <h3 class="exercise-title-text">${window.innerWidth<1440?q(e.name,25):e.name}</h3>
        </div>
        <ul class="exercise-footer">
          <li>
            <span class="exercise-footer-item-accent">Burned calories:</span>
            ${window.innerWidth<1440?q(I(e.burnedCalories,e.time),6):I(e.burnedCalories,e.time)}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Body part:</span>
            ${window.innerWidth<1440?q(e.bodyPart,4):e.bodyPart}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Target:</span>
            ${window.innerWidth<1440?q(e.target,3):e.target}
          </li>
        </ul>
      </li>`).join("")}async function R(t){const e=t.target.textContent;n.page=Number(e),n.limit=window.innerWidth>=768?10:8,s.exercisePageWrapper.innerHTML="",s.exercises.innerHTML="";try{s.exercises.innerHTML='<div class="loader"></div>';const a=await M.getExercisesWithParams(n);if(n.maxPage=a.totalPages,s.exercises.innerHTML=A(a.results),n.maxPage===1)return;T(s.exercisePageWrapper,n.page,n.maxPage,R)}catch{g("Failed to load exercises. Please try again later.")}}async function J(t){t.preventDefault();const e=t.currentTarget,a=e.elements.query.value.trim();s.exercisePageWrapper.innerHTML="",s.exercises.innerHTML="",n.page=1,n.limit=window.innerWidth>=768?10:8,n.keyword=a;try{s.exercises.innerHTML='<div class="loader"></div>';const r=await M.getExercisesWithParams(n);if(n.maxPage=r.totalPages,r.results.length===0){s.exercises.innerHTML=`<p class="exercise-title-text">${Q}</p>`;return}if(s.exercises.innerHTML=A(r.results),n.maxPage===1)return;T(s.exercisePageWrapper,n.page,n.maxPage,R)}catch{g("Failed to load exercises. Please try again later.")}finally{e.reset()}}async function K(t){if(t.preventDefault(),t.target!==t.currentTarget){s.exercises.innerHTML="",s.exercisePageWrapper.innerHTML="",s.searchForm.classList.add("active-search-form"),s.cardContainer.classList.add("hidden"),s.exerciseContainer.classList.remove("hidden"),n.page=1,n.keyword="",n.limit=window.innerWidth>=768?10:8,n.category_name=t.target.querySelector(".category-name").textContent,n.category_type=U[t.target.querySelector(".category-type").textContent.replace(/\s/g,"")],s.exercisesHeader.innerHTML=`Exercises / <span class="exercise-header-category">${n.category_name}</span>`,n.category_name=n.category_name.toLowerCase();try{s.exercises.innerHTML='<div class="loader"></div>';const e=await M.getExercisesWithParams(n);if(n.maxPage=e.totalPages,e.results.length===0){s.exercises.innerHTML=`<p class="exercise-title-text">${Q}</p>`;return}if(s.exercises.innerHTML=A(e.results),n.maxPage===1)return;T(s.exercisePageWrapper,n.page,n.maxPage,R)}catch{g("Failed to load exercises. Please try again later.")}}}function W({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function G(){try{const t=C.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await C.getQuote();C.setQuoteDataToLS(e),s.quoteWrap.insertAdjacentHTML("beforeend",W(e))}else s.quoteWrap.insertAdjacentHTML("beforeend",W(t.quote))}catch(t){g(t.message)}}async function B(t=1){s.categories.innerHTML='<div class="loader categories-loader"></div>';const e=H.getFilterQuery(),a=window.innerWidth<768?9:12;try{const r=await H.fetchFilteredData(e,a,t),i=r.results.sort((o,l)=>o.name.localeCompare(l.name));s.categories.innerHTML="",i.forEach(o=>{const l=document.createElement("div");l.className="category-card",l.innerHTML=`
        <img
          src="${o.imgURL}"
          srcset="${o.imgURL} 1x, ${o.imgURL} 2x"
          alt="${o.name} exercise"
        />
        <div class="category-name">${o.name.charAt(0).toUpperCase()+o.name.slice(1)}</div>
        <div class="category-type">${o.filter}</div>
      `,s.categories.appendChild(l)}),s.categoriesWrap.innerHTML="",r.totalPages>1&&T(s.categoriesWrap,t,r.totalPages,V)}catch{g("Failed to load exercise categories. Please try again later.")}}function V(t){const e=Number(t.target.textContent);B(e)}function Z(t){s.filterBtns.forEach(e=>{e.classList.remove("active-filter-btn")}),t.target.nodeName==="BUTTON"&&(t.target.classList.add("active-filter-btn"),s.searchForm.classList.remove("active-search-form"),s.cardContainer.classList.remove("hidden"),s.exerciseContainer.classList.add("hidden"),s.exercisesHeader.innerHTML="Exercises",H.setFilterQuery(t.target.textContent.trim()),B())}async function X(t){t.preventDefault(),k.getFormData(),k.verifyData()&&k.postEmail()}function ee(){const t=new Date().getFullYear();s.footerYear.textContent=`@${t}`}function te(t){return`<div class="container">
    <form data-id=${t} class="rating-modal-form">
      <button class="close-modal-btn" type="button">
        <svg class="close-modal-icon">
          <use href="${m}#close"></use>
        </svg>
      </button>
      <h2 class="rating-modal-title">Rating</h2>
      <div class="rating-modal-rating-block">
        <p class="rating-modal-rating">0.0</p>
        <input type="radio" id="star-1" name="rating" value="1"/>
        <label for="star-1">
          <svg class="rating-modal-rating-icon">
            <use href="${m}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-2" name="rating" value="2" />
        <label for="star-2">
          <svg class="rating-modal-rating-icon">
            <use href="${m}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-3" name="rating" value="3" />
        <label for="star-3">
          <svg class="rating-modal-rating-icon">
            <use href="${m}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-4" name="rating" value="4" />
        <label for="star-4">
          <svg class="rating-modal-rating-icon">
            <use href="${m}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-5" name="rating" value="5" />
        <label for="star-5">
          <svg class="rating-modal-rating-icon">
            <use href="${m}#star"></use>
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
  </div>`}function se({_id:t,name:e,target:a,bodyPart:r,popularity:i,time:o,burnedCalories:l,rating:v,description:b,gifUrl:u,equipment:c}){var p;const f=Array.from({length:5},(y,E)=>`<svg class="exercise-modal-rating-icon ${E<Math.floor(v)?"rated":""}">
              <use href="${m}#star"></use>
            </svg>`).join(""),P=(p=localStorage.getItem("favorites"))==null?void 0:p.includes(t);return`<div data-id=${t} class="exercise-modal-card">
            <button class="close-modal-btn">
              <svg class="close-modal-icon">
                <use href="${m}#close"></use>
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
                  <p class="exercise-modal-rating">${v}</p>
                  ${f}
                </div>
              </div>
              <div class="exercise-modal-info-block">
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Target</p>
                  <p class="exercise-modal-info-descr">${a}</p>
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
                        <use href="${m}#trash"></use>
                      </svg>
                    </button>`:`<button id="add-to-favorites" class="btn btn-primary">
                      Add to favorites
                      <svg class="exercise-modal-btn-icon">
                        <use href="${m}#heart"></use>
                      </svg>
                    </button>`}
                <button id="give-rating" class="btn btn-secondary">Give a rating</button>
              </div>
            </div>
          </div>
          `}async function ae(t){try{s.exerciseModal.classList.add("is-open"),s.exerciseModal.innerHTML='<div class="loader"></div>';const e=await M.getExerciseById(t),a=se(e);s.exerciseModal.innerHTML=a}catch(e){g(e.message)}}function re(t){var i;const a=((i=localStorage.getItem("favorites"))==null?void 0:i.includes(t))?`<button id="remove-from-favorites" class="btn btn-primary">
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
      ${a}
      <button id="give-rating" class="btn btn-secondary">Give a rating</button>
    `)}function ie(t){try{const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t])),w("Exercise added to favorites!");else{const a=JSON.parse(e);if(!a.includes(t))localStorage.setItem("favorites",JSON.stringify([...a,t])),w("Exercise added to favorites!");else{const r=a.filter(i=>i!==t);localStorage.setItem("favorites",JSON.stringify(r)),w("Exercise removed from favorites!")}}re(t)}catch(e){g(e.message)}}function oe(){document.addEventListener("click",t=>{if(s.exerciseModal.classList.contains("is-open")){if((t.target===s.exerciseModal||t.target.closest(".close-modal-btn"))&&s.exerciseModal.classList.remove("is-open"),t.target.closest("#add-to-favorites")||t.target.closest("#remove-from-favorites")){const e=t.target.closest(".exercise-modal-card").dataset.id;ie(e)}if(t.target.closest("#give-rating")){s.exerciseModal.classList.remove("is-open"),s.giveRatingModal.classList.add("is-open");const e=t.target.closest(".exercise-modal-card").dataset.id,a=te(e);s.giveRatingModal.innerHTML=a,s.ratingBlock=document.querySelector(".rating-modal-rating-block"),s.ratingDisplay=document.querySelector(".rating-modal-rating"),ne()}}s.giveRatingModal.classList.contains("is-open")&&(t.target===s.giveRatingModal||t.target.closest(".close-modal-btn"))&&(s.giveRatingModal.classList.remove("is-open"),s.exerciseModal.classList.add("is-open"))})}function ne(){s.ratingBlock.addEventListener("change",t=>{if(t.target.name==="rating"){const e=parseInt(t.target.value,10);s.ratingDisplay.textContent=e.toFixed(1),s.ratingBlock.querySelectorAll(".rating-modal-rating-icon").forEach((r,i)=>{i<e?r.style.fill="rgba(var(--cl-orange))":r.style.fill="rgba(var(--cl-lighthouse), 0.2)"})}})}function ce(){document.addEventListener("click",t=>{if(t.target.closest(".exercise-header-button")){const e=t.target.closest(".exercise-item").dataset.id;ae(e)}})}function le(){document.addEventListener("submit",async t=>{var a,r;t.preventDefault();const e=t.target;if(e.classList.contains("rating-modal-form")){const i=new FormData(e),o=e.querySelector('input[name="rating"]:checked'),l=i.get("email"),v=i.get("comment");if(!z(o,l,v))return;const u={rate:Number(o.value),email:l,review:v},c=e.dataset.id;try{await M.updateRating(c,u),s.giveRatingModal.classList.remove("is-open"),w("Rating submitted successfully!")}catch(d){const f=((r=(a=d.response)==null?void 0:a.data)==null?void 0:r.message)||"An unknown error occurred";g(f)}}})}B();G();s.searchForm.addEventListener("submit",J);s.filterBtnsList.addEventListener("click",Z);s.footerForm.addEventListener("submit",X);s.categories.addEventListener("click",K);ee();document.addEventListener("DOMContentLoaded",()=>{oe(),ce(),le()});document.addEventListener("keydown",t=>{t.key==="Escape"&&(s.exerciseModal.classList.contains("is-open")&&s.exerciseModal.classList.remove("is-open"),s.giveRatingModal.classList.contains("is-open")&&(s.giveRatingModal.classList.remove("is-open"),s.exerciseModal.classList.add("is-open")))});
//# sourceMappingURL=main-CszsTQC2.js.map
