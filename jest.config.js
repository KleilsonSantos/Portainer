// 🧪 Configuração do Jest com presets e opções customizadas
import { defaults } from 'jest-config';

export default {
  ...defaults, // ♻️ Herda as configurações padrão
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // 🔍 Arquivos de teste válidos (ex: .spec.ts)
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'], // 🚫 Ignora dependências e arquivos compilados
  coverageProvider: 'v8', // 🧪 Usa o mecanismo de cobertura do V8
  testTimeout: 30000, // ⏱️ Timeout de 30s para cada teste
  verbose: true, // 📣 Mostra mais detalhes na execução dos testes
  roots: ['<rootDir>/src'], // 🌱 Raiz dos testes
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'], // 📦 Extensões suportadas
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.js'], // ⚙️ Arquivo de configuração do Jest
  testEnvironment: 'node', // 🌐 Ambiente simulado de navegador
  clearMocks: true, // 🧹 Limpa os mocks antes de cada teste

  // 📊 Cobertura de testes
  collectCoverage: true, // ✅ Ativa coleta de cobertura
  collectCoverageFrom: ['src/**/*.{js,ts,tsx}'], // 🎯 Coleta cobertura dos arquivos fonte
  coverageDirectory: 'coverage', // 📁 Pasta onde será salvo
  coverageReporters: ['json', 'text', 'lcov', 'clover'], // 🧾 Formatos de relatório (console + HTML)

  // 🔄 Transpila arquivos JS/TS com Babel
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { presets: ['@babel/preset-env'] }],
  },

  // 🧾 Relatórios bonitões de testes
  reporters: [
    'default', // ✅ Reporter padrão do Jest
    [
      'jest-html-reporter', // 📄 Gera relatório HTML com erros e logs
      {
        pageTitle: '📋 Relatório de Testes - Jest',
        outputDirectory: 'coverage/jest-report',
        outputName: 'jest-report.html',
        //classNameTemplate: '{classname}', // 🧬 Nome da classe
        //titleTemplate: '{title}', // 🏷️ Nome do teste
        ancestorSeparator: ' › ', // 🧬 Separador hierárquico
        includeFailureMsg: true, // ❌ Inclui mensagens de erro
        includeConsoleLog: true, // 🖨️ Inclui logs do console
        expand: true, // 📦 Expande resultados
        coverage: true, // 📊 Inclui cobertura
      },
    ],
    [
      'jest-sonar', // 🌊 Integrado ao SonarQube
      {
        outputDirectory: 'coverage/sonar-report',
        outputName: 'sonar-report.xml',
        suiteName: 'unit-tests', // 🧪 Nome da suíte
        classNameTemplate: '{classname}', // 🧬 Nome da classe
        titleTemplate: '{title}', // 🏷️ Nome do teste
        ancestorSeparator: ' › ', // 🧬 Separador hierárquico
        includeFailureMsg: true, // ❌ Inclui mensagens de erro
        includeConsoleLog: true, // 🖨️ Inclui logs do console
        expand: true, // 📦 Expande resultados
        coverage: true, // 📊 Inclui cobertura
      },
    ],
    [
      'jest-junit', // 🧪 Exporta resultados em formato JUnit (CI/CD)
      {
        outputDirectory: 'coverage/junit-report',
        outputName: 'junit-report.xml',
        suiteName: 'unit-tests', // 🧪 Nome da suíte
        classNameTemplate: '{classname}', // 🧬 Nome da classe
        titleTemplate: '{title}', // 🏷️ Nome do teste
        ancestorSeparator: ' › ', // 🧬 Separador hierárquico
        expand: true, // 📦 Expande resultados
        coverage: true, // 📊 Inclui cobertura
      },
    ],
    'jest-silent-reporter',
  ],
};
