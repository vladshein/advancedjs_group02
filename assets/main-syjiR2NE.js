var Q=Object.defineProperty;var N=(t,e,a)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var P=(t,e,a)=>N(t,typeof e!="symbol"?e+"":e,a);import{a as h,i as I}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),a=document.querySelector(".mobile-menu-backdrop"),r=document.querySelectorAll(".menu-item"),n=document.querySelector(".js-header-nav-list"),i=document.querySelector(".logo"),l=document.querySelectorAll(".nav-link"),p=document.querySelectorAll(".menu-link"),b=(c,d)=>{c.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",c.classList.toggle("js-nav-link-active",d);const g=c.closest(".nav-item");g&&(g.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",g.classList.toggle("js-nav-item-active",d))},u=()=>{const c=localStorage.getItem("activePath"),d=window.location.pathname,g=d==="/"||d==="/index.html",M=d==="/"?"./index.html":`./${d.split("/").pop()}`;l.forEach(v=>{const y=v.getAttribute("href");b(v,c&&y===c||!c&&g&&y==="./index.html"||!c&&!g&&y===M)}),p.forEach(v=>{const y=v.getAttribute("href"),T=c&&y===c||!c&&g&&y==="./index.html"||!c&&!g&&y===M;v.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",v.classList.toggle("active",T)})};t&&a&&t.addEventListener("click",()=>{a.style.transition="opacity 300ms ease, visibility 300ms ease",a.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&a&&e.addEventListener("click",()=>{a.style.transition="opacity 300ms ease, visibility 300ms ease",a.classList.remove("is-open"),document.body.style.overflow=""}),r.forEach(c=>{const d=c.querySelector(".menu-link");d&&d.addEventListener("click",()=>{localStorage.setItem("activePath",d.getAttribute("href")),a&&(a.style.transition="opacity 300ms ease, visibility 300ms ease",a.classList.remove("is-open"),document.body.style.overflow=""),u()})}),n&&n.addEventListener("click",c=>{const d=c.target.closest(".nav-link");d&&(localStorage.setItem("activePath",d.getAttribute("href")),u())}),i&&i.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),u()}),u()});const s={exerciseModal:document.querySelector("#exercise-modal"),exerciseContainer:document.querySelector(".exercise-container"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),quoteWrap:document.querySelector(".quote-wrap"),exercisesHeader:document.querySelector(".exercises-header"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),cardContainer:document.querySelector(".card-container"),categories:document.querySelector("#categories-container"),categoriesWrap:document.querySelector(".category-page-wrapper"),footerForm:document.querySelector(".footer-form"),giveRatingModal:document.querySelector("#give-rating-modal"),ratingBlock:document.querySelector(".rating-modal-rating-block"),ratingDisplay:document.querySelector(".rating-modal-rating"),footerYear:document.querySelector(".footer-year")},x="https://your-energy.b.goit.study/api",o={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"},_={Muscles:"muscles",Equipment:"equipment",Bodyparts:"bodypart"},O="Oops! We couldn't find any exercises matching your search. Try another keyword and keep moving! 💪";class U{async getExercises(){const{data:e}=await h.get(`${x}/exercises`);return e}async getExerciseById(e){try{const{data:a}=await h.get(`${x}/exercises/${e}`);return a}catch(a){throw console.error("Error fetching exercise by ID:",a),a}}async getExercisesWithParams({category_type:e,category_name:a,limit:r=8,page:n=1,keyword:i=""}){const l={[e]:a,limit:r,page:n};i&&(l.keyword=i);const{data:p}=await h.get(`${x}/exercises`,{params:l});return p}async updateRating(e,a){try{const{data:r}=await h.patch(`${x}/exercises/${e}/rating`,a);return r}catch(r){throw r}}}const L=class L{getFilterQuery(){return L.filterQuery===""?"Muscles":L.filterQuery}setFilterQuery(e){L.filterQuery=e}async fetchFilteredData(e,a,r){const n={filter:e,limit:a,page:r};return(await h.get(`${x}/filters`,{params:n})).data}};P(L,"filterQuery","");let D=L;function m(t){return I.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function $(t){return I.success({title:"Success",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function j(t,e,a){const r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return t?!e||!r.test(e)?(m("Please enter a valid email address."),!1):a?!0:(m("Please enter a comment."),!1):(m("Please select a rating before submitting."),!1)}function E(t,e){return t.length>e?t.slice(0,e-1)+"...":t}class z{constructor(){P(this,"email","")}getFormData(){this.email=document.getElementById("email").value.trim()}verifyData(){return console.log(this.email),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)?(document.getElementById("email").value="",!0):(console.log(this.email),m("Please enter a valid email address."),!1)}async postEmail(){try{const e=await h.post(`${x}/subscription`,{email:this.email})}catch(e){m(e.response.data.message);return}$("Email address added to subscriptions.")}}const w=class w{async getQuote(){const{data:e}=await h.get(`${x}/quote`);return e}setQuoteDataToLS(e,a=Date.now()){const r={quote:e,currentDate:a};localStorage.setItem(w.QUOTE_LS_KEY,JSON.stringify(r))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(w.QUOTE_LS_KEY))}};P(w,"QUOTE_LS_KEY","quote-and-date");let A=w;const S=new U,F=new D,k=new z,C=new A;function q(t,e,a,r){t.innerHTML="";const n=2,i=2;function l(u){const c=document.createElement("button");return c.classList.add("page-number"),c.textContent=u,u===e&&(c.disabled=!0,c.classList.add("active")),c.addEventListener("click",r),c}const p=Math.max(1,e-n),b=Math.min(a,e+i);for(let u=p;u<=b;u++)t.appendChild(l(u))}const f="/advancedjs_group02/assets/icons-DsHkvW1c.svg";function R(t){return t.map(e=>`<li class="exercise-item" data-id="${e._id}">
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
              <use href="${f}#star"></use>
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
              <use href="${f}#arrow-right"></use>
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
              <use href="${f}#running-man"></use>
            </svg>
          </div>
          <h3 class="exercise-title-text">${window.innerWidth<=1440?E(e.name,25):e.name}</h3>
        </div>
        <ul class="exercise-footer">
          <li>
            <span class="exercise-footer-item-accent">Burned calories:</span>
            ${window.innerWidth<=1440?E(e.burnedCalories,8):e.burnedCalories}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Body part:</span>
            ${window.innerWidth<=1440?E(e.bodyPart,5):e.bodyPart}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Target:</span>
            ${window.innerWidth<=1440?E(e.target,4):e.target}
          </li>
        </ul>
      </li>`).join("")}async function W(t){const e=t.target.textContent;o.page=Number(e),o.limit=window.innerWidth>=768?10:8,s.exercisePageWrapper.innerHTML="",s.exercises.innerHTML="";try{const a=await S.getExercisesWithParams(o);if(o.maxPage=a.totalPages,s.exercises.innerHTML=R(a.results),o.maxPage===1)return;q(s.exercisePageWrapper,o.page,o.maxPage,W)}catch{m("Failed to load exercises. Please try again later.")}finally{}}async function Y(t){t.preventDefault();const e=t.currentTarget,a=e.elements.query.value.trim();if(a===""){m("Please entered your request");return}s.exercisePageWrapper.innerHTML="",s.exercises.innerHTML="",o.page=1,o.limit=window.innerWidth>=768?10:8,o.keyword=a;try{const r=await S.getExercisesWithParams(o);if(o.maxPage=r.totalPages,r.results.length===0){s.exercises.innerHTML=`<p class="exercise-title-text">${O}</p>`;return}if(s.exercises.innerHTML=R(r.results),o.maxPage===1)return;q(s.exercisePageWrapper,o.page,o.maxPage,W)}catch{m("Failed to load exercises. Please try again later.")}finally{e.reset()}}async function J(t){if(t.preventDefault(),t.target!==t.currentTarget){s.exercises.innerHTML="",s.exercisePageWrapper.innerHTML="",s.searchForm.classList.add("active-search-form"),s.cardContainer.classList.add("hidden"),s.exerciseContainer.classList.remove("hidden"),o.page=1,o.keyword="",o.limit=window.innerWidth>=768?10:8,o.category_name=t.target.querySelector(".category-name").textContent,o.category_type=_[t.target.querySelector(".category-type").textContent.replace(/\s/g,"")],s.exercisesHeader.innerHTML=`Exercises / <span class="exercise-header-category">${o.category_name}</span>`,o.category_name=o.category_name.toLowerCase();try{const e=await S.getExercisesWithParams(o);if(o.maxPage=e.totalPages,e.results.length===0){s.exercises.innerHTML=`<p class="exercise-title-text">${O}</p>`;return}if(s.exercises.innerHTML=R(e.results),o.maxPage===1)return;q(s.exercisePageWrapper,o.page,o.maxPage,W)}catch{m("Failed to load exercises. Please try again later.")}finally{}}}function H({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function K(){try{const t=C.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await C.getQuote();C.setQuoteDataToLS(e),s.quoteWrap.insertAdjacentHTML("beforeend",H(e))}else s.quoteWrap.insertAdjacentHTML("beforeend",H(t.quote))}catch(t){m(t.message)}}async function B(t=1){const e=F.getFilterQuery(),a=window.innerWidth<768?9:12;try{const r=await F.fetchFilteredData(e,a,t),n=r.results.sort((i,l)=>i.name.localeCompare(l.name));s.categories.innerHTML="",n.forEach(i=>{const l=document.createElement("div");l.className="category-card",l.innerHTML=`
        <img
          src="${i.imgURL}"
          srcset="${i.imgURL} 1x, ${i.imgURL} 2x"
          alt="${i.name} exercise"
        />
        <div class="category-name">${i.name.charAt(0).toUpperCase()+i.name.slice(1)}</div>
        <div class="category-type">${i.filter}</div>
      `,s.categories.appendChild(l)}),s.categoriesWrap.innerHTML="",r.totalPages>1&&q(s.categoriesWrap,t,r.totalPages,V)}catch{m("Failed to load exercise categories. Please try again later.")}}function V(t){const e=Number(t.target.textContent);B(e)}function Z(t){s.filterBtns.forEach(e=>{e.classList.remove("active-filter-btn")}),t.target.nodeName==="BUTTON"&&(t.target.classList.add("active-filter-btn"),s.searchForm.classList.remove("active-search-form"),s.cardContainer.classList.remove("hidden"),s.exerciseContainer.classList.add("hidden"),s.exercisesHeader.innerHTML="Exercises",F.setFilterQuery(t.target.textContent.trim()),B())}async function G(t){t.preventDefault(),k.getFormData(),k.verifyData()&&k.postEmail()}function X(){const t=new Date().getFullYear();s.footerYear.textContent=`@${t}`}function ee(t){return`<div class="container">
    <form data-id=${t} class="rating-modal-form">
      <button class="close-modal-btn" type="button">
        <svg class="close-modal-icon">
          <use href="${f}#close"></use>
        </svg>
      </button>
      <h2 class="rating-modal-title">Rating</h2>
      <div class="rating-modal-rating-block">
        <p class="rating-modal-rating">0.0</p>
        <input type="radio" id="star-1" name="rating" value="1"/>
        <label for="star-1">
          <svg class="rating-modal-rating-icon">
            <use href="${f}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-2" name="rating" value="2" />
        <label for="star-2">
          <svg class="rating-modal-rating-icon">
            <use href="${f}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-3" name="rating" value="3" />
        <label for="star-3">
          <svg class="rating-modal-rating-icon">
            <use href="${f}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-4" name="rating" value="4" />
        <label for="star-4">
          <svg class="rating-modal-rating-icon">
            <use href="${f}#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-5" name="rating" value="5" />
        <label for="star-5">
          <svg class="rating-modal-rating-icon">
            <use href="${f}#star"></use>
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
  </div>`}function te({_id:t,name:e,target:a,bodyPart:r,popularity:n,time:i,burnedCalories:l,rating:p,description:b,gifUrl:u,equipment:c}){const g=Array.from({length:5},(M,v)=>`<svg class="exercise-modal-rating-icon ${v<Math.floor(p)?"rated":""}">
              <use href="${f}#star"></use>
            </svg>`).join("");return`<div class="container">
    <div data-id=${t} class="exercise-modal-card">
      <button class="close-modal-btn">
        <svg class="close-modal-icon">
          <use href="${f}#close"></use>
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
            ${g}
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
            <p class="exercise-modal-info-descr">${n}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Burned Calories</p>
            <p class="exercise-modal-info-descr">${l}/${i} min</p>
          </div>
        </div>
        <div class="exercise-modal-descr">${b}</div>
        <div class="exercise-modal-buttons-block">
          <button id="add-to-favorites" class="btn btn-primary">
            Add to favorites
            <svg class="exercise-modal-btn-icon">
              <use href="${f}#heart"></use>
            </svg>
          </button>
          <button id="give-rating" class="btn btn-secondary">Give a rating</button>
        </div>
      </div>
    </div>
    </div>`}async function ae(t){try{const e=await S.getExerciseById(t);s.exerciseModal.classList.add("is-open");const a=te(e);s.exerciseModal.innerHTML=a}catch(e){m(e.message)}}function se(t){try{const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t])),$("Exercise added to favorites!");else{const a=JSON.parse(e);a.includes(t)?m("Exercise already in favorites!"):(localStorage.setItem("favorites",JSON.stringify([...a,t])),$("Exercise added to favorites!"))}}catch(e){m(e.message)}}function re(){document.addEventListener("click",t=>{if(s.exerciseModal||s.giveRatingModal){if((t.target===s.exerciseModal||t.target===s.giveRatingModal||t.target.closest(".close-modal-btn"))&&(s.exerciseModal.classList.remove("is-open"),s.giveRatingModal.classList.remove("is-open")),t.target.closest("#add-to-favorites")){const e=t.target.closest(".exercise-modal-card").dataset.id;se(e)}if(t.target.closest("#give-rating")){s.exerciseModal.classList.remove("is-open"),s.giveRatingModal.classList.add("is-open");const e=t.target.closest(".exercise-modal-card").dataset.id,a=ee(e);s.giveRatingModal.innerHTML=a,s.ratingBlock=document.querySelector(".rating-modal-rating-block"),s.ratingDisplay=document.querySelector(".rating-modal-rating"),ie()}}})}function ie(){s.ratingBlock.addEventListener("change",t=>{if(t.target.name==="rating"){const e=parseInt(t.target.value,10);s.ratingDisplay.textContent=e.toFixed(1),s.ratingBlock.querySelectorAll(".rating-modal-rating-icon").forEach((r,n)=>{n<e?r.style.fill="rgba(var(--cl-orange))":r.style.fill="rgba(var(--cl-lighthouse), 0.2)"})}})}function ne(){document.addEventListener("click",t=>{if(t.target.closest(".exercise-header-button")){const e=t.target.closest(".exercise-item").dataset.id;ae(e)}})}function oe(){document.addEventListener("submit",async t=>{var a,r;t.preventDefault();const e=t.target;if(e.classList.contains("rating-modal-form")){const n=new FormData(e),i=e.querySelector('input[name="rating"]:checked'),l=n.get("email"),p=n.get("comment");if(!j(i,l,p))return;const u={rate:Number(i.value),email:l,review:p},c=e.dataset.id;try{await S.updateRating(c,u),s.giveRatingModal.classList.remove("is-open"),$("Rating submitted successfully!")}catch(d){const g=((r=(a=d.response)==null?void 0:a.data)==null?void 0:r.message)||"An unknown error occurred";m(g)}}})}s.searchForm.addEventListener("submit",Y);K();s.filterBtnsList.addEventListener("click",Z);s.footerForm.addEventListener("submit",G);s.categories.addEventListener("click",J);B();X();document.addEventListener("DOMContentLoaded",()=>{re(),ne(),oe()});
//# sourceMappingURL=main-syjiR2NE.js.map
