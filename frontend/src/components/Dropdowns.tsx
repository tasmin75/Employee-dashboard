import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

interface Option {
    label: string;
    value: string;
}

interface DropdownProps {
    options: Option[];
}

export const SearchDropdown: React.FC<DropdownProps> = ({ options }) => {
    const [query, setQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setHighlightedIndex(0);
    };

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
        setQuery('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            setHighlightedIndex(prevIndex =>
                prevIndex === filteredOptions.length - 1 ? 0 : prevIndex + 1
            );
        } else if (e.key === 'ArrowUp') {
            setHighlightedIndex(prevIndex =>
                prevIndex === 0 ? filteredOptions.length - 1 : prevIndex - 1
            );
        } else if (e.key === 'Enter') {
            if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
                handleOptionClick(filteredOptions[highlightedIndex]);
            }
        }
    };

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="relative w-full max-w-xs">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}    
                className="w-full flex items-center justify-between gap-4 sm:w-[200px] px-4 py-[0.6rem] border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700"
            >
                {selectedOption ? <p className='     
                text-sm font-medium
                '>{selectedOption.label}</p> : <p className='text-sm'>Select Department</p>}
                <FaChevronDown className="text-xs" />
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
                    <div className="relative flex items-center py-2">
                        <FiSearch className="absolute left-3 text-gray-400" />
                        <input
                            type="text"
                            ref={searchInputRef}
                            value={query}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            className="w-full pl-10 py-2 focus:ring-0 focus:outline-none rounded-lg text-sm"
                            placeholder="Search"
                        />
                        <FiX
                            className="absolute right-3 text-gray-400 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                    <hr />
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option, index) => (
                            <div
                                key={option.value}
                                onClick={() => handleOptionClick(option)}
                                className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${highlightedIndex === index ? 'bg-gray-100' : ''
                                    }`}
                                onMouseEnter={() => setHighlightedIndex(index)}
                            >
                                <p className='
                                text-sm font-medium
                                '>{option.label}</p>
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-gray-700">No options found</div>
                    )}
                </div>
            )}
        </div>
    );
};
