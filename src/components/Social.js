import getData from "@/data/dataJson.json";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Social() {
    const socialLinks = getData[0].social;
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <div className="px-2">
                <div className="flex items-center justify-between px-7 py-7 bg-gray-100 rounded-lg">
                    <div className="font-medium text-lg flex items-center gap-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        Find Me
                    </div>
                    <div className="flex gap-x-1">
                        {socialLinks.map((socialLink, index) => {
                            const iconMap = {
                                Twitter,
                                Instagram,
                                GitHub,
                                LinkedIn,
                            };
                            const IconComponent = iconMap[socialLink.icon];
                            const svgClass = hoveredIndex === index
                                ? "w-6 h-6 text-gray-500 transition delay-150"
                                : "w-6 h-6 text-gray-300";
                            return (
                                <a key={index} href={socialLink.link} className="bg-white p-2 rounded-full duration-300 border-2 border-gray-100 hover:border-gray-200 drop-shadow-sm" onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}>
                                    {<IconComponent className={svgClass} size={20} />}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}