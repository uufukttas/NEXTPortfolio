import Link from "next/link"
import React from "react"

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <h1>
                        <a
                            className={"text-4xl font-medium tracking-wider transition-colors text-gray-900 uppercase dark:text-white cursor-pointer"}
                        >
                            UFUK TAS
                        </a>
                    </h1>
                </Link>
                <div className="flex w-1/4 justify-between">
                    <Link href="/projects">
                        <a
                            className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-yellow-500 uppercase dark:text-white"}
                        >
                            PROJECTS
                        </a>
                    </Link>
                    <Link href="/blogs">
                        <a
                            className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-yellow-500 uppercase dark:text-white"}
                        >
                            BLOGS
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;