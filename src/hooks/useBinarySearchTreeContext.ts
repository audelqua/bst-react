import { useContext } from 'react'
import { BinarySearchTreeContext } from "src/context/BinaryTreeContext";

export const useBinarySearchTreeContext = () => {
    // get the context
    const context = useContext(BinarySearchTreeContext);
    
    // if `undefined` it shows user is out of this context territory, So throw an error
    if (context === undefined) {
      throw new Error("useBinarySearchTreeContext was used outside of its Provider");
    }
    
    return context;
};