import{S as f,i as n}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function m(s){return fetch(`https://pixabay.com/api/?key=45241203-3832c115afebf1441ca7c88b6&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{iziToast.error({position:"topRight",message:`${t}`})})}function p(s){new f("gallery",{captions:!0,captionsData:"alt",captionDelay:250});const o=document.querySelector(".gallery"),i=s.map(({webformatURL:t,largeImageURL:e,tags:r,likes:a,views:c,comments:l,downloads:u})=>`
        <a href="${e}" class="gallery-item">
          <img src="${t}" alt="${r}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${a}</p>
            <p><b>Views:</b> ${c}</p>
            <p><b>Comments:</b> ${l}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </a>`).join("");o.innerHTML=i}document.querySelector(".search-form").addEventListener("submit",y);async function y(s){s.preventDefault();const o=s.currentTarget.elements.query.value.trim();if(o===""){n.error({title:"Error",message:"The search field cannot be empty!"});return}try{const i=await m(o);if(i.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(i.hits),new SimpleLightbox(".gallery a").refresh()}catch(i){n.error({title:"Error",message:i.message})}}
//# sourceMappingURL=commonHelpers.js.map
