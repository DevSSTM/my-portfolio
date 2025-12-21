import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Ticketing System - Geesisila",
        category: "Software Development",
        image: "/image/ticket_system.png",
        gradient: "from-blue-600 to-cyan-500",
        description: "A comprehensive ticketing platform built for event management with secure booking and automated confirmations.",
        github: "https://github.com/DevSSTM/geesisila",
        external: "https://github.com/DevSSTM/geesisila"
    },
    {
        id: 2,
        title: "T-shirt Ordering System",
        category: "E-commerce",
        image: "/image/tshirt_project.png",
        gradient: "from-orange-500 to-red-600",
        description: "A streamlined digital ordering system for custom apparel, featuring real-time price calculation and order tracking.",
        github: "https://github.com/DevSSTM/T-shirt",
        external: "https://github.com/DevSSTM/T-shirt"
    },
    {
        id: 3,
        title: "Ninewells Asset Register Mobile Application - AppSheet",
        category: "Enterprise Solution",
        images: ["/image/ninewells_asset.jpg", "/image/ninewells_asset2.jpg"],
        gradient: "from-emerald-500 to-teal-600",
        description: "An efficient asset management application developed using AppSheet for Ninewells Hospital to track and manage hospital resources.",
        github: "",
        external: ""
    },
];

const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = project.images || [project.image];
    const isSlider = images.length > 1;

    useEffect(() => {
        if (!isSlider) return;
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [isSlider, images.length]);

    return (
        <motion.div
            className="group relative w-[300px] md:w-[400px] h-[500px] flex-shrink-0 bg-surface border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            {/* Project Image Slider / Single Image */}
            <div className="h-full w-full relative">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt={project.title}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-100 transition-all duration-700"
                    />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {isSlider && (
                    <div className="absolute top-4 right-4 flex gap-1 z-20">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1 w-4 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-primary w-8' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                <span className="text-sm text-primary mb-2 block font-semibold tracking-wider uppercase">{project.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed">{project.description}</p>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/30 transition-all inline-flex items-center text-white">
                            <Github size={20} />
                        </a>
                    )}
                    {project.external && (
                        <a href={project.external} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-secondary/20 hover:bg-secondary/40 border border-secondary/30 transition-all inline-flex items-center text-white">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const scrollRef = useRef(null);

    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center py-20">
            <div className="container mx-auto px-4 mb-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Selected <span className="text-gradient">Works</span></h2>
                <p className="text-gray-400">Drag to explore</p>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="md:pl-32 pb-10 overflow-x-auto no-scrollbar" ref={scrollRef}>
                <div className="flex space-x-8 px-4 w-max">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
