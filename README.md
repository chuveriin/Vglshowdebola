# VGL Show de Bola

Aplicação web demonstrativa de uma loja que reúne lanches e periféricos para jogos. O projeto foi desenvolvido em grupo para a disciplina **Programação para Interface do Usuário** e demonstra construção de interface responsiva, navegação, formulários, interações e consumo de API REST.

> **Projeto acadêmico e demonstrativo:** a aplicação não possui backend próprio nem processa pagamentos reais. O login, as contas e os pedidos são simulados no navegador; não use dados pessoais, senhas reais ou informações financeiras.

## Funcionalidades

- Página inicial com destaques, categorias e produtos.
- Catálogo de lanches com busca.
- Catálogo de periféricos consultado na API pública DummyJSON.
- Carrinho com atualização de quantidades, remoção e totalização.
- Fluxo demonstrativo de checkout, formulário, validações e revisão do pedido.
- Cadastro e login demonstrativos, navegação protegida e perfis de usuário/administrador.
- Histórico de pedidos, filtros e área demonstrativa de confirmação de pagamentos.
- Componentes compartilhados, como barra de navegação, cartões de produto e rodapé.
- Layout responsivo e recursos básicos de acessibilidade, como rótulos, foco visível e mensagens de status.

## Tecnologias

- React 18 e React Router 6
- Vite 5
- CSS
- Lucide React e `qrcode.react`
- DummyJSON para consulta de produtos e demonstração de operações HTTP

## Requisitos

- Node.js em versão LTS e npm.
- Conexão com a internet para carregar os periféricos pela DummyJSON.

## Executar localmente

Na raiz do repositório, instale as dependências usando o lockfile:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

### Scripts disponíveis

```bash
npm run dev      # servidor local de desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # pré-visualização local do build
```

## API e armazenamento

Os periféricos são consultados em `https://dummyjson.com/products/category/mobile-accessories`. O código das chamadas e dos dados demonstrativos fica em `src/services/api.js`. Se necessário, a URL base pode ser definida por `VITE_API_URL`; sem essa variável, usa-se `https://dummyjson.com`.

Crie `.env.local` apenas para alterar a URL durante o desenvolvimento local:

```dotenv
VITE_API_URL=https://dummyjson.com
```

Não coloque segredos em variáveis `VITE_*`: os valores com esse prefixo são incorporados ao código enviado ao navegador. O projeto não precisa de variável de ambiente para o deploy padrão.

Contas cadastradas, carrinho e pedidos ficam no `localStorage`; a sessão atual fica no `sessionStorage`. As chamadas de escrita para a DummyJSON são ilustrativas e não formam um banco persistente. Os dados não são compartilhados entre dispositivos e podem ser apagados ao limpar o armazenamento do navegador.

## Estrutura principal

```text
.
├── index.html
├── public/
│   └── images/             # imagens do site
├── src/
│   ├── App.jsx             # rotas, sessão e layout compartilhado
│   ├── main.jsx            # inicialização do React e do roteador
│   ├── components/         # Navbar, Footer, cartões e outros componentes
│   ├── pages/              # telas da aplicação
│   ├── services/
│   │   └── api.js          # API, catálogo e armazenamento demonstrativo
│   └── styles/
│       └── global.css      # estilos globais e responsivos
├── package.json
├── package-lock.json
├── vite.config.js
└── vercel.json
```

## Publicar na Vercel

1. Importe o repositório `chuveriin/Vglshowdebola` na Vercel.
2. Defina o diretório raiz como `./`.
3. Use o framework preset **Vite**, o comando de build `npm run build` e a pasta de saída `dist`.
4. Deixe a Vercel instalar as dependências a partir de `package-lock.json`.
5. Mantenha `vercel.json` na raiz: ele encaminha rotas da SPA, permitindo abrir diretamente URLs como `/lanches`.

O deploy é gerado a partir do código-fonte a cada atualização da branch conectada. `dist/` e `node_modules/` são produzidos ou instalados durante o build e não devem ser commitados.

## Limitações e segurança

Autenticação, autorização e dados existem somente no frontend. As rotas e os perfis não oferecem proteção de servidor; senhas de demonstração e dados cadastrados podem ser acessados no armazenamento do navegador. Pix, cartão, pedidos e pagamentos não são processados de verdade. Um produto real exigiria backend, validação no servidor, autenticação segura, persistência de dados e integração com um provedor de pagamento.
