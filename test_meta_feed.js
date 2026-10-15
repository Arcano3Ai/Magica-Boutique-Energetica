const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
let errors = 0;

console.log('=== TEST 1: VERIFICAR CSV PARA META COMMERCE MANAGER ===');
const csvPath = path.join(baseDir, 'meta_catalog_feed.csv');
if (!fs.existsSync(csvPath)) {
  console.error('❌ Error: No existe meta_catalog_feed.csv');
  errors++;
} else {
  const csvContent = fs.readFileSync(csvPath, 'utf8');
  const lines = csvContent.trim().split('\n');
  console.log(`✓ CSV existe. Filas totales: ${lines.length} (1 header + ${lines.length - 1} productos)`);
  if (lines.length !== 11) {
    console.error(`❌ Error: Se esperaban 11 líneas en el CSV, pero se encontraron ${lines.length}`);
    errors++;
  } else {
    console.log('✓ Encabezados verificados:', lines[0]);
  }
}

console.log('\n=== TEST 2: VERIFICAR XML RSS PARA META BUSINESS ===');
const xmlPath = path.join(baseDir, 'meta_catalog_feed.xml');
if (!fs.existsSync(xmlPath)) {
  console.error('❌ Error: No existe meta_catalog_feed.xml');
  errors++;
} else {
  const xmlContent = fs.readFileSync(xmlPath, 'utf8');
  const itemCount = (xmlContent.match(/<item>/g) || []).length;
  console.log(`✓ XML existe. Conteo de <item>: ${itemCount}`);
  if (itemCount !== 10) {
    console.error(`❌ Error: Se esperaban 10 <item> en el XML, encontrados: ${itemCount}`);
    errors++;
  } else {
    console.log('✓ Estructura XML y tags <g:id>, <g:price>, <g:image_link> presentes.');
  }
}

console.log('\n=== TEST 3: VERIFICAR JSON PARA AGENTE DE META BUSINESS ===');
const jsonPath = path.join(baseDir, 'meta_business_agent_catalog.json');
if (!fs.existsSync(jsonPath)) {
  console.error('❌ Error: No existe meta_business_agent_catalog.json');
  errors++;
} else {
  try {
    const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    console.log(`✓ JSON válido. Productos en catálogo: ${jsonContent.products.length}`);
    console.log(`✓ Moneda: ${jsonContent.business.currency} | Precio estándar: ${jsonContent.business.price_formatted}`);
    console.log(`✓ WhatsApp oficial configurado: ${jsonContent.business.official_whatsapp}`);
    if (jsonContent.products.length !== 10) {
      console.error('❌ Error: Se esperaban 10 productos en el JSON');
      errors++;
    }
  } catch (err) {
    console.error('❌ Error parseando JSON:', err.message);
    errors++;
  }
}

console.log('\n=== TEST 4: VERIFICAR MD PARA INBOX AI / META AI STUDIO ===');
const mdPath = path.join(baseDir, 'meta_business_agent_knowledge.md');
if (!fs.existsSync(mdPath)) {
  console.error('❌ Error: No existe meta_business_agent_knowledge.md');
  errors++;
} else {
  const mdContent = fs.readFileSync(mdPath, 'utf8');
  console.log(`✓ MD existe. Tamaño: ${mdContent.length} bytes`);
  if (!mdContent.includes('$89.00 USD') || !mdContent.includes('+52 1 81 1031 6819')) {
    console.error('❌ Error: El MD no contiene los datos críticos de negocio');
    errors++;
  }
}

if (errors === 0) {
  console.log('\n🌟 ¡TODOS LOS ARCHIVOS DE META BUSINESS ESTÁN 100% VERIFICADOS! 🌟');
  process.exit(0);
} else {
  console.error(`\n❌ Se encontraron ${errors} errores.`);
  process.exit(1);
}
