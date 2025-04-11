import{A as i,s as l}from"./assets/main-Bab_rDHI.js";import{a as n}from"./assets/vendor-BUg1UuD4.js";document.addEventListener("DOMContentLoaded",d);async function d(){const s=document.getElementById("categories-container"),r=window.innerWidth<768?9:12;try{const a=await n.get(`${i}/filters`,{params:{filter:"Muscles",page:1,limit:12}}),o=await n.get(`${i}/filters`,{params:{filter:"Muscles",page:2,limit:12}}),c=a.data.results.concat(o.data.results).sort(function(e,t){return e.name.localeCompare(t.name)}).slice(0,r);s.innerHTML="",c.forEach(function(e){const t=document.createElement("div");t.className="category-card",t.innerHTML=`
        <img
          src="${e.imgURL}"
          srcset="${e.imgURL} 1x, ${e.imgURL} 2x"
          alt="${e.name} exercise"
        />
        <div class="category-name">${e.name.charAt(0).toUpperCase()+e.name.slice(1)}</div>
        <div class="category-type">${e.filter}</div>
      `,s.appendChild(t)})}catch{l("Failed to load exercise categories. Please try again later.")}}
//# sourceMappingURL=index.js.map
