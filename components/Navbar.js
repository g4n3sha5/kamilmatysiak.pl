// import React from "react";
import {useState, useEffect, useRef} from "react";
import Link from 'next/link';
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";


const NavItem = ({name, href}) => {
    return (
        <li className="nav-item" key={name}>
            <Link className="nav-link" href={href} scroll={false}>
                {name}
            </Link>
        </li>
    )
}

const LangComponent = ({lang, status}) => {
    if (status === 'locale') {
        return (
            <div key={lang} className={`${status} fitImg flagIMG`}>
                <img alt="flag icon" src={lang + 'flag.png'}/>
            </div>
        )
    }

    else if (status === 'secondLang') {
        return (
            <div key={lang} className={`${status} fitImg flagIMG`}>
                <Link href={'/'} locale={lang}>
                    <img alt="flag icon" src={lang + 'flag.png'}/>
                </Link>

            </div>
        )
    }


}

const LanguageSwitcher = ({}) => {
    const {locale, locales, push} = useRouter()
    const secondLang = locales.filter(lang => lang !== locale)[0]
    const handleClick = lang => {
        push('/', undefined, {locale: lang})
    }

    return (
        <div className=" mx-lg-5 mt-1  my-0 flagWrap ">

            <LangComponent status="locale" lang={locale}/>
            <LangComponent status="secondLang" lang={secondLang}/>

        </div>
    )
}

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {

        navRef.current.classList.toggle('navShow')

    }

    const {locale} = useRouter()
    const {t} = useTranslation('index')

    const NAV_ITEMS = [
        {name: t(`${"About"}`), href: "#about"},
        {name: t(`${"Technologies"}`), href: "#technologies"},
        {name: t(`${"Projects"}`), href: "#projects"},
        {name: t(`${"Contact"}`), href: "#contact"},
    ]
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        // let yof = window.pageYOffset;
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
                    ? `scrolled${scrolled} navigation fixed-top navbar-dark rajdhani my-0 py-0 navbar-expand-xl slideInTop`
                    : "navigation fixed-top navbar-dark rajdhani my-0 py-0  navbar-expand-xl slideInTop"
            }
        >
            <nav className="  h-100 p-0 navbar  py-lg-0">
                <a
                    className="navbar-brand  m-0 p-0 h-100 d-flex align-items-center "
                    href="/pages"
                >
                    <img src="/logo.png" alt="logo"/>
                </a>
                <button
                    className="navbar-toggler mr-3"
                    type="button"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => showNavbar()}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div ref={navRef}
                     className={
                         scrolled
                             ? `scrolled${scrolled}  navbar-collapse d-xl-flex 
                        justify-content-center text-center justify-content-xl-end px-lg-4 p-1 `
                             : "navbar-collapse d-xl-flex justify-content-center text-center  justify-content-xl-end px-lg-4 p-1 "}
                     id="navigation"
                >
                    <ul className="navbar-nav pt-3 pt-xl-0 px-2 d-flex justify-content-center mb-5 mb-xl-0 ">
                        {
                            NAV_ITEMS.map(NavItem)

                        }

                        <LanguageSwitcher/>

                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;
