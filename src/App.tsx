import React, { useState, useEffect } from 'react';
import { Expense } from './types/Expense';
import { ExpenseForm } from './components/ExpenseForm/ExpenseForm';
import { ExpenseItem } from './components/ExpenseItem/ExpenseItem';
import { CategoryFilter } from './components/CategoryFilter/CategoryFilter';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ExpenseSummary } from './components/ExpenseSummary/ExpenseSummary';
import { loadExpenses, saveExpenses } from './utils/storage';
import { filterByCategory, searchExpenses } from './utils/helpers';
import './App.css';

function App() {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

    // Carregar despesas do localStorage ao iniciar
    useEffect(() => {
        const loadedExpenses = loadExpenses();
        setExpenses(loadedExpenses);
    }, []);

    // Salvar despesas no localStorage sempre que houver mudanças
    useEffect(() => {
        saveExpenses(expenses);
    }, [expenses]);

    // Filtrar despesas quando categoria ou busca mudarem
    useEffect(() => {
        let filtered = filterByCategory(expenses, selectedCategory);
        filtered = searchExpenses(filtered, searchTerm);
        
        // Ordenar por data (mais recente primeiro)
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setFilteredExpenses(filtered);
    }, [expenses, selectedCategory, searchTerm]);

    const handleAddExpense = (expense: Expense) => {
        if (editingExpense) {
            // Atualizar despesa existente
            setExpenses(expenses.map(exp => 
                exp.id === expense.id ? expense : exp
            ));
            setEditingExpense(null);
        } else {
            // Adicionar nova despesa
            setExpenses([...expenses, expense]);
        }
    };

    const handleEditExpense = (expense: Expense) => {
        setEditingExpense(expense);
        // Scroll para o formulário
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteExpense = (id: string) => {
        setExpenses(expenses.filter(exp => exp.id !== id));
        if (editingExpense?.id === id) {
            setEditingExpense(null);
        }
    };

    const handleCancelEdit = () => {
        setEditingExpense(null);
    };

    return (
        <div className="App">
            <header className="app-header">
                <h1>💰 Expense Tracker</h1>
                <p>Gerencie suas despesas de forma simples e eficiente</p>
            </header>

            <main className="app-main">
                <div className="container">
                    <ExpenseForm 
                        onAddExpense={handleAddExpense}
                        editingExpense={editingExpense}
                        onCancelEdit={handleCancelEdit}
                    />

                    <ExpenseSummary expenses={filteredExpenses} />

                    <div className="filters-section">
                        <SearchBar 
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                        />
                        <CategoryFilter 
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                        />
                    </div>

                    <div className="expenses-section">
                        <h2>Despesas {filteredExpenses.length > 0 && `(${filteredExpenses.length})`}</h2>
                        
                        {filteredExpenses.length === 0 ? (
                            <div className="empty-state">
                                <p>📭 Nenhuma despesa encontrada</p>
                                <p className="empty-hint">
                                    {expenses.length === 0 
                                        ? 'Adicione sua primeira despesa usando o formulário acima!'
                                        : 'Tente ajustar os filtros ou a busca.'}
                                </p>
                            </div>
                        ) : (
                            <div className="expenses-list">
                                {filteredExpenses.map((expense) => (
                                    <ExpenseItem
                                        key={expense.id}
                                        expense={expense}
                                        onEdit={handleEditExpense}
                                        onDelete={handleDeleteExpense}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <footer className="app-footer">
                <p>© 2025 Expense Tracker - Desenvolvido com React e TypeScript</p>
            </footer>
        </div>
    );
}

export default App;

