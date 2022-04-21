import {useState} from 'react';
import './NavBar.css'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from "react-icons/bs";
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from "react-icons/fa";

import {Link} from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    function handleNav(){
        setNav(!nav)
    }


    return (
        <div name='home' className={nav ? 'navbar navbarBg' : 'navbar'}>
            <div className={nav ? "logo black" : 'logo'}>
                <h2>Places.</h2>
            </div>

            <ul className="navMenu">
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500}><li>Destination</li></Link>
                <Link to='views' smooth={true} duration={500}><li>Views</li></Link>
                <Link to='search' smooth={true} duration={500}><li>Book</li></Link>

            </ul>

            <div className="navIcons">
                <BiSearch className='icon'/>
                <BsPerson className='icon'/>
            </div>

            <div className="menu" onClick={handleNav}>
                {!nav ? <AiOutlineMenu className='icon' /> : <AiOutlineClose className='icon darkIcon'/> }


            </div>

            <div className={nav ? 'mobileMenu active': "mobileMenu"}>
                <ul className="mobileNav">
                    <li>Home</li>
                    <li>Destination</li>
                    <li>Travel</li>
                    <li>Book</li>
                    <li>Views</li>
                </ul>

                <div className="mobileMenuBottom">
                    <div className="menuIcons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="socialIcons">
                        <FaFacebook className='icon'/>
                        <FaInstagram className='icon'/>
                        <FaTwitter className='icon'/>
                        <FaYoutube className='icon'/>
                    </div>

                </div>


            </div>



        </div>
    );
};

export default NavBar;