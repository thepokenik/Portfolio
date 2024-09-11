import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <motion.header
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
                duration: 1,
                delay: 2,
                ease: [0, 0.7, 0.2, 1]
            }}
            style={{ transformOrigin: "center" }}
            className="flex bg-primary justify-between items-center mb-8 p-6 rounded-lg"
        >
            <h1 className="text-2xl font-bold text-primary-foreground"><Link to='/'>
                            NIKOLAS MELO
                        </Link></h1>
            <nav className="items-center hidden space-x-4 md:flex">
                <ul className="flex space-x-4 text-primary-foreground">
                    <li>
                        <Link to='/projects' className={cn(
                            "font-bold transition-colors hover:text-primary-foreground",
                            pathname.startsWith("/projects") ? "text-primary-foreground" : "text-primary-foreground/70"
                        )}>
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className={cn(
                            "font-bold transition-colors hover:text-primary-foreground",
                            pathname.startsWith("/about") ? "text-primary-foreground" : "text-primary-foreground/70"
                        )}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className={cn(
                            "font-bold transition-colors hover:text-primary-foreground",
                            pathname.startsWith("/contact") ? "text-primary-foreground" : "text-primary-foreground/70"
                        )}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* Mobile Menu */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <nav className="grid gap-6 text-lg font-medium">
                        <MobileLink to="/" className="hover:text-secondary">
                            Inicio
                        </MobileLink>
                        <MobileLink to="/contato" className="hover:text-secondary">
                            Contato
                        </MobileLink>
                        <MobileLink to="/agendamento" className="hover:text-secondary">
                            Agendamento
                        </MobileLink>
                        <MobileLink to="/agendamento" className="hover:text-secondary">
                            Entrar
                        </MobileLink>
                    </nav>
                </SheetContent>
            </Sheet>
        </motion.header>
    )
}

function MobileLink({
    to,
    onOpenChange,
    className,
    children,
    ...props
}: {
    to: string;
    onOpenChange?: (open: boolean) => void;
    className: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            to={to}
            onClick={() => {
                onOpenChange?.(false)
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    )
}