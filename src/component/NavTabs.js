import React from 'react'
import { NavLink } from 'react-router-dom'

const NavTabs = () => {

    const links = [
        { url: "/search", text: "All" },
        { url: "/images", text: "Images" },
        { url: "/videos", text: "Videos" },
        { url: "/news", text: "News" },
    ]
    return (
        <div>
            {
                links.map(({url, text}) => (
                    <NavLink to={url} activeClassName="text-danger">
                        {text}
                    </NavLink>
                ))
            }
        </div>
    )
}

export default NavTabs
