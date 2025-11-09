import { Expense } from '../types/Expense';

export const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
};

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date);
};

export const formatDateInput = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const calculateTotal = (expenses: Expense[]): number => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const filterByCategory = (expenses: Expense[], category: string): Expense[] => {
    if (!category || category === 'all') {
        return expenses;
    }
    return expenses.filter(expense => expense.category === category);
};

export const filterByDateRange = (expenses: Expense[], startDate: string, endDate: string): Expense[] => {
    if (!startDate || !endDate) {
        return expenses;
    }
    return expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return expenseDate >= start && expenseDate <= end;
    });
};

export const searchExpenses = (expenses: Expense[], searchTerm: string): Expense[] => {
    if (!searchTerm) {
        return expenses;
    }
    const term = searchTerm.toLowerCase();
    return expenses.filter(expense =>
        expense.description.toLowerCase().includes(term) ||
        expense.category.toLowerCase().includes(term)
    );
};
