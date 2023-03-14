import { useContext } from 'react'
import { BinarySearchTreeContext } from "src/context/BinaryTreeContext";

export const useBinarySearchTreeContext = () => {
    const context = useContext(BinarySearchTreeContext);
    
    if (context === undefined) {
      throw new Error("useBinarySearchTreeContext was used outside of its Provider");
    }
    
    return context;
};