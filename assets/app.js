const PRODUCTS = [
{id:'ac-compressor-housing-jkg',img:'assets/images/ac-compressor-housing-jkg.png',name:'A/C Compressor Housing (JKG)',cat:'Cooling',brand:'JKG',type:'A/C compressor housing',compat:'Heavy-duty and commercial trucks',features:['High-quality JKG compressor housing','Strong and heat-resistant construction','Protects internal A/C components','Efficient cooling performance','Long-lasting, precise-fit design'],desc:'Durable A/C compressor housing engineered to protect internal components and maintain reliable cooling performance in demanding truck applications.'},
{id:'brake-vacuum-booster',img:'assets/images/brake-vacuum-booster.jpg',name:'Brake Vacuum Booster',cat:'Braking',brand:'JKG',type:'Brake vacuum booster',compat:'Heavy-duty commercial vehicles',features:['Smooth and responsive braking','Reduces pedal effort','Consistent brake pressure','Durable construction','Improves overall braking control'],desc:'Heavy-duty braking assistance unit designed to reduce pedal effort while maintaining smooth, responsive and consistent braking performance.'},
{id:'clutch-booster',img:'assets/images/clutch-booster.png',name:'Clutch Booster',cat:'Clutch',brand:'JKG',type:'Clutch booster',compat:'Vacuum-hydraulic clutch systems',features:['High vacuum assist performance','Reinforced tie-rod shell','Hydraulic ports with safety caps','Remote mount design','JKG authenticity seal included'],desc:'Reliable clutch booster for commercial vehicle vacuum-hydraulic systems, engineered for controlled assist and durable service.'},
{id:'clutch-servo',img:'assets/images/clutch-servo.png',name:'Clutch Servo',cat:'Clutch',brand:'JKG',type:'Clutch servo',compat:'Trucks, buses and heavy-duty vehicles',features:['High vacuum assist performance','Reinforced tie-rod shell','Hydraulic ports with safety caps','Remote mount design','Durable lower chamber with support fins'],desc:'Heavy-duty clutch servo built for vacuum-hydraulic systems in trucks, buses and commercial vehicles.'},
{id:'fuel-filter-water-separator',img:'assets/images/fuel-filter-water-separator.png',name:'Fuel Filter Water Separator Assembly',cat:'Fuel',brand:'JKG',type:'Fuel filter water separator',compat:'Diesel and commercial vehicle fuel systems',features:['Separates water and contaminants','High-capacity filtration','Reinforced housing','Easy installation and maintenance','JKG authenticity seal included'],desc:'Fuel filtration assembly designed to separate water and contamination before they reach sensitive diesel fuel-system components.'},
{id:'hydro-vacuum-brake-booster',img:'assets/images/hydro-vacuum-brake-booster.png',name:'JKG Hydro-Vacuum Brake Booster',cat:'Braking',brand:'JKG',type:'Hydro-vacuum brake booster',compat:'Vacuum-hydraulic commercial vehicle systems',features:['High-capacity vacuum reservoir','Reinforced tie-rod shell','Hydraulic ports with safety caps','Remote mount design','Lower chamber with support fins'],desc:'Hydro-vacuum braking assistance for commercial vehicles requiring reliable boost, pressure stability and heavy-duty construction.'},
{id:'long-stroke-single-diaphragm',img:'assets/images/long-stroke-single-diaphragm.png',name:'JKG Long-Stroke Single-Diaphragm Vacuum Brake Booster',cat:'Braking',brand:'JKG',type:'Vacuum-operated hydraulic brake booster',compat:'Commercial vehicle vacuum-hydraulic systems',features:['High-capacity vacuum reservoir','Reinforced tie-rod shell','Hydraulic ports with safety caps','Remote mount design','JKG authenticity seal included'],desc:'Long-stroke vacuum brake booster configured for standard vacuum-hydraulic systems in commercial vehicles.'},
{id:'premier-vacuum-booster',img:'assets/images/premier-vacuum-booster.png',name:'JKG Premier Vacuum Brake Booster',cat:'Braking',brand:'JKG',type:'Single diaphragm, 7-inch',compat:'Standard vacuum systems',features:['Anti-corrosion finish','Integrated mounting studs','Holographic authenticity sticker'],desc:'Compact JKG single-diaphragm vacuum booster designed for standard vacuum systems and reliable long-term use.'},
{id:'premier-vacuum-booster-long',img:'assets/images/premier-vacuum-booster-long.png',name:'JKG Premier Vacuum Brake Booster (Long)',cat:'Braking',brand:'JKG',type:'Heavy-duty single diaphragm, long-stroke',compat:'Commercial vehicle vacuum-hydraulic systems',features:['High-capacity reservoir housing','Reinforced tie-rod supports','Pressure ports with safety caps','JKG holographic authenticity seal'],desc:'Long-stroke heavy-duty booster built for demanding commercial vehicle vacuum-hydraulic systems.'},
{id:'single-diaphragm-vacuum-booster',img:'assets/images/single-diaphragm-vacuum-booster.png',name:'JKG Single-Diaphragm Vacuum Brake Booster',cat:'Braking',brand:'JKG',type:'Single-diaphragm vacuum brake booster',compat:'Commercial vehicle vacuum-hydraulic systems',features:['High-capacity vacuum reservoir','Reinforced tie-rod shell','Hydraulic ports with safety caps','Remote mount design','Support-fin lower chamber'],desc:'Single-diaphragm JKG brake booster engineered for stable vacuum assist and durable commercial operation.'},
{id:'vacuum-brake-booster-clutch-servo',img:'assets/images/vacuum-brake-booster-clutch-servo.png',name:'JKG Vacuum Brake Booster (Clutch Servo Assembly)',cat:'Clutch',brand:'JKG',type:'Vacuum brake booster / clutch servo assembly',compat:'Commercial vehicle vacuum-hydraulic systems',features:['High vacuum assist performance','Durable reinforced housing','Compact installation','Stable pressure control','Long service life'],desc:'Compact clutch-servo and vacuum-booster assembly designed for stable assist, easy fitment and long service life.'},
{id:'multi-stage-air-dryer',img:'assets/images/multi-stage-air-dryer.png',name:'Multi-Stage Air Dryer Assembly',cat:'Air System',brand:'JKG',type:'Multi-stage air dryer assembly',compat:'Trucks, buses and heavy-duty compressed-air systems',features:['Multi-stage moisture filtration','High-capacity desiccant','Durable reinforced housing','Easy maintenance','JKG authenticity seal included'],desc:'Multi-stage air dryer assembly designed to remove moisture and contaminants from heavy-duty compressed-air systems.'},
{id:'truck-air-dryer',img:'assets/images/truck-air-dryer.png',name:'Truck Air Dryer Assembly',cat:'Air System',brand:'JKG',type:'Truck air dryer assembly',compat:'Heavy-duty truck compressed-air systems',features:['Removes moisture and contaminants','High-capacity desiccant','Reinforced housing','Easy installation and maintenance','JKG authenticity seal included'],desc:'Durable truck air dryer assembly that supports cleaner, drier compressed air and reliable pneumatic performance.'},
{id:'ms1-air-dryer',img:'assets/images/ms1-air-dryer.png',name:'Truck Air Dryer Assembly — MS-1',cat:'Air System',brand:'JKG',type:'MS-1 air dryer',compat:'Heavy-duty trucks and commercial vehicles',features:['Moisture and contaminant removal','High-capacity desiccant','Durable reinforced housing','Easy maintenance','JKG authenticity seal included'],desc:'MS-1 air dryer for commercial vehicles, engineered for consistent air-line protection and dependable performance.'}
];

function card(p) {
  const imgHtml = p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy">` : '';
  return `<article class="card fade"><div class="product-visual${p.img?' has-image':''}">${imgHtml}<span class="product-badge">${p.brand} · ${p.cat}</span></div><div class="card-body"><h3>${p.name}</h3><p>${p.desc}</p><a class="link" href="product.html?id=${p.id}">View specifications →</a></div></article>`;
}

function renderProducts(targetId = 'productGrid', list = PRODUCTS) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = list.length
    ? list.map(card).join('')
    : '<div class="empty">No matching products found.</div>';
  // stagger fade-in for newly rendered cards
  const cards = el.querySelectorAll('.fade:not(.in)');
  cards.forEach((c, i) => {
    c.style.transitionDelay = `${i * 55}ms`;
  });
  observe();
}

function observe() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.fade:not(.in)').forEach(x => io.observe(x));
}

// Counter animation for stat numbers
function animateCounter(el) {
  const raw = el.textContent.trim();
  const suffix = raw.replace(/[\d,]+/, '');
  const target = parseInt(raw.replace(/\D/g, ''), 10);
  if (isNaN(target) || target === 0) return;
  const duration = 1400;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    // ease-out cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(ease * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = raw;
  }
  requestAnimationFrame(step);
}

function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat strong').forEach(el => io.observe(el));
}

function initNav() {
  const btn = document.querySelector('.hamb');
  const menu = document.querySelector('.menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  // close menu when a link is clicked
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

function initShop() {
  const search = document.getElementById('search');
  const buttons = [...document.querySelectorAll('.filter')];
  let cat = 'All';

  function go() {
    const q = (search?.value || '').trim().toLowerCase();
    renderProducts('productGrid', PRODUCTS.filter(p =>
      (cat === 'All' || p.cat === cat) &&
      (!q || `${p.name} ${p.cat} ${p.brand} ${p.desc}`.toLowerCase().includes(q))
    ));
  }

  if (search) search.addEventListener('input', go);
  buttons.forEach(b => b.addEventListener('click', () => {
    buttons.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    cat = b.dataset.cat;
    go();
  }));
  go();
}

function initProduct() {
  const root = document.getElementById('productDetail');
  if (!root) return;
  const id = new URLSearchParams(location.search).get('id') || PRODUCTS[0].id;
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  document.title = `${p.name} | Punjab Auto Stores`;
  const detailImg = p.img ? `<img src="${p.img}" alt="${p.name}">` : '';
  root.innerHTML = `
    <div class="detail-visual${p.img?' has-image':''}">${detailImg}<span class="product-badge">${p.brand} · ${p.cat}</span></div>
    <div class="detail">
      <span class="eyebrow">Premium Truck Part</span>
      <h1>${p.name}</h1>
      <div class="meta">
        <span class="pill">Brand: ${p.brand}</span>
        <span class="pill">Category: ${p.cat}</span>
        <span class="pill">Since 1962</span>
      </div>
      <p class="lead">${p.desc}</p>
      <div class="specbox">
        <div class="specrow"><b>Product type</b><span>${p.type}</span></div>
        <div class="specrow"><b>Compatibility</b><span>${p.compat}</span></div>
        <div class="specrow"><b>Availability</b><span>Contact Punjab Auto Stores for current stock and fitment confirmation.</span></div>
      </div>
      <h3>Key features</h3>
      <div class="features">${p.features.map(f => `<div>${f}</div>`).join('')}</div>
      <div class="actions">
        <a class="btn btn-primary" target="_blank" href="https://wa.me/923342226851?text=${encodeURIComponent('Assalam o Alaikum, I need details for ' + p.name)}">Ask on WhatsApp</a>
        <a class="btn btn-secondary" href="shop.html">Back to products</a>
      </div>
    </div>`;
}

function initForm() {
  const f = document.getElementById('contactForm');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(f);
    const text = `Punjab Auto Stores website inquiry%0AName: ${encodeURIComponent(data.get('name'))}%0APhone: ${encodeURIComponent(data.get('phone'))}%0AProduct: ${encodeURIComponent(data.get('product'))}%0AMessage: ${encodeURIComponent(data.get('message'))}`;
    window.open('https://wa.me/923342226851?text=' + text, '_blank');
  });
}

function toggleSearch() {
  const drawer = document.getElementById('searchDrawer');
  const btn = document.getElementById('searchToggle');
  if (!drawer) return;
  const open = drawer.classList.toggle('open');
  btn?.classList.toggle('active', open);
  if (open) setTimeout(() => document.getElementById('headerSearch')?.focus(), 320);
}

function goSearch() {
  const val = document.getElementById('headerSearch')?.value?.trim();
  if (val) window.location.href = `shop.html?q=${encodeURIComponent(val)}`;
  else window.location.href = 'shop.html';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement?.id === 'headerSearch') goSearch();
  if (e.key === 'Escape') {
    const drawer = document.getElementById('searchDrawer');
    if (drawer?.classList.contains('open')) {
      drawer.classList.remove('open');
      document.getElementById('searchToggle')?.classList.remove('active');
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // pre-fill search from URL query ?q=
  const urlQ = new URLSearchParams(location.search).get('q');
  if (urlQ) {
    const si = document.getElementById('search');
    if (si) { si.value = urlQ; si.dispatchEvent(new Event('input')); }
  }
  initNav();
  observe();
  initCounters();
  initShop();
  initProduct();
  initForm();
  const featured = document.getElementById('featuredGrid');
  if (featured) renderProducts('featuredGrid', PRODUCTS.slice(0, 8));
});
