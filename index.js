// const cursor = document.getElementById('cursor');
// const cursorTrail = document.getElementById('cursorTrail');
// const liquidBlob = document.getElementById('liquidBlob');
// let mx=0,my=0,tx=0,ty=0,lx=0,ly=0;
// document.addEventListener('mousemove',e=>{
//   mx=e.clientX;my=e.clientY;
//   cursor.style.left=mx+'px';cursor.style.top=my+'px';
// });
// function animCursor(){
//   tx+=(mx-tx)*0.12;ty+=(my-ty)*0.12;
//   cursorTrail.style.left=tx+'px';cursorTrail.style.top=ty+'px';
//   lx+=(mx-lx)*0.04;ly+=(my-ly)*0.04;
//   liquidBlob.style.left=(lx-100)+'px';liquidBlob.style.top=(ly-100)+'px';
//   requestAnimationFrame(animCursor);
// }animCursor();
// document.querySelectorAll('a,button,.btn-primary,.btn-ghost,.glass-card,.connect-card,.essay-card,.team-card,.social-pill,.filter-btn,.nav-link,.nav-cta,.nav-logo').forEach(el=>{
//   el.addEventListener('mouseenter',()=>{cursor.style.transform='translate(-50%,-50%) scale(2.2)';cursorTrail.style.transform='translate(-50%,-50%) scale(1.3)'});
//   el.addEventListener('mouseleave',()=>{cursor.style.transform='translate(-50%,-50%) scale(1)';cursorTrail.style.transform='translate(-50%,-50%) scale(1)'});
// });


// PAGE ROUTING

// function showPage(id){
//   document.querySelectorAll('.page').forEach(p=>{p.classList.remove('active');p.style.display='none'});
//   const el=document.getElementById('page-'+id);
//   if(el){el.style.display='block';setTimeout(()=>el.classList.add('active'),10)}
//   document.querySelectorAll('.nav-link').forEach(l=>{
//     l.classList.toggle('active',l.dataset.page===id);
//   });
//   window.scrollTo({top:0,behavior:'smooth'});
//   setTimeout(observeReveal,100);
//   if(id==='essays')renderEssays();
// }

// // Init pages display
// document.querySelectorAll('.page').forEach(p=>{
//   if(!p.classList.contains('active'))p.style.display='none';
// });

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