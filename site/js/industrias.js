// Industries section: interactive process diagram (option 11).
(function(){
var D=[{"n": "Manufactura", "u": "manufactura", "d": "Optimizá la producción y reducí costos operativos con nuestras soluciones de automatización eficientes y confiables.", "i": "img/industria-manufactura-1100.webp"}, {"n": "Alimentos y bebidas", "u": "alimentos-y-bebidas", "d": "Garantizá la calidad y trazabilidad de tus productos con nuestros procesos automatizados y sistemas de control.", "i": "img/frame-285-800.webp"}, {"n": "Energía", "u": "energia", "d": "Mejorá la eficiencia energética y gestioná tu infraestructura crítica con soluciones robustas de control y gestión.", "i": "img/gabinete-exterior-planta.webp"}, {"n": "Minería", "u": "mineria", "d": "Automatizá procesos, monitoreá las condiciones de operación y garantizá una extracción de minerales segura y eficiente en entornos extremos.", "i": "img/planta-evaporador-hero-800.webp"}, {"n": "Industria automotriz", "u": "industria-automotriz", "d": "Alcanzá precisión y eficiencia en la producción en masa y el control de calidad del ensamblaje con nuestras soluciones de automatización de vanguardia.", "i": "img/panel-tableros-tecnicos.webp"}, {"n": "Química y petroquímica", "u": "quimica-y-petroquimica", "d": "Garantizá la seguridad, precisión y eficiencia en el manejo, procesamiento y control de calidad de productos químicos.", "i": "img/frame-288-800.webp"}, {"n": "Farmacéutica", "u": "farmaceutica", "d": "Mantené los más altos estándares de precisión y seguridad en la producción, empaquetado y control de calidad de productos farmacéuticos.", "i": "img/industria-farmaceutica-1100.webp"}, {"n": "Petróleo y gas", "u": "petroleo-y-gas", "d": "Optimizá la exploración, producción y distribución de petróleo y gas con soluciones innovadoras de automatización y control.", "i": "img/tecnicos-revision-tablero.webp"}];
var nd=document.querySelectorAll('.pid__node'),list=document.querySelector('.pid__list'),panel=document.getElementById('pp');
function sel(i,focus){
  nd.forEach(function(x,k){x.setAttribute('aria-selected',k===i);x.tabIndex=k===i?0:-1;x.classList.toggle('is-past',k<i);});
  // Fill the pipe from the first node down to the middle of the active one
  list.style.setProperty('--fill',(nd[i].offsetTop+28-28)+'px');
  var t=document.getElementById('ptxt');t.style.animation='none';t.offsetWidth;t.style.animation='';
  document.getElementById('pt').textContent=D[i].n;document.getElementById('pd').textContent=D[i].d;document.getElementById('pl').textContent=D[i].n;
  document.getElementById('pbtn').href='proyectos/industria/'+D[i].u+'/index.html';   // opens Proyectos with this industry's filter applied
  document.getElementById('ptag').textContent=String(i+1).padStart(2,'0')+' / '+String(D.length).padStart(2,'0');
  panel.style.backgroundImage="url('"+D[i].i+"')";
  if(focus)nd[i].focus();
}
nd.forEach(function(n,i){n.addEventListener('click',function(){sel(i);});
n.addEventListener('keydown',function(e){if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();sel((i+1)%nd.length,true);}if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();sel((i-1+nd.length)%nd.length,true);}});});

// ---- Autoplay: advances every DUR ms. Pauses on hover/focus, when off-screen, with the Pause button, and never runs if the visitor prefers reduced motion.
var PAUSE='<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>',PLAY='<path d="M8 5v14l11-7z"/>';
var DUR=7000,cur=0,timer=null,userPaused=false,hover=false,focused=false,visible=true,
    reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,
    wrap=document.querySelector('.pid'),pg=document.getElementById('pg'),pz=document.getElementById('pz');
pg.style.setProperty('--dur',DUR+'ms');
function playing(){return !reduce&&!userPaused&&!hover&&!focused&&visible;}
function schedule(){
  clearTimeout(timer);
  pg.classList.remove('run');pg.offsetWidth;            // restart the bar from zero
  wrap.classList.toggle('is-paused',!playing());
  if(!playing())return;
  pg.classList.add('run');
  timer=setTimeout(function(){sel((cur+1)%nd.length);},DUR);
}
var baseSel=sel;
sel=function(i,focus){cur=i;baseSel(i,focus);schedule();};
wrap.addEventListener('mouseenter',function(){hover=true;schedule();});
wrap.addEventListener('mouseleave',function(){hover=false;schedule();});
wrap.addEventListener('focusin',function(){focused=true;schedule();});
wrap.addEventListener('focusout',function(){focused=false;schedule();});
new IntersectionObserver(function(e){visible=e[0].isIntersecting;schedule();},{threshold:.3}).observe(wrap);
pz.addEventListener('click',function(){userPaused=!userPaused;
  pz.querySelector('svg').innerHTML=userPaused?PLAY:PAUSE;
  document.getElementById('pzt').textContent=userPaused?'Reanudar':'Pausar';
  pz.setAttribute('aria-label',userPaused?'Reanudar rotación automática':'Pausar rotación automática');schedule();});
if(reduce)pz.style.display='none';
sel(0);
})();
