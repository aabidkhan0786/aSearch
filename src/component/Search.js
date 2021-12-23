import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce/lib'
import { useSearchContext } from '../context/searchContext'
import NavTabs from './NavTabs'

const Search = () => {

    const [text, setText] = useState("salman khan")
    const { setSearchItem } = useSearchContext()
    const [debounceValue] = useDebounce(text, 300)

    useEffect(() => {
        if (debounceValue) setSearchItem(debounceValue)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue])

    return (
        <div>
            <center>               
                <input  value={text} onChange={e => setText(e.target.value)} type="text" className='search_input my-3' placeholder='Make your search...' />
                {text && <button className='btn btn-outline-danger pb-1 btn_input' onClick={() => setText("")}>x</button>}
                <NavTabs />
            </center>
        </div>
    )
}

export default Search
