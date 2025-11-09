import React from 'react';
import { Expense } from '../../types/Expense';
import { calculateTotal, formatCurrency } from '../../utils/helpers';
import './ExpenseSummary.css';

type ExpenseSummaryProps = {
    expenses: Expense[];
};

export const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses }) => {
    const total = calculateTotal(expenses);
    const count = expenses.length;

    return (
        <div className="expense-summary">
            <div className="summary-card">
                <div className="summary-label">Total de Despesas</div>
                <div className="summary-value">{formatCurrency(total)}</div>
            </div>
            <div className="summary-card">
                <div className="summary-label">Quantidade</div>
                <div className="summary-value">{count}</div>
            </div>
            <div className="summary-card">
                <div className="summary-label">Média</div>
                <div className="summary-value">
                    {count > 0 ? formatCurrency(total / count) : formatCurrency(0)}
                </div>
            </div>
        </div>
    );
};

