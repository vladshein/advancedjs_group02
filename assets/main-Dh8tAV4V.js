var O=Object.defineProperty;var W=(t,e,s)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var E=(t,e,s)=>W(t,typeof e!="symbol"?e+"":e,s);import{a as h,i as I}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),s=document.querySelector(".mobile-menu-backdrop"),i=document.querySelectorAll(".menu-item"),r=document.querySelector(".js-header-nav-list"),n=document.querySelector(".logo"),l=document.querySelectorAll(".nav-link"),p=document.querySelectorAll(".menu-link"),b=(c,d)=>{c.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",c.classList.toggle("js-nav-link-active",d);const m=c.closest(".nav-item");m&&(m.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",m.classList.toggle("js-nav-item-active",d))},u=()=>{const c=localStorage.getItem("activePath"),d=window.location.pathname,m=d==="/"||d==="/index.html",$=d==="/"?"./index.html":`./${d.split("/").pop()}`;l.forEach(v=>{const y=v.getAttribute("href");b(v,c&&y===c||!c&&m&&y==="./index.html"||!c&&!m&&y===$)}),p.forEach(v=>{const y=v.getAttribute("href"),T=c&&y===c||!c&&m&&y==="./index.html"||!c&&!m&&y===$;v.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",v.classList.toggle("active",T)})};t&&s&&t.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&s&&e.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""}),i.forEach(c=>{const d=c.querySelector(".menu-link");d&&d.addEventListener("click",()=>{localStorage.setItem("activePath",d.getAttribute("href")),s&&(s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""),u()})}),r&&r.addEventListener("click",c=>{const d=c.target.closest(".nav-link");d&&(localStorage.setItem("activePath",d.getAttribute("href")),u())}),n&&n.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),u()}),u()});const a={exerciseModal:document.querySelector("#exercise-modal"),exerciseContainer:document.querySelector(".exercise-container"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),quoteWrap:document.querySelector(".quote-wrap"),exercisesHeader:document.querySelector(".exercises-header"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),cardContainer:document.querySelector(".card-container"),categories:document.querySelector("#categories-container"),categoriesWrap:document.querySelector(".category-page-wrapper"),footerForm:document.querySelector(".footer-form"),giveRatingModal:document.querySelector("#give-rating-modal"),ratingBlock:document.querySelector(".rating-modal-rating-block"),ratingDisplay:document.querySelector(".rating-modal-rating")},x="https://your-energy.b.goit.study/api",o={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"},Q={Muscles:"muscles",Equipment:"equipment",Bodyparts:"bodypart"};class N{async getExercises(){const{data:e}=await h.get(`${x}/exercises`);return e}async getExerciseById(e){try{const{data:s}=await h.get(`${x}/exercises/${e}`);return s}catch(s){throw console.error("Error fetching exercise by ID:",s),s}}async getExercisesWithParams({category_type:e,category_name:s,limit:i=8,page:r=1,keyword:n=""}){const l={[e]:s,limit:i,page:r};n&&(l.keyword=n);const{data:p}=await h.get(`${x}/exercises`,{params:l});return p}async updateRating(e,s){try{const{data:i}=await h.patch(`${x}/exercises/${e}/rating`,s);return i}catch(i){throw i}}}const L=class L{getFilterQuery(){return L.filterQuery===""?"Muscles":L.filterQuery}setFilterQuery(e){L.filterQuery=e}async fetchFilteredData(e,s,i){const r={filter:e,limit:s,page:i};return(await h.get(`${x}/filters`,{params:r})).data}};E(L,"filterQuery","");let D=L;function f(t){return I.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function M(t){return I.success({title:"Success",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function _(t,e,s){const i=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return t?!e||!i.test(e)?(f("Please enter a valid email address."),!1):s?!0:(f("Please enter a comment."),!1):(f("Please select a rating before submitting."),!1)}class U{constructor(){E(this,"email","")}getFormData(){this.email=document.getElementById("email").value.trim()}verifyData(){return console.log(this.email),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)?(document.getElementById("email").value="",!0):(console.log(this.email),f("Please enter a valid email address."),!1)}async postEmail(){try{const e=await h.post(`${x}/subscription`,{email:this.email})}catch{f("Subscription failed.");return}M("Email address added to subscriptions.")}}const w=class w{async getQuote(){const{data:e}=await h.get(`${x}/quote`);return e}setQuoteDataToLS(e,s=Date.now()){const i={quote:e,currentDate:s};localStorage.setItem(w.QUOTE_LS_KEY,JSON.stringify(i))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(w.QUOTE_LS_KEY))}};E(w,"QUOTE_LS_KEY","quote-and-date");let A=w;const S=new N,H=new D,k=new U,C=new A;function P(t,e,s,i){t.innerHTML="";const r=2,n=2;function l(u){const c=document.createElement("button");return c.classList.add("page-number"),c.textContent=u,u===e&&(c.disabled=!0,c.classList.add("active")),c.addEventListener("click",i),c}const p=Math.max(1,e-r),b=Math.min(s,e+n);for(let u=p;u<=b;u++)t.appendChild(l(u));console.log(e,s)}const g="/advancedjs_group02/assets/icons-DsHkvW1c.svg";function R(t){return t.map(e=>`<li class="exercise-item" data-id="${e._id}">
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
      </li>`).join("")}async function B(t){const e=t.target.textContent;o.page=Number(e),a.exercisePageWrapper.innerHTML="",a.exercises.innerHTML="",window.innerWidth>=768?o.limit=10:o.limit=8;try{const i=await S.getExercisesWithParams(o);if(o.maxPage=i.totalPages,i.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=R(i.results),o.maxPage===1)return;P(a.exercisePageWrapper,o.page,o.maxPage,B)}catch(i){console.log(i)}finally{}}async function j(t){t.preventDefault();const e=t.currentTarget,s=e.elements.query.value.trim();if(s===""){f("Please entered your request");return}a.exercisePageWrapper.innerHTML="",a.exercises.innerHTML="",o.page=1,window.innerWidth>=768?o.limit=10:o.limit=8,o.keyword=s;try{const r=await S.getExercisesWithParams(o);if(o.maxPage=r.totalPages,r.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=R(r.results),o.maxPage===1)return;P(a.exercisePageWrapper,o.page,o.maxPage,B)}catch(r){console.log(r)}finally{e.reset()}}async function z(t){if(t.preventDefault(),t.target===t.currentTarget)return;a.searchForm.classList.add("active-search-form"),a.exerciseContainer.classList.remove("hidden"),a.exercises.innerHTML="",a.cardContainer.classList.add("hidden"),a.exercisePageWrapper.innerHTML="",o.page=1,o.keyword="",window.innerWidth>=768?o.limit=10:o.limit=8,o.category_name=t.target.querySelector(".category-name").textContent,o.category_type=Q[t.target.querySelector(".category-type").textContent.replace(/\s/g,"")],a.exercisesHeader.innerHTML=`Exercises / <span class="exercise-header-category">${o.category_name}</span>`,o.category_name=o.category_name.toLowerCase();try{const s=await S.getExercisesWithParams(o);if(o.maxPage=s.totalPages,s.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=R(s.results),o.maxPage===1)return;P(a.exercisePageWrapper,o.page,o.maxPage,B)}catch(s){console.log(s)}finally{}}function F({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function J(){try{const t=C.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await C.getQuote();C.setQuoteDataToLS(e),a.quoteWrap.insertAdjacentHTML("beforeend",F(e))}else a.quoteWrap.insertAdjacentHTML("beforeend",F(t.quote))}catch(t){f(t.message)}}async function q(t=1){const e=H.getFilterQuery(),s=window.innerWidth<768?9:12;try{const i=await H.fetchFilteredData(e,s,t),r=i.results.sort((n,l)=>n.name.localeCompare(l.name));a.categories.innerHTML="",r.forEach(n=>{const l=document.createElement("div");l.className="category-card",l.innerHTML=`
        <img
          src="${n.imgURL}"
          srcset="${n.imgURL} 1x, ${n.imgURL} 2x"
          alt="${n.name} exercise"
        />
        <div class="category-name">${n.name.charAt(0).toUpperCase()+n.name.slice(1)}</div>
        <div class="category-type">${n.filter}</div>
      `,a.categories.appendChild(l)}),a.categoriesWrap.innerHTML="",i.totalPages>1&&P(a.categoriesWrap,t,i.totalPages,K)}catch{f("Failed to load exercise categories. Please try again later.")}}function K(t){const e=Number(t.target.textContent);q(e)}q();function V(t){a.filterBtns.forEach(e=>{e.classList.remove("active-filter-btn")}),t.target.nodeName==="BUTTON"&&(t.target.classList.add("active-filter-btn"),a.searchForm.classList.remove("active-search-form"),a.cardContainer.classList.remove("hidden"),a.exerciseContainer.classList.add("hidden"),a.exercisesHeader.innerHTML="Exercises",H.setFilterQuery(t.target.textContent.trim()),q())}async function Y(t){t.preventDefault(),k.getFormData(),k.verifyData()&&k.postEmail()}function Z(t){return`<div class="container">
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
  </div>`}function G({_id:t,name:e,target:s,bodyPart:i,popularity:r,time:n,burnedCalories:l,rating:p,description:b,gifUrl:u,equipment:c}){const m=Array.from({length:5},($,v)=>`<svg class="exercise-modal-rating-icon ${v<Math.floor(p)?"rated":""}">
              <use href="${g}#star"></use>
            </svg>`).join("");return`<div class="container">
    <div data-id=${t} class="exercise-modal-card">
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
            <p class="exercise-modal-info-descr">${i}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Equipment</p>
            <p class="exercise-modal-info-descr">${c}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Popular</p>
            <p class="exercise-modal-info-descr">${r}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Burned Calories</p>
            <p class="exercise-modal-info-descr">${l}/${n} min</p>
          </div>
        </div>
        <div class="exercise-modal-descr">${b}</div>
        <div class="exercise-modal-buttons-block">
          <button id="add-to-favorites" class="btn btn-primary">
            Add to favorites
            <svg class="exercise-modal-btn-icon">
              <use href="${g}#heart"></use>
            </svg>
          </button>
          <button id="give-rating" class="btn btn-secondary">Give a rating</button>
        </div>
      </div>
    </div>
    </div>`}async function X(t){try{const e=await S.getExerciseById(t);a.exerciseModal.classList.add("is-open");const s=G(e);a.exerciseModal.innerHTML=s}catch(e){f(e.message)}}function ee(t){try{const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t])),M("Exercise added to favorites!");else{const s=JSON.parse(e);s.includes(t)?f("Exercise already in favorites!"):(localStorage.setItem("favorites",JSON.stringify([...s,t])),M("Exercise added to favorites!"))}}catch(e){f(e.message)}}function te(){document.addEventListener("click",t=>{if(a.exerciseModal||a.giveRatingModal){if((t.target===a.exerciseModal||t.target===a.giveRatingModal||t.target.closest(".close-modal-btn"))&&(a.exerciseModal.classList.remove("is-open"),a.giveRatingModal.classList.remove("is-open")),t.target.closest("#add-to-favorites")){const e=t.target.closest(".exercise-modal-card").dataset.id;ee(e)}if(t.target.closest("#give-rating")){a.exerciseModal.classList.remove("is-open"),a.giveRatingModal.classList.add("is-open");const e=t.target.closest(".exercise-modal-card").dataset.id,s=Z(e);a.giveRatingModal.innerHTML=s,a.ratingBlock=document.querySelector(".rating-modal-rating-block"),a.ratingDisplay=document.querySelector(".rating-modal-rating"),se()}}})}function se(){a.ratingBlock.addEventListener("change",t=>{if(t.target.name==="rating"){const e=parseInt(t.target.value,10);a.ratingDisplay.textContent=e.toFixed(1),a.ratingBlock.querySelectorAll(".rating-modal-rating-icon").forEach((i,r)=>{r<e?i.style.fill="rgba(var(--cl-orange))":i.style.fill="rgba(var(--cl-lighthouse), 0.2)"})}})}function ae(){document.addEventListener("click",t=>{if(t.target.closest(".exercise-header-button")){const e=t.target.closest(".exercise-item").dataset.id;X(e)}})}function re(){document.addEventListener("submit",async t=>{var s,i;t.preventDefault();const e=t.target;if(e.classList.contains("rating-modal-form")){const r=new FormData(e),n=e.querySelector('input[name="rating"]:checked'),l=r.get("email"),p=r.get("comment");if(!_(n,l,p))return;const u={rate:Number(n.value),email:l,review:p},c=e.dataset.id;try{await S.updateRating(c,u),a.giveRatingModal.classList.remove("is-open"),M("Rating submitted successfully!")}catch(d){const m=((i=(s=d.response)==null?void 0:s.data)==null?void 0:i.message)||"An unknown error occurred";f(m)}}})}a.searchForm.addEventListener("submit",j);J();a.filterBtnsList.addEventListener("click",V);a.footerForm.addEventListener("submit",Y);a.categories.addEventListener("click",z);q();document.addEventListener("DOMContentLoaded",()=>{te(),ae(),re()});
//# sourceMappingURL=main-Dh8tAV4V.js.map
