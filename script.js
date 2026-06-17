// const root = document.documentElement;
// const toggleBtn = document.getElementById("themeToggle");

// // load saved theme
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//   root.setAttribute("data-theme", savedTheme);
// }

// // toggle function
// function toggleTheme() {
//   const current = root.getAttribute("data-theme");
//   const next = current === "dark" ? "light" : "dark";

//   root.setAttribute("data-theme", next);
//   localStorage.setItem("theme", next);
// }

// // click handler
// toggleBtn?.addEventListener("click", toggleTheme);

// Mobile menu
function toggleMobile(){
  const m=document.getElementById('mobileMenu');
  m.style.display=m.style.display==='flex'?'none':'flex';
}


// SCROLL REVEAL

function observeReveal(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:0.12});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>obs.observe(el));
}
observeReveal();
window.addEventListener('scroll',observeReveal);


// ESSAYS DATA

const essays=[
  {tag:'theory',title:'The Waves That Shaped Us: A Feminist History',excerpt:'From first-wave suffrage to fourth-wave digital activism — tracing the movements that built the world we live in and the one we\'re still fighting for.',author:'FemiRISE Editorial',date:'May 2025'},
  {tag:'culture',title:'Reclaiming the Gaze: Women in Visual Art',excerpt:'How feminist artists across decades have challenged, subverted and reclaimed the male gaze — from the Guerrilla Girls to contemporary digital spaces.',author:'Vyonnie Khoo',date:'Apr 2025'},
  {tag:'policy',title:'Legal Personhood and the Feminist Fight',excerpt:'An exploration of how bodily autonomy, reproductive rights and legal recognition remain contested feminist battlegrounds in 2025.',author:'Guest Contributor',date:'Mar 2025'},
  {tag:'personal',title:'What It Meant to Raise My Voice in a Silent Room',excerpt:'A personal account of the first time I spoke about gender-based violence in a professional setting — and what happened next.',author:'Anonymous Member',date:'Mar 2025'},
  {tag:'history',title:'Simone, Audre, bell: The Thinkers Who Changed Everything',excerpt:'Three radical feminist thinkers whose work remains vital, urgent and startlingly contemporary — an introductory reading guide.',author:'Tay Ru Sheng',date:'Feb 2025'},
  {tag:'theory',title:'Intersectionality Is Not Optional',excerpt:'Why Kimberlé Crenshaw\'s framework is not a niche academic concept but the very foundation of meaningful feminist organising in the 21st century.',author:'Douae',date:'Feb 2025'},
  {tag:'culture',title:'The Algorithm Has a Gender Problem',excerpt:'From hiring tools to content moderation — how artificial intelligence encodes and amplifies systemic bias against women.',author:'FemiRISE Editorial',date:'Jan 2025'},
  {tag:'personal',title:'On Finding Feminist Community as an International Student',excerpt:'Moving countries, losing and rebuilding community — and how FemiRISE became the home I didn\'t know I needed.',author:'Leong Jing',date:'Jan 2025'},
  {tag:'policy',title:'From Protest to Policy: Feminist Electoral Strategies',excerpt:'How feminist movements are translating street-level activism into lasting legislative change — lessons from five continents.',author:'Guest Contributor',date:'Dec 2024'},
];

let currentFilter='all';

function renderEssays(){
  const grid=document.getElementById('essaysGrid');
  if(!grid)return;
  const filtered=currentFilter==='all'?essays:essays.filter(e=>e.tag===currentFilter);
  grid.innerHTML=filtered.map(e=>`
    <div class="essay-card reveal">
      <span class="essay-tag">${e.tag}</span>
      <div class="essay-title">${e.title}</div>
      <p class="essay-excerpt">${e.excerpt}</p>
      <div class="essay-meta">
        <span class="essay-author">${e.author}</span>
        <span class="essay-date">${e.date}</span>
      </div>
      <div style="margin-top:1rem"><span class="essay-arrow">Read Essay →</span></div>
    </div>
  `).join('');
  setTimeout(observeReveal,50);
}

function filterEssays(tag,btn){
  currentFilter=tag;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderEssays();
}


// NAV SCROLL EFFECT

window.addEventListener('scroll',()=>{
  const nav=document.getElementById('mainNav');
  nav.style.background=window.scrollY>50?'rgba(5,0,12,0.88)':'rgba(8,0,16,0.55)';
  nav.style.borderBottomColor=window.scrollY>50?'rgba(203,156,242,0.15)':'rgba(203,156,242,0.1)';
});

// Render essays on first load of that page
document.addEventListener('DOMContentLoaded',()=>{
  renderEssays();
  observeReveal();
});