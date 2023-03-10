import React, { createContext } from 'react'

interface IBinarySearchTreeProps {
    children: React.ReactNode
}

const BinaryTreeContext = createContext(undefined);
const BinaryTreeProvider: React.FC<IBinarySearchTreeProps> = ({children}) => {
    return (
        <BinaryTreeContext.Provider 
            value={undefined}
        >
            {children}
        </BinaryTreeContext.Provider>
    )
}

export { BinaryTreeContext, BinaryTreeProvider }