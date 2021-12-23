import React, { useEffect } from 'react'
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import { useSearchContext } from '../context/searchContext'

const Results = () => {
    const { getResults, loading, result, searchItem } = useSearchContext()
    const location = useLocation()

    useEffect(() => {
        if (searchItem) {
            if (location.pathname === "/videos") {
                return getResults(`/search/q=${searchItem} video`)
            } else {
                return getResults(`${location.pathname}/q=${searchItem} &num=10`)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchItem, location.pathname])

    if (loading) {
        return (
            <>
                <center>
                    <h3 className='text-danger mt-5'>
                        "searching AAK's web"
                    </h3><br />
                    <div class="spinner-grow text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-secondary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-warning" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-info" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-light" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </center>
            </>
        )
    }


    switch (location.pathname) {
        case "/search":
            return (
                <>
                    <div className='row'>
                        {
                            result?.map(({ link, title }, index) => (
                                <>
                                    <div class="col-sm-6">
                                        <div className='m-5'>
                                            {/* <div className='col-10'> */}

                                            <a href={link} className='my-2'>
                                                <p className='text-dark'>
                                                    {title}
                                                </p>
                                                <p>
                                                    {link.length > 30 ? link.substring(0, 50) : link}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </>
            )
        case "/images":
            return (
                <>
                    <div class="card-columns">
                        {
                            result?.map(({ image, link: { title, href } }) => (
                                <>
                                    {/* 
                                <a href={href} >
                                <img src={image?.src} alt={title} />
                                <p>{title}</p>
                         
                            */}
                                    <a href={href} >
                                        <div class="card">
                                            <img src={image?.src} alt={title} class="card-img-top img-fluid" />
                                            <div class="card-body">
                                                <h5 class="card-title">{title}</h5>
                                                {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                            </div>
                                        </div>
                                    </a>
                                </>
                            ))
                        }
                    </div>
                </>)
        case "/news":
            return (
                <>
                    <div className='row'>
                        {
                            result?.map(({ links, id, source, title, published }, index) => (
                                <>
                                    {console.log({ links, id, source, title, published })}
                                    {/* <a href={links?.[0].href}> */}
                                    <div class="col-sm-6">
                                        <div class="card m-2">
                                            <div class="card-body">
                                                <h5 class="card-title "><u>{source?.title}</u></h5>
                                                <p class="card-text">{title}</p>
                                                {/* <a href={source?.href} class="btn btn-primary">visit source</a> */}
                                                <a href={links?.[0].href} class="btn btn-primary">visit source</a>
                                                <p class="card-text text-right font-italic"><small class="text-muted">{published && published.slice(0, 16)}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </a> */}
                                    {/* <div className='news_sec m-5'>

                                <a href={links?.[0].href}>
                                    <p>
                                        
                                    </p>
                                </a>
                                <a href={source?.href}>{source?.href}</a>
                            </div> */}
                                </>
                            ))
                        }
                    </div>
                </>
            )
        case "/videos":
            return (
                <>
                    {result.map(video => (<>
                        {console.log(video)}
                        {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls />}
                    </>))
                    }
                </>
            )

        default:
            return "ERROR!"
    }
}

export default Results
