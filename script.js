{
const sections=[
{name:"Karakossi",sub:"Sous-préfecture de Balaki",rep:"M. Diawne Souleymane",n:215,lab:"215",color:"#7cc97a"},
{name:"Zone frontalière",sub:"Guinée, Sénégal, Mali (base à Souloudena)",rep:"M. Diallo Ibrahima",n:100,lab:"environ 100",color:"#6fb2e6"},
{name:"Côte d'Ivoire",sub:"",rep:"M. Diallo Mamadou Aliou",n:100,lab:"environ 100",color:"#e0a94e"},
{name:"Labé – Conakry",sub:"",rep:"M. Diallo Mamadou Alpha",n:80,lab:"plus de 80",color:"#c98a6b"}
];
document.getElementById('secs').innerHTML=sections.map(s=>`<tr><td><span class="dot" style="background:${s.color}"></span>${s.name}${s.sub?`<small>${s.sub}</small>`:''}</td><td>${s.rep}</td><td class="num">${s.lab}</td></tr>`).join('');
document.getElementById('tot').textContent='environ 500';
const total=sections.reduce((a,s)=>a+s.n,0);
document.getElementById('bar').innerHTML=sections.map(s=>`<i style="width:${(s.n/total*100).toFixed(1)}%;background:${s.color}"></i>`).join('');

const team=[
{name:"Diallo Mamadou Oury",r:"Président et fondateur",d:"",img:"images/oury.jpg"},
{name:"Diallo Abdoulaye",r:"Vice-président",d:"Côte d'Ivoire",img:"images/abdoulaye.jpg"},
{name:"M. Diallo Mamadou Alpha",r:"Représentant Labé – Conakry",d:"Reçoit toutes les collectes",img:"images/alpha.jpg"},
{name:"M. Diawne Souleymane",r:"Représentant Karakossi",d:"",img:"images/diawne.jpg"},
{name:"M. Diallo Mamadou Aliou",r:"Représentant Côte d'Ivoire",d:"",img:"images/aliou.jpg"},
{name:"M. Diallo Ibrahima",r:"Représentant zone frontalière",d:"Souloudena",img:""},
{name:"Sidibé Bachir",r:"Chargé de communication",d:"Page Facebook",img:""}
];
const ini=n=>n.replace(/^M\. /,'').split(' ').filter(w=>w.length>1).slice(0,2).map(w=>w[0]).join('');
document.getElementById('team').innerHTML=team.map(p=>`<div class="p reveal"><div class="ph">${p.img?`<img src="${p.img}" alt="${p.name}" loading="lazy">`:`<span>${ini(p.name)}</span>`}</div><h3>${p.name}</h3><div class="r">${p.r}</div>${p.d?`<div class="d">${p.d}</div>`:''}</div>`).join('');

/* Menu mobile */
const nav=document.querySelector('nav'),mb=document.getElementById('mb');
const closeMenu=()=>{nav.classList.remove('open');mb.setAttribute('aria-expanded',false);mb.textContent='Menu';};
mb.addEventListener('click',()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'Fermer':'Menu';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));

/* Copier le lien */
const sh=document.getElementById('share');
sh.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href.split('#')[0]);sh.textContent='Lien copié';}catch(e){sh.textContent='Copie impossible ici';}setTimeout(()=>sh.textContent='Copier le lien du site',2500);});

/* Apparition douce + lien actif dans le menu */
if('IntersectionObserver' in window){
  document.documentElement.classList.add('js');
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=el.classList.contains('p')?`${(i%4)*80}ms`:'';io.observe(el);});

  const links=[...nav.querySelectorAll('a:not(.brand)')];
  const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-45% 0px -50% 0px'});
  document.querySelectorAll('section[id]').forEach(s=>spy.observe(s));
}
}
