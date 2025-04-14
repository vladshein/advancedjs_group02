var j=Object.defineProperty;var z=(t,e,s)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var $=(t,e,s)=>z(t,typeof e!="symbol"?e+"":e,s);import{a as h,i as N}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),s=document.querySelector(".mobile-menu-backdrop"),a=document.querySelectorAll(".menu-item"),r=document.querySelector(".js-header-nav-list"),i=document.querySelector(".logo"),l=document.querySelectorAll(".nav-link"),g=document.querySelectorAll(".menu-link"),b=(o,c)=>{o.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",o.classList.toggle("js-nav-link-active",c);const m=o.closest(".nav-item");m&&(m.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",m.classList.toggle("js-nav-item-active",c))},d=()=>{const o=localStorage.getItem("activePath"),c=window.location.pathname,m=c==="/"||c==="/index.html",E=c==="/"?"./index.html":`./${c.split("/").pop()}`;l.forEach(f=>{const p=f.getAttribute("href");b(f,o&&p===o||!o&&m&&p==="./index.html"||!o&&!m&&p===E)}),g.forEach(f=>{const p=f.getAttribute("href"),M=o&&p===o||!o&&m&&p==="./index.html"||!o&&!m&&p===E;f.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",f.classList.toggle("active",M)})};t&&s&&t.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&s&&e.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""}),a.forEach(o=>{const c=o.querySelector(".menu-link");c&&c.addEventListener("click",()=>{localStorage.setItem("activePath",c.getAttribute("href")),s&&(s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""),d()})}),r&&r.addEventListener("click",o=>{const c=o.target.closest(".nav-link");c&&(localStorage.setItem("activePath",c.getAttribute("href")),d())}),i&&i.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),d()}),d()});const n={exerciseModal:document.querySelector("#exercise-modal"),exerciseContainer:document.querySelector(".exercise-container"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),quoteWrap:document.querySelector(".quote-wrap"),exercisesHeader:document.querySelector(".exercises-header"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),cardContainer:document.querySelector(".card-container"),categories:document.querySelector("#categories-container"),categoriesWrap:document.querySelector(".category-page-wrapper"),footerForm:document.querySelector(".footer-form"),giveRatingModal:document.querySelector("#give-rating-modal"),ratingBlock:document.querySelector(".rating-modal-rating-block"),ratingDisplay:document.querySelector(".rating-modal-rating"),scrollUp:document.querySelector(".scroll-to-top"),footerYear:document.querySelector(".footer-year")},x="https://your-energy.b.goit.study/api",ge={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"},fe={Muscles:"muscles",Equipment:"equipment",Bodyparts:"bodypart"},P={},ve="Oops! We couldn't find any exercises matching your search. Try another keyword and keep moving! 💪";class J{async getExercises(){const{data:e}=await h.get(`${x}/exercises`);return e}async getExerciseById(e){try{const{data:s}=await h.get(`${x}/exercises/${e}`);return s}catch(s){throw console.error("Error fetching exercise by ID:",s),s}}async getExercisesWithParams({category_type:e,category_name:s,limit:a=8,page:r=1,keyword:i=""}){const l={[e]:s,limit:a,page:r};i&&(l.keyword=i);const{data:g}=await h.get(`${x}/exercises`,{params:l});return g}async updateRating(e,s){try{const{data:a}=await h.patch(`${x}/exercises/${e}/rating`,s);return a}catch(a){throw a}}}const w=class w{getFilterQuery(){return w.filterQuery===""?"Muscles":w.filterQuery}setFilterQuery(e){w.filterQuery=e}async fetchFilteredData(e,s,a){const r={filter:e,limit:s,page:a};return(await h.get(`${x}/filters`,{params:r})).data}};$(w,"filterQuery","");let D=w;function v(t){return N.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function S(t){return N.success({title:"Success",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function _(t,e,s){const a=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return t?!e||!a.test(e)?(v("Please enter a valid email address."),!1):s?!0:(v("Please enter a comment."),!1):(v("Please select a rating before submitting."),!1)}function y(t,e){return t.length>e?t.slice(0,e-1)+"...":t}function F(t,e){return`${t} / ${e} min`}class U{constructor(){$(this,"email","")}getFormData(){this.email=document.getElementById("email").value.trim()}verifyData(){return console.log(this.email),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)?(document.getElementById("email").value="",!0):(console.log(this.email),v("Please enter a valid email address."),!1)}async postEmail(){try{const e=await h.post(`${x}/subscription`,{email:this.email})}catch(e){v(e.response.data.message);return}S("Email address added to subscriptions.")}}const L=class L{async getQuote(){const{data:e}=await h.get(`${x}/quote`);return e}setQuoteDataToLS(e,s=Date.now()){const a={quote:e,currentDate:s};localStorage.setItem(L.QUOTE_LS_KEY,JSON.stringify(a))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(L.QUOTE_LS_KEY))}};$(L,"QUOTE_LS_KEY","quote-and-date");let T=L;const B=new J,pe=new D,ye=new U,I=new T;function K(t,e,s,a){t.innerHTML="";const r=2,i=2;function l(d){const o=document.createElement("button");return o.classList.add("page-number"),o.textContent=d,d===e&&(o.disabled=!0,o.classList.add("active")),o.addEventListener("click",a),o}const g=Math.max(1,e-r),b=Math.min(s,e+i);for(let d=g;d<=b;d++)t.appendChild(l(d))}const u="/advancedjs_group02/assets/icons-DsHkvW1c.svg";function O(t,e=!1){return t.map(s=>`<li class="exercise-item" data-id="${s._id}">
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
              <use href="${u}#${e?"trash":"star"}"></use>
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
              <use href="${u}#arrow-right"></use>
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
              <use href="${u}#running-man"></use>
            </svg>
          </div>
          <h3 class="exercise-title-text">${window.innerWidth<1440?y(s.name,25):y(s.name,35)}</h3>
        </div>
        <ul class="exercise-footer">
          <li>
            <span class="exercise-footer-item-accent">Burned calories:</span>
            ${window.innerWidth<1440?y(F(s.burnedCalories,s.time),6):F(s.burnedCalories,s.time)}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Body part:</span>
            ${window.innerWidth<1440?y(s.bodyPart,4):y(s.bodyPart,8)}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Target:</span>
            ${window.innerWidth<1440?y(s.target,3):y(s.target,8)}
          </li>
        </ul>
      </li>`).join("")}function C({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function Y(){try{const t=I.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await I.getQuote();I.setQuoteDataToLS(e),n.quoteWrap.insertAdjacentHTML("beforeend",C(e))}else n.quoteWrap.insertAdjacentHTML("beforeend",C(t.quote))}catch(t){v(t.message)}}function G(t){return`<div class="container">
    <form data-id=${t} class="rating-modal-form">
      <button class="close-modal-btn" type="button">
        <svg class="close-modal-icon">
          <use href="${u}#close"></use>
        </svg>
      </button>
      <h2 class="rating-modal-title">Rating</h2>
      <div class="rating-modal-rating-block">
        <p class="rating-modal-rating">0.0</p>
        <input type="radio" id="star-1" name="rating" value="1"/>
        <label for="star-1">
          <svg class="rating-modal-rating-icon">
            <use href="${u}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-2" name="rating" value="2" />
        <label for="star-2">
          <svg class="rating-modal-rating-icon">
            <use href="${u}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-3" name="rating" value="3" />
        <label for="star-3">
          <svg class="rating-modal-rating-icon">
            <use href="${u}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-4" name="rating" value="4" />
        <label for="star-4">
          <svg class="rating-modal-rating-icon">
            <use href="${u}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-5" name="rating" value="5" />
        <label for="star-5">
          <svg class="rating-modal-rating-icon">
            <use href="${u}#star"></use>
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
  </div>`}function V({_id:t,name:e,target:s,bodyPart:a,popularity:r,time:i,burnedCalories:l,rating:g,description:b,gifUrl:d,equipment:o}){var f;const m=Array.from({length:5},(p,M)=>`<svg class="exercise-modal-rating-icon ${M<Math.floor(g)?"rated":""}">
              <use href="${u}#star"></use>
            </svg>`).join(""),E=(f=localStorage.getItem("favorites"))==null?void 0:f.includes(t);return`<div data-id=${t} class="exercise-modal-card">
            <button class="close-modal-btn">
              <svg class="close-modal-icon">
                <use href="${u}#close"></use>
              </svg>
            </button>
            <div class="exercise-gif-wrapper">
              <img
                class="exercise-gif"
                src=${d}
                alt="alt text from backend here"
              />
            </div>
            <div class="exercise-modal-overview">
              <div>
                <h2 class="exercise-modal-title">${e}</h2>
                <div class="exercise-modal-rating-block">
                  <p class="exercise-modal-rating">${g}</p>
                  ${m}
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
                  <p class="exercise-modal-info-descr">${o}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Popular</p>
                  <p class="exercise-modal-info-descr">${r}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Burned Calories</p>
                  <p class="exercise-modal-info-descr">${l}/${i} min</p>
                </div>
              </div>
              <div class="exercise-modal-descr">${b}</div>
              <div class="exercise-modal-buttons-block">
              ${E?`<button id="remove-from-favorites" class="btn btn-primary">
                      Remove favorite
                      <svg class="exercise-modal-btn-icon">
                        <use href="${u}#trash"></use>
                      </svg>
                    </button>`:`<button id="add-to-favorites" class="btn btn-primary">
                      Add to favorites
                      <svg class="exercise-modal-btn-icon">
                        <use href="${u}#heart"></use>
                      </svg>
                    </button>`}
                <button id="give-rating" class="btn btn-secondary">Give a rating</button>
              </div>
            </div>
          </div>
          `}async function Z(t){try{n.exerciseModal.classList.add("is-open"),n.exerciseModal.innerHTML='<div class="loader"></div>';const e=await B.getExerciseById(t),s=V(e);n.exerciseModal.innerHTML=s}catch(e){v(e.message)}}function X(t){var r;const s=((r=localStorage.getItem("favorites"))==null?void 0:r.includes(t))?`<button id="remove-from-favorites" class="btn btn-primary">
         Remove favorite
         <svg class="exercise-modal-btn-icon">
           <use href="${u}#trash"></use>
         </svg>
       </button>`:`<button id="add-to-favorites" class="btn btn-primary">
         Add to favorites
         <svg class="exercise-modal-btn-icon">
           <use href="${u}#heart"></use>
         </svg>
       </button>`,a=document.querySelector(".exercise-modal-buttons-block");a&&(a.innerHTML=`
      ${s}
      <button id="give-rating" class="btn btn-secondary">Give a rating</button>
    `)}function ee(t,e){try{const s=localStorage.getItem("favorites");if(!s)localStorage.setItem("favorites",JSON.stringify([t])),S("Exercise added to favorites!");else{const a=JSON.parse(s);if(!a.includes(t))localStorage.setItem("favorites",JSON.stringify([...a,t])),S("Exercise added to favorites!");else{const r=a.filter(i=>i!==t);localStorage.setItem("favorites",JSON.stringify(r)),S("Exercise removed from favorites!")}}X(t),e()}catch(s){v(s.message)}}async function te(t){const e=localStorage.getItem("favorites"),a=JSON.parse(e).filter(r=>r!==t);localStorage.setItem("favorites",JSON.stringify(a))}const Q=()=>{document.querySelectorAll(".trash-can").forEach(e=>{e.addEventListener("click",async s=>{s.preventDefault();const a=s.target.closest(".exercise-item").dataset.id;await te(a),R()})})};window.quoteRendered||(Y(),window.quoteRendered=!0);document.addEventListener("DOMContentLoaded",()=>{window.location.pathname.includes("favorite.html")&&(R(),ie(),ne(),ce())});document.addEventListener("keydown",t=>{t.key==="Escape"&&(refs.exerciseModal.classList.contains("is-open")&&refs.exerciseModal.classList.remove("is-open"),refs.giveRatingModal.classList.contains("is-open")&&(refs.giveRatingModal.classList.remove("is-open"),refs.exerciseModal.classList.add("is-open")))});const q=document.querySelector(".favorite-exercise-list"),se=document.querySelector(".favorite-exercise-list"),A=document.querySelector(".favorite_not_found_containers"),k=document.querySelector(".exercise-page-wrapper");function R(){const t=JSON.parse(localStorage.getItem("favorites"))||[];t.length>0?e():H();function e(){A.style.display="none",se.style.display="flex",q.innerHTML='<li class="loading-msg">Loading your favorite exercises...</li>';const s=t.map(a=>B.getExerciseById(a).catch(r=>(console.error("Error loading exercise "+a+":",r),null)));Promise.all(s).then(a=>{const r=a.filter(i=>i!==null);r.length>0?(P.exercises=r,W(),Q()):H()}).catch(a=>{console.error("Error loading favorites:",a),ae()})}}function W(t=1){A.style.display="none";const e=window.innerWidth>=768?10:8;if(window.innerWidth<1440){q.innerHTML=O(P.exercises.slice((t-1)*e,e*t),!0),k.innerHTML="";const s=Math.ceil(P.exercises.length/e);s>1&&K(k,t,s,re);return}q.innerHTML=O(P.exercises,!0)}function H(){A.style.display="block",q.innerHTML="",k.innerHTML=""}function ae(){A.style.display="none",q.innerHTML='<li class="error-msg">Failed to load favorites. Please try again.</li>',k.innerHTML=""}function re(t){const e=Number(t.target.textContent);W(e),Q()}function ie(){document.addEventListener("click",t=>{if(n.exerciseModal.classList.contains("is-open")){if((t.target===n.exerciseModal||t.target.closest(".close-modal-btn"))&&n.exerciseModal.classList.remove("is-open"),t.target.closest("#add-to-favorites")||t.target.closest("#remove-from-favorites")){const e=t.target.closest(".exercise-modal-card").dataset.id;ee(e,()=>{if(window.location.pathname.includes("favorite.html"))R();else return})}if(t.target.closest("#give-rating")){n.exerciseModal.classList.remove("is-open"),n.giveRatingModal.classList.add("is-open");const e=t.target.closest(".exercise-modal-card").dataset.id,s=G(e);n.giveRatingModal.innerHTML=s,n.ratingBlock=document.querySelector(".rating-modal-rating-block"),n.ratingDisplay=document.querySelector(".rating-modal-rating"),oe()}}n.giveRatingModal.classList.contains("is-open")&&(t.target===n.giveRatingModal||t.target.closest(".close-modal-btn"))&&(n.giveRatingModal.classList.remove("is-open"),n.exerciseModal.classList.add("is-open"))})}function oe(){n.ratingBlock.addEventListener("change",t=>{if(t.target.name==="rating"){const e=parseInt(t.target.value,10);n.ratingDisplay.textContent=e.toFixed(1),n.ratingBlock.querySelectorAll(".rating-modal-rating-icon").forEach((a,r)=>{r<e?a.style.fill="rgba(var(--cl-orange))":a.style.fill="rgba(var(--cl-lighthouse), 0.2)"})}})}function ne(){document.addEventListener("click",t=>{if(t.target.closest(".exercise-header-button")){const e=t.target.closest(".exercise-item").dataset.id;Z(e)}})}function ce(){document.addEventListener("submit",async t=>{var s,a;t.preventDefault();const e=t.target;if(e.classList.contains("rating-modal-form")){const r=new FormData(e),i=e.querySelector('input[name="rating"]:checked'),l=r.get("email"),g=r.get("comment");if(!_(i,l,g))return;const d={rate:Number(i.value),email:l,review:g},o=e.dataset.id;try{await B.updateRating(o,d),n.giveRatingModal.classList.remove("is-open"),S("Rating submitted successfully!")}catch(c){const m=((a=(s=c.response)==null?void 0:s.data)==null?void 0:a.message)||"An unknown error occurred";v(m)}}})}export{O as a,K as b,fe as c,ye as d,B as e,pe as f,ie as g,Y as h,ne as i,ce as j,ve as n,ge as q,n as r,v as s};
//# sourceMappingURL=modals-listeners-U3VkEROJ.js.map
