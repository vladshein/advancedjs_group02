var H=Object.defineProperty;var N=(t,e,s)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var $=(t,e,s)=>N(t,typeof e!="symbol"?e+"":e,s);import{a as h,i as C}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),s=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item"),r=document.querySelector(".js-header-nav-list"),i=document.querySelector(".logo"),d=document.querySelectorAll(".nav-link"),m=document.querySelectorAll(".menu-link"),L=(n,c)=>{n.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",n.classList.toggle("js-nav-link-active",c);const u=n.closest(".nav-item");u&&(u.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",u.classList.toggle("js-nav-item-active",c))},v=()=>{const n=localStorage.getItem("activePath"),c=window.location.pathname,u=c==="/"||c==="/index.html",q=c==="/"?"./index.html":`./${c.split("/").pop()}`;d.forEach(g=>{const p=g.getAttribute("href");L(g,n&&p===n||!n&&u&&p==="./index.html"||!n&&!u&&p===q)}),m.forEach(g=>{const p=g.getAttribute("href"),E=n&&p===n||!n&&u&&p==="./index.html"||!n&&!u&&p===q;g.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",g.classList.toggle("active",E)})};t&&s&&t.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&s&&e.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""}),a.forEach(n=>{const c=n.querySelector(".menu-link");c&&c.addEventListener("click",()=>{localStorage.setItem("activePath",c.getAttribute("href")),s&&(s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""),v()})}),r&&r.addEventListener("click",n=>{const c=n.target.closest(".nav-link");c&&(localStorage.setItem("activePath",c.getAttribute("href")),v())}),i&&i.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),v()}),v()});const o={exerciseModal:document.querySelector("#exercise-modal"),exerciseContainer:document.querySelector(".exercise-container"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),quoteWrap:document.querySelector(".quote-wrap"),exercisesHeader:document.querySelector(".exercises-header"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),cardContainer:document.querySelector(".card-container"),categories:document.querySelector("#categories-container"),categoriesWrap:document.querySelector(".category-page-wrapper"),footerForm:document.querySelector(".footer-form"),giveRatingModal:document.querySelector("#give-rating-modal"),ratingBlock:document.querySelector(".rating-modal-rating-block"),ratingDisplay:document.querySelector(".rating-modal-rating"),scrollUp:document.querySelector(".scroll-to-top"),footerYear:document.querySelector(".footer-year")},b="https://your-energy.b.goit.study/api",de={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"},ue={Muscles:"muscles",Equipment:"equipment",Bodyparts:"bodypart"},me="Oops! We couldn't find any exercises matching your search. Try another keyword and keep moving! 💪";class Q{async getExercises(){const{data:e}=await h.get(`${b}/exercises`);return e}async getExerciseById(e){try{const{data:s}=await h.get(`${b}/exercises/${e}`);return s}catch(s){throw console.error("Error fetching exercise by ID:",s),s}}async getExercisesWithParams({category_type:e,category_name:s,limit:a=8,page:r=1,keyword:i=""}){const d={[e]:s,limit:a,page:r};i&&(d.keyword=i);const{data:m}=await h.get(`${b}/exercises`,{params:d});return m}async updateRating(e,s){try{const{data:a}=await h.patch(`${b}/exercises/${e}/rating`,s);return a}catch(a){throw a}}}const x=class x{getFilterQuery(){return x.filterQuery===""?"Muscles":x.filterQuery}setFilterQuery(e){x.filterQuery=e}async fetchFilteredData(e,s,a){const r={filter:e,limit:s,page:a};return(await h.get(`${b}/filters`,{params:r})).data}};$(x,"filterQuery","");let I=x;function f(t){return C.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function S(t){return C.success({title:"Success",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function W(t,e,s){const a=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return t?!e||!a.test(e)?(f("Please enter a valid email address."),!1):s?!0:(f("Please enter a comment."),!1):(f("Please select a rating before submitting."),!1)}function y(t,e){return t.length>e?t.slice(0,e-1)+"...":t}function B(t,e){return`${t} / ${e} min`}class j{constructor(){$(this,"email","")}getFormData(){this.email=document.getElementById("email").value.trim()}verifyData(){return console.log(this.email),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)?(document.getElementById("email").value="",!0):(console.log(this.email),f("Please enter a valid email address."),!1)}async postEmail(){try{const e=await h.post(`${b}/subscription`,{email:this.email})}catch(e){f(e.response.data.message);return}S("Email address added to subscriptions.")}}const w=class w{async getQuote(){const{data:e}=await h.get(`${b}/quote`);return e}setQuoteDataToLS(e,s=Date.now()){const a={quote:e,currentDate:s};localStorage.setItem(w.QUOTE_LS_KEY,JSON.stringify(a))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(w.QUOTE_LS_KEY))}};$(w,"QUOTE_LS_KEY","quote-and-date");let P=w;const D=new Q,ge=new I,fe=new j,A=new P,l="/advancedjs_group02/assets/icons-DsHkvW1c.svg";function z(t,e=!1){return t.map(s=>`<li class="exercise-item" data-id="${s._id}">
        <div class="exercise-header">
          <p class="exercise-header-badge">WORKOUT</p>
          <div class="exercise-header-rating">
            <p>${e?"":s.rating}</p>
            <svg
              class="${e?"favorite-exercise-rating-icon trash-can":"exercise-rating-icon"}"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="${l}#${e?"trash":"star"}"></use>
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
              <use href="${l}#arrow-right"></use>
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
              <use href="${l}#running-man"></use>
            </svg>
          </div>
          <h3 class="exercise-title-text">${window.innerWidth<1440?y(s.name,25):y(s.name,35)}</h3>
        </div>
        <ul class="exercise-footer">
          <li>
            <span class="exercise-footer-item-accent">Burned calories:</span>
            ${window.innerWidth<1440?y(B(s.burnedCalories,s.time),6):B(s.burnedCalories,s.time)}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Body part:</span>
            ${window.innerWidth<1440?y(s.bodyPart,4):y(s.bodyPart,9)}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Target:</span>
            ${window.innerWidth<1440?y(s.target,3):y(s.target,9)}
          </li>
        </ul>
      </li>`).join("")}function O({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function J(){try{const t=A.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await A.getQuote();A.setQuoteDataToLS(e),o.quoteWrap.insertAdjacentHTML("beforeend",O(e))}else o.quoteWrap.insertAdjacentHTML("beforeend",O(t.quote))}catch(t){f(t.message)}}function _(t){return`<div class="container">
    <form data-id=${t} class="rating-modal-form">
      <button class="close-modal-btn" type="button">
        <svg class="close-modal-icon">
          <use href="${l}#close"></use>
        </svg>
      </button>
      <h2 class="rating-modal-title">Rating</h2>
      <div class="rating-modal-rating-block">
        <p class="rating-modal-rating">0.0</p>
        <input type="radio" id="star-1" name="rating" value="1"/>
        <label for="star-1">
          <svg class="rating-modal-rating-icon">
            <use href="${l}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-2" name="rating" value="2" />
        <label for="star-2">
          <svg class="rating-modal-rating-icon">
            <use href="${l}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-3" name="rating" value="3" />
        <label for="star-3">
          <svg class="rating-modal-rating-icon">
            <use href="${l}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-4" name="rating" value="4" />
        <label for="star-4">
          <svg class="rating-modal-rating-icon">
            <use href="${l}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-5" name="rating" value="5" />
        <label for="star-5">
          <svg class="rating-modal-rating-icon">
            <use href="${l}#star"></use>
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
  </div>`}function U({_id:t,name:e,target:s,bodyPart:a,popularity:r,time:i,burnedCalories:d,rating:m,description:L,gifUrl:v,equipment:n}){var g;const u=Array.from({length:5},(p,E)=>`<svg class="exercise-modal-rating-icon ${E<Math.floor(m)?"rated":""}">
              <use href="${l}#star"></use>
            </svg>`).join(""),q=(g=localStorage.getItem("favorites"))==null?void 0:g.includes(t);return`<div data-id=${t} class="exercise-modal-card">
            <button class="close-modal-btn">
              <svg class="close-modal-icon">
                <use href="${l}#close"></use>
              </svg>
            </button>
            <div class="exercise-gif-wrapper">
              <img
                class="exercise-gif"
                src=${v}
                alt="alt text from backend here"
              />
            </div>
            <div class="exercise-modal-overview">
              <div>
                <h2 class="exercise-modal-title">${e}</h2>
                <div class="exercise-modal-rating-block">
                  <p class="exercise-modal-rating">${m}</p>
                  ${u}
                </div>
              </div>
              <div class="exercise-modal-info-block">
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Target</p>
                  <p class="exercise-modal-info-descr">${s}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Body Part</p>
                  <p class="exercise-modal-info-descr">${a}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Equipment</p>
                  <p class="exercise-modal-info-descr">${n}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Popular</p>
                  <p class="exercise-modal-info-descr">${r}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Burned Calories</p>
                  <p class="exercise-modal-info-descr">${d}/${i} min</p>
                </div>
              </div>
              <div class="exercise-modal-descr">${L}</div>
              <div class="exercise-modal-buttons-block">
              ${q?`<button id="remove-from-favorites" class="btn btn-primary">
                      Remove favorite
                      <svg class="exercise-modal-btn-icon">
                        <use href="${l}#trash"></use>
                      </svg>
                    </button>`:`<button id="add-to-favorites" class="btn btn-primary">
                      Add to favorites
                      <svg class="exercise-modal-btn-icon">
                        <use href="${l}#heart"></use>
                      </svg>
                    </button>`}
                <button id="give-rating" class="btn btn-secondary">Give a rating</button>
              </div>
            </div>
          </div>
          `}async function K(t){try{o.exerciseModal.classList.add("is-open"),o.exerciseModal.innerHTML='<div class="loader"></div>';const e=await D.getExerciseById(t),s=U(e);o.exerciseModal.innerHTML=s}catch(e){f(e.message)}}function Y(t){var r;const s=((r=localStorage.getItem("favorites"))==null?void 0:r.includes(t))?`<button id="remove-from-favorites" class="btn btn-primary">
         Remove favorite
         <svg class="exercise-modal-btn-icon">
           <use href="${l}#trash"></use>
         </svg>
       </button>`:`<button id="add-to-favorites" class="btn btn-primary">
         Add to favorites
         <svg class="exercise-modal-btn-icon">
           <use href="${l}#heart"></use>
         </svg>
       </button>`,a=document.querySelector(".exercise-modal-buttons-block");a&&(a.innerHTML=`
      ${s}
      <button id="give-rating" class="btn btn-secondary">Give a rating</button>
    `)}function G(t,e){try{const s=localStorage.getItem("favorites");if(!s)localStorage.setItem("favorites",JSON.stringify([t])),S("Exercise added to favorites!");else{const a=JSON.parse(s);if(!a.includes(t))localStorage.setItem("favorites",JSON.stringify([...a,t])),S("Exercise added to favorites!");else{const r=a.filter(i=>i!==t);localStorage.setItem("favorites",JSON.stringify(r)),S("Exercise removed from favorites!")}}Y(t),e()}catch(s){f(s.message)}}async function V(t){const e=localStorage.getItem("favorites"),a=JSON.parse(e).filter(r=>r!==t);localStorage.setItem("favorites",JSON.stringify(a))}const Z=()=>{const t=document.querySelectorAll(".trash-can");console.log(t),t.forEach(e=>{e.addEventListener("click",async s=>{s.preventDefault();const a=s.target.closest(".exercise-item").dataset.id;await V(a),R()})})};window.quoteRendered||(J(),window.quoteRendered=!0);document.addEventListener("DOMContentLoaded",()=>{window.location.pathname.includes("favorite.html")&&(R(),se(),re(),ie())});document.addEventListener("keydown",t=>{t.key==="Escape"&&(refs.exerciseModal.classList.contains("is-open")&&refs.exerciseModal.classList.remove("is-open"),refs.giveRatingModal.classList.contains("is-open")&&(refs.giveRatingModal.classList.remove("is-open"),refs.exerciseModal.classList.add("is-open")))});const M=document.querySelector(".favorite-exercise-list"),X=document.querySelector(".favorite-exercise-list"),k=document.querySelector(".favorite_not_found_containers"),T=document.querySelector(".exercise-page-wrapper");function R(){const t=JSON.parse(localStorage.getItem("favorites"))||[];t.length>0?e():F();function e(){k.style.display="none",X.style.display="flex",M.innerHTML='<li class="loading-msg">Loading your favorite exercises...</li>';const s=t.map(a=>D.getExerciseById(a).catch(r=>(console.error("Error loading exercise "+a+":",r),null)));Promise.all(s).then(a=>{const r=a.filter(i=>i!==null);r.length>0?(ee(r),Z()):F()}).catch(a=>{console.error("Error loading favorites:",a),te()})}}function ee(t){k.style.display="none",M.innerHTML=z(t,!0),T.innerHTML=""}function F(){k.style.display="block",M.innerHTML="",T.innerHTML=""}function te(){k.style.display="none",M.innerHTML='<li class="error-msg">Failed to load favorites. Please try again.</li>',T.innerHTML=""}function se(){document.addEventListener("click",t=>{if(o.exerciseModal.classList.contains("is-open")){if((t.target===o.exerciseModal||t.target.closest(".close-modal-btn"))&&o.exerciseModal.classList.remove("is-open"),t.target.closest("#add-to-favorites")||t.target.closest("#remove-from-favorites")){const e=t.target.closest(".exercise-modal-card").dataset.id;G(e,()=>{if(window.location.pathname.includes("favorite.html"))R();else return})}if(t.target.closest("#give-rating")){o.exerciseModal.classList.remove("is-open"),o.giveRatingModal.classList.add("is-open");const e=t.target.closest(".exercise-modal-card").dataset.id,s=_(e);o.giveRatingModal.innerHTML=s,o.ratingBlock=document.querySelector(".rating-modal-rating-block"),o.ratingDisplay=document.querySelector(".rating-modal-rating"),ae()}}o.giveRatingModal.classList.contains("is-open")&&(t.target===o.giveRatingModal||t.target.closest(".close-modal-btn"))&&(o.giveRatingModal.classList.remove("is-open"),o.exerciseModal.classList.add("is-open"))})}function ae(){o.ratingBlock.addEventListener("change",t=>{if(t.target.name==="rating"){const e=parseInt(t.target.value,10);o.ratingDisplay.textContent=e.toFixed(1),o.ratingBlock.querySelectorAll(".rating-modal-rating-icon").forEach((a,r)=>{r<e?a.style.fill="rgba(var(--cl-orange))":a.style.fill="rgba(var(--cl-lighthouse), 0.2)"})}})}function re(){document.addEventListener("click",t=>{if(t.target.closest(".exercise-header-button")){const e=t.target.closest(".exercise-item").dataset.id;K(e)}})}function ie(){document.addEventListener("submit",async t=>{var s,a;t.preventDefault();const e=t.target;if(e.classList.contains("rating-modal-form")){const r=new FormData(e),i=e.querySelector('input[name="rating"]:checked'),d=r.get("email"),m=r.get("comment");if(!W(i,d,m))return;const v={rate:Number(i.value),email:d,review:m},n=e.dataset.id;try{await D.updateRating(n,v),o.giveRatingModal.classList.remove("is-open"),S("Rating submitted successfully!")}catch(c){const u=((a=(s=c.response)==null?void 0:s.data)==null?void 0:a.message)||"An unknown error occurred";f(u)}}})}export{z as a,fe as b,ue as c,se as d,D as e,ge as f,re as g,J as h,ie as i,me as n,de as q,o as r,f as s};
//# sourceMappingURL=modals-listeners-VAaAGFKh.js.map
