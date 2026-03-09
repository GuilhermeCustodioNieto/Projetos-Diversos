# Projetos Diversos

Este repositório reúne diversos projetos desenvolvidos ao longo dos meus estudos em programação.

O objetivo é centralizar experimentos, exercícios práticos e aplicações completas criadas durante meu processo de aprendizado em diferentes tecnologias e stacks de desenvolvimento.

Os projetos presentes aqui abordam conceitos de **desenvolvimento backend, frontend, banco de dados e arquitetura de aplicações**, permitindo explorar diferentes ferramentas e práticas utilizadas no mercado.

---

## Objetivo do Repositório

Este repositório foi criado com os seguintes objetivos:

* Consolidar conhecimentos adquiridos durante estudos em programação
* Desenvolver projetos práticos utilizando diferentes tecnologias
* Explorar arquiteturas e frameworks variados
* Praticar boas práticas de organização de código
* Construir um portfólio técnico

Cada projeto presente neste repositório pode explorar uma stack diferente ou focar em um conceito específico de desenvolvimento.

---

## Estrutura do Repositório

A organização atual das pastas segue a estrutura abaixo:

```
Projetos-Diversos/
│
├── bookstore/                    # Monorepo NestJS com múltiplas aplicações
├── Clinica/                      # Projeto de sistema clínico
├── estudo-csharp/                # Estudos e experimentação C# / .NET
├── PicPay-Simplificado/          # Simulador de pagamentos em Java
├── Pomodoro-Timer/               # Aplicativo Pomodoro com React
├── roleta-sec/                   # Projeto experimental com HTML/CSS/JS
├── to-do-list/                   # Aplicação de tarefas (API + Frontend)
│
├── LICENSE
└── README.md
```

---

## Projetos

### 1. **bookstore**

Monoreposítório contendo uma arquitetura de microserviços com NestJS.

**Stack:**
- **Backend**: NestJS (TypeScript)
- **Arquitetura**: Monorepo com múltiplas aplicações

**Aplicações internas:**
- `books` - Serviço de gerenciamento de livros
- `bookstore-api-gateway` - API Gateway para orquestração de serviços
- `users` - Serviço de gerenciamento de usuários

**Conceitos explorados:**
- Arquitetura de microserviços
- NestJS e TypeScript
- Comunicação inter-serviços
- CRUD operations
- Testes (unitários e e2e)

---

### 2. **Clinica**

Projeto voltado para simulação ou desenvolvimento de um sistema de gerenciamento clínico.

**Arquivos:**
- `Use Case.asta` - Diagrama de casos de uso

**Possíveis funcionalidades:**
- Cadastro de pacientes
- Gerenciamento de consultas
- Estruturação de entidades e banco de dados
- APIs para manipulação de dados

---

### 3. **estudo-csharp**

Repositório de experimentação e aprendizado da linguagem **C#** e plataforma **.NET**.

**Subprojetos:**
- `ado/` - Estudos com ADO.NET
- `asp.net/` - Projetos com ASP.NET Core
  - `GameStore.Api` - API para gerenciamento de jogos
  - `ToDo-Dio` - Aplicação de tarefas
  - `CreditApi` - API de crédito
- `Hosting/` - Estudos de hospedagem
- `learning/` - Conceitos gerais de C#
- `Parking/` - Sistema de gerenciamento de estacionamento
- `Phone/` - Simulador de telefone (Herança polymórfica)
- `WeatherApi/` - API de previsão do tempo

**Stack:**
- **Linguagem**: C#
- **Framework**: ASP.NET Core
- **ORM**: Entity Framework
- **Banco de Dados**: SQL Server / SQLite

**Conceitos explorados:**
- Programação orientada a objetos (POO)
- Arquitetura MVC
- RESTful APIs
- Entity Framework (ORM)
- Migrations
- Controllers e Endpoints
- Validação de dados

---

### 4. **PicPay-Simplificado**

Simulador de um sistema de pagamentos digital, inspirado na plataforma PicPay.

**Stack:**
- **Backend**: Java
- **Framework**: Spring Boot
- **Gerenciador de Dependências**: Maven
- **Banco de Dados**: H2 (ou outro conforme aplicação)

**Conceitos explorados:**
- Regras de negócio complexas
- Validação de transações
- Controle de saldo
- Transferência entre usuários
- Arquitetura backend
- DTOs e mapeamento de dados
- Tratamento de exceções

**Estrutura:**
- `controllers/` - Controladores REST
- `services/` - Lógica de negócio
- `repositories/` - Acesso a dados
- `domain/` - Entidades do domínio
- `dtos/` - Data Transfer Objects

---

### 5. **Pomodoro-Timer**

Aplicação baseada na técnica **Pomodoro**, usada para gerenciamento de tempo e produtividade.

**Stack:**
- **Frontend**: React + Vite
- **Linguagem**: JavaScript
- **Estilização**: styled-components
- **Roteamento**: React Router

**Componentes principais:**
- `TimerContainer` - Componente do temporizador
- `History` - Histórico de sessões
- `StartBtn` - Botão para iniciar/pausar
- `Title` - Título da aplicação
- `ButtonLink` - Componente de botão navegável

**Funcionalidades:**
- Contagem regressiva
- Ciclos de trabalho e descanso
- Interface responsiva
- Histórico de sessões

---

### 6. **roleta-sec**

Projeto experimental voltado para lógica de programação e geração de resultados.

**Stack:**
- **Frontend**: HTML5, CSS3, JavaScript
- **Bibliotecas**: Bootstrap, Animate.css, Owl Carousel, WOW.js

**Conceitos explorados:**
- Manipulação de números aleatórios
- Lógica de jogo/sorteio
- Interação com DOM
- Animações CSS
- Componentes de interface

**Estrutura:**
- `css/` - Estilos (Bootstrap + customizados)
- `js/` - Lógica JavaScript
- `img/` - Recursos de imagem
- `lib/` - Bibliotecas externas

---

### 7. **to-do-list**

Aplicação completa de gerenciamento de tarefas com arquitetura separada entre backend e frontend.

**Backend (to-do-api):**
- **Framework**: NestJS
- **Linguagem**: TypeScript
- **Banco de Dados**: TypeORM
- **Autenticação**: JWT
- **Password**: bcrypt

**Modules:**
- `auth/` - Autenticação e registro
- `users/` - Gerenciamento de usuários
- `tasks/` - Gerenciamento de tarefas
- `tasks-list/` - Listas de tarefas
- `middleware/` - Middlewares de autenticação
- `entities/` - Definições de entidades
- `dtos/` - DTOs para validação
- `enums/` - Enumerações (Priority, ActualState)

**Frontend (to-do-site):**
- **Framework**: React + Vite
- **Linguagem**: JavaScript
- **Estilização**: styled-components
- **Roteamento**: React Router

**Componentes:**
- `TasksMain` - Área principal de tarefas
- `TasksHeader` - Header da seção de tarefas
- `LateralBar` - Barra lateral de navegação
- `BlueButton` - Botão principal
- `NavBar` - Barra de navegação

**Conceitos explorados:**
- CRUD completo
- Autenticação JWT
- Integração Frontend-Backend
- Validação de dados
- Estados de tarefas
- Priorização
- Organização em listas

---

## Tecnologias Utilizadas

### Backend

| Tecnologia | Projetos | Descrição |
|------------|----------|-----------|
| **NestJS** | bookstore, to-do-list | Framework Node.js com arquitetura bem definida |
| **Java + Spring Boot** | PicPay-Simplificado | Framework fullstack para aplicações robustas |
| **C# + ASP.NET Core** | estudo-csharp | Plataforma Microsoft para APIs e web apps |
| **Node.js** | bookstore, to-do-list | Runtime JavaScript para backend |

### Frontend

| Tecnologia | Projetos | Descrição |
|------------|----------|-----------|
| **React 19** | Pomodoro-Timer, to-do-list | Biblioteca para UIs interativas |
| **Vite** | Pomodoro-Timer, to-do-list | Build tool e dev server moderno |
| **TypeScript** | bookstore, to-do-list | Superset de JavaScript com tipos |
| **JavaScript** | roleta-sec | Linguagem para lógica frontend |
| **HTML5 / CSS3** | roleta-sec | Linguagens base para web |
| **styled-components** | Pomodoro-Timer, to-do-list | CSS-in-JS para estilização |
| **React Router** | Pomodoro-Timer, to-do-list | Roteamento em aplicações React |

### Banco de Dados

| Tecnologia | Projetos | Descrição |
|------------|----------|-----------|
| **SQL Server** | estudo-csharp | SGBD relacional Microsoft |
| **SQLite** | estudo-csharp | Banco de dados embarcado |
| **TypeORM** | to-do-list | ORM para TypeScript/JavaScript |
| **Entity Framework Core** | estudo-csharp | ORM para .NET |
| **JPA** | PicPay-Simplificado | Especificação ORM para Java |

### Ferramentas & DevOps

| Ferramenta | Descrição |
|-----------|-----------|
| **npm / yarn** | Gerenciador de pacotes JavaScript |
| **Maven** | Gerenciador de dependências Java |
| **NestJS CLI** | CLI para geração de estruturas NestJS |
| **ESLint** | Linter para JavaScript/TypeScript |
| **Prettier** | Formatador de código |
| **Jest** | Framework de testes |
| **TypeScript** | Verificação de tipos estática |

---

## Linguagens Utilizadas

| Linguagem | Projetos | Tipo |
|-----------|----------|------|
| **TypeScript** | bookstore, to-do-list | Linguagem tipada para JavaScript |
| **Java** | PicPay-Simplificado | Linguagem orientada a objetos |
| **C#** | estudo-csharp | Linguagem Microsoft |
| **JavaScript** | Pomodoro-Timer, roleta-sec, to-do-list | Linguagem dinâmica para web |
| **SQL** | estudo-csharp | Linguagem de consulta para BD |

---

## Aprendizados Explorados

### Conceitos de Programação
- Programação orientada a objetos
- Programação funcional
- Padrões de projeto (MVC, MVVM, etc.)
- SOLID principles

### Arquitetura de Software
- Arquitetura de microserviços
- Arquitetura monolítica
- Padrão MVC
- RESTful API
- API Gateway

### Desenvolvimento Backend
- Criação de APIs REST
- Autenticação e autorização (JWT)
- Validação de dados
- Tratamento de exceções
- Persistência de dados

### Desenvolvimento Frontend
- Componentes reutilizáveis
- Gerenciamento de estado
- Roteamento
- Integração com APIs
- Responsividade

### Banco de Dados
- Modelagem relacional
- Migrations
- Queries otimizadas
- Relacionamentos entre entidades
- Índices e performance

### DevOps & Boas Práticas
- Testes unitários e e2e
- Linting e formatação de código
- Controle de versão (Git)
- Estruturação de projetos
- Documentação

---

## Como Utilizar Este Repositório

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/GuilhermeCustodioNieto/Projetos-Diversos.git
   ```

2. **Acesse o projeto desejado**:
   ```bash
   cd [nome-do-projeto]
   ```

3. **Instale as dependências** (conforme a tecnologia):
   - **Node.js**: `npm install` ou `yarn install`
   - **Java**: `mvn install`
   - **C#/.NET**: `dotnet restore`

4. **Execute o projeto** (conforme descrito em cada README individual)

---

## Estrutura de Estudos

Este repositório foi organizado como um portfólio de aprendizado progressivo, explorando:

1. **Fundamentos** - Conceitos básicos de programação
2. **Estruturas de dados** - Organizações de dados
3. **POO** - Programação orientada a objetos
4. **APIs REST** - Desenvolvimento de serviços web
5. **Frontend** - Interfaces interativas
6. **Banco de Dados** - Persistência e modelagem
7. **Arquitetura** - Padrões e organização em larga escala

---

## Contribuição

Como este é um repositório pessoal de estudos, mudanças são constantes para refletir novo aprendizado e experimentações.

---

## Licença

Este repositório está disponível sob a licença presente no arquivo `LICENSE`.

Os projetos aqui contidos têm finalidade educacional e fazem parte do meu processo de aprendizado em desenvolvimento de software.

---

**Autor**: Guilherme Custodio Nieto  
**Ano**: 2024-2026
