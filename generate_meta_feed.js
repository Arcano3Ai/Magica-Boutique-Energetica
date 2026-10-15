/**
 * GENERADOR DE ARCHIVOS PARA META BUSINESS & AGENTE DE META BUSINESS
 * Mágica — Alta Joyería Energética
 * 
 * Genera:
 * 1. meta_catalog_feed.csv        -> Catálogo oficial para Meta Commerce Manager (Facebook / Instagram Shop / WhatsApp Catalog)
 * 2. meta_catalog_feed.xml        -> Feed RSS/XML estándar para sincronización programada de Meta Business
 * 3. meta_business_agent_catalog.json -> Base de conocimiento JSON estructurada para Agente de Meta Business / WhatsApp AI
 * 4. meta_business_agent_knowledge.md -> Documento Markdown para alimentar directamente la base de conocimiento de Meta AI Studio / Inbox AI
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://magicaintencion.com';
const WHATSAPP_NUMBER = '+52 1 81 1031 6819';
const BRAND = 'Mágica';
const CURRENCY = 'USD';
const PRICE_STR = '89.00 USD';

const PRODUCTS = [
  {
    id: 'lapislazuli-esferas',
    name: 'Lapislázuli Imperial & Plata',
    mineral: 'Lapislázuli Natural Grado AAA+',
    image: 'assets/Catalogo/pulsera-lapislazuli-esferas.jpg',
    tag: 'Edición Signature',
    category: 'sabiduria',
    categoryName: 'Sabiduría & Clarividencia',
    price: 89.00,
    intention: 'Gema sagrada de sabiduría ancestral, intuición y verdad. Favorece la autoexpresión lúcida y armoniza el campo áurico superior.',
    chakra: 'Tercer Ojo (Ajna) & Garganta (Vishuddha)',
    element: 'Agua / Éter',
    zodiac: 'Sagitario, Libra, Piscis',
    metal: 'Herrajes facetados en Plata Ley 925'
  },
  {
    id: 'onix-centinela-azul',
    name: 'Ónix Nocturno & Centinela Azul',
    mineral: 'Ónix Negro Pulido & Lapislázuli',
    image: 'assets/Catalogo/pulsera-onix-centinela-azul.jpg',
    tag: 'Protección Mayor',
    category: 'proteccion',
    categoryName: 'Protección & Blindaje',
    price: 89.00,
    intention: 'Blindaje magnético contra vibraciones densas. Combina el anclaje inamovible del ónix con la clarividencia de la gema centinela.',
    chakra: 'Raíz (Muladhara) & Tercer Ojo',
    element: 'Tierra',
    zodiac: 'Capricornio, Escorpio, Tauro',
    metal: 'Núcleo elástico de silicona náutica reforzada'
  },
  {
    id: 'cuarzo-blanco-jade',
    name: 'Cuarzo Blanco & Jade Esculpido',
    mineral: 'Cuarzo Lechoso & Jadeíta Rústica',
    image: 'assets/Catalogo/pulsera-cuarzo-blanco-jade.jpg',
    tag: 'Alta Frecuencia',
    category: 'amor',
    categoryName: 'Amor & Alta Frecuencia',
    price: 89.00,
    intention: 'Unión alquímica entre la pureza mental del cuarzo maestro y la prosperidad infinita del jade noble. Calma y magnetismo sereno.',
    chakra: 'Corona (Sahasrara) & Corazón (Anahata)',
    element: 'Tierra / Aire',
    zodiac: 'Tauro, Virgo, Cáncer',
    metal: 'Separadores facetados en acero inoxidable quirúrgico'
  },
  {
    id: 'jade-pez-dorado',
    name: 'Jade Dorado & Pez de Fortuna',
    mineral: 'Jade Amarillo Crema Natural',
    image: 'assets/Catalogo/pulsera-jade-pez-dorado.jpg',
    tag: 'Amuleto de Abundancia',
    category: 'abundancia',
    categoryName: 'Abundancia & Fortuna',
    price: 89.00,
    intention: 'Inspirada en el flujo perpetuo de la riqueza y el bienestar. El tótem del pez simboliza superación de obstáculos y dicha financiera.',
    chakra: 'Plexo Solar (Manipura)',
    element: 'Fuego / Tierra',
    zodiac: 'Leo, Géminis, Aries',
    metal: 'Charm y fornituras en acero inoxidable quirúrgico'
  },
  {
    id: 'lapislazuli-cabujon-oval',
    name: 'Lapislázuli Cabujón Soberana',
    mineral: 'Cabujón Ovalado de Lapislázuli Puro',
    image: 'assets/Catalogo/pulsera-lapislazuli-cabujon-oval.png',
    tag: 'Pieza de Autor',
    category: 'sabiduria',
    categoryName: 'Sabiduría & Clarividencia',
    price: 89.00,
    intention: 'Una gema focal de gran gramaje que descansa sobre el pulso. Diseñada para líderes y creadores que requieren enfoque y magnetismo.',
    chakra: 'Tercer Ojo & Corona',
    element: 'Éter',
    zodiac: 'Acuario, Sagitario, Aries',
    metal: 'Montura satinada antialérgica de alta duración'
  },
  {
    id: 'turmalina-negra-pez',
    name: 'Turmalina Negra & Pez de Oro',
    mineral: 'Turmalina Negra Facetada & Mate',
    image: 'assets/Catalogo/770701607_18079976153421186_6230702332285530384_n.jpg',
    tag: 'Escudo Supremo',
    category: 'proteccion',
    categoryName: 'Protección & Blindaje',
    price: 89.00,
    intention: 'La turmalina negra es el transmutador por excelencia de radiación electromagnética y energías densas, ennoblecida con el pez de la suerte en acabado dorado pulido.',
    chakra: 'Raíz (Muladhara)',
    element: 'Tierra / Fuego',
    zodiac: 'Escorpio, Capricornio, Aries',
    metal: 'Pez tallado y rondelas en acero inoxidable quirúrgico'
  },
  {
    id: 'lapislazuli-placas',
    name: 'Lapislázuli Placas Geométricas',
    mineral: 'Placas Rectangulares de Lapislázuli',
    image: 'assets/Catalogo/772547497_18079974317421186_6213319053199122599_n.jpg',
    tag: 'Diseño Escultórico',
    category: 'sabiduria',
    categoryName: 'Sabiduría & Clarividencia',
    price: 89.00,
    intention: 'Corte arquitectónico de placas de lapislázuli con vetas de calcita y pirita dorada natural. Estética vanguardista de presencia aristocrática.',
    chakra: 'Tercer Ojo (Ajna)',
    element: 'Agua / Aire',
    zodiac: 'Sagitario, Libra, Acuario',
    metal: 'Esferas separadoras facetadas en acero inoxidable quirúrgico'
  },
  {
    id: 'cuarzo-rosa-nacar',
    name: 'Cuarzo Rosa & Flor de Nácar',
    mineral: 'Cuarzo Rosa Natural & Hematita',
    image: 'assets/Catalogo/772889456_18080358014421186_4636135969191559439_n.jpg',
    tag: 'Amor Incondicional',
    category: 'amor',
    categoryName: 'Amor & Alta Frecuencia',
    price: 89.00,
    intention: 'Frecuencia suave de apertura del chakra corazón, reconciliación interior y atracción de vínculos de luz. Corona floral esculpida en nácar blanco.',
    chakra: 'Corazón (Anahata)',
    element: 'Agua',
    zodiac: 'Tauro, Cáncer, Libra, Piscis',
    metal: 'Detalles facetados en hematita cromada y plata'
  },
  {
    id: 'jade-crema-imperial',
    name: 'Jade Crema Imperial & Pez Tótem',
    mineral: 'Esferas de Jade Crema Calibradas',
    image: 'assets/Catalogo/774025930_18080358908421186_1575086666310639023_n.jpg',
    tag: 'Prosperidad Continua',
    category: 'abundancia',
    categoryName: 'Abundancia & Fortuna',
    price: 89.00,
    intention: 'Gema tradicional de la nobleza oriental. Irradia serenidad emocional, estabilidad material y fluidez en negocios e inversiones.',
    chakra: 'Plexo Solar & Corazón',
    element: 'Tierra',
    zodiac: 'Tauro, Virgo, Géminis, Leo',
    metal: 'Cuentas cúbicas facetadas en acero inoxidable quirúrgico'
  },
  {
    id: 'stacking-amatista-oro',
    name: 'Stacking Alquímico Amatista & Oro',
    mineral: 'Amatista Noble & Cuarzos Pasteles',
    image: 'assets/Catalogo/774508968_18081052451421186_3480494639016074095_n.jpg',
    tag: 'Set de Colección',
    category: 'amor',
    categoryName: 'Amor & Alta Frecuencia',
    price: 89.00,
    intention: 'Combinación multidimensional de transmutación espiritual (amatista), pureza (cuarzo cristal) y manifestación con dije estrella y número sagrado.',
    chakra: 'Corona & Tercer Ojo',
    element: 'Aire / Éter',
    zodiac: 'Piscis, Acuario, Sagitario, Virgo',
    metal: 'Charms de orfebrería con esmaltado marfil y herrajes en acero inoxidable quirúrgico'
  }
];

// Helper para escapar valores CSV
function csvEscape(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

// Helper para escapar XML
function xmlEscape(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// 1. GENERAR CSV PARA META COMMERCE MANAGER
function generateCSV() {
  const headers = [
    'id',
    'title',
    'description',
    'availability',
    'condition',
    'price',
    'link',
    'image_link',
    'brand',
    'google_product_category',
    'fb_product_category',
    'material',
    'gender',
    'age_group',
    'shipping',
    'custom_label_0', // Categoría energética
    'custom_label_1', // Chakras
    'custom_label_2', // Metalistería
    'custom_label_3'  // Signos afines
  ];

  const rows = PRODUCTS.map(p => {
    const fullDesc = `${p.intention} Mineral: ${p.mineral}. Metalistería: ${p.metal}. Chakras: ${p.chakra}. Signos afines: ${p.zodiac}. Incluye consagración acústica a 432 Hz y envío prioritario asegurado sin costo adicional.`;
    const productLink = `${DOMAIN}/#catalogo`;
    const imageLink = `${DOMAIN}/${p.image}`;
    const shipping = `US:::0.00 USD`; // Envío prioritario asegurado gratis mundial

    return [
      csvEscape(p.id),
      csvEscape(p.name),
      csvEscape(fullDesc),
      csvEscape('in stock'),
      csvEscape('new'),
      csvEscape(PRICE_STR),
      csvEscape(productLink),
      csvEscape(imageLink),
      csvEscape(BRAND),
      csvEscape('Apparel & Accessories > Jewelry > Bracelets'),
      csvEscape('Apparel & Accessories > Jewelry > Bracelets'),
      csvEscape(`Gemas Naturales AAA+, ${p.metal}`),
      csvEscape('unisex'),
      csvEscape('adult'),
      csvEscape(shipping),
      csvEscape(p.categoryName),
      csvEscape(p.chakra),
      csvEscape(p.metal),
      csvEscape(p.zodiac)
    ].join(',');
  });

  return [headers.join(','), ...rows].join('\n');
}

// 2. GENERAR XML RSS 2.0 (META COMMERCE FEED)
function generateXML() {
  const items = PRODUCTS.map(p => {
    const fullDesc = `${p.intention} Mineral: ${p.mineral}. Metalistería: ${p.metal}. Chakras: ${p.chakra}. Signos afines: ${p.zodiac}. Incluye consagración acústica a 432 Hz y envío prioritario asegurado.`;
    const productLink = `${DOMAIN}/#catalogo`;
    const imageLink = `${DOMAIN}/${p.image}`;

    return `    <item>
      <g:id>${xmlEscape(p.id)}</g:id>
      <g:title>${xmlEscape(p.name)}</g:title>
      <g:description>${xmlEscape(fullDesc)}</g:description>
      <g:link>${xmlEscape(productLink)}</g:link>
      <g:image_link>${xmlEscape(imageLink)}</g:image_link>
      <g:brand>${xmlEscape(BRAND)}</g:brand>
      <g:condition>new</g:condition>
      <g:availability>in stock</g:availability>
      <g:price>${xmlEscape(PRICE_STR)}</g:price>
      <g:google_product_category>Apparel &amp; Accessories &gt; Jewelry &gt; Bracelets</g:google_product_category>
      <g:fb_product_category>Apparel &amp; Accessories &gt; Jewelry &gt; Bracelets</g:fb_product_category>
      <g:material>${xmlEscape(`Gemas Naturales AAA+, ${p.metal}`)}</g:material>
      <g:gender>unisex</g:gender>
      <g:age_group>adult</g:age_group>
      <g:shipping>
        <g:country>US</g:country>
        <g:service>Priority Courier</g:service>
        <g:price>0.00 USD</g:price>
      </g:shipping>
      <g:custom_label_0>${xmlEscape(p.categoryName)}</g:custom_label_0>
      <g:custom_label_1>${xmlEscape(p.chakra)}</g:custom_label_1>
      <g:custom_label_2>${xmlEscape(p.metal)}</g:custom_label_2>
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Mágica · Catálogo Oficial Meta Business</title>
    <link>${DOMAIN}</link>
    <description>Catálogo de alta joyería energética holística, cuarzos naturales y herrajes en acero inoxidable quirúrgico.</description>
${items}
  </channel>
</rss>`;
}

// 3. GENERAR BASE DE CONOCIMIENTO JSON PARA AGENTE DE META BUSINESS (AI / BOT)
function generateAgentJSON() {
  const agentKnowledge = {
    business: {
      name: BRAND,
      slogan: 'Alta Joyería Energética · Conexión · Intención · Equilibrio · Energía',
      website: DOMAIN,
      official_whatsapp: WHATSAPP_NUMBER,
      currency: CURRENCY,
      standard_price: 89.00,
      price_formatted: '$89.00 USD',
      shipping_policy: 'Envío Prioritario Courier Asegurado de cortesía sin cargo a todo el mundo.',
      warranty_and_materials: {
        gemstones: 'Minerales y cuarzos naturales de grado AAA+, extraídos éticamente sin tratamientos térmicos invasivos ni imitaciones sintéticas.',
        metals: 'Herrajes y fornituras en acero inoxidable de grado quirúrgico hipoalergénico y plata fina. Resistentes al agua dulce y sudor, no se oxidan ni despintan la piel.',
        elastic_core: 'Silicona náutica elástica de alta memoria y resistencia.',
        water_resistance: 'Resisten perfectamente agua dulce y humedad diaria. Se sugiere evitar cloro concentrado de piscinas o químicos corrosivos para proteger el brillo de la piedra natural.',
        consecration: 'Cada pulsera se sintoniza acústicamente a 432 Hz antes de su despacho.'
      },
      order_instructions: 'Para ordenar, el cliente puede seleccionar sus piezas y enviar su pedido con Folio Único al WhatsApp oficial +52 1 81 1031 6819 para atención personalizada por una Joyera Concierge.'
    },
    products_count: PRODUCTS.length,
    products: PRODUCTS.map(p => ({
      id: p.id,
      name: p.name,
      price_usd: p.price,
      price_formatted: `$${p.price.toFixed(2)} USD`,
      category: p.categoryName,
      tag: p.tag,
      mineral: p.mineral,
      metal: p.metal,
      chakra: p.chakra,
      element: p.element,
      zodiac_affinity: p.zodiac,
      intention: p.intention,
      url: `${DOMAIN}/#catalogo`,
      image_url: `${DOMAIN}/${p.image}`
    })),
    agent_guidelines: {
      tone: 'Elegante, cálido, místico, empático y de alta distinción (Haute Joaillerie holística).',
      price_rule: 'Todas las piezas de autor tienen una inversión fija de $89.00 USD cada una.',
      authenticity_rule: 'Siempre destacar que los minerales son naturales auténticos grado AAA+ y los herrajes son de acero inoxidable de grado quirúrgico hipoalergénico (no se despinta ni oxida).',
      call_to_action: `Derivar al comprador a coordinar su orden en el WhatsApp oficial ${WHATSAPP_NUMBER}.`
    }
  };

  return JSON.stringify(agentKnowledge, null, 2);
}

// 4. GENERAR DOCUMENTO MARKDOWN DE CONOCIMIENTO (META AI STUDIO / INBOX AI PROMPT)
function generateAgentMD() {
  let md = `# BASE DE CONOCIMIENTO PARA EL AGENTE DE META BUSINESS
**Firma:** Mágica · Alta Joyería Holística  
**Sitio Web:** ${DOMAIN}  
**WhatsApp Oficial Concierge:** ${WHATSAPP_NUMBER}  
**Inversión Fija por Pieza:** $89.00 USD  
**Envío:** Gratuito y asegurado (Priority Courier) a cualquier destino.

---

## 💎 ESPECIFICACIONES REALES DE MATERIALES
1. **Gemas Naturales Grado AAA+**: Minerales auténticos sin tratamientos químicos ni imitaciones de resina/vidrio.
2. **Herrajes de Orfebrería**: Acero inoxidable de grado quirúrgico hipoalergénico (antioxidante, no mancha la piel) y plata ley.
3. **Resistencia al Agua**: Toleran agua dulce y transpiración diaria gracias al acero quirúrgico y silicona náutica con memoria. Evitar cloro de albercas o químicos abrasivos para conservar el lustre mineral.
4. **Consagración**: Cada pieza es armonizada acústicamente a 432 Hz antes de su envío.

---

## ✦ CATÁLOGO COMPLETO DE PRODUCTOS (10 PIEZAS DISPONIBLES)

`;

  PRODUCTS.forEach((p, idx) => {
    md += `### ${idx + 1}. ${p.name}
- **ID / SKU:** \`${p.id}\`
- **Precio:** **$${p.price.toFixed(2)} USD**
- **Categoría:** ${p.categoryName} (${p.tag})
- **Mineral Principal:** ${p.mineral}
- **Herrajes / Metal:** ${p.metal}
- **Chakras:** ${p.chakra}
- **Elemento:** ${p.element}
- **Signos Afines:** ${p.zodiac}
- **Intención Holística:** ${p.intention}
- **Enlace:** ${DOMAIN}/#catalogo
- **Foto:** ${DOMAIN}/${p.image}

`;
  });

  md += `---

## 🤖 INSTRUCCIONES DE ATENCIÓN PARA EL AGENTE DE META
1. **Respuestas sobre Precios**: Indicar que todas las piezas tienen un valor único y exclusivo de **$89.00 USD** con envío prioritario asegurado de cortesía.
2. **Consultas sobre Materiales**: Confirmar que son piedras naturales genuinas y metales en acero inoxidable quirúrgico hipoalergénico de alta durabilidad.
3. **Cierre de Venta**: Invitar al usuario a adquirir directamente en el sitio web [magicaintencion.com](${DOMAIN}) o a través de WhatsApp oficial [${WHATSAPP_NUMBER}](https://wa.me/5218110316819) donde una Joyera Concierge le asignará su folio de orden personalizada.
`;

  return md;
}

// EJECUCIÓN PRINCIPAL
function buildAll() {
  const baseDir = __dirname;

  // 1. CSV
  const csvPath = path.join(baseDir, 'meta_catalog_feed.csv');
  fs.writeFileSync(csvPath, generateCSV(), 'utf8');
  console.log('✓ Creado:', csvPath);

  // 2. XML
  const xmlPath = path.join(baseDir, 'meta_catalog_feed.xml');
  fs.writeFileSync(xmlPath, generateXML(), 'utf8');
  console.log('✓ Creado:', xmlPath);

  // 3. JSON
  const jsonPath = path.join(baseDir, 'meta_business_agent_catalog.json');
  fs.writeFileSync(jsonPath, generateAgentJSON(), 'utf8');
  console.log('✓ Creado:', jsonPath);

  // 4. MD
  const mdPath = path.join(baseDir, 'meta_business_agent_knowledge.md');
  fs.writeFileSync(mdPath, generateAgentMD(), 'utf8');
  console.log('✓ Creado:', mdPath);

  console.log('\n✦ ¡Todos los archivos para Meta Business generados con éxito! ✦');
}

buildAll();
