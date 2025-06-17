import { projects } from "../../../data/projects"

const ProjectsPanel = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6  mt-6">

            {projects.map((project, index) => (

                <div
                    key={index}
                >
                    <h2 className="text-[#615FFF] font-[700] text-[16px] mb-[16px]">
                        Project {index + 1}{" "}
                        <span className="text-[#90A1B9] font-[450]"> // _{project.slug}</span>
                    </h2>
                    <div className="rounded-[16px] overflow-hidden bg-[#0f172a] border border-[#1D293D] text-white"
                    >

                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.slug}
                                className="h-48 "
                            />
                            <div className="absolute top-2 right-2 bg-[#A3B3FF] p-[5px] rounded-[4px]">
                                {
                                    <project.tech.icon className="text-[#0F172B] w-[18px] h-[18px]" />
                                }
                            </div>
                        </div>
                        <div className="px-5 py-[32px] bg-[#020618]">

                            <p className="text-[#90A1B9] font-[450]  mb-4">
                                {project.description.length > 60
                                    ? `${project.description.slice(0, 57)}...`
                                    : project.description}
                            </p>
                            <button className="text-[14px] bg-[#45556C] px-4 py-3 rounded-[8px] text-[#F8FAFC]">
                                view-project
                            </button>
                        </div>
                    </div>


                </div>
            ))}
        </div>)
}

export default ProjectsPanel