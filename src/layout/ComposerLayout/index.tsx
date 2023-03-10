import BinarySearchTreeView from 'src/components/BinarySearchTreeView'
import BinaryInput from 'src/components/CustomInput'
import styles from './ComposerLayout.module.css'

const ComposerComponent = () => {       
    return (
        <div className={styles['layout-wrapper']}>
            <h3>Binary Search Tree</h3>
            <BinaryInput />
            <BinarySearchTreeView />
        </div>
    )
}

export default ComposerComponent