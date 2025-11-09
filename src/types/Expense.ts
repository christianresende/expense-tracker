export type Expense = {
    id: string;
    description: string;
    amount: number;
    category: string;
    date: string; // ISO string format
    createdAt: string; // ISO string format
}

export type ExpenseCategory = {
    id: string;
    name: string;
    icon: string;
    color: string;
}

export const CATEGORIES: ExpenseCategory[] = [
    { id: 'alimentacao', name: 'Alimentação', icon: '🍔', color: '#FF6B6B' },
    { id: 'transporte', name: 'Transporte', icon: '🚗', color: '#4ECDC4' },
    { id: 'moradia', name: 'Moradia', icon: '🏠', color: '#45B7D1' },
    { id: 'compras', name: 'Compras', icon: '🛒', color: '#FFA07A' },
    { id: 'saude', name: 'Saúde', icon: '💊', color: '#98D8C8' },
    { id: 'educacao', name: 'Educação', icon: '🎓', color: '#F7DC6F' },
    { id: 'entretenimento', name: 'Entretenimento', icon: '🎮', color: '#BB8FCE' },
    { id: 'trabalho', name: 'Trabalho', icon: '💼', color: '#85C1E2' },
    { id: 'esportes', name: 'Esportes', icon: '🏋️', color: '#F8B739' },
    { id: 'viagens', name: 'Viagens', icon: '✈️', color: '#EC7063' },
    { id: 'outros', name: 'Outros', icon: '📦', color: '#95A5A6' },
];

