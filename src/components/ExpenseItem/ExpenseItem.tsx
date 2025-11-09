import React from 'react';
import { Expense } from '../../types/Expense';
import { CATEGORIES } from '../../types/Expense';
import { formatCurrency, formatDate } from '../../utils/helpers';
import './ExpenseItem.css';

type ExpenseItemProps = {
    expense: Expense;
    onEdit: (expense: Expense) => void;
    onDelete: (id: string) => void;
};

export const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onEdit, onDelete }) => {
    const category = CATEGORIES.find(cat => cat.id === expense.category) || CATEGORIES[CATEGORIES.length - 1];

    const handleDelete = () => {
        if (window.confirm(`Tem certeza que deseja excluir a despesa "${expense.description}"?`)) {
            onDelete(expense.id);
        }
    };

    return (
        <div className="expense-item">
            <div className="expense-icon" style={{ backgroundColor: `${category.color}20` }}>
                <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
            </div>
            
            <div className="expense-content">
                <div className="expense-header">
                    <h3 className="expense-description">{expense.description}</h3>
                    <span className="expense-amount">{formatCurrency(expense.amount)}</span>
                </div>
                
                <div className="expense-details">
                    <span className="expense-category" style={{ color: category.color }}>
                        {category.icon} {category.name}
                    </span>
                    <span className="expense-date">{formatDate(expense.date)}</span>
                </div>
            </div>

            <div className="expense-actions">
                <button 
                    className="btn-edit" 
                    onClick={() => onEdit(expense)}
                    title="Editar despesa"
                >
                    ✏️
                </button>
                <button 
                    className="btn-delete" 
                    onClick={handleDelete}
                    title="Excluir despesa"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
};

