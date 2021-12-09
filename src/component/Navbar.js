import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
    return (
        <>
            <center>
                <div className="headline bg-primary">
                    <Link to="/">
                         <h3 className="font_head pt-2"><u>aSearch</u></h3>
                    </Link>
                </div>
            </center>
            <Search/>
        </>
    )
}

export default Navbar
