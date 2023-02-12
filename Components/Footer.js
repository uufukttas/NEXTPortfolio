import React from "react";

const Footer = () => {
    return (
        <div className="lg:mt-18 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white flex items-center justify-center flex-col">
                <div className="border-t-2 border-gray-300 dark:border-white-300 w-full"></div>
                <div className="flex flex-col justify-center lg:flex-row items-center w-full py-2">
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="https://twitter.com/uufukttas"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://linkedin.com/in/uufukttas"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/uufukttas"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://uufukttas.medium.com/"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Medium
                        </a>
                        <a
                            href="mailto:uufukttas@gmail.com"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Gmail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;