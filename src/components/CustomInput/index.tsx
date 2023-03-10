/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useSearchDebounce } from 'src/hooks/useDebounce'
import styles from './CustomInput.module.css'
import { useBinarySearchTreeContext } from 'src/hooks/useBinarySearchTreeContext'


const BinaryInput = () => {
    const { handleChangeSearch, query } = useSearchDebounce()
    const [ handleUpdateBstIngredient ] = useBinarySearchTreeContext()

    useEffect(() => {
        if(query) handleUpdateBstIngredient(query)
    }, [query])

    return <input className={styles['input-styles']} onChange={e => handleChangeSearch(e)} />
}

export default BinaryInput

