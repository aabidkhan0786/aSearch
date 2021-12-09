import React, { useEffect } from 'react'
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import { useSearchContext } from '../context/searchContext'

const Results = () => {
    const {getResults, loading,result,searchItem,setSearchItem} = useSearchContext()
    const location = useLocation()

    useEffect(()=>{
        if(searchItem){
            if(location.pathname == "/videos"){
                return getResults(`/search/q=${searchItem} video`)
            }else{
                return getResults(`${location.pathname}/q=${searchItem} &num=10`)
            }
        }
    },[searchItem,location.pathname])

        if(loading) return "loading the context";
        
console.log(location.pathname);
        switch (location.pathname) {
            case "/search":
                return(
                    <>
                        {
                            result?.map(({link,title},index)=>(
                                <a href={link}>
                                        <p>
                                            {link.length >30? link.substring(0,30):link}
                                        </p>
                                        <p>
                                            {title}
                                        </p>
                                </a>
                            ))
                        }
                    </>
                )
            case "/images":
                return(
                    <>
                    {
                        result?.map(({image,link:{title,href}})=>(
                         <a href={href} >
                             <img src={image?.src} alt={title} />
                             <p>{title}</p>
                         </a>
                        ))
                    }
               </> )
            case "/news":
                return(
                    <>
                        {
                            result?.map(({links,id,source,title},index)=>(
                                <>
                                <a href={links?.[0].href}>
                                        <p>
                                            {title}
                                        </p>
                                </a>
                                 <a href={source?.href}>{source?.href}</a>
                                 </>
                            ))
                        }
                    </>
                )
            case "/videos":
                return(
                    <>
                    {result.map(video=>(
                        <ReactPlayer url={video.additional_links[0].href} controls />
                    ))            
                    }
                    </>
                )
           
            default:
                return "ERROR!"
        }
}

export default Results
