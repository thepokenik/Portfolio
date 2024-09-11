import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

const animationProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
    }
};

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    stack: string[];
    githubLink?: string | null;
    deployLink?: string | null;
}

export default function ProjectCard({ title, description, image, stack, githubLink, deployLink }: ProjectCardProps) {
    return (
        <motion.div
            {...animationProps}
            className="bg-primary/70 p-6 rounded-lg col-span-1">
            <div className="flex flex-col gap-2 justify-between h-full">
                {image && <img src={image} alt={title} className="w-full h-full rounded-lg object-contain " />}
                <div className="flex flex-col gap-2 h-full">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <div className="flex gap-2">
                        {stack && stack.map((item, index) => (
                            <Badge key={index} className="bg-card/60 text-primary-foreground">
                                {item}
                            </Badge>
                        ))
                        }
                    </div>
                </div>
                <div className='flex flex-col bg-card/10 rounded gap-4 p-4'>
                    <p className="text-xl text-justify">
                        {description}
                    </p>
                    <div className='flex gap-2'>
                        {githubLink && <Button variant="outline" asChild>
                            <a href={githubLink}>
                                <ArrowUpRight className="mr-2 h-4 w-4" />GitHub
                            </a>
                        </Button>
                        }
                        {deployLink && <Button variant="outline" asChild>
                            <a href={deployLink}>
                                <ArrowUpRight className="mr-2 h-4 w-4" />Website
                            </a>
                        </Button>
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
}