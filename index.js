import{r as e,e as f,q as s,n as T,a as L,s as u,c as k,f as y,b as h,i as g,d as p,g as H,h as S}from"./assets/quote-D0xpoCrY.js";import"./assets/vendor-BUg1UuD4.js";function x(a,t,i,r){a.innerHTML="";const o=2,n=2;function c(l){const d=document.createElement("button");return d.classList.add("page-number"),d.textContent=l,l===t&&(d.disabled=!0,d.classList.add("active")),d.addEventListener("click",r),d}const m=Math.max(1,t-o),v=Math.min(i,t+n);for(let l=m;l<=v;l++)a.appendChild(c(l))}async function M(a){const t=a.target.textContent;s.page=Number(t),s.limit=window.innerWidth>=768?10:8,e.exercisePageWrapper.innerHTML="",e.exercises.innerHTML="";try{e.exercises.innerHTML='<div class="loader"></div>';const i=await f.getExercisesWithParams(s);if(s.maxPage=i.totalPages,e.exercises.innerHTML=L(i.results),s.maxPage===1)return;x(e.exercisePageWrapper,s.page,s.maxPage,M)}catch{u("Failed to load exercises. Please try again later.")}}async function R(a){a.preventDefault();const t=a.currentTarget,i=t.elements.query.value.trim();e.exercisePageWrapper.innerHTML="",e.exercises.innerHTML="",s.page=1,s.limit=window.innerWidth>=768?10:8,s.keyword=i;try{e.exercises.innerHTML='<div class="loader"></div>';const r=await f.getExercisesWithParams(s);if(s.maxPage=r.totalPages,r.results.length===0){e.exercises.innerHTML=`<p class="exercise-title-text">${T}</p>`;return}if(e.exercises.innerHTML=L(r.results),s.maxPage===1)return;x(e.exercisePageWrapper,s.page,s.maxPage,M)}catch{u("Failed to load exercises. Please try again later.")}finally{t.reset()}}async function F(a){if(a.preventDefault(),a.target!==a.currentTarget){e.exercises.innerHTML="",e.exercisePageWrapper.innerHTML="",e.searchForm.classList.add("active-search-form"),e.cardContainer.classList.add("hidden"),e.exerciseContainer.classList.remove("hidden"),s.page=1,s.keyword="",s.limit=window.innerWidth>=768?10:8,s.category_name=a.target.querySelector(".category-name").textContent,s.category_type=k[a.target.querySelector(".category-type").textContent.replace(/\s/g,"")],e.exercisesHeader.innerHTML=`Exercises / <span class="exercise-header-category">${s.category_name}</span>`,s.category_name=s.category_name.toLowerCase();try{e.exercises.innerHTML='<div class="loader"></div>';const t=await f.getExercisesWithParams(s);if(s.maxPage=t.totalPages,t.results.length===0){e.exercises.innerHTML=`<p class="exercise-title-text">${T}</p>`;return}if(e.exercises.innerHTML=L(t.results),s.maxPage===1)return;x(e.exercisePageWrapper,s.page,s.maxPage,M)}catch{u("Failed to load exercises. Please try again later.")}}}async function P(a=1){e.categories.innerHTML='<div class="loader categories-loader"></div>';const t=y.getFilterQuery(),i=window.innerWidth<768?9:12;try{const r=await y.fetchFilteredData(t,i,a),o=r.results.sort((n,c)=>n.name.localeCompare(c.name));e.categories.innerHTML="",o.forEach(n=>{const c=document.createElement("div");c.className="category-card",c.innerHTML=`
        <img
          src="${n.imgURL}"
          srcset="${n.imgURL} 1x, ${n.imgURL} 2x"
          alt="${n.name} exercise"
        />
        <div class="category-name">${n.name.charAt(0).toUpperCase()+n.name.slice(1)}</div>
        <div class="category-type">${n.filter}</div>
      `,e.categories.appendChild(c)}),e.categoriesWrap.innerHTML="",r.totalPages>1&&x(e.categoriesWrap,a,r.totalPages,B)}catch{u("Failed to load exercise categories. Please try again later.")}}function B(a){const t=Number(a.target.textContent);P(t)}function W(a){e.filterBtns.forEach(t=>{t.classList.remove("active-filter-btn")}),a.target.nodeName==="BUTTON"&&(a.target.classList.add("active-filter-btn"),e.searchForm.classList.remove("active-search-form"),e.cardContainer.classList.remove("hidden"),e.exerciseContainer.classList.add("hidden"),e.exercisesHeader.innerHTML="Exercises",y.setFilterQuery(a.target.textContent.trim()),P())}async function D(a){a.preventDefault(),h.getFormData(),h.verifyData()&&h.postEmail()}function q(){const a=new Date().getFullYear();e.footerYear.textContent=`@${a}`}function I(a){return`<div class="container">
    <form data-id=${a} class="rating-modal-form">
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
  </div>`}function N({_id:a,name:t,target:i,bodyPart:r,popularity:o,time:n,burnedCalories:c,rating:m,description:v,gifUrl:l,equipment:d}){var E;const b=Array.from({length:5},(V,C)=>`<svg class="exercise-modal-rating-icon ${C<Math.floor(m)?"rated":""}">
              <use href="${g}#star"></use>
            </svg>`).join(""),w=(E=localStorage.getItem("favorites"))==null?void 0:E.includes(a);return`<div data-id=${a} class="exercise-modal-card">
            <button class="close-modal-btn">
              <svg class="close-modal-icon">
                <use href="${g}#close"></use>
              </svg>
            </button>
            <div class="exercise-gif-wrapper">
              <img
                class="exercise-gif"
                src=${l}
                alt="alt text from backend here"
              />
            </div>
            <div class="exercise-modal-overview">
              <div>
                <h2 class="exercise-modal-title">${t}</h2>
                <div class="exercise-modal-rating-block">
                  <p class="exercise-modal-rating">${m}</p>
                  ${b}
                </div>
              </div>
              <div class="exercise-modal-info-block">
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Target</p>
                  <p class="exercise-modal-info-descr">${i}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Body Part</p>
                  <p class="exercise-modal-info-descr">${r}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Equipment</p>
                  <p class="exercise-modal-info-descr">${d}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Popular</p>
                  <p class="exercise-modal-info-descr">${o}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Burned Calories</p>
                  <p class="exercise-modal-info-descr">${c}/${n} min</p>
                </div>
              </div>
              <div class="exercise-modal-descr">${v}</div>
              <div class="exercise-modal-buttons-block">
              ${w?`<button id="remove-from-favorites" class="btn btn-primary">
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
          `}async function U(a){try{e.exerciseModal.classList.add("is-open"),e.exerciseModal.innerHTML='<div class="loader"></div>';const t=await f.getExerciseById(a),i=N(t);e.exerciseModal.innerHTML=i}catch(t){u(t.message)}}function O(a){var o;const i=((o=localStorage.getItem("favorites"))==null?void 0:o.includes(a))?`<button id="remove-from-favorites" class="btn btn-primary">
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
      ${i}
      <button id="give-rating" class="btn btn-secondary">Give a rating</button>
    `)}function A(a){try{const t=localStorage.getItem("favorites");if(!t)localStorage.setItem("favorites",JSON.stringify([a])),p("Exercise added to favorites!");else{const i=JSON.parse(t);if(!i.includes(a))localStorage.setItem("favorites",JSON.stringify([...i,a])),p("Exercise added to favorites!");else{const r=i.filter(o=>o!==a);localStorage.setItem("favorites",JSON.stringify(r)),p("Exercise removed from favorites!")}}O(a)}catch(t){u(t.message)}}function Y(){document.addEventListener("click",a=>{if(e.exerciseModal.classList.contains("is-open")){if((a.target===e.exerciseModal||a.target.closest(".close-modal-btn"))&&e.exerciseModal.classList.remove("is-open"),a.target.closest("#add-to-favorites")||a.target.closest("#remove-from-favorites")){const t=a.target.closest(".exercise-modal-card").dataset.id;A(t)}if(a.target.closest("#give-rating")){e.exerciseModal.classList.remove("is-open"),e.giveRatingModal.classList.add("is-open");const t=a.target.closest(".exercise-modal-card").dataset.id,i=I(t);e.giveRatingModal.innerHTML=i,e.ratingBlock=document.querySelector(".rating-modal-rating-block"),e.ratingDisplay=document.querySelector(".rating-modal-rating"),_()}}e.giveRatingModal.classList.contains("is-open")&&(a.target===e.giveRatingModal||a.target.closest(".close-modal-btn"))&&(e.giveRatingModal.classList.remove("is-open"),e.exerciseModal.classList.add("is-open"))})}function _(){e.ratingBlock.addEventListener("change",a=>{if(a.target.name==="rating"){const t=parseInt(a.target.value,10);e.ratingDisplay.textContent=t.toFixed(1),e.ratingBlock.querySelectorAll(".rating-modal-rating-icon").forEach((r,o)=>{o<t?r.style.fill="rgba(var(--cl-orange))":r.style.fill="rgba(var(--cl-lighthouse), 0.2)"})}})}function G(){document.addEventListener("click",a=>{if(a.target.closest(".exercise-header-button")){const t=a.target.closest(".exercise-item").dataset.id;U(t)}})}function J(){document.addEventListener("submit",async a=>{var i,r;a.preventDefault();const t=a.target;if(t.classList.contains("rating-modal-form")){const o=new FormData(t),n=t.querySelector('input[name="rating"]:checked'),c=o.get("email"),m=o.get("comment");if(!H(n,c,m))return;const l={rate:Number(n.value),email:c,review:m},d=t.dataset.id;try{await f.updateRating(d,l),e.giveRatingModal.classList.remove("is-open"),p("Rating submitted successfully!")}catch($){const b=((r=(i=$.response)==null?void 0:i.data)==null?void 0:r.message)||"An unknown error occurred";u(b)}}})}function Q(){window.addEventListener("scroll",()=>{window.scrollY>350?e.scrollUp.style.display="block":e.scrollUp.style.display="none"}),e.scrollUp.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}P();S();e.searchForm.addEventListener("submit",R);e.filterBtnsList.addEventListener("click",W);e.footerForm.addEventListener("submit",D);e.categories.addEventListener("click",F);q();document.addEventListener("DOMContentLoaded",()=>{Y(),G(),J()});Q();document.addEventListener("keydown",a=>{a.key==="Escape"&&(e.exerciseModal.classList.contains("is-open")&&e.exerciseModal.classList.remove("is-open"),e.giveRatingModal.classList.contains("is-open")&&(e.giveRatingModal.classList.remove("is-open"),e.exerciseModal.classList.add("is-open")))});
//# sourceMappingURL=index.js.map
