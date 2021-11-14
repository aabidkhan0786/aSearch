import React,{createContext,useState} from 'react';
import { Children } from 'react';


const SearchContext = createContext();
const baseUrl ='https://google-search3.p.rapidapi.com/api/v1/'

export const searchResultProvider=({children})=>{
    const [result,setResult] = useState([])
    const [loading,setLoading] =useState(false)
    const [searchItem,setSearchItem] = useState('')

    const getResults =async (type)=>{
        setLoading(true)

        const response = await fetch(`${baseUrl}${type}`,{
            method:"GET",
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '7adbc76f25mshd0851bafd0c3ecap1c3854jsn3bee5619d6ae'
              }
        })
        const data = await response.json()

        setResult(data)
        setLoading(false);
    }

    return(
        <SearchContext.Provider value={{getResults, loading,result,searchItem,setSearchItem}}>
            {Children}
        </SearchContext.Provider>
    )

}

export const useSearchContext = () => useContext(SearchContext)