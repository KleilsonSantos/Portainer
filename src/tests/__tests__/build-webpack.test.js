import path from 'path';
import fs from 'fs';

describe('🔧 Webpack Build', () => {
  const distPath = path.dirname('dist/index.html'); // 🏗️ Caminho da pasta de build

  test('📁 A pasta dist deve existir após o build', () => {
    // ✅ Verifica se a pasta de build foi criada
    expect(fs.existsSync(distPath)).toBe(true);
  });

  test('🧾 Os arquivos de saída devem ser gerados', () => {
    const files = fs.readdirSync(distPath);

    const hasMain = files.some((file) => /^main\..+\.js$/.test(file)); // 🧠 Arquivo principal do bundle
    const hasVendor = files.some((file) => /^vendor\..+\.js$/.test(file)); // 🧩 Arquivo de dependências
    const hasHtml = files.includes('index.html'); // 🏠 HTML principal

    expect(hasMain).toBe(true); // ✅ Deve ter main.[hash].js
    expect(hasVendor).toBe(true); // ✅ Deve ter vendor.[hash].js
    expect(hasHtml).toBe(true); // ✅ Deve ter index.html
  });
});
