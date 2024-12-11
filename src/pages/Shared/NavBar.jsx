import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/learning'>Start-Learning</Link></li>
        <li><Link to='/tutorials'>Tutorials</Link></li>
        <li><Link to='/aboutUs'>About-Us</Link></li>


    </>
    return (

        <div className="navbar sticky z-10 top-0 bg-white bg-opacity-45 backdrop-blur-xl ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-[#9660ea] lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#9660ea] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-base md:text-2xl text-black font-bold tracking-wide relative group">
                    JOB
                    <i><span className="text-red-500 font-extrabold font-portal">PORTAL</span></i>
                    <div className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-red-500 to-black transition-all duration-300 group-hover:w-full"></div>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl ">
                    {
                        links
                    }
                </ul>
            </div>

            <div className='navbar-end gap-1'>
                <>
                    {
                        user ? <> <button onClick={signOutUser} className='btn'>Sign Out</button> </> : <>  <Link to={`signin`} className="btn">Sign In</Link>
                            <Link to={'register'} className="btn">Register</Link></>

                    }
                </>


            </div>



        </div>

    );
};

export default NavBar;