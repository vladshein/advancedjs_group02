import{a as n,i as d}from"./assets/vendor-CBLHhzjb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();const c={exercises:document.querySelector(".exercise-list"),searchForm:document.querySelector(".search-form")},l="https://your-energy.b.goit.study/api";class g{async getExercises(){const{data:e}=await n.get(`${l}/exercises`);return e}async getExerciseById(e){const{data:a}=await n.get(`${l}/exercises/${e}`);return a}async getExercisesWithParams({category_type:e,category_name:a,limit:r,page:s,keyword:t}){const o={params:{[e]:a,limit:r,page:s,keyword:t}},{data:u}=await n.get(`${l}/exercises/`,o);return u}}const m=new g;function h(i){return i.map(e=>`<li class="exercise-item" data-id="${e.id}">
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
      </li>`).join("")}async function f(i){i.preventDefault();const e={page:1,limit:8,maxPage:1,keyword:"",category_type:"bodypart",category_name:"waist"};window.innerWidth>=768&&(e.limit=10),console.log(e);const r=i.currentTarget,s=r.elements.query.value.trim();if(console.log(s),s===""){c.exercises.innerHTML="",d.show({message:"Please entered your request"});return}e.keyword=s;try{const t=await m.getExercisesWithParams(e);if(e.maxPage=t.totalPages,t.results.length===0&&(c.exercises.innerHTML=""),c.exercises.innerHTML=h(t.results),e.maxPage===1)return}catch(t){console.log(t)}finally{r.reset()}}console.log(c);c.searchForm.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
