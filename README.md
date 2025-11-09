# 💰 Expense Tracker - Rastreador de Despesas

Aplicação web moderna para rastreamento e gerenciamento de despesas pessoais, desenvolvida com React e TypeScript. Controle suas finanças de forma simples e eficiente.

## 📋 Características

- 💵 **Registro de Despesas** - Adicione e gerencie suas despesas facilmente
- 📊 **Visualização de Dados** - Acompanhe seus gastos com gráficos e relatórios
- 🏷️ **Categorização** - Organize despesas por categorias
- 📅 **Filtros por Período** - Visualize gastos por mês, semana ou período customizado
- 💾 **Persistência de Dados** - Seus dados são salvos localmente
- 📱 **Interface Responsiva** - Funciona perfeitamente em desktop e mobile
- 🔒 **TypeScript** - Código tipado para maior segurança e manutenibilidade
- ⚡ **Performance Otimizada** - Aplicação rápida e eficiente

## 🚀 Tecnologias

- **React 17.0.2** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 4.4.3** - Superset do JavaScript com tipagem estática
- **React Scripts 4.0.3** - Scripts e configurações do Create React App
- **CSS3** - Estilização moderna e responsiva

## 📦 Estrutura do Projeto

```
expense-tracker/
├── public/                 # Arquivos públicos estáticos
│   ├── index.html          # HTML principal
│   └── logo.svg            # Logo da aplicação
├── src/
│   ├── components/         # Componentes React (a criar)
│   │   ├── ExpenseForm/    # Formulário de despesas
│   │   ├── ExpenseList/    # Lista de despesas
│   │   ├── ExpenseChart/   # Gráficos de despesas
│   │   └── CategoryFilter/ # Filtro por categoria
│   ├── types/              # Definições de tipos TypeScript
│   │   └── Expense.ts      # Tipo Expense
│   ├── utils/              # Funções utilitárias
│   │   └── storage.ts     # Gerenciamento de LocalStorage
│   ├── App.tsx             # Componente principal
│   ├── App.css             # Estilos globais
│   └── index.tsx           # Ponto de entrada da aplicação
├── package.json            # Dependências e scripts
└── tsconfig.json           # Configuração TypeScript
```

## 🔧 Instalação

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

ou

```bash
yarn start
```

A aplicação estará disponível em: `http://localhost:3000`

## 📚 Como Usar

### Adicionar uma Despesa

1. Preencha o formulário com os dados da despesa:
   - **Descrição**: Nome ou descrição da despesa
   - **Valor**: Valor gasto (em reais)
   - **Categoria**: Categoria da despesa (Alimentação, Transporte, etc.)
   - **Data**: Data da despesa
2. Clique em "Adicionar Despesa"
3. A despesa será adicionada à lista

### Visualizar Despesas

- **Lista Completa**: Visualize todas as despesas registradas
- **Filtros**: Use os filtros para visualizar despesas por:
  - Categoria
  - Período (mês, semana, ano)
  - Valor (mínimo/máximo)

### Gráficos e Relatórios

- Visualize seus gastos em gráficos interativos
- Acompanhe tendências de gastos ao longo do tempo
- Compare gastos por categoria

## 🛠️ Scripts Disponíveis

### `npm start`
Executa a aplicação em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm test`
Executa os testes em modo interativo.

### `npm run build`
Cria uma versão otimizada para produção na pasta `build`.

### `npm run eject`
**⚠️ Atenção:** Esta é uma operação irreversível!

Remove a dependência única do projeto e copia todos os arquivos de configuração (webpack, Babel, ESLint, etc.) diretamente para o projeto.

## 🎨 Funcionalidades Planejadas

### Fase 1 - Básico
- [x] Estrutura inicial do projeto
- [ ] Formulário de adição de despesas
- [ ] Lista de despesas
- [ ] Persistência com LocalStorage

### Fase 2 - Intermediário
- [ ] Categorização de despesas
- [ ] Filtros e busca
- [ ] Edição e exclusão de despesas
- [ ] Cálculo de totais

### Fase 3 - Avançado
- [ ] Gráficos e visualizações
- [ ] Relatórios por período
- [ ] Exportação de dados (CSV, PDF)
- [ ] Múltiplas moedas
- [ ] Orçamentos e metas

### Fase 4 - Premium
- [ ] Sincronização com backend
- [ ] Múltiplos usuários
- [ ] Compartilhamento de despesas
- [ ] Notificações e lembretes
- [ ] App mobile

## 📝 Estrutura de Dados

### Tipo Expense (Exemplo)

```typescript
type Expense = {
    id: string;              // Identificador único
    description: string;     // Descrição da despesa
    amount: number;          // Valor da despesa
    category: string;        // Categoria
    date: Date;              // Data da despesa
    createdAt: Date;         // Data de criação do registro
}
```

### Categorias Sugeridas

- 🍔 Alimentação
- 🚗 Transporte
- 🏠 Moradia
- 🛒 Compras
- 💊 Saúde
- 🎓 Educação
- 🎮 Entretenimento
- 💼 Trabalho
- 🏋️ Esportes
- ✈️ Viagens
- Outros

## 🚀 Deploy

### Build para Produção

```bash
npm run build
```

Isso criará uma pasta `build` com os arquivos otimizados para produção.

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

2. Arraste a pasta `build` para o Netlify Drop ou use a CLI do Netlify

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

## 🧪 Testes

Execute os testes com:

```bash
npm test
```

Os testes são executados em modo interativo. Pressione `a` para executar todos os testes.

## 📊 Exemplos de Uso

### Adicionar Despesa

```typescript
const newExpense: Expense = {
  id: generateId(),
  description: "Almoço no restaurante",
  amount: 45.50,
  category: "Alimentação",
  date: new Date(),
  createdAt: new Date()
};

addExpense(newExpense);
```

### Filtrar por Categoria

```typescript
const alimentacaoExpenses = expenses.filter(
  expense => expense.category === "Alimentação"
);
```

### Calcular Total

```typescript
const total = expenses.reduce(
  (sum, expense) => sum + expense.amount, 
  0
);
```

## 🔐 Privacidade

- Todos os dados são armazenados localmente no seu navegador
- Nenhum dado é enviado para servidores externos
- Você tem controle total sobre suas informações financeiras

## 📄 Licença

Este projeto é de código aberto e está disponível para uso livre.

## 👤 Autor

**Christian Resende**

- GitHub: [@christianresende](https://github.com/christianresende)
- LinkedIn: [Christian Resende](https://www.linkedin.com/in/christian-resende/)

## 🙏 Agradecimentos

- **React Team** - Pela excelente documentação e ferramentas
- **TypeScript Team** - Pela linguagem e tipagem estática
- Comunidade open source pelo suporte

## 📞 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 🐛 Reportar Problemas

Encontrou um bug ou tem uma sugestão? Abra uma [issue](https://github.com/christianresende/expense-tracker/issues) no GitHub!

## 🔮 Roadmap

- [ ] Implementar formulário de despesas
- [ ] Adicionar persistência com LocalStorage
- [ ] Criar componentes de visualização
- [ ] Implementar gráficos com Chart.js ou Recharts
- [ ] Adicionar sistema de categorias
- [ ] Criar filtros avançados
- [ ] Implementar exportação de dados
- [ ] Adicionar modo escuro
- [ ] Criar testes unitários
- [ ] Desenvolver backend API

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

**Nota:** Este projeto está em desenvolvimento ativo. Novas funcionalidades serão adicionadas regularmente.
