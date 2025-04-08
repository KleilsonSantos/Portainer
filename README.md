# 🚀 Portainer com Docker Compose e Integração com Webpack, Esli Jest e SonarQube

## [Status: 🚧 Em Construção] - 🏗️ Melhorias em andamento!

![🐳 Docker](https://img.shields.io/badge/Docker-Compose-blue?logo=docker&style=flat-square)
![📦 Portainer](https://img.shields.io/badge/Portainer-Management-orange?style=flat-square)
![🔧 Webpack](https://img.shields.io/badge/Webpack-Bundler-blue?logo=webpack&style=flat-square)
![🧪 Jest](https://img.shields.io/badge/Jest-Testing-red?logo=jest&style=flat-square)
![🔍 SonarQube](https://img.shields.io/badge/SonarQube-Analysis-brightgreen?logo=sonarqube&style=flat-square)
![📜 License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

O **Portainer** é uma poderosa ferramenta de gerenciamento de containers que simplifica a administração de ambientes Docker e Kubernetes. Este repositório fornece um exemplo prático de como configurar o Portainer usando **Docker Compose**, além de integrar ferramentas modernas como **Webpack**, **Jest** e **SonarQube** para desenvolvimento e análise de qualidade de código.

---

## 📖 O que é o Portainer?

O **Portainer** é uma interface gráfica para gerenciar containers, imagens, volumes e redes Docker. Ele é ideal para desenvolvedores e administradores que desejam uma solução simples e eficiente para gerenciar seus ambientes de containerização.

---

## 🛠️ Configuração do Ambiente

### Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- 🐳 **Docker** (versão 20.10 ou superior)
- 🐙 **Docker Compose** (versão 2.0 ou superior)
- 📦 **Node.js** (versão 18.x ou superior)
- 🧪 **SonarQube** (opcional, para análise de qualidade de código)

---

### ⚙️ Passos para Configuração

1. **Clone este repositório**:

   ```bash
   git clone https://github.com/KleilsonSantos/Portainer
   cd Portainer
   ```

2. **Instale as dependências do projeto**:

   ```bash
   npm install
   ```

3. **Suba o ambiente com o Docker Compose**:

   ```bash
   docker-compose up -d
   ```

4. **Acesse o Portainer no navegador**:
   ```
   http://localhost:9000
   ```

---

## 🧰 Scripts Disponíveis

### 🔧 Desenvolvimento

- **Iniciar o servidor de desenvolvimento com Webpack**:

  ```bash
  npm run start
  ```

- **Compilar o projeto para produção**:
  ```bash
  npm run build
  ```

### 🧪 Testes

- **Executar testes unitários com Jest**:

  ```bash
  npm test
  ```

- **Gerar relatório de cobertura de testes**:

  ```bash
  npm run test:coverage
  ```

- **Executar testes com integração ao SonarQube**:
  ```bash
  npm run test:coverage:sonar
  ```

### 🧹 Lint e Formatação

- **Executar ESLint para verificar problemas no código**:

  ```bash
  npm run lint
  ```

- **Corrigir problemas de lint automaticamente**:

  ```bash
  npm run lint --fix
  ```

- **Formatar o código com Prettier**:
  ```bash
  npm run format
  ```

### 🔍 Análise de Qualidade com SonarQube

- **Executar análise de qualidade com SonarQube**:
  ```bash
  npm run sonar:scanner
  ```

---

## 📂 Estrutura do Projeto

```plaintext
/home/operador/Development/Devops/Docker/portainer/
├── .github/                # ⚙️ Configurações de workflows do GitHub Actions
├── .husky/                 # 🛡️ Hooks de pré-commit e pré-push
├── .vscode/                # 🖥️ Configurações do Visual Studio Code
├── coverage/               # 🧪 Relatórios de cobertura de testes
├── src/                    # 📂 Código-fonte do projeto
│   ├── index.js            # 🏁 Arquivo principal
│   ├── vendor.js           # 📦 Arquivo de dependências externas
│   ├── index.html          # 🌐 Template HTML
│   ├── setup-jest.js       # ⚙️ Configuração do Jest
│   └── tests/              # 🧪 Testes unitários
├── docker-compose.yml      # 🐳 Configuração do Docker Compose
├── jest.config.js          # 🧪 Configuração do Jest
├── webpack.config.js       # 🔧 Configuração do Webpack
├── package.json            # 📦 Dependências e scripts do projeto
└── README.md               # 📖 Documentação do projeto
```

---

## 🌟 Recursos do Projeto

### 🐳 Docker Compose

- Configuração para rodar o **Portainer**, **SonarQube** e **PostgreSQL**.
- Volumes persistentes para dados e logs.
- Rede customizada para comunicação entre serviços.

### 📦 Webpack

- Configuração para build de produção e desenvolvimento.
- Suporte a múltiplos pontos de entrada (`index.js` e `vendor.js`).
- Plugins para geração de HTML e limpeza de diretórios.

### 🧪 Jest

- Testes unitários com cobertura de código.
- Relatórios em formatos HTML, JSON e LCOV.
- Integração com SonarQube para análise de qualidade.

### 🔍 SonarQube

- Análise de qualidade de código com suporte a JavaScript e TypeScript.
- Relatórios detalhados de cobertura e vulnerabilidades.

---

## 📜 Licença

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

---

## 📞 Suporte

Se você tiver dúvidas ou problemas, entre em contato:

- 📧 **Email**: kleilson@icloud.com
- 🐛 **GitHub Issues**: [Abrir uma issue](https://github.com/KleilsonSantos/Portainer/issues)

---

💡 **Dica:** Não se esqueça de configurar suas credenciais de administrador ao acessar o Portainer pela primeira vez!

🧱 **Nota:** Este projeto está sendo expandido com melhorias contínuas. Em breve: suporte a autenticação LDAP, integração com Docker Swarm e muito mais!
