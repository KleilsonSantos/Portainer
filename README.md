# 🚀 Portainer com Docker Compose

## [Status: 🚧 Em Construção] - 🏗️ melhorias em andamento!

![Docker](https://img.shields.io/badge/Docker-Compose-blue?logo=docker&style=flat-square)
![Portainer](https://img.shields.io/badge/Portainer-Management-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Portainer é uma poderosa ferramenta de gerenciamento de containers que simplifica a administração de ambientes Docker e Kubernetes. Este repositório fornece um exemplo prático de como configurar o Portainer usando **Docker Compose**.

---

## 📖 O que é o Portainer?

O **Portainer** é uma interface gráfica para gerenciar containers, imagens, volumes e redes Docker. Ele é ideal para desenvolvedores e administradores que desejam uma solução simples e eficiente para gerenciar seus ambientes de containerização.

## 🛠️ Configuração do Ambiente

### Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- 🐳 **Docker** (versão 20.10 ou superior)
- 🐙 **Docker Compose** (versão 2.0 ou superior)

### Passos para Configuração

1. Clone este repositório:

   ```bash
   git clone https://github.com/KleilsonSantos/Portainer
   cd seu-repositorio
   ```

2. Suba o ambiente com o Docker Compose:

   ```bash
   docker-compose up -d
   ```

3. Acesse o Portainer no navegador:
   ```
   http://localhost:9000
   ```

## 📺 Referências em Português — Portainer no Ubuntu

Se você quer aprender mais sobre o uso do **Portainer com Docker no Ubuntu**, aqui estão vídeos e artigos em **português brasileiro** que mostram tudo passo a passo. 💡

---

### 🎥 Vídeos no YouTube

#### 🔹 [Instalando o Portainer no Ubuntu com Docker — Dicas de Linux](https://www.youtube.com/watch?v=V5T1qNXE5Z8)

- 📺 **Canal:** Dicas de Linux
- 📌 Instalação simples e direta do Portainer no Ubuntu, usando Docker e Docker Compose.

#### 🔹 [Como instalar o Portainer no Ubuntu — Diego Oliveira](https://www.youtube.com/watch?v=sMNjmjx9Qes)

- 📺 **Canal:** Diego Oliveira
- 🧠 Explicação clara e objetiva, ideal para quem está começando com Docker e quer usar uma interface gráfica para gerenciar seus containers.

#### 🔹 [Docker Swarm + Portainer: gerenciamento via interface web — Bóson Treinamentos](https://www.youtube.com/watch?v=sf6aOaycK7E)

- 📺 **Canal:** Bóson Treinamentos
- ⚙️ Mostra o uso do Portainer com Docker Swarm, útil se você já está explorando orquestração de containers no Ubuntu.

---

### 📚 Artigos e Tutoriais

#### 🔹 [Como instalar o Portainer no Ubuntu 22.04 (SempreUpdate)](https://sempreupdate.com.br/como-instalar-o-portainer-no-ubuntu-22-04-lts/)

- 📘 Guia completo com todos os comandos necessários e explicações detalhadas sobre o funcionamento do Portainer no Ubuntu Server.

#### 🔹 [Documentação Docker (com tradução automática)](https://docs.docker.com/samples/portainer/)

- 🔗 Exemplo oficial de configuração do Portainer usando Docker.
- 💡 _Dica:_ Use o navegador com tradução automática (Chrome ou Edge) para facilitar a leitura em português.

---

### 💎 Extras

- 📦 [Portainer com Kubernetes no Ubuntu (YouTube)](https://www.youtube.com/watch?v=ZbPZ4CM8-gc)  
  Guia para quem quer usar o Portainer para gerenciar clusters Kubernetes.
- 📄 [Documentação oficial do Portainer](https://docs.portainer.io)  
   _(Use a tradução automática do navegador se preferir em português.)_
  > **Dica:** Se você está usando o Ubuntu Server, certifique-se de seguir as instruções para configurar o Docker e o Docker Compose.

## ⚙️ Configuração do `docker-compose.yml`

O arquivo `docker-compose.yml` define os serviços, volumes e redes necessários para executar o Portainer. Abaixo está uma explicação detalhada de cada seção:

### Serviços

#### `portainer`

- **Imagem**: `portainer/portainer-ce:latest` (versão mais recente do Portainer Community Edition).
- **Nome do container**: `portainer`.
- **Reinício automático**: Configurado para reiniciar sempre (`restart: always`).
- **Portas expostas**:
  - `9000:9000`: Interface web do Portainer.
  - `8000:8000`: API para agentes do Portainer.
- **Volumes montados**:
  - `/var/run/docker.sock:/var/run/docker.sock`: Permite que o Portainer gerencie o Docker diretamente.
  - `portainer_data:/data`: Armazena os dados persistentes do Portainer.
- **Variáveis de ambiente**:
  - `TZ=America/Sao_Paulo`: Define o fuso horário para o container.
- **Opções de segurança**:
  - `no-new-privileges:true`: Garante que o container não possa obter privilégios adicionais.
- **Rede**:
  - Conectado à rede nomeada `portainer_net`.

### Volumes

#### `portainer_data`

- **Nome**: `portainer_data`.
- **Descrição**: Volume persistente para armazenar os dados do Portainer, como configurações e informações de containers.

### Redes

#### `portainer_net`

- **Nome**: `portainer_network`.
- **Driver**: `bridge` (rede padrão do Docker para comunicação entre containers).

---

## 📂 Estrutura do Projeto

```plaintext
/home/operador/Development/Devops/Docker/docker-compose/portainer/
├── docker-compose.yml  # Configuração do Docker Compose
├── README.md           # Documentação do projeto
└── outros arquivos...  # Outros arquivos necessários
```

---

## 🌟 Recursos do Portainer

- Interface amigável para gerenciar containers.
- Suporte a múltiplos ambientes (Docker, Kubernetes, etc.).
- Gerenciamento de volumes, redes e imagens.
- Monitoramento em tempo real.

---

## 🧑‍💻 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

## 📜 Licença

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

---

## 📞 Suporte

Se você tiver dúvidas ou problemas, entre em contato:

- Email: kleilson@icloud.com
- GitHub Issues: [Abrir uma issue](https://github.com/KleilsonSantos/Portainer/issues)

---

💡 **Dica:** Não se esqueça de configurar suas credenciais de administrador ao acessar o Portainer pela primeira vez!

🧱 Nota: Este projeto está sendo expandido com melhorias contínuas. Em breve: suporte a autenticação LDAP, integração com Docker Swarm e muito mais!
