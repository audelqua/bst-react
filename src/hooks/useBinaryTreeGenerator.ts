import { BinarySearchTree } from "src/helpers/binarySearchTree"

export const useBinaryTreeGenerator = () => {    
    const bstInstance = new BinarySearchTree()
    const handleBinaryTreeGenerator = (rawIngredient: string) => {

        let tempNodes: string[] = []
        tempNodes = rawIngredient.trim().split(/\s+/)
        
        tempNodes.forEach(node => {
            bstInstance.insert(node)
        })
        return bstInstance
    }
    
    return { 
        handleBinaryTreeGenerator, 
    }
}