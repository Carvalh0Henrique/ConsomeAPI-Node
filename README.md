# ConsumirAPI-Node

> Interface Angular desenvolvida para consumir e visualizar dados da API Node.js.

Este repositório contém o front-end da aplicação, focado em oferecer uma experiência de usuário reativa e eficiente, conectando-se aos serviços disponibilizados pelo nosso backend.

## 🛠️ Tecnologias Utilizadas

* **Framework:** [Angular](https://angular.io/) (v17+)
* **Linguagem:** TypeScript
* **Gerenciamento de Estado/Fluxo:** RxJS
* **Consumo de API:** HttpClient (REST)

## 🚀 Como rodar o projeto

### Pré-requisitos
* Node.js (v18 ou superior)
* Angular CLI instalado globalmente (`npm install -g @angular/cli`)
* API Backend rodando localmente (geralmente na porta 3000)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/ConsomeAPI-Node.git](https://github.com/SEU-USUARIO/ConsomeAPI-Node.git)
    cd ConsomeAPI-Node
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o ambiente (se necessário):**
    Verifique o arquivo `src/environments/environment.ts` para garantir que a URL da API corresponde ao seu backend local:
    ```typescript
    export const environment = {
      production: false,
      apiUrl: 'http://localhost:3000/api'
    };
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```
    Acesse `http://localhost:4200/` no seu navegador.

## 📂 Estrutura do Projeto

A aplicação segue uma arquitetura modular escalável:

* `src/app/core`: Serviços essenciais, interceptors HTTP e configurações globais (singleton).
* `src/app/features`: Módulos funcionais que compõem as páginas da aplicação.
* `src/app/shared`: Componentes reutilizáveis de UI (botões, cards, inputs).
* `src/app/models`: Interfaces TypeScript que tipam as respostas da API Node.js.

---