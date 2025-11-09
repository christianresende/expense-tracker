import React, { useState, FormEvent, useEffect } from 'react';
import { Expense } from '../../types/Expense';
import { CATEGORIES } from '../../types/Expense';
import './ExpenseForm.css';

type ExpenseFormProps = {
    onAddExpense: (expense: Expense) => void;
    editingExpense?: Expense | null;
    onCancelEdit?: () => void;
};

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ 
    onAddExpense, 
    editingExpense,
    onCancelEdit 
}) => {
    const [description, setDescription] = useState(editingExpense?.description || '');
    const [amount, setAmount] = useState(editingExpense?.amount.toString() || '');
    const [category, setCategory] = useState(editingExpense?.category || 'alimentacao');
    const [date, setDate] = useState(
        editingExpense?.date ? editingExpense.date.split('T')[0] : new Date().toISOString().split('T')[0]
    );

    useEffect(() => {
        if (editingExpense) {
            setDescription(editingExpense.description);
            setAmount(editingExpense.amount.toString());
            setCategory(editingExpense.category);
            setDate(editingExpense.date.split('T')[0]);
        }
    }, [editingExpense]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!description.trim() || !amount || parseFloat(amount) <= 0) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        const expense: Expense = {
            id: editingExpense?.id || Date.now().toString(36) + Math.random().toString(36).substr(2),
            description: description.trim(),
            amount: parseFloat(amount),
            category,
            date: new Date(date).toISOString(),
            createdAt: editingExpense?.createdAt || new Date().toISOString(),
        };

        onAddExpense(expense);
        
        // Limpar formulário se não estiver editando
        if (!editingExpense) {
            setDescription('');
            setAmount('');
            setCategory('alimentacao');
            setDate(new Date().toISOString().split('T')[0]);
        }
    };

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <h2>{editingExpense ? 'Editar Despesa' : 'Nova Despesa'}</h2>
            
            <div className="form-group">
                <label htmlFor="description">Descrição *</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Ex: Almoço no restaurante"
                    required
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="amount">Valor (R$) *</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        step="0.01"
                        min="0.01"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Categoria *</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        {CATEGORIES.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.icon} {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="date">Data *</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>

            <div className="form-actions">
                <button type="submit" className="btn-primary">
                    {editingExpense ? 'Salvar Alterações' : 'Adicionar Despesa'}
                </button>
                {editingExpense && onCancelEdit && (
                    <button type="button" className="btn-secondary" onClick={onCancelEdit}>
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    );
};

