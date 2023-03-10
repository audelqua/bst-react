/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useState } from 'react'
import { useBinaryTreeGenerator } from 'src/hooks/useBinaryTreeGenerator'
import { useBinarySearchTreeContext } from 'src/hooks/useBinarySearchTreeContext'

const BinarySearchTreeView = () => {
    const { handleBinaryTreeGenerator } = useBinaryTreeGenerator()
    const [ _, bstIngredients ] = useBinarySearchTreeContext()
    const [bstNodes, setBstNodes] = useState<any>()

    useLayoutEffect(() => {
        const newTree = handleBinaryTreeGenerator(bstIngredients)
        setBstNodes(newTree)
    }, [bstIngredients])
    
    return (
        <div>
            
        </div>
    )
}

export default BinarySearchTreeView