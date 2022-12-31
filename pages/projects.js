import projects from '../Constants/Projects/projects.json'

function Projects() {
    return (
        <main className="max-w-4xl mx-auto mt-16 antialiased">
            <div className="container px-4 mx-auto">
                <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                    <div className="lg:px-4 lg:mt-12 w-full">
                        <ul className="block lg:flex items-center justify-between">
                            {
                                projects.map((project) => <li><p>{project.name}</p><p>{project.description}</p></li> )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects