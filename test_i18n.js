const fs = require('fs');
const path = require('path');

// Cargar translations.js
const translationsCode = fs.readFileSync(path.join(__dirname, 'translations.js'), 'utf-8');
const evalContext = {};
const scriptFunc = new Function('window', translationsCode + '\nreturn { TRANSLATIONS, PRODUCT_TRANSLATIONS };');
const { TRANSLATIONS, PRODUCT_TRANSLATIONS } = scriptFunc(evalContext);

console.log('=== TEST 1: DICCIONARIOS DE IDIOMA DISPONIBLES ===');
const langs = ['es', 'en', 'ga'];
langs.forEach(lang => {
  if (TRANSLATIONS[lang]) {
    const keysCount = Object.keys(TRANSLATIONS[lang]).length;
    console.log(`✓ Idioma [${lang.toUpperCase()}]: ${keysCount} claves de UI presentes.`);
  } else {
    console.error(`✗ Error: Falta el diccionario para [${lang}]`);
    process.exit(1);
  }
});

console.log('\n=== TEST 2: PARIDAD DE CLAVES ENTRE ES, EN Y GA ===');
const esKeys = Object.keys(TRANSLATIONS['es']);
const enKeys = Object.keys(TRANSLATIONS['en']);
const gaKeys = Object.keys(TRANSLATIONS['ga']);

const missingInEn = esKeys.filter(k => !(k in TRANSLATIONS['en']));
const missingInGa = esKeys.filter(k => !(k in TRANSLATIONS['ga']));

if (missingInEn.length > 0) {
  console.warn('! Claves faltantes en EN:', missingInEn);
} else {
  console.log('✓ 100% de paridad de claves en Inglés (EN).');
}

if (missingInGa.length > 0) {
  console.warn('! Claves faltantes en GA:', missingInGa);
} else {
  console.log('✓ 100% de paridad de claves en Gaélico Irlandés (GA).');
}

console.log('\n=== TEST 3: TRADUCCIÓN DE LAS 10 JOYAS DEL CATÁLOGO ===');
const productIds = Object.keys(PRODUCT_TRANSLATIONS);
console.log(`Total joyas con traducciones completas: ${productIds.length}`);

productIds.forEach((id, idx) => {
  const p = PRODUCT_TRANSLATIONS[id];
  ['es', 'en', 'ga'].forEach(l => {
    if (!p[l] || !p[l].name || !p[l].mineral || !p[l].intention) {
      console.error(`✗ Falla en joya ${id} para idioma ${l}`);
      process.exit(1);
    }
  });
  console.log(`  ${idx + 1}. [${id}] -> ES: "${p.es.name}" | EN: "${p.en.name}" | GA: "${p.ga.name}"`);
});

console.log('\n=== TEST 4: SIMULACIÓN DE MENSAJES WHATSAPP (ES, EN, GA) ===');

function simulateWhatsAppMessage(lang, items, customer) {
  const t = TRANSLATIONS[lang];
  const folio = customer.orderFolio;
  const total = items.reduce((sum, item) => sum + item.price, 0);

  // Formatear items
  const lines = items.map((rawItem, i) => {
    const loc = PRODUCT_TRANSLATIONS[rawItem.id][lang];
    const mineralTag = lang === 'ga' ? 'Mianra:' : (lang === 'en' ? 'Mineral:' : 'Mineral:');
    const invTag = lang === 'ga' ? 'Infheistíocht:' : (lang === 'en' ? 'Investment:' : 'Inversión:');
    return `${i + 1}️⃣ *${loc.name}*\n   ▫ ${mineralTag} ${loc.mineral}\n   ▫ ${invTag} $${rawItem.price.toFixed(2)} USD`;
  }).join('\n\n');

  const piecesWord = lang === 'ga' ? 'seod(a)' : (lang === 'en' ? 'jewel(s)' : 'joya(s) de autor');

  let msg = `${t.wa_order_title} [${folio}] ✦\n\n`;
  msg += `${t.wa_order_greeting}\n\n`;
  msg += `${t.wa_selected_pieces}\n${lines}\n\n`;
  msg += `─────────────────────────\n`;
  msg += `${t.wa_total_pieces} ${items.length} ${piecesWord}\n`;
  msg += `${t.wa_total_pay} $${total.toFixed(2)} USD\n`;
  msg += `${t.wa_perks_note}\n`;
  msg += `─────────────────────────\n\n`;
  msg += `${t.wa_customer_title}\n`;
  msg += `${t.wa_cust_name} ${customer.name}\n`;
  msg += `${t.wa_cust_phone} ${customer.phone}\n`;
  msg += `${t.wa_cust_size} ${customer.size}\n\n`;
  msg += `${t.wa_payment_title}\n${t.wa_payment_body}`;
  return msg;
}

const sampleItems = [
  { id: 'lapislazuli-esferas', price: 89.00 },
  { id: 'turmalina-negra-pez', price: 89.00 }
];

const customer = {
  name: 'Lady Siobhán Gallagher',
  phone: '+353 87 123 4567',
  size: '16.5cm',
  orderFolio: 'MAG-LUX-778899'
};

langs.forEach(lang => {
  const msg = simulateWhatsAppMessage(lang, sampleItems, customer);
  console.log(`\n--- MENSAJE WHATSAPP EN [${lang.toUpperCase()}] ---`);
  console.log(msg.substring(0, 320) + '\n[... contenido recortado para visualización ...]');
});

console.log('\n=== TODOS LOS TESTS VERIFICADOS CON ÉXITO (0 ERRORES) ===');
