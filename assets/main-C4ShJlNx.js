var O=Object.defineProperty;var Q=(t,e,s)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var w=(t,e,s)=>Q(t,typeof e!="symbol"?e+"":e,s);import{i as F,a as h}from"./vendor-BUg1UuD4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const x="https://your-energy.b.goit.study/api",n={limit:8,page:1,maxPage:1,keyword:"",category_type:"muscles",category_name:"waist"},W={Muscles:"muscles",Equipment:"equipment",Bodyparts:"bodypart"};function f(t){return F.error({title:"Error",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function M(t){return F.success({title:"Success",message:t,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}function N(t,e,s){const i=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return t?!e||!i.test(e)?(f("Please enter a valid email address."),!1):s?!0:(f("Please enter a comment."),!1):(f("Please select a rating before submitting."),!1)}class U{async getExercises(){const{data:e}=await h.get(`${x}/exercises`);return e}async getExerciseById(e){try{const{data:s}=await h.get(`${x}/exercises/${e}`);return s}catch(s){throw console.error("Error fetching exercise by ID:",s),s}}async getExercisesWithParams({category_type:e,category_name:s,limit:i=8,page:r=1,keyword:o=""}){const c={[e]:s,limit:i,page:r};o&&(c.keyword=o);const{data:d}=await h.get(`${x}/exercises`,{params:c});return d}async updateRating(e,s){try{const{data:i}=await h.patch(`${x}/exercises/${e}/rating`,s);return i}catch(i){throw i}}}const b=class b{getFilterQuery(){return b.filterQuery===""?"Muscles":b.filterQuery}setFilterQuery(e){b.filterQuery=e}async fetchFilteredData(e,s,i){const r={filter:e,limit:s,page:i};return(await h.get(`${x}/filters`,{params:r})).data}};w(b,"filterQuery","");let T=b;class z{constructor(){w(this,"email","")}getFormData(){this.email=document.getElementById("email").value.trim()}verifyData(){return console.log(this.email),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)?(document.getElementById("email").value="",!0):(console.log(this.email),f("Please enter a valid email address."),!1)}async postEmail(){try{const e=await h.post(`${x}/subscription`,{email:this.email})}catch{f("Subscription failed.");return}M("Email address added to subscriptions.")}}const S=class S{async getQuote(){const{data:e}=await h.get(`${x}/quote`);return e}setQuoteDataToLS(e,s=Date.now()){const i={quote:e,currentDate:s};localStorage.setItem(S.QUOTE_LS_KEY,JSON.stringify(i))}getQuoteDataFromLS(){return JSON.parse(localStorage.getItem(S.QUOTE_LS_KEY))}};w(S,"QUOTE_LS_KEY","quote-and-date");let D=S;const L=class L{getNextPage(){return L.page}getPreviousPage(){return L.page}getCurrentPage(){return L.page}};w(L,"page",1);let k=L;const E=new U,A=new T,$=new z,C=new D,j=new k;document.addEventListener("DOMContentLoaded",I);async function I(){const t=document.getElementById("categories-container"),e=A.getFilterQuery(),s=window.innerWidth<768?9:12,i=j.getCurrentPage();try{const o=(await A.fetchFilteredData(e,s,i)).results.sort(function(c,d){return c.name.localeCompare(d.name)});t.innerHTML="",o.forEach(function(c){const d=document.createElement("div");d.className="category-card",d.innerHTML=`
        <img
          src="${c.imgURL}"
          srcset="${c.imgURL} 1x, ${c.imgURL} 2x"
          alt="${c.name} exercise"
        />
        <div class="category-name">${c.name.charAt(0).toUpperCase()+c.name.slice(1)}</div>
        <div class="category-type">${c.filter}</div>
      `,t.appendChild(d)})}catch{f("Failed to load exercise categories. Please try again later.")}}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-btn"),e=document.querySelector(".close-btn-menu"),s=document.querySelector(".mobile-menu-backdrop"),i=document.querySelectorAll(".menu-item"),r=document.querySelector(".js-header-nav-list"),o=document.querySelector(".logo"),c=document.querySelectorAll(".nav-link"),d=document.querySelectorAll(".menu-link"),p=(l,u)=>{l.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",l.classList.toggle("js-nav-link-active",u);const g=l.closest(".nav-item");g&&(g.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",g.classList.toggle("js-nav-item-active",u))},m=()=>{const l=localStorage.getItem("activePath"),u=window.location.pathname,g=u==="/"||u==="/index.html",q=u==="/"?"./index.html":`./${u.split("/").pop()}`;c.forEach(v=>{const y=v.getAttribute("href");p(v,l&&y===l||!l&&g&&y==="./index.html"||!l&&!g&&y===q)}),d.forEach(v=>{const y=v.getAttribute("href"),P=l&&y===l||!l&&g&&y==="./index.html"||!l&&!g&&y===q;v.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",v.classList.toggle("active",P)})};t&&s&&t.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.add("is-open"),document.body.style.overflow="hidden"}),e&&s&&e.addEventListener("click",()=>{s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""}),i.forEach(l=>{const u=l.querySelector(".menu-link");u&&u.addEventListener("click",()=>{localStorage.setItem("activePath",u.getAttribute("href")),s&&(s.style.transition="opacity 300ms ease, visibility 300ms ease",s.classList.remove("is-open"),document.body.style.overflow=""),m()})}),r&&r.addEventListener("click",l=>{const u=l.target.closest(".nav-link");u&&(localStorage.setItem("activePath",u.getAttribute("href")),m())}),o&&o.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),m()}),m()});const a={exerciseModal:document.querySelector("#exercise-modal"),exerciseContainer:document.querySelector(".exercise-container"),exercises:document.querySelector(".exercise-list"),exercisePageWrapper:document.querySelector(".exercise-page-wrapper"),searchForm:document.querySelector(".search-form"),quoteWrap:document.querySelector(".quote-wrap"),exercisesHeader:document.querySelector(".exercises-header"),filterBtnsList:document.querySelector(".filter-btns-list"),filterBtns:document.querySelectorAll(".js-filter-btn"),cardContainer:document.querySelector(".card-container"),categories:document.querySelector("#categories-container"),categoriesWrap:document.querySelector(".category-page-wrapper"),footerForm:document.querySelector(".footer-form"),giveRatingModal:document.querySelector("#give-rating-modal"),ratingBlock:document.querySelector(".rating-modal-rating-block"),ratingDisplay:document.querySelector(".rating-modal-rating")};function B(t,e){const s=a.exercisePageWrapper;s.innerHTML="";const i=2,r=2;function o(p){const m=document.createElement("button");return m.classList.add("page-number"),m.textContent=p,p===t&&(m.disabled=!0,m.classList.add("active")),m.addEventListener("click",_),m}const c=Math.max(1,t-i),d=Math.min(e,t+r);for(let p=c;p<=d;p++)s.appendChild(o(p));console.log(t,e)}function R(t){return t.map(e=>`<li class="exercise-item" data-id="${e._id}">
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
      </li>`).join("")}async function _(t){const e=t.target.textContent;n.page=Number(e),a.exercisePageWrapper.innerHTML="",a.exercises.innerHTML="",window.innerWidth>=768?n.limit=10:n.limit=8;try{const i=await E.getExercisesWithParams(n);if(n.maxPage=i.totalPages,i.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=R(i.results),n.maxPage===1)return;B(n.page,n.maxPage)}catch(i){console.log(i)}finally{}}async function J(t){t.preventDefault();const e=t.currentTarget,s=e.elements.query.value.trim();if(s===""){f("Please entered your request");return}a.exercisePageWrapper.innerHTML="",a.exercises.innerHTML="",n.page=1,window.innerWidth>=768?n.limit=10:n.limit=8,n.keyword=s;try{const r=await E.getExercisesWithParams(n);if(n.maxPage=r.totalPages,r.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=R(r.results),n.maxPage===1)return;B(n.page,n.maxPage)}catch(r){console.log(r)}finally{e.reset()}}async function K(t){if(t.preventDefault(),t.target===t.currentTarget)return;a.searchForm.classList.add("active-search-form"),a.exerciseContainer.classList.remove("hidden"),a.exercises.innerHTML="",a.cardContainer.classList.add("hidden"),a.exercisePageWrapper.innerHTML="",n.page=1,n.keyword="",window.innerWidth>=768?n.limit=10:n.limit=8,n.category_name=t.target.querySelector(".category-name").textContent,n.category_type=W[t.target.querySelector(".category-type").textContent.replace(/\s/g,"")],a.exercisesHeader.innerHTML=`Exercises / <span class="exercise-header-category">${n.category_name}</span>`,n.category_name=n.category_name.toLowerCase();try{const s=await E.getExercisesWithParams(n);if(n.maxPage=s.totalPages,s.results.length===0&&(a.exercises.innerHTML=""),a.exercises.innerHTML=R(s.results),n.maxPage===1)return;B(n.page,n.maxPage)}catch(s){console.log(s)}finally{}}function H({author:t,quote:e}){return`<p class="quote-text">
        ${e}
      </p>
      <p class="quote-subtitle">${t}</p>`}async function V(){try{const t=C.getQuoteDataFromLS();if(!t||Date.now()!==t.currentDate){const e=await C.getQuote();C.setQuoteDataToLS(e),a.quoteWrap.insertAdjacentHTML("beforeend",H(e))}else a.quoteWrap.insertAdjacentHTML("beforeend",H(t.quote))}catch(t){f(t.message)}}function Y(t){a.filterBtns.forEach(e=>{e.classList.remove("active-filter-btn")}),t.target.nodeName==="BUTTON"&&(t.target.classList.add("active-filter-btn"),a.searchForm.classList.remove("active-search-form"),a.cardContainer.classList.remove("hidden"),a.exerciseContainer.classList.add("hidden"),a.exercisesHeader.innerHTML="Exercises",A.setFilterQuery(t.target.textContent.trim()),I())}async function Z(t){t.preventDefault(),$.getFormData(),$.verifyData()&&$.postEmail()}function G(t){return`<div class="container">
    <form data-id=${t} class="rating-modal-form">
      <button class="close-modal-btn" type="button">
        <svg class="close-modal-icon">
          <use href="./images/icons.svg#close"></use>
        </svg>
      </button>
      <h2 class="rating-modal-title">Rating</h2>
      <div class="rating-modal-rating-block">
        <p class="rating-modal-rating">0.0</p>
        <input type="radio" id="star-1" name="rating" value="1"/>
        <label for="star-1">
          <svg class="rating-modal-rating-icon">
            <use href="./images/icons.svg#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-2" name="rating" value="2" />
        <label for="star-2">
          <svg class="rating-modal-rating-icon">
            <use href="./images/icons.svg#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-3" name="rating" value="3" />
        <label for="star-3">
          <svg class="rating-modal-rating-icon">
            <use href="./images/icons.svg#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-4" name="rating" value="4" />
        <label for="star-4">
          <svg class="rating-modal-rating-icon">
            <use href="./images/icons.svg#star"></use>
          </svg>
        </label>
        <input type="radio" id="star-5" name="rating" value="5" />
        <label for="star-5">
          <svg class="rating-modal-rating-icon">
            <use href="./images/icons.svg#star"></use>
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
  </div>`}function X({_id:t,name:e,target:s,bodyPart:i,popularity:r,time:o,burnedCalories:c,rating:d,description:p,gifUrl:m,equipment:l}){const g=Array.from({length:5},(q,v)=>`<svg class="exercise-modal-rating-icon ${v<Math.floor(d)?"rated":""}">
              <use href="./images/icons.svg#star"></use>
            </svg>`).join("");return`<div class="container">
    <div data-id=${t} class="exercise-modal-card">
      <button class="close-modal-btn">
        <svg class="close-modal-icon">
          <use href="./images/icons.svg#close"></use>
        </svg>
      </button>
      <div class="exercise-gif-wrapper">
        <img
          class="exercise-gif"
          src=${m}
          alt="alt text from backend here"
        />
      </div>
      <div class="exercise-modal-overview">
        <div>
          <h2 class="exercise-modal-title">${e}</h2>
          <div class="exercise-modal-rating-block">
            <p class="exercise-modal-rating">${d}</p>
            ${g}
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
            <p class="exercise-modal-info-descr">${l}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Popular</p>
            <p class="exercise-modal-info-descr">${r}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Burned Calories</p>
            <p class="exercise-modal-info-descr">${c}/${o} min</p>
          </div>
        </div>
        <div class="exercise-modal-descr">${p}</div>
        <div class="exercise-modal-buttons-block">
          <button id="add-to-favorites" class="btn btn-primary">
            Add to favorites
            <svg class="exercise-modal-btn-icon">
              <use href="./images/icons.svg#heart"></use>
            </svg>
          </button>
          <button id="give-rating" class="btn btn-secondary">Give a rating</button>
        </div>
      </div>
    </div>
    </div>`}async function ee(t){try{const e=await E.getExerciseById(t);a.exerciseModal.classList.add("is-open");const s=X(e);a.exerciseModal.innerHTML=s}catch(e){f(e.message)}}function te(t){try{const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t])),M("Exercise added to favorites!");else{const s=JSON.parse(e);s.includes(t)?f("Exercise already in favorites!"):(localStorage.setItem("favorites",JSON.stringify([...s,t])),M("Exercise added to favorites!"))}}catch(e){f(e.message)}}function se(){document.addEventListener("click",t=>{if(a.exerciseModal||a.giveRatingModal){if((t.target===a.exerciseModal||t.target===a.giveRatingModal||t.target.closest(".close-modal-btn"))&&(a.exerciseModal.classList.remove("is-open"),a.giveRatingModal.classList.remove("is-open")),t.target.closest("#add-to-favorites")){const e=t.target.closest(".exercise-modal-card").dataset.id;te(e)}if(t.target.closest("#give-rating")){a.exerciseModal.classList.remove("is-open"),a.giveRatingModal.classList.add("is-open");const e=t.target.closest(".exercise-modal-card").dataset.id,s=G(e);a.giveRatingModal.innerHTML=s,a.ratingBlock=document.querySelector(".rating-modal-rating-block"),a.ratingDisplay=document.querySelector(".rating-modal-rating"),ae()}}})}function ae(){a.ratingBlock.addEventListener("change",t=>{if(t.target.name==="rating"){const e=parseInt(t.target.value,10);a.ratingDisplay.textContent=e.toFixed(1),a.ratingBlock.querySelectorAll(".rating-modal-rating-icon").forEach((i,r)=>{r<e?i.style.fill="rgba(var(--cl-orange))":i.style.fill="rgba(var(--cl-lighthouse), 0.2)"})}})}function re(){document.addEventListener("click",t=>{if(t.target.closest(".exercise-header-button")){const e=t.target.closest(".exercise-item").dataset.id;ee(e)}})}function ie(){document.addEventListener("submit",async t=>{var s,i;t.preventDefault();const e=t.target;if(e.classList.contains("rating-modal-form")){const r=new FormData(e),o=e.querySelector('input[name="rating"]:checked'),c=r.get("email"),d=r.get("comment");if(!N(o,c,d))return;const m={rate:Number(o.value),email:c,review:d},l=e.dataset.id;try{await E.updateRating(l,m),a.giveRatingModal.classList.remove("is-open"),M("Rating submitted successfully!")}catch(u){const g=((i=(s=u.response)==null?void 0:s.data)==null?void 0:i.message)||"An unknown error occurred";f(g)}}})}a.searchForm.addEventListener("submit",J);V();a.filterBtnsList.addEventListener("click",Y);a.footerForm.addEventListener("submit",Z);a.categories.addEventListener("click",K);document.addEventListener("DOMContentLoaded",()=>{se(),re(),ie()});
//# sourceMappingURL=main-C4ShJlNx.js.map
