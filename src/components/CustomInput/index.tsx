import { useSearchDebounce } from 'src/hooks/useDebounce'

const BinaryInput = () => {
    const { handleChangeSearch } = useSearchDebounce()

    return <input onChange={e => handleChangeSearch(e)} />
}

export default BinaryInput