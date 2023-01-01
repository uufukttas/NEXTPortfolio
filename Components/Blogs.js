import blogs from '../Constants/Projects/blogs.json'
const image = '/assets/todolist.png';

function Projects() {
    return (
        <main className="max-w-4xl mx-auto antialiased">
            <div className="container px-4 mx-auto">
                <div className="lg:space-x-5 lg:flex lg:flex-col item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                    <div className="lg:px-4 lg:mt-12 w-full">
                        <ul className="block lg:flex flex-col items-stretch justify-between">
                            {
                                blogs.map((blog) => (
                                    <li key={blog.id} className="py-3">
                                        <a href={blog.url}>
                                            <p className="font-bold">{blog.name}</p>
                                            <p className="project-description truncate">{blog.description}</p>
                                        </a>
                                        <div className="h-1 bg-yellow-500"></div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects;