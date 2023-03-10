import { BinarySearchTree } from "src/helpers/binarySearchTree"

export const useBinaryTreeGenerator = () => {
    console.log('called');
    
    const bstInstance = new BinarySearchTree()
    const handleBinaryTreeGenerator = (rawIngredient: string) => {
        let tempNodes: string[] = []
        tempNodes = rawIngredient.trim().split(/\s+/)
        
        tempNodes.forEach(node => {
            bstInstance.insert(node)
        })
        
    }
    console.log('bstInstance', bstInstance);
    
    return { handleBinaryTreeGenerator }
}