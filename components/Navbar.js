// import React from "react";
import {useState, useEffect} from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';


const NavItem = ({name, href}) =>{
    return(
        <li className="nav-item" key={name}>
            <Link className="nav-link" href={href} scroll={false} >
                {name}
            </Link>
        </li>
    )
}

const NAV_ITEMS = [
    {name : "O mnie", href : "#about"},
    {name : "Technologie", href : "#technologies"},
    {name : "Projekty", href : "#projects"},
    {name : "Kontakt", href : "#contact"},
]

const Navbar = () => {

    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        let yof = window.pageYOffset;
        // let elDistanceToTop = el.getBoundingClientRect().top;

        const onScroll = () => {
            if (window.scrollY < 150) {
                setScrolled(0);
            } else {
                setScrolled(1);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={
                scrolled
                    ? `scrolled${scrolled} navigation fixed-top rajdhani my-0 py-0  navbar-expand-lg`
                    : "navigation rajdhani fixed-top my-0 py-0  navbar-expand-lg"
            }
        >
            <nav className="  h-100 p-0 navbar py-3 py-lg-0">
                <a
                    className="navbar-brand  m-0 p-0 h-100 d-flex align-items-center "
                    href="/pages"
                >
                    <img src="/logo.png" alt="logo"/>
                </a>
                <button
                    className="navbar-toggler mx-2"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse d-lg-flex
                        justify-content-lg-end px-lg-4 p-1"
                    id="navigation"
                >
                    <ul className="navbar-nav pt-3 pt-lg-0 px-2 ">
                        {
                            NAV_ITEMS.map(NavItem)
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;
