import { projects } from "../../../data/projects"

const ProjectsPanel = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 mt-6">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="rounded-xl overflow-hidden bg-[#0f172a] border border-[#1e293b] text-white"
                >
                    <div className="relative">
                        <img
                            src={project.image}
                            alt={project.slug}
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-[#0f172a] p-1 rounded">
                            {
                                <project.tech.icon className="text-[#62748E] text-[18px]" />
                            }
                        </div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-[#62748E] font-bold text-sm mb-1">
                            Project {index + 1}{" "}
                            <span className="text-slate-400 font-normal"> // _{project.slug}</span>
                        </h2>
                        <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                        <button className="text-[13px] bg-[#1e293b] px-4 py-2 rounded text-white">
                            view-project
                        </button>
                    </div>
                </div>
            ))}
        </div>)
}

export default ProjectsPanel