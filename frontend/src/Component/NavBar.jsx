import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Github</a></li>
                        <li>
                            <a>Member</a>
                            <ul className="p-2">
                                <li><a>Harshvardhan </a></li>
                                <li><a>Vaibhav</a></li>
                                <li><a>Swayam</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Fuzzy AQI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Github</a></li>
                    <li><a>Refrences</a></li>
                    <li>
                        <details>
                            <summary>Members</summary>
                            <ul className="p-2">
                                <li><a>Harshvardhan </a></li>
                                <li><a>Vaibhav</a></li>
                                <li><a>Swayam</a></li>
                            </ul>
                        </details>
                    </li>
                    
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn" href='https://swayam-three.vercel.app/contact' target='_blank'>Contact</a>
            </div>
        </div>
    )
}

export default NavBar
