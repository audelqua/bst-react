import React, { createContext, useState } from 'react'

interface IBinarySearchTreeProps {
    children: React.ReactNode
}

const BinarySearchTreeContext = createContext({});
const BinarySearchTreeProvider: React.FC<IBinarySearchTreeProps> = ({children}) => {
    const [bstIngredients, setBstIngredients] = useState<string>('')
    
    const handleUpdateBstIngredient = (str: string) => {
        setBstIngredients(str)
    }

    return (
        <BinarySearchTreeContext.Provider 
            value={{
                handleUpdateBstIngredient,
            }}
        >
            {children}
        </BinarySearchTreeContext.Provider>
    )
}

export { BinarySearchTreeContext, BinarySearchTreeProvider }