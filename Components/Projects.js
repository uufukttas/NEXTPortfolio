import Image from 'next/image'
import projects from '../Constants/Projects/projects.json'
import ProjectStyles from '../styles/Project.module.css';
const image = '/assets/todolist.png';

function Projects() {
    return (
        <main className="max-w-4xl mx-auto mt-16 antialiased">
            <div className="container px-4 mx-auto">
                <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                    <div className="lg:px-4 lg:mt-12 w-full">
                        <ul className="block lg:flex items-stretch justify-between">
                            {
                                projects.map((project) => (
                                    <li key={project.id} className={`${ProjectStyles['project-link']}`}>
                                        <a href={project.url}>
                                            <Image
                                                src={project.image}
                                                width={1280}
                                                height={720}

                                            />
                                            <div className={`${ProjectStyles['project-content']}`}>&#128269;</div>
                                            <p className="font-bold">{project.name}</p>
                                            <p className="project-description">{project.description}</p>
                                        </a>
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