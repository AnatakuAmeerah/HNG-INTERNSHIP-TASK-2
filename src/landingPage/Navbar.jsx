import '../App.css'
import { Link } from "react-router-dom";
import { links } from './data';
import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop


        window.scrollTo({
            left: 0,
            top: location - 120,
        })
    }

    return (
        <section className="nav-bar">
            <div > <img className="logo" src="./Frame 21.svg" alt="logo" /></div>
            <div className="nav-items">
                <div className="search-bar">
                    <img className='search-icon' src="./teenyicons_search-outline.svg" alt="" />
                    <input className='search-input' type="text" placeholder='Search Anything' />
                </div>
                <div id="menu-items" className={menuOpen ? "open" : ""}>
                <div id="li" >
                    {links.map((link) => {
                        return (
                            <a href={link.url} key={link.id} onClick={handleClick}>{link.text} </a>
                        )
                    })}
                </div>
                </div>
                <Link className="link" to="/checkout">
                    <div className="cart-logo"><img src="./solar_cart-line-duotone (1).svg" alt="cart" /></div>
                </Link>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
        </section>
    )
}
export default Navbar

