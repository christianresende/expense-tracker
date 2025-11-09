import { Expense } from '../types/Expense';

const STORAGE_KEY = 'expense-tracker-data';

export const saveExpenses = (expenses: Expense[]): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    } catch (error) {
        console.error('Erro ao salvar despesas no localStorage:', error);
    }
};

export const loadExpenses = (): Expense[] => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Erro ao carregar despesas do localStorage:', error);
    }
    return [];
};

export const clearExpenses = (): void => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Erro ao limpar despesas do localStorage:', error);
    }
};
