/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react'

interface IBinarySearchTreeProps {
    children: React.ReactNode
}
type IBinarySearchTreeContext = [(str: string) => void, string]

const BinarySearchTreeContext = createContext<IBinarySearchTreeContext>([() => null, '']);
const BinarySearchTreeProvider: React.FC<IBinarySearchTreeProps> = ({children}) => {
    const [bstIngredients, setBstIngredients] = useState<string>('')
    
    const handleUpdateBstIngredient = (str: string) => {
        setBstIngredients(str)
    }

    return (
        <BinarySearchTreeContext.Provider 
            value={[
                handleUpdateBstIngredient,
                bstIngredients,
            ]}
        >
            {children}
        </BinarySearchTreeContext.Provider>
    )
}

export { BinarySearchTreeContext, BinarySearchTreeProvider }