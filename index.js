import{r as t,e as b,q as i,n as T,a as S,s as x,c as C,f as k,b as P,i as u,d as M,g as H,h as R}from"./assets/quote-eFGLzBdb.js";import"./assets/vendor-BUg1UuD4.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-btn"),s=document.querySelector(".close-btn-menu"),a=document.querySelector(".mobile-menu-backdrop"),o=document.querySelectorAll(".menu-item"),c=document.querySelector(".js-header-nav-list"),n=document.querySelector(".logo"),m=document.querySelectorAll(".nav-link"),v=document.querySelectorAll(".menu-link"),y=(r,l)=>{r.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",r.classList.toggle("js-nav-link-active",l);const g=r.closest(".nav-item");g&&(g.style.transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)",g.classList.toggle("js-nav-item-active",l))},d=()=>{const r=localStorage.getItem("activePath"),l=window.location.pathname,g=l==="/"||l==="/index.html",h=l==="/"?"./index.html":`./${l.split("/").pop()}`;m.forEach(f=>{const p=f.getAttribute("href");y(f,r&&p===r||!r&&g&&p==="./index.html"||!r&&!g&&p===h)}),v.forEach(f=>{const p=f.getAttribute("href"),L=r&&p===r||!r&&g&&p==="./index.html"||!r&&!g&&p===h;f.style.transition="color 300ms cubic-bezier(0.4, 0, 0.2, 1)",f.classList.toggle("active",L)})};e&&a&&e.addEventListener("click",()=>{a.style.transition="opacity 300ms ease, visibility 300ms ease",a.classList.add("is-open"),document.body.style.overflow="hidden"}),s&&a&&s.addEventListener("click",()=>{a.style.transition="opacity 300ms ease, visibility 300ms ease",a.classList.remove("is-open"),document.body.style.overflow=""}),o.forEach(r=>{const l=r.querySelector(".menu-link");l&&l.addEventListener("click",()=>{localStorage.setItem("activePath",l.getAttribute("href")),a&&(a.style.transition="opacity 300ms ease, visibility 300ms ease",a.classList.remove("is-open"),document.body.style.overflow=""),d()})}),c&&c.addEventListener("click",r=>{const l=r.target.closest(".nav-link");l&&(localStorage.setItem("activePath",l.getAttribute("href")),d())}),n&&n.addEventListener("click",()=>{localStorage.setItem("activePath","./index.html"),d()}),d()});function E(e,s,a,o){e.innerHTML="";const c=2,n=2;function m(d){const r=document.createElement("button");return r.classList.add("page-number"),r.textContent=d,d===s&&(r.disabled=!0,r.classList.add("active")),r.addEventListener("click",o),r}const v=Math.max(1,s-c),y=Math.min(a,s+n);for(let d=v;d<=y;d++)e.appendChild(m(d))}async function w(e){const s=e.target.textContent;i.page=Number(s),i.limit=window.innerWidth>=768?10:8,t.exercisePageWrapper.innerHTML="",t.exercises.innerHTML="";try{t.exercises.innerHTML='<div class="loader"></div>';const a=await b.getExercisesWithParams(i);if(i.maxPage=a.totalPages,t.exercises.innerHTML=S(a.results),i.maxPage===1)return;E(t.exercisePageWrapper,i.page,i.maxPage,w)}catch{x("Failed to load exercises. Please try again later.")}}async function F(e){e.preventDefault();const s=e.currentTarget,a=s.elements.query.value.trim();t.exercisePageWrapper.innerHTML="",t.exercises.innerHTML="",i.page=1,i.limit=window.innerWidth>=768?10:8,i.keyword=a;try{t.exercises.innerHTML='<div class="loader"></div>';const o=await b.getExercisesWithParams(i);if(i.maxPage=o.totalPages,o.results.length===0){t.exercises.innerHTML=`<p class="exercise-title-text">${T}</p>`;return}if(t.exercises.innerHTML=S(o.results),i.maxPage===1)return;E(t.exercisePageWrapper,i.page,i.maxPage,w)}catch{x("Failed to load exercises. Please try again later.")}finally{s.reset()}}async function q(e){if(e.preventDefault(),e.target!==e.currentTarget){t.exercises.innerHTML="",t.exercisePageWrapper.innerHTML="",t.searchForm.classList.add("active-search-form"),t.cardContainer.classList.add("hidden"),t.exerciseContainer.classList.remove("hidden"),i.page=1,i.keyword="",i.limit=window.innerWidth>=768?10:8,i.category_name=e.target.querySelector(".category-name").textContent,i.category_type=C[e.target.querySelector(".category-type").textContent.replace(/\s/g,"")],t.exercisesHeader.innerHTML=`Exercises / <span class="exercise-header-category">${i.category_name}</span>`,i.category_name=i.category_name.toLowerCase();try{t.exercises.innerHTML='<div class="loader"></div>';const s=await b.getExercisesWithParams(i);if(i.maxPage=s.totalPages,s.results.length===0){t.exercises.innerHTML=`<p class="exercise-title-text">${T}</p>`;return}if(t.exercises.innerHTML=S(s.results),i.maxPage===1)return;E(t.exercisePageWrapper,i.page,i.maxPage,w)}catch{x("Failed to load exercises. Please try again later.")}}}async function $(e=1){t.categories.innerHTML='<div class="loader categories-loader"></div>';const s=k.getFilterQuery(),a=window.innerWidth<768?9:12;try{const o=await k.fetchFilteredData(s,a,e),c=o.results.sort((n,m)=>n.name.localeCompare(m.name));t.categories.innerHTML="",c.forEach(n=>{const m=document.createElement("div");m.className="category-card",m.innerHTML=`
        <img
          src="${n.imgURL}"
          srcset="${n.imgURL} 1x, ${n.imgURL} 2x"
          alt="${n.name} exercise"
        />
        <div class="category-name">${n.name.charAt(0).toUpperCase()+n.name.slice(1)}</div>
        <div class="category-type">${n.filter}</div>
      `,t.categories.appendChild(m)}),t.categoriesWrap.innerHTML="",o.totalPages>1&&E(t.categoriesWrap,e,o.totalPages,A)}catch{x("Failed to load exercise categories. Please try again later.")}}function A(e){const s=Number(e.target.textContent);$(s)}function B(e){t.filterBtns.forEach(s=>{s.classList.remove("active-filter-btn")}),e.target.nodeName==="BUTTON"&&(e.target.classList.add("active-filter-btn"),t.searchForm.classList.remove("active-search-form"),t.cardContainer.classList.remove("hidden"),t.exerciseContainer.classList.add("hidden"),t.exercisesHeader.innerHTML="Exercises",k.setFilterQuery(e.target.textContent.trim()),$())}async function I(e){e.preventDefault(),P.getFormData(),P.verifyData()&&P.postEmail()}function D(){const e=new Date().getFullYear();t.footerYear.textContent=`@${e}`}function W(e){return`<div class="container">
    <form data-id=${e} class="rating-modal-form">
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
  </div>`}function N({_id:e,name:s,target:a,bodyPart:o,popularity:c,time:n,burnedCalories:m,rating:v,description:y,gifUrl:d,equipment:r}){var f;const g=Array.from({length:5},(p,L)=>`<svg class="exercise-modal-rating-icon ${L<Math.floor(v)?"rated":""}">
              <use href="${u}#star"></use>
            </svg>`).join(""),h=(f=localStorage.getItem("favorites"))==null?void 0:f.includes(e);return`<div data-id=${e} class="exercise-modal-card">
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
                <h2 class="exercise-modal-title">${s}</h2>
                <div class="exercise-modal-rating-block">
                  <p class="exercise-modal-rating">${v}</p>
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
                  <p class="exercise-modal-info-descr">${o}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Equipment</p>
                  <p class="exercise-modal-info-descr">${r}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Popular</p>
                  <p class="exercise-modal-info-descr">${c}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Burned Calories</p>
                  <p class="exercise-modal-info-descr">${m}/${n} min</p>
                </div>
              </div>
              <div class="exercise-modal-descr">${y}</div>
              <div class="exercise-modal-buttons-block">
              ${h?`<button id="remove-from-favorites" class="btn btn-primary">
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
          `}async function O(e){try{t.exerciseModal.classList.add("is-open"),t.exerciseModal.innerHTML='<div class="loader"></div>';const s=await b.getExerciseById(e),a=N(s);t.exerciseModal.innerHTML=a}catch(s){x(s.message)}}function U(e){var c;const a=((c=localStorage.getItem("favorites"))==null?void 0:c.includes(e))?`<button id="remove-from-favorites" class="btn btn-primary">
         Remove favorite
         <svg class="exercise-modal-btn-icon">
           <use href="./images/icons.svg#trash"></use>
         </svg>
       </button>`:`<button id="add-to-favorites" class="btn btn-primary">
         Add to favorites
         <svg class="exercise-modal-btn-icon">
           <use href="./images/icons.svg#heart"></use>
         </svg>
       </button>`,o=document.querySelector(".exercise-modal-buttons-block");o&&(o.innerHTML=`
      ${a}
      <button id="give-rating" class="btn btn-secondary">Give a rating</button>
    `)}function Y(e){try{const s=localStorage.getItem("favorites");if(!s)localStorage.setItem("favorites",JSON.stringify([e])),M("Exercise added to favorites!");else{const a=JSON.parse(s);if(!a.includes(e))localStorage.setItem("favorites",JSON.stringify([...a,e])),M("Exercise added to favorites!");else{const o=a.filter(c=>c!==e);localStorage.setItem("favorites",JSON.stringify(o)),M("Exercise removed from favorites!")}}U(e)}catch(s){x(s.message)}}function _(){document.addEventListener("click",e=>{if(t.exerciseModal.classList.contains("is-open")){if((e.target===t.exerciseModal||e.target.closest(".close-modal-btn"))&&t.exerciseModal.classList.remove("is-open"),e.target.closest("#add-to-favorites")||e.target.closest("#remove-from-favorites")){const s=e.target.closest(".exercise-modal-card").dataset.id;Y(s)}if(e.target.closest("#give-rating")){t.exerciseModal.classList.remove("is-open"),t.giveRatingModal.classList.add("is-open");const s=e.target.closest(".exercise-modal-card").dataset.id,a=W(s);t.giveRatingModal.innerHTML=a,t.ratingBlock=document.querySelector(".rating-modal-rating-block"),t.ratingDisplay=document.querySelector(".rating-modal-rating"),j()}}t.giveRatingModal.classList.contains("is-open")&&(e.target===t.giveRatingModal||e.target.closest(".close-modal-btn"))&&(t.giveRatingModal.classList.remove("is-open"),t.exerciseModal.classList.add("is-open"))})}function j(){t.ratingBlock.addEventListener("change",e=>{if(e.target.name==="rating"){const s=parseInt(e.target.value,10);t.ratingDisplay.textContent=s.toFixed(1),t.ratingBlock.querySelectorAll(".rating-modal-rating-icon").forEach((o,c)=>{c<s?o.style.fill="rgba(var(--cl-orange))":o.style.fill="rgba(var(--cl-lighthouse), 0.2)"})}})}function z(){document.addEventListener("click",e=>{if(e.target.closest(".exercise-header-button")){const s=e.target.closest(".exercise-item").dataset.id;O(s)}})}function G(){document.addEventListener("submit",async e=>{var a,o;e.preventDefault();const s=e.target;if(s.classList.contains("rating-modal-form")){const c=new FormData(s),n=s.querySelector('input[name="rating"]:checked'),m=c.get("email"),v=c.get("comment");if(!H(n,m,v))return;const d={rate:Number(n.value),email:m,review:v},r=s.dataset.id;try{await b.updateRating(r,d),t.giveRatingModal.classList.remove("is-open"),M("Rating submitted successfully!")}catch(l){const g=((o=(a=l.response)==null?void 0:a.data)==null?void 0:o.message)||"An unknown error occurred";x(g)}}})}function J(){window.addEventListener("scroll",()=>{window.scrollY>350?t.scrollUp.style.display="block":t.scrollUp.style.display="none"}),t.scrollUp.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}$();R();t.searchForm.addEventListener("submit",F);t.filterBtnsList.addEventListener("click",B);t.footerForm.addEventListener("submit",I);t.categories.addEventListener("click",q);D();document.addEventListener("DOMContentLoaded",()=>{_(),z(),G()});J();document.addEventListener("keydown",e=>{e.key==="Escape"&&(t.exerciseModal.classList.contains("is-open")&&t.exerciseModal.classList.remove("is-open"),t.giveRatingModal.classList.contains("is-open")&&(t.giveRatingModal.classList.remove("is-open"),t.exerciseModal.classList.add("is-open")))});
//# sourceMappingURL=index.js.map
