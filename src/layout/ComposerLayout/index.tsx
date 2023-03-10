import BinarySearchTreeView from 'src/components/BinarySearchTreeView'
import BinaryInput from 'src/components/CustomInput'
import styles from './ComposerLayout.module.css'

const ComposerComponent = () => {
    return (
        <div className={styles['layoutWrapper']}>
            <BinaryInput />
            <BinarySearchTreeView />
        </div>
    )
}

export default ComposerComponent