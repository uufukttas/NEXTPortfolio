import Link from "next/link"
import { useState, useEffect } from "react"
import NavbarStyles from '../styles/Navbar.module.css'

const Navigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(true);

    useEffect(() => {
        setIsNavExpanded(!isNavExpanded);
    }, []);

    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <h1 className={"text-4xl font-medium tracking-wider transition-colors text-gray-900 uppercase dark:text-white cursor-pointer"}>
                        UFUK TAS
                    </h1>
                </Link>

                <button aria-label="navigation_button" className={`${NavbarStyles.hamburger}`} onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div className={`${NavbarStyles['navigation-menu']} lg:w-1/4 `}>
                    <ul className={`${NavbarStyles['navigation-menu-list']} ${(isNavExpanded ? NavbarStyles.expanded : "")} lg:flex lg:justify-between`}>
                        <li className={`${NavbarStyles['navigation-menu-list-item']} py-4 lg:p-0`} onClick={() => { setIsNavExpanded(!isNavExpanded); }}>
                            <Link href="/projects" className={`${NavbarStyles['navigation-menu-list-item-link']} font-medium tracking-wider transition-colors text-gray-900 hover:text-yellow-500 uppercase dark:text-white`}>PROJECTS</Link>
                        </li>
                        <li className={`${NavbarStyles['navigation-menu-list-item']} py-4 lg:p-0`} onClick={() => { setIsNavExpanded(!isNavExpanded); }}>
                            <Link href="/blogs" className={`${NavbarStyles['navigation-menu-list-item-link']} font-medium tracking-wider transition-colors text-gray-900 hover:text-yellow-500 uppercase dark:text-white`}>BLOGS </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;