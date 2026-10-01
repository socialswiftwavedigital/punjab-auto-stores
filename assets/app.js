const GD = id => `https://drive.google.com/uc?export=view&id=${id}`;

const PRODUCTS = [
{id:'ac-compressor-housing-jkg',img:'assets/images/ac-compressor-housing-jkg.png',name:'A/C Compressor Housing (JKG)',cat:'Cooling',brand:'JKG',type:'A/C compressor housing',compat:'Heavy-duty and commercial trucks',features:['High-quality JKG compressor housing','Strong and heat-resistant construction','Protects internal A/C components','Efficient cooling performance','Long-lasting, precise-fit design'],desc:'Durable A/C compressor housing engineered to protect internal components and maintain reliable cooling performance in demanding truck applications.'},
{id:'brake-vacuum-booster',img:'assets/images/brake-vacuum-booster.png',name:'Brake Vacuum Booster',cat:'Braking',brand:'JKG',type:'Brake vacuum booster',compat:'Heavy-duty commercial vehicles',features:['Smooth and responsive braking','Reduces pedal effort','Consistent brake pressure','Durable construction','Improves overall braking control'],desc:'Heavy-duty braking assistance unit designed to reduce pedal effort while maintaining smooth, responsive and consistent braking performance.'},
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
{id:'ms1-air-dryer',img:'assets/images/ms1-air-dryer.png',name:'Truck Air Dryer Assembly — MS-1',cat:'Air System',brand:'JKG',type:'MS-1 air dryer',compat:'Heavy-duty trucks and commercial vehicles',features:['Moisture and contaminant removal','High-capacity desiccant','Durable reinforced housing','Easy maintenance','JKG authenticity seal included'],desc:'MS-1 air dryer for commercial vehicles, engineered for consistent air-line protection and dependable performance.'},
// Products from Drive folder
{id:'air-brake-chambers',img:GD('1E9RZTIL-DfYDoN059cNKoArq2i3vbBzx'),name:'Air Brake Chambers',cat:'Braking',brand:'Punjab Auto',type:'Air brake chamber',compat:'Heavy-duty trucks and commercial vehicles',features:['High-pressure air operation','Durable diaphragm construction','Reliable spring-return mechanism','Corrosion-resistant housing','Wide compatibility'],desc:'Heavy-duty air brake chambers designed for reliable pneumatic braking in commercial trucks and long-haul vehicles.'},
{id:'air-filters',img:GD('1RhRKSTWN66q1Cwm4UCELZeeLWjO2KPIe'),name:'Truck Air Filters',cat:'Air System',brand:'Punjab Auto',type:'Truck air filter',compat:'Heavy-duty diesel trucks',features:['High-efficiency filtration','Removes dust and debris','Engine protection','Long service life','Easy replacement'],desc:'Premium truck air filters that protect diesel engines from dust and contaminants, extending engine life and maintaining performance.'},
{id:'air-governor-valves',img:GD('1ZT0guZLCVF1hmwpLqZoWr53n-0AscOms'),name:'Air Governor Valves',cat:'Air System',brand:'Punjab Auto',type:'Air governor valve',compat:'Pneumatic air brake systems',features:['Precise pressure regulation','Automatic cut-in/cut-out','Durable brass construction','Wide pressure range','Easy installation'],desc:'Air governor valves that regulate compressor cut-in and cut-out pressure for reliable pneumatic brake system performance.'},
{id:'air-regulator-valves',img:GD('1VPgJ4L5R_LVsa8iKHnllFCM2M8LLCHtM'),name:'Air Regulator Valves',cat:'Air System',brand:'Punjab Auto',type:'Air regulator valve',compat:'Commercial vehicle air systems',features:['Precise pressure control','Stable output pressure','Durable construction','Corrosion resistance','Easy adjustment'],desc:'Precision air regulator valves for commercial vehicle pneumatic systems, ensuring stable pressure control and reliable operation.'},
{id:'brake-chamber',img:GD('12Emjbpyuob2q-9FchM2_RySpxsAZWE4g'),name:'Brake Chamber',cat:'Braking',brand:'Punjab Auto',type:'Truck brake chamber',compat:'Heavy-duty trucks and trailers',features:['Robust construction','High-cycle durability','Standard and long-stroke options','Corrosion-resistant housing','Easy maintenance'],desc:'Durable truck brake chambers for heavy-duty pneumatic braking systems, built for long service life in demanding conditions.'},
{id:'brake-lining',img:GD('1qYmQs7KKx6KrGBu5Gc6cvcSmypfBaSls'),name:'Brake Lining',cat:'Braking',brand:'Punjab Auto',type:'Truck brake lining',compat:'Commercial trucks and heavy vehicles',features:['High heat resistance','Consistent friction coefficient','Long service life','Low dust generation','Reliable stopping power'],desc:'Heavy-duty brake lining material for commercial trucks, providing consistent friction performance and reliable stopping power under load.'},
{id:'brake-paddle-valve',img:GD('1dVt09yOzFOERjxX-Qv6pBoE1Y5qIApdV'),name:'Brake Paddle Valve',cat:'Braking',brand:'Punjab Auto',type:'Air brake paddle valve',compat:'Pneumatic brake systems',features:['Smooth pedal action','Reliable pressure control','Corrosion-resistant body','Easy installation','Long service life'],desc:'Air brake paddle valve for pneumatic systems, delivering smooth and responsive control over truck braking pressure.'},
{id:'brake-booster-heavy',img:GD('1TGKBD5OATEKoybEYJqppngDNGOqAapm0'),name:'Brake Booster',cat:'Braking',brand:'Punjab Auto',type:'Truck brake booster',compat:'Heavy-duty trucks and commercial vehicles',features:['Vacuum-assisted braking','Reduced pedal effort','Reliable pressure boost','Durable housing','Easy replacement'],desc:'Heavy-duty brake booster for commercial trucks providing vacuum-assisted braking with reduced pedal effort for driver comfort.'},
{id:'center-bearing-rubbers',img:GD('1ize_PEAVaiwUN4vQXteI3oo2KTneLdhz'),name:'Center Bearing Rubbers',cat:'Drivetrain',brand:'Punjab Auto',type:'Propeller shaft center bearing rubber',compat:'Trucks and heavy commercial vehicles',features:['Vibration absorption','High-load capacity','Oil and heat resistance','Precise fit','Long service life'],desc:'Center bearing rubber mounts that absorb vibration and support the propeller shaft in heavy-duty trucks and commercial vehicles.'},
{id:'clutch-cylinders',img:GD('1wbBp17Xvi2RN8cFtj0YmDHIbhYcWPqFR'),name:'Clutch Cylinders',cat:'Clutch',brand:'Punjab Auto',type:'Clutch master/slave cylinder',compat:'Commercial trucks and heavy vehicles',features:['Hydraulic operation','Smooth clutch engagement','Sealed construction','Corrosion-resistant','Long service life'],desc:'Hydraulic clutch cylinders for heavy-duty trucks, ensuring smooth and reliable clutch engagement in demanding commercial applications.'},
{id:'clutch-plate',img:GD('1vJKi_Ah092fmVnF4ajpbYrC5xMAposgV'),name:'Clutch Plate',cat:'Clutch',brand:'Punjab Auto',type:'Truck clutch plate',compat:'Heavy-duty diesel trucks',features:['High-torque capacity','Heat-resistant facing','Precision balanced','Smooth engagement','Long service life'],desc:'Heavy-duty clutch plate engineered for high-torque commercial truck applications with smooth engagement and extended service life.'},
{id:'compressor-case',img:GD('1qIOuv2rZ6_K-UUt4cgYtKy0382DZ14bW'),name:'Compressor Case',cat:'Air System',brand:'Punjab Auto',type:'Air compressor case',compat:'Truck pneumatic compressor assemblies',features:['Precision cast housing','Heat dissipation fins','Corrosion-resistant finish','Accurate bore dimensions','Direct replacement'],desc:'Heavy-duty air compressor case providing structural integrity and efficient heat dissipation for truck pneumatic systems.'},
{id:'compressor-heads',img:GD('1mxcv3yTPaJdmzvaXPq5Jvk6Dzi28JOev'),name:'Compressor Heads',cat:'Air System',brand:'Punjab Auto',type:'Air compressor cylinder head',compat:'Truck air compressor assemblies',features:['High-pressure rating','Precision valve seats','Corrosion-resistant alloy','Direct replacement','Long service life'],desc:'Precision air compressor heads for heavy-duty truck pneumatic systems, engineered for high-pressure reliability and long service life.'},
{id:'diesel-pump-plates',img:GD('1gAFatxhzojTONm2wXX3JN361QGh3ui6R'),name:'Diesel Pump Plates',cat:'Fuel',brand:'Punjab Auto',type:'Diesel injection pump plate',compat:'Truck diesel fuel systems',features:['Precision machined','High-pressure sealing','Durable alloy construction','Direct replacement','Accurate tolerances'],desc:'Precision diesel pump plates for truck fuel injection systems, providing reliable high-pressure sealing and accurate fuel delivery.'},
{id:'head-gaskets',img:GD('1hs60RtPTOwr9oN80v5FxMIwCvl3T1pNW'),name:'Head Gaskets',cat:'Engine',brand:'Punjab Auto',type:'Truck engine head gasket',compat:'Heavy-duty diesel truck engines',features:['Multi-layer steel construction','High-temp resistance','Reliable compression seal','Wide engine compatibility','Long service life'],desc:'Heavy-duty truck engine head gaskets providing reliable compression sealing and heat resistance for commercial diesel applications.'},
// Best from unnamed photos
{id:'air-dryer-unit',img:GD('1vnSx5o92eD1DPmySCrAx2k26UXSrf1-q'),name:'Air Dryer Unit',cat:'Air System',brand:'Punjab Auto',type:'Truck air dryer unit',compat:'Heavy-duty truck air brake systems',features:['Removes moisture and oil','Automatic purge cycle','High-flow capacity','Durable metal housing','Easy maintenance'],desc:'Heavy-duty air dryer unit for truck air brake systems, removing moisture and contaminants to protect downstream components.'},
{id:'fuel-filter-assembly',img:GD('1VDrNSIEBVcGdGwcrtgKkYjc-KAWQkqPt'),name:'Fuel Filter Assembly',cat:'Fuel',brand:'Punjab Auto',type:'Truck fuel filter assembly',compat:'Heavy-duty diesel truck fuel systems',features:['Multi-stage filtration','Water separation','Corrosion-resistant housing','High flow rate','Easy servicing'],desc:'Heavy-duty fuel filter assembly for diesel trucks, providing multi-stage filtration and water separation to protect the fuel system.'},
{id:'brake-foot-valve',img:GD('1MqlJQ4xjO9wStdWwwh9021truuHWYhJ0'),name:'Brake Foot Valve',cat:'Braking',brand:'Punjab Auto',type:'Air brake foot valve / treadle valve',compat:'Heavy-duty truck pneumatic brake systems',features:['Dual-circuit operation','Smooth progressive control','Durable pedal mechanism','High-pressure rating','Long service life'],desc:'Dual-circuit air brake foot valve (treadle valve) for heavy-duty trucks, providing smooth progressive braking control.'},
{id:'diesel-pump-gasket-set',img:GD('1JB6cgqvi6IB1z1l0dHEqDcaBsQ5EYWH2'),name:'Diesel Pump Gasket Set',cat:'Fuel',brand:'Seko',type:'Complete diesel pump gasket kit',compat:'Truck diesel injection pumps',features:['Complete kit','All gaskets and seals','High-temp resistant materials','Precise fit','Long service life'],desc:'Complete diesel pump gasket kit including all necessary gaskets and seals for a full pump rebuild on heavy-duty truck fuel systems.'},
{id:'fuel-solenoid-valve',img:GD('1HdB2M2V9QZcQ7SzZTwebVNU1bXld7D7s'),name:'Fuel Shut-Off Solenoid Valve',cat:'Fuel',brand:'Punjab Auto',type:'Diesel fuel shut-off solenoid valve',compat:'Truck diesel engines',features:['Fast-acting operation','Reliable seal','Corrosion-resistant body','Low power consumption','Direct replacement'],desc:'Diesel fuel shut-off solenoid valve for truck engines, enabling remote fuel cut-off with fast-acting reliable sealing.'},
{id:'air-relay-valve',img:GD('1QQgdxKoDipS6ynXzSdFQm-_yUGQXD7LP'),name:'Air Relay Valve',cat:'Braking',brand:'Punjab Auto',type:'Air brake relay valve',compat:'Heavy-duty truck air brake systems',features:['Fast response time','Balanced pressure delivery','Durable housing','Multiple port configuration','Easy installation'],desc:'Air brake relay valve for heavy-duty trucks, providing fast pressure response and balanced air distribution across axles.'},
{id:'brake-protection-valve-ptc',img:GD('1EJRsqWV9k2WGnsmE9F1wxVid6NEY27Zn'),name:'Brake Protection Valve (PTC)',cat:'Braking',brand:'PTC',type:'Multi-circuit brake protection valve',compat:'Heavy-duty truck air brake systems',features:['Multi-circuit protection','Automatic failsafe','PTC-certified quality','Durable construction','Long service life'],desc:'PTC-brand multi-circuit brake protection valve safeguarding truck air brake circuits from pressure loss and system failure.'},
{id:'jkg-compressor-case-boxed',img:GD('1Y65DgnU2vrE_0Kz9O0CvgvsF4j_a-gOR'),name:'JKG Compressor Case (Genuine)',cat:'Air System',brand:'JKG',type:'JKG genuine compressor case',compat:'JKG air compressor assemblies',features:['Genuine JKG part','Precision cast housing','Heat-resistant finish','Direct replacement','Includes authenticity box'],desc:'Genuine JKG compressor case with original packaging — precision engineered replacement for JKG air compressor assemblies.'}
];

function card(p) {
  const imgHtml = p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy">` : '';
  return `<article class="card fade"><div class="product-visual${p.img?' has-image':''}">${imgHtml}<span class="product-badge">${p.brand} · ${p.cat}</span></div><div class="card-body"><h3>${p.name}</h3><p>${p.desc}</p><a class="link" href="product.html?id=${p.id}">View more →</a></div></article>`;
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

function initSlider() {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.slide');
  const dots = slider.querySelectorAll('.dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function go(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
    const c = slides[current].querySelector('.slide-content');
    if (c) { c.style.animation = 'none'; c.offsetHeight; c.style.animation = ''; }
  }

  function next() { go(current + 1); }
  function prev() { go(current - 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, 5500);
  }

  slider.querySelector('.slider-next')?.addEventListener('click', () => { next(); startTimer(); });
  slider.querySelector('.slider-prev')?.addEventListener('click', () => { prev(); startTimer(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { go(i); startTimer(); }));

  let startX = 0;
  slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); startTimer(); }
  }, { passive: true });

  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', startTimer);

  startTimer();
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
  initSlider();
  observe();
  initCounters();
  initShop();
  initProduct();
  initForm();
  const featured = document.getElementById('featuredGrid');
  if (featured) renderProducts('featuredGrid', PRODUCTS.slice(0, 8));
});
