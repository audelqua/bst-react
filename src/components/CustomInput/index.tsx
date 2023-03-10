import React, { useEffect } from 'react'
import { useSearchDebounce } from 'src/hooks/useDebounce'
import styles from './CustomInput.module.css'

interface IBinaryInputProps { 
    handleGenerateTree: (query: string) => void
}
const BinaryInput: React.FC<IBinaryInputProps> = ({ handleGenerateTree }) => {
    const { handleChangeSearch, query } = useSearchDebounce()

    useEffect(() => {
        if(query) handleGenerateTree(query)
    }, [query])

    return <input className={styles['input-styles']} onChange={e => handleChangeSearch(e)} />
}

export default BinaryInput