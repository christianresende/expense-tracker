# 💰 Expense Tracker - Rastreador de Despesas Pessoais

<div align="center">

![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.4.3-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**Aplicação web moderna e completa para rastreamento e gerenciamento de despesas pessoais**

[🚀 Funcionalidades](#-funcionalidades) • [📸 Preview](#-preview) • [🛠️ Instalação](#️-instalação) • [📚 Como Usar](#-como-usar) • [🎨 Tecnologias](#-tecnologias)

</div>

---

## ✨ Funcionalidades Implementadas

### 🎯 Funcionalidades Principais

- ✅ **CRUD Completo** - Adicionar, visualizar, editar e excluir despesas
- ✅ **11 Categorias Pré-definidas** - Alimentação, Transporte, Moradia, Compras, Saúde, Educação, Entretenimento, Trabalho, Esportes, Viagens e Outros
- ✅ **Filtro por Categoria** - Filtre despesas por categoria com interface visual intuitiva
- ✅ **Busca Inteligente** - Busque despesas por descrição ou categoria
- ✅ **Resumo Financeiro** - Visualize total, quantidade e média de despesas
- ✅ **Persistência Local** - Dados salvos automaticamente no navegador (LocalStorage)
- ✅ **Interface Responsiva** - Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Design Moderno** - Interface limpa e profissional com gradientes e animações

### 🎨 Interface e UX

- 🎨 **Design Moderno** - Interface limpa com gradientes e sombras suaves
- 📱 **100% Responsivo** - Adapta-se perfeitamente a qualquer tamanho de tela
- ⚡ **Animações Suaves** - Transições e hover effects profissionais
- 🎯 **Cores por Categoria** - Cada categoria tem sua cor e ícone único
- 🔍 **Busca em Tempo Real** - Resultados instantâneos enquanto você digita
- 📊 **Cards de Resumo** - Visualização rápida de estatísticas importantes

### 🔒 Segurança e Privacidade

- 🔐 **100% Local** - Todos os dados ficam no seu navegador
- 🚫 **Sem Backend** - Nenhum dado é enviado para servidores externos
- 💾 **Backup Automático** - Dados salvos automaticamente no LocalStorage
- 🔒 **Privacidade Total** - Você tem controle completo sobre suas informações

---

## 📸 Preview

### Interface Principal
- Formulário intuitivo para adicionar/editar despesas
- Cards de resumo com total, quantidade e média
- Filtros visuais por categoria
- Lista organizada de despesas com ações rápidas

### Categorias Disponíveis
🍔 Alimentação | 🚗 Transporte | 🏠 Moradia | 🛒 Compras | 💊 Saúde | 🎓 Educação | 🎮 Entretenimento | 💼 Trabalho | 🏋️ Esportes | ✈️ Viagens | 📦 Outros

---

## 🚀 Tecnologias

- **React 17.0.2** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 4.4.3** - Superset do JavaScript com tipagem estática
- **CSS3** - Estilização moderna com Flexbox e Grid
- **LocalStorage API** - Persistência de dados no navegador
- **React Hooks** - useState, useEffect para gerenciamento de estado

---

## 🛠️ Instalação

### Pré-requisitos

- Node.js 14.0 ou superior
- npm ou yarn

### Passo a Passo

1. **Clone o repositório:**

```bash
git clone https://github.com/christianresende/expense-tracker.git
cd expense-tracker
```

2. **Instale as dependências:**

```bash
npm install
```

ou

```bash
yarn install
```

3. **Execute o servidor de desenvolvimento:**

```bash
npm start
```

A aplicação estará disponível em: `http://localhost:3000`

---

## 📚 Como Usar

### Adicionar uma Despesa

1. Preencha o formulário com:
   - **Descrição**: Nome ou descrição da despesa (ex: "Almoço no restaurante")
   - **Valor**: Valor gasto em reais (ex: 45.50)
   - **Categoria**: Selecione uma das 11 categorias disponíveis
   - **Data**: Data da despesa
2. Clique em "Adicionar Despesa"
3. A despesa será adicionada à lista e salva automaticamente

### Editar uma Despesa

1. Clique no botão ✏️ (editar) na despesa desejada
2. O formulário será preenchido com os dados da despesa
3. Modifique os campos desejados
4. Clique em "Salvar Alterações" ou "Cancelar"

### Excluir uma Despesa

1. Clique no botão 🗑️ (excluir) na despesa desejada
2. Confirme a exclusão na caixa de diálogo
3. A despesa será removida permanentemente

### Filtrar por Categoria

1. Use os botões de categoria acima da lista
2. Clique em uma categoria para filtrar
3. Clique em "Todas" para remover o filtro

### Buscar Despesas

1. Digite no campo de busca
2. Os resultados são filtrados em tempo real
3. A busca funciona por descrição e categoria

---

## 📦 Estrutura do Projeto

```
expense-tracker/
├── public/                 # Arquivos públicos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── ExpenseForm/    # Formulário de despesas
│   │   ├── ExpenseItem/    # Item individual de despesa
│   │   ├── CategoryFilter/ # Filtro por categoria
│   │   ├── SearchBar/      # Barra de busca
│   │   └── ExpenseSummary/ # Resumo de despesas
│   ├── types/              # Definições de tipos TypeScript
│   │   └── Expense.ts      # Tipo Expense e categorias
│   ├── utils/              # Funções utilitárias
│   │   ├── storage.ts     # Gerenciamento de LocalStorage
│   │   └── helpers.ts     # Funções de formatação e filtros
│   ├── App.tsx             # Componente principal
│   ├── App.css             # Estilos globais
│   └── index.tsx           # Ponto de entrada
├── package.json            # Dependências e scripts
└── README.md               # Este arquivo
```

---

## 🎯 Funcionalidades Detalhadas

### 📝 Gestão de Despesas

- **Adicionar**: Formulário completo com validação
- **Editar**: Edição inline com formulário pré-preenchido
- **Excluir**: Exclusão com confirmação de segurança
- **Visualizar**: Lista organizada por data (mais recente primeiro)

### 🏷️ Sistema de Categorias

- 11 categorias pré-definidas com ícones e cores únicas
- Filtro visual por categoria
- Identificação visual rápida por cor

### 🔍 Busca e Filtros

- Busca em tempo real por descrição
- Filtro por categoria
- Combinação de busca e filtro
- Resultados instantâneos

### 📊 Resumo Financeiro

- **Total**: Soma de todas as despesas filtradas
- **Quantidade**: Número de despesas
- **Média**: Valor médio por despesa
- Atualização automática conforme filtros

### 💾 Persistência

- Salvamento automático no LocalStorage
- Carregamento automático ao iniciar
- Dados persistem entre sessões
- Sem necessidade de backend

---

## 🛠️ Scripts Disponíveis

### `npm start`
Executa a aplicação em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm test`
Executa os testes em modo interativo.

### `npm run build`
Cria uma versão otimizada para produção na pasta `build`.

---

## 🚀 Deploy

### Build para Produção

```bash
npm run build
```

### Deploy no Vercel

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Faça o deploy:
```bash
vercel
```

### Deploy no Netlify

1. Faça o build do projeto:
```bash
npm run build
```

2. Arraste a pasta `build` para o Netlify Drop

### Deploy no GitHub Pages

1. Instale o gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicione ao `package.json`:
```json
{
  "homepage": "https://christianresende.github.io/expense-tracker",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Faça o deploy:
```bash
npm run deploy
```

---

## 📝 Estrutura de Dados

### Tipo Expense

```typescript
type Expense = {
    id: string;              // Identificador único
    description: string;     // Descrição da despesa
    amount: number;          // Valor da despesa
    category: string;        // Categoria
    date: string;            // Data (ISO string)
    createdAt: string;       // Data de criação (ISO string)
}
```

### Categorias

Cada categoria possui:
- **ID**: Identificador único
- **Nome**: Nome da categoria
- **Ícone**: Emoji representativo
- **Cor**: Cor hexadecimal única

---

## 🎨 Personalização

### Modificar Categorias

Edite `src/types/Expense.ts` para adicionar ou modificar categorias:

```typescript
export const CATEGORIES: ExpenseCategory[] = [
    { id: 'nova-categoria', name: 'Nova Categoria', icon: '🎯', color: '#FF5733' },
    // ... outras categorias
];
```

### Modificar Estilos

Os estilos estão organizados por componente:
- `src/App.css` - Estilos globais
- `src/components/*/**.css` - Estilos específicos de cada componente

---

## 🔮 Melhorias Futuras

- [ ] Gráficos e visualizações (Chart.js ou Recharts)
- [ ] Filtros por período (mês, semana, ano)
- [ ] Exportação de dados (CSV, PDF)
- [ ] Modo escuro/claro
- [ ] Orçamentos e metas
- [ ] Notificações e lembretes
- [ ] Múltiplas moedas
- [ ] Sincronização com backend (opcional)
- [ ] App mobile (React Native)

---

## 📄 Licença

Este projeto é de código aberto e está disponível para uso livre sob a licença MIT.

---

## 👤 Autor

**Christian Resende**

- 🌐 GitHub: [@christianresende](https://github.com/christianresende)
- 💼 LinkedIn: [Christian Resende](https://www.linkedin.com/in/christian-resende/)

---

## 🙏 Agradecimentos

- **React Team** - Pela excelente documentação e ferramentas
- **TypeScript Team** - Pela linguagem e tipagem estática
- Comunidade open source pelo suporte contínuo

---

## 📞 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. ⭐ Dar uma estrela no repositório
2. 🍴 Fazer um fork do projeto
3. 🌿 Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
4. 💾 Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. 📤 Push para a branch (`git push origin feature/AmazingFeature`)
6. 🔄 Abrir um Pull Request

---

## 🐛 Reportar Problemas

Encontrou um bug ou tem uma sugestão? 

- 🐛 [Abrir uma Issue](https://github.com/christianresende/expense-tracker/issues)
- 💡 [Sugerir uma Feature](https://github.com/christianresende/expense-tracker/issues/new)

---

<div align="center">

**⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!**

Feito com ❤️ usando React e TypeScript

</div>

