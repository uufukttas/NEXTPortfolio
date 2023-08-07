import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"

const Main = () => {
    return (
        <main className="max-w-4xl mx-auto antialiased py-16 lg:py-36">
            <div className="container px-4 mx-auto">
                <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                    <div className="lg:px-4 lg:mt-12 ">
                        <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                            Hey there, I am Ufuk
                        </h1>
                        <div className="mt-6 text-gray-800 dark:text-white">
                            <p className="mb-4">
                            As a Frontend Developer, I am dedicated to bringing innovation and aesthetics to the web world. Having a solid foundation in HTML, CSS and JavaScript, I lay the foundation for user-friendly interfaces.
                            <br/>
                            <br/>

                            Using the React framework, I develop fast and dynamic web applications that center the user experience. In addition, I have adopted technologies such as Next.js, Gatsby, and Remix, so I can implement projects more efficiently.

                            <br/>
                            <br/>
                            Working with design systems such as Tailwind, MaterialUI, SemanticUI, Bootstrap, I produce minimalist and impressive designs. Thanks to my problem-solving skills, I am open to learning and teaching while solving complex problems.                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 lg:mt-12 lg:px-4 mb-10 justify-center items-center">
                        <Image
                            src={profile}
                            alt="Profile"
                            priority={true}
                            className="rounded-full"
                            width={250}
                            height={250}
                            placeholder="blur"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;