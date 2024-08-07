import { useState } from "react";
import Datas from "@/data/dataJson.json";
import { Store, Fingerprint, Message, Group } from '@mui/icons-material';

const Card = ({ projects, onViewAll }) => {
    const configData = Datas[0];

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const svgClass = isHovered
        ? "w-6 h-6 text-gray-500 transition delay-150"
        : "w-6 h-6 text-gray-300";

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Store':
                return <Store className="w-full h-full" />;
            case 'Fingerprint':
                return <Fingerprint className="w-full h-full" />;
            case 'Message':
                return <Message className="w-full h-full" />;
            case 'Group':
                return <Group className="w-full h-full" />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="px-2">
                <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 ">
                    <div className="flex items-center justify-between mb-5">
                        <div className="font-medium text-lg flex items-center gap-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            Projects
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {projects.map((project, index) => (
                            <a
                                key={index}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                                href={project['project-url']}
                                target="_blank"
                            >
                                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200 hidden md:block">
                                    <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                                        {getIcon(project["project-image-icon"])}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h1 className="font-medium text-lg">
                                        {project["project-name"]}
                                    </h1>
                                    <p className="text-gray-500 text-md">
                                        {project["project-desc"]}
                                    </p>
                                </div>
                                <button className="ml-auto hidden md:inline-block">
                                    <svg
                                        className={svgClass}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </button>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;