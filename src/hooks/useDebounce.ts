import React, { useState } from 'react'

let searchDebounce: ReturnType<typeof setTimeout>
export const useSearchDebounce = () => {
    const [query, setQuery] = useState<string>()
    
    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        clearTimeout(searchDebounce);

        searchDebounce = setTimeout(() => {
            if(inputValue === '') setQuery(undefined)
            else setQuery(inputValue)
            
        }, 500);
    }

    return {
        query: query,
        handleChangeSearch: handleChangeSearch,
    }
}