import React from 'react';
import './SearchBar.css';

type SearchBarProps = {
    searchTerm: string;
    onSearchChange: (term: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="🔍 Buscar despesas..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />
        </div>
    );
};

