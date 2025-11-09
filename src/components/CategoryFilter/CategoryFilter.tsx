import React from 'react';
import { CATEGORIES } from '../../types/Expense';
import './CategoryFilter.css';

type CategoryFilterProps = {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
    selectedCategory, 
    onCategoryChange 
}) => {
    return (
        <div className="category-filter">
            <h3>Filtrar por Categoria</h3>
            <div className="category-buttons">
                <button
                    className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => onCategoryChange('all')}
                >
                    Todas
                </button>
                {CATEGORIES.map((category) => (
                    <button
                        key={category.id}
                        className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => onCategoryChange(category.id)}
                        style={{
                            borderColor: selectedCategory === category.id ? category.color : '#e0e0e0',
                            backgroundColor: selectedCategory === category.id ? `${category.color}10` : 'white'
                        }}
                    >
                        <span className="category-icon">{category.icon}</span>
                        <span className="category-name">{category.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

