/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useBinaryTreeGenerator } from 'src/hooks/useBinaryTreeGenerator'
import { useBinarySearchTreeContext } from 'src/hooks/useBinarySearchTreeContext'
import BinaryTree from 'src/components/BinaryTree'
import styles from './BinarySearchTreeView.module.css'
import { INodeObject } from 'src/GeneralTypes'

interface IBstNodes { 
    root: INodeObject
}
const BinarySearchTreeView = () => {
    const { handleBinaryTreeGenerator } = useBinaryTreeGenerator()
    const [ ,bstIngredients ] = useBinarySearchTreeContext()
    const [bstNodes, setBstNodes] = useState<IBstNodes>()
    
    useEffect(() => {
        const newTree = handleBinaryTreeGenerator(bstIngredients)
        setBstNodes(newTree)
    }, [bstIngredients])
    
    return (
        <div className={styles['tree-wrapper']}>
            {bstNodes?.root.value &&
                <BinaryTree bstData={bstNodes?.root} />
            }
        </div>
    )
}

export default BinarySearchTreeView