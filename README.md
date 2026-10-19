# VGL Show de Bola

Aplicação web demonstrativa de uma loja de lanches e periféricos para jogos, desenvolvida em grupo para a disciplina **Programação para Interface do Usuário**.

## Tecnologias

- React 18 e React Router 6
- Vite 5 e CSS
- Lucide React e `qrcode.react`
- API REST DummyJSON

## Funcionalidades

- Catálogos de lanches e periféricos, com busca.
- Cadastro, login demonstrativo e navegação entre telas.
- Carrinho, checkout com validação e histórico de pedidos.
- Filtros e área demonstrativa de confirmação de pagamentos.
- Layout responsivo e componentes reutilizáveis.

## API e armazenamento

Os periféricos são carregados por `GET` da [DummyJSON](https://dummyjson.com/products/category/mobile-accessories). O serviço em `src/services/api.js` centraliza as chamadas; operações `POST`, `PUT` e `DELETE` são usadas para demonstrar ações sobre pedidos, sem persistência em banco.

Cadastro, carrinho e pedidos são armazenados no `localStorage`; a sessão atual usa `sessionStorage`.

## Estrutura principal

```text
.
├── index.html
├── public/images/          # imagens
└── src/
    ├── App.jsx             # rotas e layout
    ├── main.jsx            # inicialização do React
    ├── components/         # componentes reutilizáveis
    ├── pages/              # telas
    ├── services/api.js     # API e armazenamento
    └── styles/global.css   # estilos
```
