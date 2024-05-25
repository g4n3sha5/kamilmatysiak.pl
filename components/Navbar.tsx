import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import cx from "classnames";
import Image from "next/image";
import { LanguageCode } from "@/utils/types";

interface NavItem {
  name: string;
  href: string;
}

export const Navbar = () => {
  const navRef = useRef<HTMLDivElement>();
  const { t } = useTranslation("index");
  const [scrolled, setScrolled] = useState(0);
  const scrollClassName = "scrolled" + scrolled;
  const { locale, locales } = useRouter();
  const secondLang = locales.filter((lang) => lang !== locale)[0];

  const navItems: NavItem[] = [
    { name: t("About"), href: "#about" },
    { name: t("ToolsNav"), href: "#tools" },
    { name: t("Projects"), href: "#projects" },
    { name: t("Contact"), href: "#contact" },
  ];

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("navShow");
    }
  };

  useEffect(() => {
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
      className={cx(
        scrollClassName,
        "navigation fixed-top navbar-dark rajdhani my-0 py-0  navbar-expand-xl slideInTop",
      )}
    >
      <nav className="h-100 p-0 navbar  py-lg-0">
        <Link
          className="navbar-brand  m-0 p-0 h-100 d-flex align-items-center "
          href="/"
        >
          <Image width={270} height={56} src="/images/logotyp.png" alt="logo" />
        </Link>
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

        <div
          ref={navRef}
          className={cx(
            "navbar-collapse d-xl-flex justify-content-center text-center justify-content-xl-end px-lg-4 p-1",
            { scrolled: `scrolledCollapse${scrolled}` },
          )}
          id="navigation"
        >
          <ul className="navbar-nav pt-3 pt-xl-0 px-2 d-flex justify-content-center mb-5 mb-xl-0 ">
            {navItems.map((navItem) => (
              <NavItem key={navItem.href} {...navItem} />
            ))}

            <div className="mx-lg-5 mt-3 mt-1 mt-lg-0 my-0  d-flex justify-content-center align-items-center">
              <div className="langSwitcher d-flex text-white justify-content-center align-items-center">
                <div className="font-700">{locale}</div>
                <div className="mx-2 font-700 ">|</div>
                <Link
                  href="/"
                  locale={secondLang as LanguageCode}
                  className="secondLang"
                >
                  {secondLang}
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ name, href }: NavItem) => {
  return (
    <li className="nav-item text-nowrap" key={name}>
      <Link className="nav-link text-white" href={href} scroll={false}>
        {name}
      </Link>
    </li>
  );
};
