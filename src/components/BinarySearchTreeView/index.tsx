/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useState } from 'react'
import { useBinaryTreeGenerator } from 'src/hooks/useBinaryTreeGenerator'
import { useBinarySearchTreeContext } from 'src/hooks/useBinarySearchTreeContext'
import BinaryNode from 'src/components/BinaryNode'
import styles from './BinarySearchTreeView.module.css'

const BinarySearchTreeView = () => {
    const { handleBinaryTreeGenerator } = useBinaryTreeGenerator()
    const [ ,bstIngredients ] = useBinarySearchTreeContext()
    const [bstNodes, setBstNodes] = useState<any>()
    console.log('bstNodes', bstNodes);
    
    useLayoutEffect(() => {
        const newTree = handleBinaryTreeGenerator(bstIngredients)
        setBstNodes(newTree)
    }, [bstIngredients])
    
    return (
        <div className={styles['tree-wrapper']}>
            <BinaryNode />
            <BinaryNode />
            <BinaryNode />
        </div>
    )
}

export default BinarySearchTreeView
