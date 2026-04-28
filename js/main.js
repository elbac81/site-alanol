/* ══════════════════════════════════════════
   ALANOL — main.js
   ══════════════════════════════════════════ */

// ── PRODUCT DATA ──────────────────────────────────────────────
// ── TAGS ─────────────────────────────────────────────────────────────────────
const allTags = [
  'Água Limpa',
  'Água Suja',
  'Água Lodosa',
  'Drenagem',
  'Fossa',
  'Rega Residencial',
  'Rega Agrícola',
  'Pressurização Unifamiliar',
  'Pressurização Edifícios',
  'Construção',
  'Pedreiras',
  'Campos Desportivos',
  'Águas Agressivas',
  'HVAC / AVAC',
  'Solar',
  'Motores Submersíveis',
  'Acessórios de Montagem',
];

const products = [
  {id:2795,  cat:"furo",       tags:['Água Limpa','Rega Agrícola','Rega Residencial','Solar'],  q:24,   h:345,  kw:null,
   name:'ALANOL® F4"',                   img:"https://alanol.pt/img/products/f4.png",       spec:'Q: 24 m³/h · H: 345 m · Furo 4"',                    url:"produtos/eletrobomba-f4.html"},
  {id:4462,  cat:"furo",       tags:['Água Limpa','Rega Agrícola','Pressurização Edifícios','Campos Desportivos','Solar'],  q:270,   h:400,  kw:null,
   name:"ALANOL® FTI",                   img:"https://alanol.pt/img/products/fti.png",      spec:"Qmax: 270 m³/h · Hmax: 400 m · Furo elevado caudal", url:"produtos/eletrobomba-fti.html"},
  {id:4466,  cat:"furo",       tags:['Água Limpa','Rega Agrícola','Pressurização Edifícios','Pedreiras','Águas Agressivas','Solar'],  q:120,   h:690,  kw:null,
   name:"ALANOL® FTI VS",                img:"https://alanol.pt/img/products/ftivs.png",    spec:"Qmax: 120 m³/h · Hmax: 690 m · INOX",               url:"produtos/fti-vs.html"},
  {id:9267,  cat:"furo",       tags:['Água Limpa','Rega Agrícola','Pressurização Edifícios','Pedreiras','Águas Agressivas','Solar'],  q:342,   h:580,  kw:75,
   name:'VSC 8"/10"',                    img:"https://alanol.pt/img/products/vsc.png",      spec:"Qmax: 342 m³/h · Hmax: 580 m · INOX",               url:"produtos/vsc.html"},
  {id:20577, cat:"furo",       tags:['Água Limpa','Rega Agrícola','Rega Residencial','Solar'],  q:null,   h:null,  kw:7.5,
   name:'HES Alta Eficiência 4"',        img:"https://alanol.pt/img/products/hes.png",      spec:"High Efficiency System · Classe IE3+",               url:"produtos/motores-4-de-alta-eficiencia.html"},
  {id:4389,  cat:"poco",       tags:['Água Limpa','Rega Residencial','Pressurização Unifamiliar','Campos Desportivos','Solar'],  q:14,   h:110,  kw:3,
   name:'VN — INOX 5"',                  img:"https://alanol.pt/img/products/vn.png",       spec:'Q: 14 m³/h · H: 110 m · INOX 5"',                   url:"produtos/vn.html"},
  {id:4454,  cat:"poco",       tags:['Água Limpa','Rega Residencial','Pressurização Unifamiliar','Campos Desportivos','Solar'],  q:7.5,   h:90,  kw:1.1,
   name:'ES — INOX 5"',                  img:"https://alanol.pt/img/products/es.png",       spec:'Q: 7,5 m³/h · H: 90 m · INOX 5"',                   url:"produtos/es.html"},
  {id:4355,  cat:"poco",       tags:['Água Limpa','Pressurização Unifamiliar'],  q:7,   h:95,  kw:2.2,
   name:"ALANOL® AM-P / AT-P",           img:"https://alanol.pt/img/products/amp.png",      spec:"Pressurização · Alumínio · Série P",                 url:"produtos/amp-atp.html"},
  {id:4627,  cat:"poco",       tags:['Água Lodosa','Rega Agrícola','Águas Agressivas','Pedreiras'],  q:51,   h:32,  kw:null,
   name:"ALANOL® AM-A / AT-A",           img:"https://alanol.pt/img/products/amat.png",     spec:"Qmax: 51 m³/h · Hmax: 32 m · Águas abrasivas",      url:"produtos/ama-ata.html"},
  {id:14833, cat:"poco",       tags:['Água Suja','Drenagem','Fossa'],  q:25,   h:18,  kw:null,
   name:"ALANOL® AM-L / AT-L",           img:"https://alanol.pt/img/products/aml.png",      spec:"Qmax: 25 m³/h · Hmax: 18 m · Trituradora",          url:"produtos/am-l-at-l.html"},
  {id:4370,  cat:"poco",       tags:['Água Lodosa','Rega Agrícola','Águas Agressivas'],  q:51,   h:32,  kw:null,
   name:"ALANOL® AT-A-B",                img:"https://alanol.pt/img/products/amat.png",     spec:"Qmax: 51 m³/h · Hmax: 32 m · Borracha",             url:"produtos/amab-atab.html"},
  {id:4364,  cat:"poco",       tags:['Água Limpa','Rega Residencial','Rega Agrícola'],  q:38.5,   h:45,  kw:null,
   name:"ALANOL® AM-1 / AT-1",           img:"https://alanol.pt/img/products/am1.png",      spec:"Qmax: 38,5 m³/h · Hmax: 45 m · Alumínio",           url:"produtos/am1_at1.html"},
  {id:4366,  cat:"poco",       tags:['Água Limpa','Rega Residencial','Rega Agrícola'],  q:35,   h:58,  kw:null,
   name:"ALANOL® AM-2 / AT-2",           img:"https://alanol.pt/img/products/amat.png",     spec:"Qmax: 35 m³/h · Hmax: 58 m · Duas turbinas",        url:"produtos/am2-at2.html"},
  {id:4380,  cat:"poco",       tags:['Água Suja','Drenagem','Fossa'],  q:25,   h:18,  kw:null,
   name:"ALANOL® AM-A / AT-T",           img:"https://alanol.pt/img/products/amt.png",      spec:"Qmax: 25 m³/h · Hmax: 18 m · Trituradora",          url:"produtos/amt-att.html"},
  {id:4384,  cat:"poco",       tags:['Água Suja','Construção','Pedreiras'],  q:38.5,   h:45,  kw:null,
   name:"ALANOL® AM-B / AT-B",           img:"https://alanol.pt/img/products/amb.png",      spec:"Qmax: 38,5 m³/h · Hmax: 45 m · Bombeiros",          url:"produtos/am_at_b.html"},
  {id:11914, cat:"poco",       tags:['Água Suja','Drenagem','Solar'],  q:30,   h:20,  kw:1.1,
   name:"EGN — INOX",                    img:"https://alanol.pt/img/products/egn.png",      spec:"Q: 30 m³/h · H: 20 m · Drenagem INOX",              url:"produtos/egn.html"},
  {id:11921, cat:"poco",       tags:['Água Suja','Drenagem','Construção','Pedreiras','Solar'],  q:36,   h:15,  kw:1.5,
   name:"EGT / EGF — INOX",              img:"https://alanol.pt/img/products/egtegf.png",   spec:"Q: 36 m³/h · Sólidos até 50mm",                     url:"produtos/egt-egf.html"},
  {id:6635,  cat:"poco",       tags:['Água Suja','Drenagem','Fossa','Pedreiras','Construção','Solar'],  q:26,   h:13,  kw:0.9,
   name:"ED / EDV — INOX",               img:"https://alanol.pt/img/products/ededv.png",    spec:"Qmax: 26 m³/h · Sólidos até 35mm",                  url:"produtos/ed-edv.html"},
  {id:4441,  cat:"superficie", tags:['Água Limpa','Pressurização Unifamiliar','Pressurização Edifícios','HVAC / AVAC','Solar'],  q:29,   h:104,  kw:15,
   name:"EH — Horizontais multiestágio", img:"https://alanol.pt/img/products/eh.png",       spec:"Q: 14 m³/h · H: 110 m · INOX",                      url:"produtos/eh.html"},
  {id:4457,  cat:"superficie", tags:['Água Limpa','Pressurização Edifícios','Rega Agrícola','HVAC / AVAC','Solar'],  q:120,   h:320,  kw:45,
   name:"EV — Verticais multiestágio",   img:"https://alanol.pt/img/products/ev.png",       spec:"Q: 120 m³/h · H: 320 m · INOX",                     url:"produtos/ev.html"},
  {id:7267,  cat:"superficie", tags:['Água Limpa','Rega Residencial','Pressurização Unifamiliar','Solar'],  q:null,   h:null,  kw:null,
   name:"FNC — Monobloco",               img:"https://alanol.pt/img/products/fnc.png",      spec:"Monobloco de superfície · Anti-corrosão",            url:"produtos/fnc.html"},
  {id:4443,  cat:"superficie", tags:['Água Limpa'],  q:34,   h:24,  kw:2.2,
   name:"SWT — Piscina",                 img:"https://alanol.pt/img/products/swt.png",      spec:"Qmax: 34 m³/h · Hmax: 24 m · Filtro incorporado",   url:"produtos/swt.html"},
  {id:4483,  cat:"superficie", tags:['Água Limpa','Pressurização Unifamiliar','HVAC / AVAC','Solar'],  q:29,   h:104,  kw:15,
   name:"Grupo EH24",                    img:"https://alanol.pt/img/products/eh24.png",     spec:"Qmax: 7,5 m³/h · Hmax: 104 m",                      url:"produtos/eh24.html"},
  {id:4479,  cat:"superficie", tags:['Água Limpa','Pressurização Unifamiliar','HVAC / AVAC','Solar'],  q:29,   h:104,  kw:15,
   name:"Grupo EH60",                    img:"https://alanol.pt/img/products/eh60.png",     spec:"Qmax: 7 m³/h · Hmax: 104 m",                        url:"produtos/eh-60.html"},
  {id:4493,  cat:"superficie", tags:['Água Limpa','Pressurização Unifamiliar','HVAC / AVAC','Solar'],  q:29,   h:104,  kw:15,
   name:"Grupo EH B2",                   img:"https://alanol.pt/img/products/ehb2.png",     spec:"Qmax: 7 m³/h · Arranque automático",                 url:"produtos/eh-b2.html"},
  {id:4469,  cat:"superficie", tags:['Água Limpa','Pressurização Edifícios','Rega Agrícola','HVAC / AVAC','Solar'],  q:120,   h:320,  kw:45,
   name:"Central EV",                    img:"https://alanol.pt/img/products/cev.png",      spec:"Qmax: 240 m³/h · Hmax: 320 m",                      url:"produtos/centrais-ev.html"},
  {id:4499,  cat:"superficie", tags:['Água Limpa','Pressurização Edifícios','Pressurização Unifamiliar','HVAC / AVAC','Solar'],  q:29,   h:104,  kw:15,
   name:"Central EH230",                 img:"https://alanol.pt/img/products/eh230.png",    spec:"Variadores integrados · Pressão constante",          url:"produtos/central-inteligente-eh-se230.html"},
  {id:4508,  cat:"superficie", tags:['Água Limpa','Pressurização Unifamiliar','HVAC / AVAC','Solar'],  q:29,   h:104,  kw:15,
   name:"Central EH BT",                 img:"https://alanol.pt/img/products/ehbt.png",     spec:"Qmax: 15 m³/h · Hmax: 104 m",                       url:"produtos/centrais-eh-bt.html"},
  {id:4472,  cat:"superficie", tags:['Água Limpa','Pressurização Unifamiliar','Pressurização Edifícios','HVAC / AVAC','Solar'],  q:24,   h:104,  kw:null,
   name:"Central VL",                    img:"https://alanol.pt/img/products/cvl.png",      spec:"Qmax: 24 m³/h · Hmax: 104 m",                       url:"produtos/centrais-vl.html"},
  {id:10324, cat:"solar",      tags:['Água Limpa','Rega Agrícola','Rega Residencial','Campos Desportivos'],  q:24,   h:345,  kw:null,
   name:"Kits Bombagem Solar",           img:"https://alanol.pt/img/products/solar.webp",   spec:"Q: 24 m³/h · H: 345 m · Kit completo",              url:"produtos/kits-de-bombagem-solar.html"},
  {id:11503, cat:"solar",      tags:['Água Limpa','Rega Agrícola','Rega Residencial','Campos Desportivos'],  q:null,   h:null,  kw:1.5,
   name:"Drive-Tech® Mini Solar MP",              img:"https://alanol.pt/img/products/drive-tech-mini.png",    spec:"3×230V · Max 1,5 kW · Bluetooth",                   url:"produtos/controlador-solar-drive-tech.html"},
  {id:11504, cat:"solar",      tags:['Água Limpa','Rega Agrícola','Pressurização Edifícios','Campos Desportivos'],  q:null,   h:null,  kw:22,
   name:"Drive-Tech® Solar",     img:"https://alanol.pt/img/products/dtech.png",    spec:"até 22 kW · MPPT · 3×380-460 V · Bluetooth",         url:"produtos/drive-tech-compact-solar.html"},
  {id:4521,  cat:"depositos",  tags:['Água Limpa','Pressurização Unifamiliar','Pressurização Edifícios','HVAC / AVAC'],  q:null,   h:null,  kw:null,
   name:"Depósito s/ Membrana INOX",    img:"https://alanol.pt/img/products/dep1.png",     spec:"100 a 1300 litros · INOX",                      url:"produtos/depositos-sem-membrana-em-inox.html"},
  {id:6783,  cat:"depositos",  tags:['Água Limpa','Pressurização Unifamiliar','HVAC / AVAC'],  q:null,   h:null,  kw:null,
   name:"Depósito c/ Membrana INOX",    img:"https://alanol.pt/img/products/dep2.png",     spec:"24 a 500 litros · INOX",                        url:"produtos/depositos-com-membrana-inox.html"},
  {id:6926,  cat:"controlo",   tags:['Água Limpa','Água Suja','Pressurização Unifamiliar'],  q:null,   h:null,  kw:null,
   name:"Quadro Digital TPM6",           img:"https://alanol.pt/img/products/tpm6.png",     spec:"Digital · Com ou sem sondas",                        url:"produtos/tpm6.html"},
  {id:6925,  cat:"controlo",   tags:['Água Limpa','Pressurização Unifamiliar','Pressurização Edifícios'],  q:null,   h:null,  kw:null,
   name:"Quadro Digital PROBOMBA",       img:"https://alanol.pt/img/products/probomba.png", spec:"Digital · Dispensa sondas",                          url:"produtos/probomba.html"},
  {id:6927,  cat:"controlo",   tags:['Água Suja','Drenagem','Fossa'],  q:null,   h:null,  kw:null,
   name:"PROBOMBA Águas Residuais",      img:"https://alanol.pt/img/products/probar.png",   spec:"Proteção e comando · Águas residuais",               url:"produtos/probomba-ar.html"},
  {id:6928,  cat:"controlo",   tags:['Água Limpa','Água Suja','Drenagem'],  q:null,   h:null,  kw:null,
   name:"Quadro de Nível c/ Sondas",    img:"https://alanol.pt/img/products/qnivel.png",   spec:"Controlo por sondas hidrostáticas",                  url:"produtos/quadro-de-nivel.html"},
  {id:6929,  cat:"controlo",   tags:['Água Limpa','Pressurização Unifamiliar'],  q:null,   h:null,  kw:null,
   name:"Quadro Nível Poço/Depósito",   img:"https://alanol.pt/img/products/qpocodep.png", spec:"Schneider · Controlo poço e depósito",               url:"produtos/poco-deposito.html"},
  {id:6930,  cat:"controlo",   tags:['Água Limpa','Pressurização Edifícios'],  q:null,   h:null,  kw:null,
   name:"Quadro de Alternância",         img:"https://alanol.pt/img/products/qalt.png",     spec:"1×230V ou 3×380V · Automático",                      url:"produtos/quadro-de-alternancia.html"},
  {id:6931,  cat:"controlo",   tags:['Água Limpa','Pressurização Edifícios'],  q:null,   h:null,  kw:null,
   name:"Quadro Alternância c/ Alarme", img:"https://alanol.pt/img/products/qalt.png",     spec:"1×230V ou 3×380V · Alarme sonoro",                   url:"produtos/quaro-de-alternancia-alarme.html"},
  {id:6932,  cat:"controlo",   tags:['Água Limpa','Pressurização Unifamiliar','Pressurização Edifícios'],  q:null,   h:null,  kw:null,
   name:"Quadro Discontactor Simples",   img:"https://alanol.pt/img/products/qdiscon.png",  spec:"1×230V ou 3×380V · Proteção",                        url:"produtos/quadro-discontactor.html"},
  {id:6989,  cat:"controlo",   tags:['Água Limpa','Pressurização Unifamiliar'],  q:null,   h:null,  kw:null,
   name:"Brio Top",                      img:"https://alanol.pt/img/products/briotop.jpg",  spec:"Controlador eletrónico · Monofásico",                url:"produtos/brio-top.html"},
  {id:6991,  cat:"controlo",   tags:['Água Limpa','Pressurização Unifamiliar'],  q:null,   h:null,  kw:null,
   name:"Brio 2000",                     img:"https://alanol.pt/img/products/brio2000.png", spec:"Arranque/paragem automático",                        url:"produtos/brio-2000.html"},
  {id:6992,  cat:"controlo",   tags:['Água Limpa','Pressurização Unifamiliar','Pressurização Edifícios'],  q:null,   h:null,  kw:null,
   name:"SIRIO UNIVERSAL",               img:"https://alanol.pt/img/products/sirio.jpg",    spec:"1×230V ou 3×230V · Pressão constante",               url:"produtos/sirio-universal.html"},
  {id:7046,  cat:"controlo",   tags:['Água Limpa','Pressurização Edifícios'],  q:7.5,   h:90,  kw:1.1,
   name:"Variadores VACON®",             img:"https://alanol.pt/img/products/vacon.png",    spec:"Poupança 20–50% energia",                            url:"produtos/variadores-de-velocidade-vacon.html"},
  {id:7056,  cat:"controlo",   tags:['Água Limpa','Pressurização Edifícios'],  q:null,   h:null,  kw:null,
   name:"Variadores DrivE-Tech®",        img:"https://alanol.pt/img/products/drivetech.png",spec:"Inversor de frequência",                             url:"produtos/drivetech.html"},
  {id:7062,  cat:"furo",       tags:['Água Limpa','Rega Agrícola','Motores Submersíveis','Solar'],  q:7.5,   h:90,  kw:1.1,
   name:"Franklin Electric®",            img:"https://alanol.pt/img/products/franklin.png", spec:'0,25 kW a 150 kW · 4", 6" e 8"',                    url:"produtos/motores-submersiveis-franklin.html"},
  {id:4532,  cat:"superficie", tags:['Água Limpa','Água Suja','Acessórios de Montagem'],  q:7.5,   h:90,  kw:1.1,
   name:"Acessórios de Montagem",        img:"https://alanol.pt/img/products/acess.png",    spec:"Tês, curvas, uniões, ligações",                      url:"produtos/acessorios.html"},
];

// ── CATEGORY META ─────────────────────────────────────────────
const catMeta = {
  furo:       {label:"Furo",                desc:'Bombas de furo 4", 6", 8" e 10". Até 580m. Motores Franklin Electric®.',      color:"var(--cat-furo-color)", bg:"var(--cat-furo-bg)"},
  poco:       {label:"Poço",               desc:"Gama completa AM/AT alumínio e VN/ES INOX. Drenagem e águas residuais.",       color:"var(--cat-poco-color)", bg:"var(--cat-poco-bg)"},
  superficie: {label:"Superfície",          desc:"EH/EV multiestágio e grupos de pressão com variação de velocidade.",          color:"var(--cat-sup-color)",  bg:"var(--cat-sup-bg)"},
  solar:      {label:"Solar",              desc:"Kits e sistemas de bombagem fotovoltaica. Compatíveis com motores trifásicos: até 4 kW em 3×230 V · até 55 kW em 3×400 V. As eletrobombas EH, EV, FNC, VL, F4, FTI-VS, VSC, VN, ES e motores Franklin® podem também funcionar a energia solar.",            color:"var(--cat-sol-color)",  bg:"var(--cat-sol-bg)"},
  depositos:  {label:"Depósitos",          desc:"Depósitos INOX 100%, com e sem membrana, verticais e horizontais.",            color:"var(--cat-dep-color)",  bg:"var(--cat-dep-bg)"},
  controlo:   {label:"Controlo & Proteção",desc:"Quadros, variadores de frequência e DrivE-Tech®. Pressão constante.",                color:"var(--cat-ctl-color)",  bg:"var(--cat-ctl-bg)"},
  motores:    {label:"Motores",            desc:'Franklin Electric® 0,25–150 kW, para furos 4", 6" e 8".',                     color:"var(--cat-furo-color)", bg:"var(--cat-furo-bg)"},
  acessorios: {label:"Acessórios",         desc:"Gama completa de peças para montagem e instalação de sistemas de bombagem.",   color:"var(--cat-sup-color)",  bg:"var(--cat-sup-bg)"},
  todos:      {label:"Todos os Produtos",  desc:"Catálogo completo —  poço, superfície, solar e mais.",color:"var(--cat-furo-color)", bg:"var(--cat-furo-bg)"},
};

const catDescs = {
  solar:      "Kits solares completos<br>Eletrobombas de furo, poço e superfície<br>Sistemas de controlo de transbordo<br>Sistemas de pressão constante<br>Até 4kW a 2×230V e 55kW a 4×380V",
  furo:       "Eletrobombas de furo de 4\", 6\", 8\" e 10\"<br>Motores desde 0,37kW a 400kW<br>Construção em aço INOX 304 (AISI306 sob pedido)<br>Caudais até 600m³/hora e elevação até 600 metros<br>Motores Franklin Electric®",
  poco:       "Séries em alumínio e em INOX<br>Todo o tipo de drenagens<br>Uso residencial, agricultura, construção ou industrial<br>Águas limpas, lodosas, agressivas, com areia<br>Fossas sépticas",
  superficie: "Séries EH, EV e VL<br>Pressurização de residências ou edifícios<br>Sistemas inteligentes de pressão/caudal constante<br>Serviço de alternância<br>Construção em INOX",
  controlo:   "Quadros discontactores<br>Quadros de nível<br>Quadros de alternância<br>Arrancadores suaves<br>Variadores de Velocidade",
  depositos:  "INOX 100%, com e sem membrana, até 1300L.",
  motores:    "Franklin Electric® 0,25–150 kW, 4\"-8\".",
  acessorios: "Peças e acessórios de montagem.",
};

// ── HELPERS ───────────────────────────────────────────────────
function catCount(k){ return k==="todos" ? products.length : products.filter(p=>p.cat===k).length; }
function firstImg(k){ const p=products.find(p=>p.cat===k); return p?p.img:""; }

function prodCard(p){
  const m = catMeta[p.cat] || catMeta.todos;
  const hasSolar = (p.tags || []).includes('Solar') && p.cat !== 'solar';
  const SOLAR_AC = ['produtos/controlador-solar-drive-tech.html', 'produtos/drive-tech-compact-solar.html', 'produtos/kits-de-bombagem-solar.html'];
  const isSolarAC = SOLAR_AC.includes(p.url);
  const solarBadge = isSolarAC
    ? `<div class="prod-solar-badge" style="background:#156038">☀ Solar / Rede AC</div>`
    : hasSolar ? `<div class="prod-solar-badge"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>Solar Disponível</div>` : '';
  const tagsHtml = (p.tags || []).filter(t => t !== 'Solar').map(t =>
    `<span class="prod-tag">${t}</span>`
  ).join('');
  return `<div class="prod-card" onclick="sessionStorage.setItem('nav','${p.cat}');sessionStorage.setItem('scrollY',window.scrollY);location.href='${p.url}'" style="position:relative">
    ${solarBadge}
    <div class="prod-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
    </div>
    <div class="prod-body" style="background:${m.bg}">
      <div class="prod-cat-stripe" style="background:${m.color}"></div>
      <div class="prod-info">
        <div class="prod-cat-tag" style="color:${m.color}">${m.label}</div>
        <div class="prod-name">${p.name}</div>
        <div class="prod-spec">${p.spec}</div>
        ${tagsHtml ? `<div class="prod-tags">${tagsHtml}</div>` : ''}
      </div>
      <div class="prod-footer">
        <button class="prod-btn" style="background:${m.color}" onclick="event.stopPropagation();sessionStorage.setItem('nav','${p.cat}');sessionStorage.setItem('scrollY',window.scrollY);location.href='${p.url}'">Ver Mais →</button>
      </div>
    </div>
  </div>`;
}

// ── ROUTER ────────────────────────────────────────────────────
function setActive(key){
  document.querySelectorAll(".nav-links li a").forEach(a=>{
    const oc = a.getAttribute("onclick")||"";
    a.classList.toggle("active", oc.includes(`'${key}'`));
  });
}
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page-"+id).classList.add("active");
  window.scrollTo({top:0,behavior:'instant'});
}
function gohome(){ showPage("home"); document.querySelectorAll(".nav-links li a").forEach(a=>a.classList.remove("active")); }
function gopage(id){ showPage(id); setActive(id); }

// ── FILTER STATE ──
let _activeCat = 'todos';

function gocat(key){
  _activeCat = key || 'todos';
  _cTag = '';
  const cRow = document.getElementById('cTagsRow');
  if (cRow) cRow.style.display = 'none';
  const cBtn = document.getElementById('cTagsToggle');
  if (cBtn) { cBtn.classList.remove('open'); const a = cBtn.querySelector('.ftag-toggle-arrow'); if(a) a.style.transform=''; }
  document.querySelectorAll('[data-ctag]').forEach(b => b.classList.toggle('active', b.dataset.ctag === ''));

  // Update header bar
  const meta = catMeta[_activeCat] || catMeta.todos;
  document.getElementById("catBg").textContent      = meta.label;
  document.getElementById("catEyebrow").textContent = "Alanol® — "+(_activeCat==="todos"?"Catálogo Completo":"Categoria");
  document.getElementById("catTitle").textContent   = meta.label;
  document.getElementById("catDesc").textContent    = meta.desc;
  document.getElementById('catDesc').style.display='none';
  const bcCur=document.getElementById("bcCur"); if(bcCur) bcCur.textContent=_activeCat==="todos"?"":meta.label;
  const bcSep=document.getElementById("bcSep"); if(bcSep) bcSep.style.display=_activeCat==="todos"?"none":"";

  // Update filter pill active state
  document.querySelectorAll('.fcat-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === _activeCat);
  });

  // Update pill counts
  ['todos','furo','poco','superficie','solar','depositos','controlo'].forEach(k => {
    const el = document.getElementById('fcCount-'+k);
    if(el) el.textContent = catCount(k);
  });

  // Reset search
  const searchEl = document.getElementById('filterSearch');
  if(searchEl) searchEl.value = '';
  const clearBtn = document.getElementById('clearSearch');
  if(clearBtn) clearBtn.style.display = 'none';

  showPage("cat"); setActive(key);
  applyFilters();
}

function setCatFilter(key) {
  _activeCat = key;
  document.querySelectorAll('.fcat-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === key);
  });
  const meta = catMeta[key] || catMeta.todos;
  document.getElementById("catBg").textContent      = meta.label;
  document.getElementById("catTitle").textContent   = meta.label;
  document.getElementById("catDesc").textContent    = meta.desc;
  document.getElementById('catDesc').style.display='none';
  const bcCur2=document.getElementById("bcCur"); if(bcCur2) bcCur2.textContent=key==="todos"?"":meta.label;
  const bcSep2=document.getElementById("bcSep"); if(bcSep2) bcSep2.style.display=key==="todos"?"none":"";
  applyFilters();
}


function sortByField(list, field, asc) {
  return list.sort((a, b) => {
    const va = a[field], vb = b[field];
    if (va == null && vb == null) return 0;
    if (va == null) return 1;
    if (vb == null) return -1;
    return asc ? va - vb : vb - va;
  });
}

function applyFilters() {
  // Show/hide solar info banner
  const solarBanner = document.getElementById('solarInfoBanner');
  if (solarBanner) solarBanner.style.display = _activeCat === 'solar' ? 'block' : 'none';

  const query = (document.getElementById('filterSearch')?.value || '').toLowerCase().trim();
  const sort  = document.getElementById('filterSort')?.value || 'default';
  const clearBtn = document.getElementById('clearSearch');
  if(clearBtn) clearBtn.style.display = query ? 'flex' : 'none';

  // Filter by category
  let list = _activeCat === 'todos' ? [...products] : products.filter(p => p.cat === _activeCat || (_activeCat === 'solar' && p.tags && p.tags.includes('Solar')));
  // Solar: pin Drive-Tech and Kits to top
  if(_activeCat === 'solar' && sort === 'default') {
    const SOLAR_FIRST = ['produtos/controlador-solar-drive-tech.html','produtos/drive-tech-compact-solar.html','produtos/kits-de-bombagem-solar.html'];
    list.sort((a,b) => {
      const ai = SOLAR_FIRST.indexOf(a.url), bi = SOLAR_FIRST.indexOf(b.url);
      if(ai !== -1 && bi !== -1) return ai - bi;
      if(ai !== -1) return -1;
      if(bi !== -1) return 1;
      return 0;
    });
  }
  if (_cTag) list = list.filter(p => p.tags && p.tags.includes(_cTag));

  // Filter by search query
  if(query) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.spec.toLowerCase().includes(query) ||
      (catMeta[p.cat]?.label || '').toLowerCase().includes(query)
    );
  }

  // Sort
  if(sort === 'az') list.sort((a,b) => a.name.localeCompare(b.name));
  else if(sort === 'za') list.sort((a,b) => b.name.localeCompare(a.name));
  else if(sort === 'q_asc')  sortByField(list, 'q', true);
  else if(sort === 'q_desc') sortByField(list, 'q', false);
  else if(sort === 'h_asc')  sortByField(list, 'h', true);
  else if(sort === 'h_desc') sortByField(list, 'h', false);
  else if(sort === 'kw_asc')  sortByField(list, 'kw', true);
  else if(sort === 'kw_desc') sortByField(list, 'kw', false);

  // Update count label
  const total = _activeCat === 'todos' ? products.length : products.filter(p=>p.cat===_activeCat).length;
  const resultsEl = document.getElementById('filterResults');
  if(resultsEl) {
    if(query) {
      resultsEl.innerHTML = `<strong>${list.length}</strong> resultado${list.length!==1?'s':''} para "<strong>${query}</strong>"`;
    } else {
      resultsEl.innerHTML = `<strong>${list.length}</strong> produto${list.length!==1?'s':''}`;
    }
  }
  document.getElementById("catCount").textContent = list.length+" referência"+(list.length!==1?"s":"");

  // Render grid or no-results
  const grid = document.getElementById('catGrid');
  const noRes = document.getElementById('noResults');
  if(list.length === 0) {
    grid.innerHTML = '';
    if(noRes) { noRes.style.display='block'; document.getElementById('noResultsQuery').textContent = query; }
  } else {
    if(noRes) noRes.style.display = 'none';
    grid.innerHTML = list.map(prodCard).join('');
  }
}

function clearSearch() {
  const s = document.getElementById('filterSearch');
  if(s) s.value = '';
  const c = document.getElementById('clearSearch');
  if(c) c.style.display = 'none';
  applyFilters();
}

// ── BUILD HOME CATS ───────────────────────────────────────────
const famCfg = {"furo": {"bg":"#2E363E", "color":"#4a8fd4", "img":"https://alanol.pt/img/furo-banner.jpg", "tag":"Abastecimento · Rega · Municipal"}, "poco": {"bg":"#2E363E", "color":"#c4a882", "img":"https://alanol.pt/img/products/poco-banner.png", "tag":"Doméstico · Agrícola · Drenagem"}, "superficie": {"bg": "#ffffff", "color": "#0a5050", "img": "https://alanol.pt/img/products/superficie-banner.png", "tag": "Pressurização · HVAC · Rega"}, "solar": {"bg":"#ffffff", "color":"#2258a2", "img":"https://alanol.pt/img/solar-banner.webp", "tag":"Off-Grid · MPPT · Kits Completos"}, "depositos": {"bg": "#150e24", "color": "#9c7fd4", "img": "https://alanol.pt/img/products/dep2.png", "tag": "INOX · Com e sem membrana"}, "controlo": {"bg": "#ffffff", "color": "#2d7a3a", "img": "https://alanol.pt/img/products/controlo-banner.jpg", "tag": "Quadros · Variadores · Drive-Tech®"}, "motores": {"bg": "#0f1318", "color": "#7ab8d4", "img": "https://alanol.pt/img/products/franklin.png", "tag": "Franklin Electric® · 4″ a 8″"}, "acessorios": {"bg": "#111614", "color": "#7ad4c4", "img": "https://alanol.pt/img/products/acess.png", "tag": "Tês · Curvas · Uniões · Cabos"}};
function buildHomeCats(){
  // order: furo, superficie, poco — with superficie between the two photo-bg banners
  // Style A (bgPhoto): full-bleed image background — furo, poco
  // Style B (solid):   solid colour bg, product image on the right — superficie, solar
  const order = ["solar","furo","superficie","poco","controlo"];
  const styleB = ["superficie","solar","controlo","furo","poco"];
  const html = order.map(k=>{
    const m   = catMeta[k];
    const n   = catCount(k);
    const cfg = famCfg[k] || {bg:"#111", color:"#fff", img:"", tag:""};
    const isSolid = styleB.includes(k);
    if(isSolid){
      const extraClass = k==='solar' ? ' fam-banner--solar' : k==='superficie' ? ' fam-banner--superficie' : k==='poco' ? ' fam-banner--poco' : k==='controlo' ? ' fam-banner--controlo' : '';
      const reverse = '';
      const infoEl = `<div class="fam-info">
          <div class="fam-eyebrow">${n} produto${n!==1?"s":""}</div>
          <div class="fam-title" style="color:${cfg.color}">${m.label}</div>
          <div class="fam-desc">${catDescs[k]||""}</div>
          <div class="fam-cta" style="color:${cfg.color}">Ver produtos</div>
        </div>`;
      const imgEl = `<div class="fam-product-img">
          <img src="${cfg.img}" alt="${m.label}" loading="lazy">
        </div>`;
      return `<div class="fam-banner fam-banner--solid${extraClass}${reverse}" onclick="gocat('${k}')" style="background:${cfg.bg}">
        <div class="fam-inner">
          ${infoEl}${imgEl}
        </div>
      </div>
      <div class="fam-divider"></div>`;
    } else {
      return `<div class="fam-banner" onclick="gocat('${k}')" style="background:${cfg.bg}">
        <div class="fam-img"><img src="${cfg.img}" alt="${m.label}" loading="lazy"></div>
        <div class="fam-info">
          <div class="fam-eyebrow">${n} produto${n!==1?"s":""}</div>
          <div class="fam-title" style="color:${cfg.color}">${m.label}</div>
          <div class="fam-desc">${catDescs[k]||""}</div>
          <div class="fam-cta" style="color:${cfg.color}">Ver produtos</div>
        </div>
      </div>
      <div class="fam-divider"></div>`;
    }
  }).join("");
  document.getElementById("homeCatsGrid").innerHTML = html;
}

// ── FORM SUBMIT ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function(){
  const btn = document.getElementById("formBtn");
  if(btn) btn.addEventListener("click",function(){
    this.textContent="Enviado ✓"; this.style.background="#1e8a4f";
    setTimeout(()=>{this.textContent="Enviar Fale Connosco";this.style.background=""},3000);
  });
  buildHomeCats();
  initSlider();
  initParallax();
  animateCounters();
  // Handle navigation from product pages (sessionStorage)
  var navTarget = sessionStorage.getItem('nav');
  var scrollRestore = sessionStorage.getItem('scrollY');
  if(navTarget){
    sessionStorage.removeItem('nav');
    if(navTarget==='empresa'||navTarget==='contacto') gopage(navTarget);
    else gocat(navTarget);
    // Restore scroll position if returning via back button
    if(scrollRestore){
      sessionStorage.removeItem('scrollY');
      requestAnimationFrame(()=>requestAnimationFrame(()=>{
        window.scrollTo({top:parseInt(scrollRestore),behavior:'instant'});
      }));
    }
  } else {
    // Fallback: check URL hash
    var h = window.location.hash.replace('#','').toLowerCase();
    var hmap = {furo:'furo',poco:'poco',superficie:'superficie',solar:'solar',
                produtos:'todos',empresa:'empresa',contacto:'contacto'};
    if(h && hmap[h]){
      if(h==='empresa'||h==='contacto') gopage(hmap[h]);
      else gocat(hmap[h]);
    }
  }
  window.addEventListener('hashchange', function(){
    var h = window.location.hash.replace('#','').toLowerCase();
    var hmap = {furo:'furo',poco:'poco',superficie:'superficie',solar:'solar',
                produtos:'todos',empresa:'empresa',contacto:'contacto'};
    if(h && hmap[h]){
      if(h==='empresa'||h==='contacto') gopage(hmap[h]);
      else gocat(hmap[h]);
    }
  });
});

// ── HERO SLIDER ───────────────────────────────────────────────
function initSlider(){
  const track  = document.getElementById("slidesTrack");
  if(!track) return;
  const slides = track.querySelectorAll(".slide");
  const dotsEl = document.getElementById("slDots");
  const prog   = document.getElementById("slProg");
  const counter= document.getElementById("slCounter");
  const total  = slides.length;
  let cur=0, timer;

  slides.forEach((_,i)=>{
    const d = document.createElement("button");
    d.className = "sl-dot"+(i===0?" on":"");
    d.onclick = ()=>goto(i);
    dotsEl.appendChild(d);
  });

  function goto(n){
    slides[cur].classList.remove("is-active");
    dotsEl.children[cur].classList.remove("on");
    cur = (n+total)%total;
    slides[cur].classList.add("is-active");
    dotsEl.children[cur].classList.add("on");
    track.style.transform = `translateX(-${cur*100}%)`;
    counter.textContent   = `${cur+1} / ${total}`;
    resetProg();
  }

  function resetProg(){
    prog.classList.remove("go");
    prog.style.transition="none";
    prog.style.width="0";
    requestAnimationFrame(()=>requestAnimationFrame(()=>prog.classList.add("go")));
  }

  function play(){ clearTimeout(timer); timer=setTimeout(()=>{goto(cur+1);play();},5000); }

  document.getElementById("slPrev").onclick = ()=>{goto(cur-1);clearTimeout(timer);play();};
  document.getElementById("slNext").onclick = ()=>{goto(cur+1);clearTimeout(timer);play();};

  let tx=0;
  track.addEventListener("touchstart",e=>{tx=e.touches[0].clientX;},{passive:true});
  track.addEventListener("touchend",e=>{
    const dx=e.changedTouches[0].clientX-tx;
    if(Math.abs(dx)>50){goto(cur+(dx<0?1:-1));clearTimeout(timer);play();}
  },{passive:true});

  const heroSlider = document.getElementById("heroSlider");
  if(heroSlider){
    heroSlider.addEventListener("mouseenter",()=>clearTimeout(timer));
    heroSlider.addEventListener("mouseleave",()=>play());
  }

  resetProg(); play();
}

// ── PÁGINA TODOS OS PRODUTOS ──────────────────────────────────────────────
let _pCat = 'todos';
let _pTag = '';

function goprodutos() {
  _pCat = 'todos';
  _pTag = '';
  const s = document.getElementById('pSearch');
  if (s) s.value = '';
  const c = document.getElementById('pClearSearch');
  if (c) c.style.display = 'none';
  const sort = document.getElementById('pSort');
  if (sort) sort.value = 'default';
  // Close tags panel
  const tagsRow = document.getElementById('pTagsRow');
  if (tagsRow) tagsRow.style.display = 'none';
  const tagsBtn = document.getElementById('pTagsToggle');
  if (tagsBtn) { tagsBtn.classList.remove('open'); const arr = tagsBtn.querySelector('.ftag-toggle-arrow'); if(arr) arr.style.transform=''; }
  ['todos','furo','poco','superficie','solar','depositos','controlo'].forEach(k => {
    const el = document.getElementById('pfc-' + k);
    if (el) el.textContent = catCount(k);
  });
  document.querySelectorAll('[data-pcat]').forEach(b =>
    b.classList.toggle('active', b.dataset.pcat === 'todos')
  );
  document.querySelectorAll('[data-ptag]').forEach(b =>
    b.classList.toggle('active', b.dataset.ptag === '')
  );
  showPage('produtos');
  document.querySelectorAll('.nav-links li a').forEach(a =>
    a.classList.toggle('active', a.textContent.trim().startsWith('Todos'))
  );
  pApplyFilters();
}

function pSetCat(key) {
  _pCat = key;
  document.querySelectorAll('[data-pcat]').forEach(b =>
    b.classList.toggle('active', b.dataset.pcat === key)
  );
  pApplyFilters();
}

function pSetTag(tag) {
  _pTag = tag;
  document.querySelectorAll('[data-ptag]').forEach(b =>
    b.classList.toggle('active', b.dataset.ptag === tag)
  );
  pApplyFilters();
}

function pApplyFilters() {
  const query = (document.getElementById('pSearch')?.value || '').toLowerCase().trim();
  const sort  = document.getElementById('pSort')?.value || 'default';
  const clearBtn = document.getElementById('pClearSearch');
  if (clearBtn) clearBtn.style.display = query ? 'flex' : 'none';

  let list = _pCat === 'todos' ? [...products] : products.filter(p => p.cat === _pCat || (_pCat === 'solar' && p.tags && p.tags.includes('Solar')));
  if (_pTag) list = list.filter(p => p.tags && p.tags.includes(_pTag));
  if (query) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.spec.toLowerCase().includes(query) ||
      (catMeta[p.cat]?.label || '').toLowerCase().includes(query) ||
      (p.tags || []).some(t => t.toLowerCase().includes(query))
    );
  }
  if (sort === 'az') list.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'za') list.sort((a, b) => b.name.localeCompare(a.name));
  else if (sort === 'q_asc')  sortByField(list, 'q', true);
  else if (sort === 'q_desc') sortByField(list, 'q', false);
  else if (sort === 'h_asc')  sortByField(list, 'h', true);
  else if (sort === 'h_desc') sortByField(list, 'h', false);
  else if (sort === 'kw_asc')  sortByField(list, 'kw', true);
  else if (sort === 'kw_desc') sortByField(list, 'kw', false);

  // Solar kits always first
  const solarFirst = [10324, 11503];
  list.sort((a,b) => {
    const ai = solarFirst.indexOf(a.id), bi = solarFirst.indexOf(b.id);
    if(ai !== -1 && bi !== -1) return ai - bi;
    if(ai !== -1) return -1;
    if(bi !== -1) return 1;
    return 0;
  });

  const resultsEl = document.getElementById('pResults');
  if (resultsEl) {
    const filters = [_pTag, query].filter(Boolean);
    resultsEl.innerHTML = filters.length
      ? `<strong>${list.length}</strong> produto${list.length !== 1 ? 's' : ''} encontrado${list.length !== 1 ? 's' : ''}`
      : `<strong>${list.length}</strong> produto${list.length !== 1 ? 's' : ''}`;
  }
  const countEl = document.getElementById('pCount');
  if (countEl) countEl.textContent = list.length + ' referência' + (list.length !== 1 ? 's' : '');

  const grid = document.getElementById('pGrid');
  const noRes = document.getElementById('pNoResults');
  if (list.length === 0) {
    if (grid) grid.innerHTML = '';
    if (noRes) { noRes.style.display = 'block'; document.getElementById('pNoQuery').textContent = query || _pTag; }
  } else {
    if (noRes) noRes.style.display = 'none';
    if (grid) grid.innerHTML = list.map(prodCard).join('');
  }
}

function pClearSearch() {
  const s = document.getElementById('pSearch');
  if (s) s.value = '';
  const c = document.getElementById('pClearSearch');
  if (c) c.style.display = 'none';
  pApplyFilters();
}

// ── TOGGLE TAGS ───────────────────────────────────────────────────────────
function pToggleTags() {
  const row = document.getElementById('pTagsRow');
  const btn = document.getElementById('pTagsToggle');
  const arrow = btn ? btn.querySelector('.ftag-toggle-arrow') : null;
  const isOpen = row && row.style.display !== 'none';
  if (row) row.style.display = isOpen ? 'none' : 'flex';
  if (btn) btn.classList.toggle('open', !isOpen);
  if (arrow) arrow.style.transform = isOpen ? '' : 'rotate(180deg)';
}

// ── TAGS NA PAGE-CAT ──────────────────────────────────────────────────────
let _cTag = '';

function cToggleTags() {
  const row = document.getElementById('cTagsRow');
  const btn = document.getElementById('cTagsToggle');
  const arrow = btn ? btn.querySelector('.ftag-toggle-arrow') : null;
  const isOpen = row && row.style.display !== 'none';
  if (row) row.style.display = isOpen ? 'none' : 'flex';
  if (btn) btn.classList.toggle('open', !isOpen);
  if (arrow) arrow.style.transform = isOpen ? '' : 'rotate(180deg)';
}

function cSetTag(tag) {
  _cTag = tag;
  document.querySelectorAll('[data-ctag]').forEach(b =>
    b.classList.toggle('active', b.dataset.ctag === tag)
  );
  applyFilters();
}

// ── PARALLAX ──────────────────────────────────────────────────
function initParallax(){ /* disabled */ }

// ── COUNTER ANIMATION ──────────────────────────────────────────
function animateCounters(){
  const items = document.querySelectorAll('.number-val[data-target]');
  if(!items.length) return;
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target,10);
      const duration = 1500;
      const start = performance.now();
      function step(now){
        const p = Math.min((now-start)/duration,1);
        el.textContent = Math.floor(p * target);
        if(p<1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  },{threshold:0.3});
  items.forEach(el=>obs.observe(el));
}
