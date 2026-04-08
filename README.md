# 📊 Testes de Performance com k6 e JavaScript

## 📌 Introdução
Este repositório contém scripts de testes de performance desenvolvidos em JavaScript utilizando o k6. O objetivo é avaliar o comportamento, estabilidade e tempo de resposta de APIs e serviços sob diferentes níveis de carga.

Os testes permitem simular múltiplos usuários virtuais, identificar gargalos e apoiar decisões de escalabilidade.

> ⚠️ **Importante:** É necessário informar a variável de ambiente `BASE_URL` ao executar os testes.

---

## 🚀 Tecnologias Utilizadas
- **JavaScript (ES6+)**
- **k6** – ferramenta de testes de carga e performance
- Node.js (opcional, para utilitários e organização do projeto)

---

## 📂 Estrutura do Repositório

```
📦 performance-tests
 ┣ 📂 config
 ┃ ┣ 📜 config.local.json
 ┣ 📂 fixtures
 ┃ ┣ 📜 postLogin.js
 ┃ ┣ 📜 stress.js
 ┣ 📂 helpers
 ┃ ┣ 📜 autenticacao.js
 ┣ 📂 tests
 ┃ ┣ 📜 login.test.js
 ┃ ┣ 📜 transferencias.test.js
 ┣ 📂 utils
 ┃ ┣ 📜 variaveis.js
 ┗ 📜 README.md
```

---

## 🧩 Objetivo de Cada Grupo de Arquivos

### 📁 `tests/`
Contém os scripts principais de teste, com as requisições e validações.

### 📁 `config/`
Contém o arquivo de configuração das variáveis reutilizáveis

### 📁 `utils/`
Funções auxiliares reutilizáveis, como:
- variáveis de ambiente

### 📁 `helpers/`
Funções reutilizáveis utilizados nos testes:
- obterToken

### 📁 `fixtures/`
Dados utilizados em vários testes

---

## ⚙️ Modo de Instalação

### 1. Instalar o k6

Via Mac (brew):
```bash
brew install k6
```

Via Windows (chocolatey):
```bash
choco install k6
```

Via Linux:
```bash
sudo apt install k6
```

Ou via download direto no site oficial.

---

## ▶️ Modo de Execução

### 🔹 Execução básica

```bash
BASE_URL=https://api.exemplo.com k6 run tests/example.test.js
```

---

### 🔹 Execução com cenário específico

```bash
BASE_URL=https://api.exemplo.com k6 run scenarios/load.js
```

---

### 📊 Acompanhamento em tempo real

O k6 já exibe métricas em tempo real no terminal durante a execução:

- Tempo de resposta
- Taxa de erro
- Requisições por segundo (RPS)
- Usuários virtuais ativos

---

### 📈 Exportação de Relatórios

#### 🔸 Exportar resultado em JSON

```bash
BASE_URL=https://api.exemplo.com k6 run tests/example.test.js --out json=report.json
```

---

#### 🔸 Exportar para CSV

```bash
BASE_URL=https://api.exemplo.com k6 run tests/example.test.js --out csv=report.csv
```

---

#### 🔸 Integração com ferramentas externas (ex: InfluxDB)

```bash
BASE_URL=https://api.exemplo.com K6_OUT=influxdb=http://localhost:8086/k6 k6 run tests/example.test.js
```

---

### 🔸 Variáveis de ambiente do k6

Além da `BASE_URL`, você pode utilizar variáveis internas do k6:

```bash
K6_VUS=10 \
K6_DURATION=30s \
BASE_URL=https://api.exemplo.com \
k6 run tests/example.test.js
```

---

## ✅ Boas Práticas

- Utilize cenários diferentes para simular comportamentos reais
- Separe dados de teste dos scripts
- Evite hardcode de URLs (use `BASE_URL`)
- Versione seus testes junto com o código da aplicação
- Analise sempre percentis (p95, p99) e não apenas médias

---

## 📌 Observações Finais

Este projeto foi estruturado para facilitar a escalabilidade dos testes de performance e permitir reutilização de componentes.

Contribuições são bem-vindas 🚀
