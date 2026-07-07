// Minimal JS for interactivity: theme, parallax, exploded rocket, timeline, bars
(function(){
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Theme init
  function applyTheme(theme){
    if(theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    const logo = document.getElementById('logo');
    if(logo) logo.src = theme === 'dark' ? 'assets/logo-whitebg.svg' : 'assets/logo-transparent.svg';
  }
  let theme = localStorage.getItem('theme');
  if(!theme){
    theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  applyTheme(theme);

  // Theme toggle
  const toggleBtn = document.getElementById('themeToggle');
  function setTheme(t){
    if(!prefersReduced){ document.documentElement.classList.add('theme-transition'); setTimeout(()=>document.documentElement.classList.remove('theme-transition'),380); }
    theme = t; localStorage.setItem('theme', theme); applyTheme(theme);
  }
  function toggleTheme(){ setTheme(theme === 'dark' ? 'light' : 'dark'); }
  if(toggleBtn){
    // render icons
    toggleBtn.innerHTML = '';
    const icon = ()=> theme === 'dark' ? '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' : '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#111" d="M12 5a7 7 0 0 0 0 14 7 7 0 0 0 0-14z"/></svg>';
    toggleBtn.addEventListener('click', ()=>{ toggleTheme(); toggleBtn.innerHTML = icon(); });
    toggleBtn.innerHTML = icon();
  }

  // Keyboard T to toggle (ignore inputs)
  window.addEventListener('keydown', (e)=>{
    const t = e.target; if(!t) return;
    const tag = t.tagName;
    if(tag === 'INPUT' || tag === 'TEXTAREA' || t.isContentEditable) return;
    if(e.key.toLowerCase() === 't'){ toggleTheme(); if(toggleBtn) toggleBtn.innerHTML = (theme === 'dark' ? '<svg width="18" height="18" viewBox="0 0 24 24"><path fill=\"#fff\" d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"/></svg>' : '<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\"><path fill=\"#111\" d=\"M12 5a7 7 0 0 0 0 14 7 7 0 0 0 0-14z\"/></svg>'); }
  });

  // Hero parallax (pointer)
  (function(){
    const root = document.getElementById('heroVisual');
    if(!root) return;
    let raf=0;
    root.addEventListener('mousemove', (ev)=>{
      const rect=root.getBoundingClientRect();
      const x=(ev.clientX-rect.left)/rect.width-0.5;
      const y=(ev.clientY-rect.top)/rect.height-0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(()=>{ root.style.transform = `translate(${x*8}px, ${y*6}px)` });
    });
    root.addEventListener('mouseleave', ()=>{ root.style.transform='translate(0,0)'; });
  })();

  // Exploded rocket interactivity
  (function(){
    const mapping = {
      propulsion: {t:'N₂O / Paraffin Hybrid Propulsion',b:'27.5 kN, 225.7s Isp, CEA-verified. N₂O is food-grade gas — no DRDO controls, no hazmat licensing. Helium pressurisation prevents self-chilling.'},
      carbon: {t:'Carbon Fibre — One Machine',b:'Filament winder produces motor case, oxidizer tank, and airframe tube. Burst safety factor 3.0 on all pressure vessels. Full quality control in-house.'},
      recovery: {t:'Full Dual Parachute Recovery',b:'Capsule and booster recovered separately. Capsule: drogue at 10 km, main at 3 km, 5.5 m/s landing. Crew Escape System valid pad to 50 km altitude.'},
      control: {t:'Active Fin Stability',b:'4 electric-actuated fins, 100 Hz PID control, active from liftoff. No roll imparted to capsule.'},
      capsule: {t:'Passenger-First Capsule',b:'3.6 m³ pressurised volume. 600mm panoramic dome window. Dual-redundant avionics.'}
    };
    const exploded = document.getElementById('exploded');
    if(!exploded) return;
    const title = document.getElementById('partTitle');
    const body = document.getElementById('partBody');
    const hotspots = exploded.querySelectorAll('.hotspot');
    hotspots.forEach(h=>{
      h.style.cursor='pointer';
      h.addEventListener('click', ()=>{ const p=h.getAttribute('data-part'); if(mapping[p]){ title.textContent = mapping[p].t; body.textContent = mapping[p].b; }});
    });
    const buttons = exploded.querySelectorAll('[data-set]');
    buttons.forEach(b=>b.addEventListener('click', ()=>{ const k=b.getAttribute('data-set'); if(mapping[k]){ title.textContent = mapping[k].t; body.textContent = mapping[k].b; } }));
  })();

  // Timeline: scroll-linked rocket
  (function(){
    const container = document.getElementById('timelineContainer');
    const rocket = document.getElementById('rocket');
    const milestones = Array.from(document.querySelectorAll('.milestone'));
    if(!container || !rocket) return;
    function update(){
      const rect=container.getBoundingClientRect();
      const height = rect.height - 40;
      const top = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      // simpler: compute progress by scroll of container in viewport:
      const prog = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      const y = (1 - prog) * 120 - 40; // range
      rocket.style.transform = `translateY(${y}px)`;
      // highlight milestones based on prog
      const idx = Math.floor(prog * milestones.length);
      milestones.forEach((m,i)=>{ m.querySelector('.dot').style.background = i <= idx ? getComputedStyle(document.documentElement).getPropertyValue('--vh4-amber') || '#E8A020' : '#e2e8f0'; });
    }
    // throttle
    let t=0;
    function onScroll(){ if(perfNow()-t<16) return; t=perfNow(); update(); }
    function perfNow(){ return window.performance && performance.now ? performance.now() : Date.now(); }
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);
    requestAnimationFrame(update);
  })();

  // Animate bars when in view
  (function(){
    const bars = document.querySelectorAll('.bar, .alloc-row');
    if(!bars.length) return;
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(en=>{
        if(!en.isIntersecting) return;
        const el = en.target;
        if(el.classList.contains('bar')){
          const pct = parseFloat(el.getAttribute('data-pct')) || 0;
          const fill = el.querySelector('.bar-fill');
          if(prefersReduced){ fill.style.width = pct + '%'; } else {
            animateWidth(fill, pct, 900);
          }
        } else if(el.classList.contains('alloc-row')){
          const pct = parseFloat(el.getAttribute('data-pct')) || 0;
          const fill = el.querySelector('.alloc-bar');
          if(prefersReduced){ fill.style.width = pct + '%'; } else {
            animateWidth(fill, pct, 900);
          }
        }
        obs.unobserve(el);
      });
    }, {threshold:0.25});
    bars.forEach(b=>obs.observe(b));

    function animateWidth(el, pct, dur){
      const start = performance.now();
      function tick(now){
        const t = Math.min(1,(now-start)/dur);
        const eased = 1 - Math.pow(1-t,3);
        el.style.width = (eased * pct) + '%';
        if(t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
  })();

  // small accessibility: focus outline for hotspot buttons
  document.querySelectorAll('button').forEach(b=>{ b.addEventListener('keyup', (e)=>{ if(e.key === 'Enter') b.click(); }); });

})();