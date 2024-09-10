import { motion } from 'framer-motion';
import { BrainCog, Github, Linkedin, Instagram, ArrowUpRight, Layers, AtSign, BrainCircuit } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import portraitImage from "@/assets/Nikolas_1x1.png"

const animationProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
        duration: 1,
        delay: 2,
        ease: [0, 0.71, 0.2, 1.01]
    }
};

export default function Portfolio() {
    const handleRefresh = () => {
        window.location.reload();
    };

    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (step < 3) setStep(step + 1);
        }, 500);

        return () => clearTimeout(timer);
    }, [step]);

    const variants = {
        initial: { scale: 1.2, x: -100, y: 100, transition: { duration: 0.5 } },
        shrink: { scale: 1, transition: { duration: 0.5 } },
        center: { x: 0, y: 0, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <main className="grid grid-cols-3 auto-cols-max gap-4">
            <div className="grid grid-rows-5 gap-4 col-span-2 h-full ">
                <div className="grid grid-cols-3 gap-4 row-span-3">
                    <motion.div
                        {...animationProps}
                        className="bg-primary/70 p-6 rounded-lg text-primary-foreground col-span-2">
                        <div className="flex flex-col justify-between h-full py-4 px-4">
                            <div className="flex-grow flex justify-end">
                                <BrainCircuit className='w-36 h-36' />
                            </div>
                            <div>
                                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                    Computer Vision and AI
                                    FullStack Software Developer
                                </h1>
                            </div>
                        </div>

                    </motion.div>
                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate={step === 0 || step === 1 ? "" : step === 2 ? "shrink" : "center"}
                        className="flex h-full w-full items-center justify-center"
                    >
                        <img
                            src={portraitImage}
                            alt="Portrait of Nikolas Melo's Github"
                            className="w-[450px] h-full rounded-lg object-cover"
                        />
                    </motion.div>
                </div>
                <div className="grid grid-cols-2 gap-4 h-full row-span-4">
                    <motion.div
                        {...animationProps}
                        className="bg-primary/70 p-6 rounded-lg col-span-1">
                        <div className="flex flex-col justify-between h-full py-4 px-4">
                            <div className="flex-grow flex">
                                <AtSign className='w-8 h-8' />
                            </div>
                            <div>
                                <p className="text-xl text-muted-foreground text-balance">
                                    I am a FullStack Developer with practical experience and knowledge in Python applied to Computer Vision and AI,
                                    as well as Backend systems, such as Django,
                                    I also have knowledge in Frontend with HTML, CSS, React and Tailwind.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-primary p-6 rounded-lg flex flex-col justify-between col-span-1"
                        {...animationProps}
                    >
                        <div className='flex justify-between items-center'>
                            <div className="text-lg font-semibold">Have some questions?</div>
                            <Button onClick={handleRefresh} size="icon" >
                                <ArrowUpRight className='w-8 h-8' />
                            </Button>
                        </div>
                        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Contact me</h2>
                    </motion.div>
                </div>
            </div>
            <div className="grid grid-rows-4 gap-4 col-span-1 h-full">
                <motion.div
                    {...animationProps}
                    className="bg-primary/70 p-6 rounded-lg row-span-4">
                    <p className="text-sm">

                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{
                        duration: 1,
                        delay: 2,
                        ease: [0, 0.7, 0.2, 1]
                    }}
                    style={{ transformOrigin: "center" }}
                    className="bg-primary/70 p-6 rounded-lg flex flex-col justify-end"
                >
                    <div className="flex justify-between">
                        <Button variant="outline" asChild>
                            <a href="https://www.linkedin.com/in/nikolas-melo-5743b1258/">
                                <Linkedin className="mr-2 h-4 w-4" />LinkedIn
                            </a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="https://github.com/Clover-Organization/Clover/">
                                <Github className="mr-2 h-4 w-4" />GitHub
                            </a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="https://www.instagram.com/incognitoniko/">
                                <Instagram className="mr-2 h-4 w-4" />Instagram
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
