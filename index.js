import{r as e,e as m,q as r,n as L,a as x,b as o,s as l,c as y,f as g,d,h,g as v,i as P,j as M}from"./assets/modals-listeners-BlKlXNF9.js";import"./assets/vendor-BUg1UuD4.js";async function p(a){const t=a.target.textContent;r.page=Number(t),r.limit=window.innerWidth>=768?10:8,e.exercisePageWrapper.innerHTML="",e.exercises.innerHTML="";try{e.exercises.innerHTML='<div class="loader"></div>';const n=await m.getExercisesWithParams(r);if(r.maxPage=n.totalPages,e.exercises.innerHTML=x(n.results),r.maxPage===1)return;o(e.exercisePageWrapper,r.page,r.maxPage,p)}catch{l("Failed to load exercises. Please try again later.")}}async function w(a){a.preventDefault();const t=a.currentTarget,n=t.elements.query.value.trim();e.exercisePageWrapper.innerHTML="",e.exercises.innerHTML="",r.page=1,r.limit=window.innerWidth>=768?10:8,r.keyword=n;try{e.exercises.innerHTML='<div class="loader"></div>';const s=await m.getExercisesWithParams(r);if(r.maxPage=s.totalPages,s.results.length===0){e.exercises.innerHTML=`<p class="exercise-title-text">${L}</p>`;return}if(e.exercises.innerHTML=x(s.results),r.maxPage===1)return;o(e.exercisePageWrapper,r.page,r.maxPage,p)}catch{l("Failed to load exercises. Please try again later.")}finally{t.reset()}}async function T(a){if(a.preventDefault(),a.target!==a.currentTarget){e.exercises.innerHTML="",e.exercisePageWrapper.innerHTML="",e.searchForm.classList.add("active-search-form"),e.cardContainer.classList.add("hidden"),e.exerciseContainer.classList.remove("hidden"),r.page=1,r.keyword="",r.limit=window.innerWidth>=768?10:8,r.category_name=a.target.querySelector(".category-name").textContent,r.category_type=y[a.target.querySelector(".category-type").textContent.replace(/\s/g,"")],e.exercisesHeader.innerHTML=`Exercises / <span class="exercise-header-category">${r.category_name}</span>`,r.category_name=r.category_name.toLowerCase();try{e.exercises.innerHTML='<div class="loader"></div>';const t=await m.getExercisesWithParams(r);if(r.maxPage=t.totalPages,t.results.length===0){e.exercises.innerHTML=`<p class="exercise-title-text">${L}</p>`;return}if(e.exercises.innerHTML=x(t.results),r.maxPage===1)return;o(e.exercisePageWrapper,r.page,r.maxPage,p)}catch{l("Failed to load exercises. Please try again later.")}}}async function u(a=1){e.categories.innerHTML='<div class="loader categories-loader"></div>';const t=g.getFilterQuery(),n=window.innerWidth<768?9:12;try{const s=await g.fetchFilteredData(t,n,a),f=s.results.sort((i,c)=>i.name.localeCompare(c.name));e.categories.innerHTML="",f.forEach(i=>{const c=document.createElement("div");c.className="category-card",c.innerHTML=`
        <img
          src="${i.imgURL}"
          srcset="${i.imgURL} 1x, ${i.imgURL} 2x"
          alt="${i.name} exercise"
        />
        <div class="category-name">${i.name.charAt(0).toUpperCase()+i.name.slice(1)}</div>
        <div class="category-type">${i.filter}</div>
      `,e.categories.appendChild(c)}),e.categoriesWrap.innerHTML="",s.totalPages>1&&o(e.categoriesWrap,a,s.totalPages,C)}catch{l("Failed to load exercise categories. Please try again later.")}}function C(a){const t=Number(a.target.textContent);u(t)}function H(a){e.filterBtns.forEach(t=>{t.classList.remove("active-filter-btn")}),a.target.nodeName==="BUTTON"&&(a.target.classList.add("active-filter-btn"),e.searchForm.classList.remove("active-search-form"),e.cardContainer.classList.remove("hidden"),e.exerciseContainer.classList.add("hidden"),e.exercisesHeader.innerHTML="Exercises",g.setFilterQuery(a.target.textContent.trim()),u())}async function E(a){a.preventDefault(),d.getFormData(),d.verifyData()&&d.postEmail()}function F(){const a=new Date().getFullYear();e.footerYear.textContent=`@${a}`}function W(){window.addEventListener("scroll",()=>{window.scrollY>350?e.scrollUp.style.display="block":e.scrollUp.style.display="none"}),e.scrollUp.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}u();window.quoteRendered||(h(),window.quoteRendered=!0);e.searchForm.addEventListener("submit",w);e.filterBtnsList.addEventListener("click",H);e.footerForm.addEventListener("submit",E);e.categories.addEventListener("click",T);F();document.addEventListener("DOMContentLoaded",()=>{v(),P(),M()});W();document.addEventListener("keydown",a=>{a.key==="Escape"&&(e.exerciseModal.classList.contains("is-open")&&e.exerciseModal.classList.remove("is-open"),e.giveRatingModal.classList.contains("is-open")&&(e.giveRatingModal.classList.remove("is-open"),e.exerciseModal.classList.add("is-open")))});
//# sourceMappingURL=index.js.map
