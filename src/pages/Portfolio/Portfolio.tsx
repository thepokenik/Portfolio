import { Link } from "react-router-dom";
import { BrainCog, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Portfolio() {
    return (
        <main className="grid grid-cols-3 auto-cols-max gap-4">
            <div className="grid grid-rows-2 gap-4 col-span-2 h-full ">
                <div className="grid grid-cols-3 gap-4 h-full ">
                    <div className="bg-primary/70 p-6 rounded-lg text-primary-foreground col-span-2">
                        <BrainCog width={100} height={100} />
                        Nikolas
                    </div>

                    <div className="rounded-lg overflow-hidden ">
                        <img
                            src="https://40ton.net/wp-content/uploads/2023/02/man_tgx_2024.jpg"
                            alt="Portrait of Julia Huang"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-primary/70 p-6 rounded-lg col-span-1">
                        <p className="text-sm">

                        </p>
                    </div>

                    <div className="bg-primary p-6 rounded-lg flex flex-col justify-between col-span-1">
                        <h3 className="text-2xl font-bold mb-4">Contact me</h3>
                        <Link to="/" className="self-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-4 gap-4 col-span-1 h-full">
                <div className="bg-primary/70 p-6 rounded-lg row-span-4">
                    <p className="text-sm">

                    </p>
                </div>

                <div className="bg-primary/70 p-6 rounded-lg flex flex-col justify-end">
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
                </div>
            </div>
        </main>
    )
}
