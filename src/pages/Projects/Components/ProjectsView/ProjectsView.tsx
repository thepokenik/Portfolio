import { motion } from 'framer-motion';
import { FileCode2, FileLock2 } from 'lucide-react';
import ProjectCard from './Components/ProjectsCards/ProjectsCards';
import cloverImage from "@/assets/clover-overview.png";
import photocvImage from "@/assets/photocv-overview.png";

const animationProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
    }
};

export default function ProjectsView() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 grid grid-rows-4 gap-4">
                <motion.div
                    {...animationProps}
                    className="bg-primary/70 p-6 rounded-lg row-span-1">
                    <div className="flex flex-col justify-between h-full py-4 px-4 gap-2">
                        <FileCode2 className='w-8 h-8' />
                        <div>
                            <p className="text-xl text-muted-foreground text-balance">
                                Open Source projects that I have been working on my journey as a developer.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 row-span-4">
                    <ProjectCard
                        title="Clover"
                        image={cloverImage}
                        stack={["React", "Tailwind", "Spring", "MongoDB", "Docker"]}
                        description="This is my Final Paper Project for my Systems Development Degree. It is a web application that allows users to manage the code versioning of their projects."
                        githubLink="https://github.com/Clover-Organization/Clover"
                        deployLink="https://clover-eight.vercel.app/Welcome"
                    />
                    <ProjectCard
                        title="PhotoCV"
                        image={photocvImage}
                        stack={["Python", "PySide6", "OpenCV", "PyTorch"]}
                        description="Project for studying the PySide6 and OpenCV libraries, created to streamline the use of OpenCV filters and functionalities on photos through a desktop application."
                        githubLink="https://github.com/thepokenik/photocv"
                    />
                </div>
            </div>
            <div className="grid grid-rows-3 gap-4">
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.7, 0.2, 1]
                    }}
                    style={{ transformOrigin: "center" }}
                    className="bg-primary/70 p-6 rounded-lg flex flex-col justify-end"
                >
                    <div className="flex flex-col justify-between h-full py-4 px-4 gap-2">
                        <div className="flex-grow flex">
                            <FileLock2 className='w-8 h-8' />
                        </div>
                        <div>
                            <p className="text-xl text-muted-foreground text-balance">
                                Private projects that I have been working on my journey as a developer.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <ProjectCard
                    title="OCR Tag Reader"
                    stack={["Python", "EasyOCR", "OpenCV", "PyTorch"]}
                    description="Worked on the development of a character recognition system (OCR) for the identification of tags in images."
                />
                <ProjectCard
                    title="Computer Vision & AI Software"
                    stack={["React", "Django", "PostgreSQL", "OpenCV", "PyTorch"]}
                    description="Software for inspection and monitoring of processes in industries with computer vision and AI systems."
                />
            </div>
        </main>
    )
}