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
                        <li><a href='https://github.com/rajkaushal03/AQI_Model'>Github</a></li>

                        <li>
                            <a>Member</a>
                            <ul className="p-2">
                                <li><a href='https://www.linkedin.com/in/dataexpertharsh/'>Harshvardhan </a></li>
                                <li><a href='https://www.linkedin.com/in/vaibhav-arya-717853202/'>Vaibhav</a></li>
                                <li><a href='https://www.linkedin.com/in/swayamkaushal/'>Swayam</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="font-bold uppercase px-3 text-xl cursor-pointer" onClick={() => window.location.reload()}>Fuzzy AQI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='https://github.com/rajkaushal03/AQI_Model'>Github</a></li>

                    <li>
                        <details>
                            <summary>Members</summary>
                            <ul className="p-2">
                                <li><a href='https://www.linkedin.com/in/dataexpertharsh/'>Harshvardhan </a></li>
                                <li><a href='https://www.linkedin.com/in/vaibhav-arya-717853202/'>Vaibhav</a></li>
                                <li><a href='https://www.linkedin.com/in/swayamkaushal/'>Swayam</a></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-accent text-black" href='https://swayam-three.vercel.app/contact' target='_blank'>Connect with us...</a>
            </div>
        </div>
    )
}

export default NavBar
