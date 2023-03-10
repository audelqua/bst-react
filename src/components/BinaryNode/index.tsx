/* eslint-disable react-hooks/exhaustive-deps */
import styles from './BinaryNode.module.css'

const BinaryNode = () => {
    return (
        <div className={styles['binary-node-wrapper']}>
            <div className={styles['left-tentacle']}/>
            <div className={styles['right-tentacle']}/>
            <div className={styles['binary-node-circle']}>
            </div>
        </div>
    )
}

export default BinaryNode

