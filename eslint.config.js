// 📦 Importação dos plugins e configurações base
import js from '@eslint/js'; // 📘 Regras padrão do JavaScript
import react from 'eslint-plugin-react'; // ⚛️ Regras específicas para React
import prettier from 'eslint-plugin-prettier'; // 🎨 Integração com Prettier para formatação

export default [
  {
    ignores: [
      // 🔧 Diretórios de build
      'dist/**', // 📁 Ignora arquivos de build
      'build/**', // 🏗️ Ignora diretórios de compilação

      // 📦 Dependências
      'node_modules/**', // 📦 Ignora dependências externas

      // 🧪 Testes e relatórios
      'src/tests/**', // 🧪 Ignora testes
      'src/__tests__/**', // 🧪 Estrutura comum para testes
      'src/__mocks__/**', // 🧸 Dados mockados
      'src/__fixtures__/**', // 🧩 Fixtures de teste
      'src/__snapshots__/**', // 📸 Snapshots de testes
      'coverage/**', // 📊 Cobertura de testes

      // ⚙️ Arquivos temporários e de configuração
      '.eslintcache', // 📝 Cache do ESLint
      '*.log', // 🗂️ Logs gerados automaticamente
      '*.tmp', // 🧩 Arquivos temporários

      // 🌐 Arquivos públicos e estáticos
      'public/**', // 🌍 Diretório público
      'static/**', // 📂 Diretório estático (se aplicável)

      // 💻 Ferramentas de desenvolvimento
      '.next/**', // ⚡ Diretório de build do Next.js
      '.cache/**', // ⚙️ Diretório de cache do Webpack ou outras ferramentas

      // 📝 Arquivos específicos do projeto
      'eslint.config.js', // 📝 Arquivo atual de configuração ESLint
      'src/setup-jest.js', // 🧪 Configuração do Jest
    ],
  },
  js.configs.recommended, // ✅ Aplica regras recomendadas do JS

  {
    files: ['**/*.{js,jsx,ts,tsx}'], // 📂 Aplica às extensões JS/TS/React

    languageOptions: {
      ecmaVersion: 2021, // 📅 Versão moderna do ECMAScript
      sourceType: 'module', // 📦 Usa módulos
      globals: {
        console: true, // 🖨️ Permite uso de console
        process: true, // 🔄 Permite uso de process.env
        module: true, // 📦 Suporte a módulos comuns
        require: true, // 📥 Permite uso de require
      },
    },

    plugins: {
      react, // ⚛️ Ativa regras do React
      prettier, // 🎨 Ativa verificação de estilo do Prettier
    },

    rules: {
      'no-undefined': 'error', // 🔐 Evita variáveis não definidas
      eqeqeq: 'error', // 🔐 Usa igualdade estrita ===
      curly: 'error', // 🔄 Sempre usa chaves em blocos
      quotes: ['error', 'single'], // 📝 Usa aspas simples
      semi: ['error', 'always'], // 🔚 Sempre usa ponto e vírgula
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 🚫⚠️ Evita logs em produção
      'prettier/prettier': [
        // 🎯 Regras de formatação Prettier
        'error',
        {
          endOfLine: 'auto', // ↩️ Detecção automática de EOL
          semi: true, // ✅ Ponto e vírgula
          singleQuote: true, // 📝 Aspas simples
        },
      ],
    },

    settings: {
      react: {
        version: 'detect', // 🔍 Detecta versão do React automaticamente
      },
    },
  },
];
