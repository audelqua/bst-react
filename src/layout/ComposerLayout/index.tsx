import BinarySearchTreeView from 'src/components/BinarySearchTreeView'
import BinaryInput from 'src/components/CustomInput'
import styles from './ComposerLayout.module.css'
import { useBinarySearchTreeContext } from 'src/hooks/useBinarySearchTreeContext'

const ComposerComponent = () => {
    const [ handleUpdateBstIngredient ] = useBinarySearchTreeContext()
    
    return (
        <div className={styles['layout-wrapper']}>
            <h3>Binary Search Tree</h3>
            <BinaryInput handleGenerateTree={(query) => handleUpdateBstIngredient(query)}/>
            <BinarySearchTreeView />
        </div>
    )
}

export default ComposerComponent