import React,{createContext,useState,useContext} from 'react';

const SearchContext = createContext();
const baseUrl ='https://google-search3.p.rapidapi.com/api/v1'

export const SearchResultProvider=({children})=>{
    const [result,setResult] = useState([])
    const [loading,setLoading] =useState(false)
    const [searchItem,setSearchItem] = useState('salman khan')

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
        console.log(data);

        if(type.includes("/images")){
            setResult(data.image_results)
        }else if(type.includes("/news")){
            setResult(data.entries)
        }else{
            setResult(data.results)
        }
        setLoading(false);
    }

    return(
        <SearchContext.Provider value={{getResults, loading,result,searchItem,setSearchItem}}>
            {children}
        </SearchContext.Provider>
    )

}

export const useSearchContext = () => useContext(SearchContext)