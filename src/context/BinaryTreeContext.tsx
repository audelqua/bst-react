import React, { createContext, useState, useEffect } from 'react'
import { useBinaryTreeGenerator } from 'src/hooks/useBinaryTreeGenerator'


interface IBinarySearchTreeProps {
    children: React.ReactNode
}
type IBinarySearchTreeContext = [(str: string) => void, string]

const BinarySearchTreeContext = createContext<IBinarySearchTreeContext>([() => null, '']);
const BinarySearchTreeProvider: React.FC<IBinarySearchTreeProps> = ({children}) => {
    const { handleBinaryTreeGenerator } = useBinaryTreeGenerator()
    const [bstIngredients, setBstIngredients] = useState<string>('')
    
    const handleUpdateBstIngredient = (str: string) => {
        setBstIngredients(str)
    }
    
    useEffect(() => {
        handleBinaryTreeGenerator(bstIngredients)
    }, [bstIngredients, handleBinaryTreeGenerator])

    return (
        <BinarySearchTreeContext.Provider 
            value={[
                handleUpdateBstIngredient,
                bstIngredients
            ]}
        >
            {children}
        </BinarySearchTreeContext.Provider>
    )
}

export { BinarySearchTreeContext, BinarySearchTreeProvider }